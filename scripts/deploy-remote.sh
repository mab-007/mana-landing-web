#!/usr/bin/env bash
#
# Runs ON the landing box (i-0b5e4eb8fbdede0eb, us-east-1, nginx) via SSM,
# as a SINGLE command so that `set -e` actually aborts the whole deploy.
#
#   NOTE: SSM runs each element of a `commands` array INDEPENDENTLY -- a failed
#   fetch would still let the swap run. That is why the workflow ships this
#   entire file as ONE command instead of a list of steps.
#
# The workflow prepends these variables:
#   S3_URI, BUNDLE, EXPECT_COUNT, WEB_ROOT, SHA
#
# Discipline (same as the manual recipe): stage to /tmp and assert EVERYTHING
# before the live root is touched, back up, swap, verify, roll back on mismatch.

TS=$(date -u +%Y%m%d-%H%M%S)
STAGE="/tmp/landing-stage.${TS}"
TARBALL="/tmp/landing-${TS}.tar.gz"
BACKUP="${WEB_ROOT}.bak.${TS}"

cleanup() { rm -rf "$STAGE" "$TARBALL"; }
trap cleanup EXIT

rollback() {
  echo "ROLLING BACK -> ${BACKUP}"
  rsync -a --delete "${BACKUP}/" "${WEB_ROOT}/"
  chown -R root:root "$WEB_ROOT"
  restorecon -R "$WEB_ROOT" 2>/dev/null || true
  echo "ROLLED_BACK"
}

echo "== 1. fetch artifact =="
# Bucket lives in ap-south-1; the instance is in us-east-1. Region must follow
# the BUCKET, not the box -- a us-east-1 request returns a PermanentRedirect XML
# that tar then rejects as "not in gzip format".
aws s3 cp "$S3_URI" "$TARBALL" --region ap-south-1
ls -l "$TARBALL"

echo "== 2. stage (live root still untouched) =="
rm -rf "$STAGE"
mkdir -p "$STAGE"
tar xzf "$TARBALL" -C "$STAGE"

echo "== 3. assert staged artifact =="
STAGED=$(find "$STAGE" -type f | wc -l)
JUNK=$(find "$STAGE" -name '._*' | wc -l)
echo "staged=${STAGED} expected=${EXPECT_COUNT} junk=${JUNK}"
[ "$STAGED" -eq "$EXPECT_COUNT" ] || { echo "ABORT: staged/expected file-count mismatch"; exit 1; }
[ "$JUNK" -eq 0 ] || { echo "ABORT: AppleDouble junk in artifact"; exit 1; }
for f in index.html 404.html CNAME sitemap.xml robots.txt; do
  [ -f "${STAGE}/${f}" ] || { echo "ABORT: missing ${f}"; exit 1; }
done
[ -f "${STAGE}/${BUNDLE}" ] || { echo "ABORT: bundle ${BUNDLE} absent from artifact"; exit 1; }
grep -q "$BUNDLE" "${STAGE}/index.html" || { echo "ABORT: index.html does not reference ${BUNDLE}"; exit 1; }
echo "ASSERT_OK"

echo "== 4. live root before =="
LIVE_BEFORE=$(find "$WEB_ROOT" -type f | wc -l)
HIDDEN_BEFORE=$(find "$WEB_ROOT" -mindepth 1 -maxdepth 1 -name '.*' | wc -l)
echo "live_before=${LIVE_BEFORE} hidden_before=${HIDDEN_BEFORE}"

echo "== 5. backup =="
cp -a "$WEB_ROOT" "$BACKUP"
echo "backup=${BACKUP}"

echo "== 6. swap =="
# rsync --delete gives an exact mirror, including removal of files dropped
# between builds. `rm -rf $ROOT/*` would not, because the glob skips dotfiles.
rsync -a --delete "${STAGE}/" "${WEB_ROOT}/"
chown -R root:root "$WEB_ROOT"
restorecon -R "$WEB_ROOT" 2>/dev/null || true

echo "== 7. verify on box =="
LIVE_AFTER=$(find "$WEB_ROOT" -type f | wc -l)
echo "live_after=${LIVE_AFTER}"
if [ "$LIVE_AFTER" -ne "$STAGED" ] || [ ! -f "${WEB_ROOT}/${BUNDLE}" ]; then
  echo "ABORT: post-swap mismatch"
  rollback
  exit 1
fi
# Ask nginx itself, over TLS, with the real Host -- not just "does the file exist".
if ! curl -fsS --max-time 15 --resolve mymana.xyz:443:127.0.0.1 https://mymana.xyz/ | grep -q "$BUNDLE"; then
  echo "ABORT: nginx is not serving ${BUNDLE}"
  rollback
  exit 1
fi

echo "== 8. prune backups (keep 5 most recent) =="
ls -dt "${WEB_ROOT}".bak.* 2>/dev/null | tail -n +6 | while read -r d; do
  echo "pruning ${d}"
  rm -rf "$d"
done || true

echo "DEPLOY_OK sha=${SHA} bundle=${BUNDLE} files=${LIVE_AFTER} backup=${BACKUP}"
