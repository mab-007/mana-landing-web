# Deploy to GitHub Pages + custom domain

The repo is ready: SPA routing fallback (`404.html`), a deploy workflow, and the
waitlist URL baked into the build. You handle the push + DNS.

## Prerequisites
- Repo must be **public** (GitHub Pages on private repos requires GitHub Pro).
- Changes are on branch `feature-v0` — **merge them into `main`** (the workflow
  triggers on push to `main`). Or change the branch in `.github/workflows/deploy.yml`.

## 1. Enable Pages via Actions
GitHub → repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## 2. Push to main
```
git checkout main
git merge feature-v0     # or PR + merge
git push origin main
```
The **Deploy to GitHub Pages** action builds and publishes automatically.
Watch progress under the repo's **Actions** tab. First run gives you a
`https://mab-007.github.io/...` URL — confirm the site loads there before DNS.

## 3. Set the custom domain
Settings → **Pages → Custom domain** → enter your domain → **Save**.
(GitHub stores this and the Actions deploy preserves it — no CNAME file needed.)
Then tick **Enforce HTTPS** once the cert is issued (can take a few minutes).

## 4. DNS records (at your DNS provider)

**If using a subdomain** (e.g. `www.yourdomain.com` or `app.yourdomain.com`) — simplest:
```
Type: CNAME   Name: www (or app)   Value: mab-007.github.io
```

**If using the apex / root** (`yourdomain.com`) — add all four A records (+ AAAA for IPv6):
```
Type: A   Name: @   Value: 185.199.108.153
Type: A   Name: @   Value: 185.199.109.153
Type: A   Name: @   Value: 185.199.110.153
Type: A   Name: @   Value: 185.199.111.153

Type: AAAA  Name: @  Value: 2606:50c0:8000::153
Type: AAAA  Name: @  Value: 2606:50c0:8001::153
Type: AAAA  Name: @  Value: 2606:50c0:8002::153
Type: AAAA  Name: @  Value: 2606:50c0:8003::153
```
Recommended: also add a `www` CNAME → `mab-007.github.io` and set the apex as the
primary custom domain so `www` redirects to it.

> Cloudflare note: set those DNS records to **DNS only** (grey cloud), not proxied,
> while GitHub provisions the certificate. You can enable proxy afterward.

DNS can take minutes to a few hours to propagate. Check with:
```
dig +short yourdomain.com
```

## Notes
- **Waitlist URL**: baked into the build (it's a public endpoint, fine to expose).
  To change it without editing code, add a repo Variable `VITE_WAITLIST_URL`
  under Settings → Secrets and variables → Actions → Variables.
- **Auto-deploy**: every push to `main` rebuilds and redeploys.
- **`_redirects`** in the build is a harmless leftover (Netlify-only); GitHub
  Pages uses `404.html` for SPA fallback, which the build creates.
