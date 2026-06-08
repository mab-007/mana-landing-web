// Waitlist submission → Google Sheets (via a Google Apps Script Web App).
//
// Setup (one time):
//   1. Create a Google Sheet with header row: Timestamp | Email | Source
//   2. Extensions → Apps Script, paste the doPost() shown in WAITLIST_SETUP.md
//   3. Deploy → New deployment → Web app → Execute as "Me", access "Anyone"
//   4. Copy the /exec URL and put it in VITE_WAITLIST_URL (.env) or below.

const ENDPOINT =
  (import.meta.env.VITE_WAITLIST_URL as string | undefined) ?? "";

export async function submitWaitlist(email: string, source: string): Promise<void> {
  if (!ENDPOINT) {
    console.warn("[waitlist] No VITE_WAITLIST_URL configured — skipping submit:", { email, source });
    return;
  }
  try {
    // no-cors keeps it simple: Apps Script web apps don't return CORS headers,
    // but the POST still reaches the script and appends the row.
    await fetch(ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ email, source, ts: new Date().toISOString() }),
    });
  } catch (err) {
    console.error("[waitlist] submit failed", err);
  }
}
