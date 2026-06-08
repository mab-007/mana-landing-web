# Waitlist → Google Sheets setup

The "Join the waitlist" forms POST `{ email, source, ts }` to a Google Apps
Script Web App, which appends a row to your Google Sheet. No backend to host.

## 1. Create the sheet
Create a Google Sheet. Put this header in row 1:

| Timestamp | Email | Source |

## 2. Add the script
In the sheet: **Extensions → Apps Script**, delete the default code, paste:

```js
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var data = {};
  try { data = JSON.parse(e.postData.contents); } catch (err) {}
  sheet.appendRow([
    data.ts || new Date().toISOString(),
    data.email || "",
    data.source || "",
  ]);
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Save.

## 3. Deploy
**Deploy → New deployment → Web app**
- Execute as: **Me**
- Who has access: **Anyone**

Copy the **Web app URL** (ends in `/exec`).

## 4. Tell the app the URL
Create `.env` in the project root:

```
VITE_WAITLIST_URL=https://script.google.com/macros/s/XXXXXXXX/exec
```

Restart `npm run dev` (and set the same env var in Netlify → Site settings →
Environment variables for production). Done — submissions land in the sheet.
