/**
 * Pelham Group — Listings Master tracker → social automation trigger.
 *
 * WHAT IT DOES
 * When Kim changes a listing's Status in the "Listings Master" tab, this
 * fires the Vercel webhook (/api/listing-status-change), which renders the
 * matching Brand Studio template and posts it to Instagram + Facebook via
 * Zernio.
 *
 * ── ONE-TIME SETUP ───────────────────────────────────────────────────────
 * 1. The spreadsheet MUST be a native Google Sheet (File → Save as Google
 *    Sheets if it's still an uploaded .xlsx).
 * 2. Extensions → Apps Script. Paste this whole file in. Save.
 * 3. Project Settings → Script Properties → add two properties:
 *      WEBHOOK_URL    = https://thepelhamgroupnw.com/api/listing-status-change
 *      WEBHOOK_SECRET = (the same value set as LISTING_WEBHOOK_SECRET in Vercel)
 * 4. Run the `installTrigger` function once (Run menu → installTrigger).
 *    Authorize when prompted. This installs an on-edit trigger with the
 *    permissions UrlFetchApp needs (a simple onEdit cannot call external URLs).
 * 5. Done. Change a Status cell to test.
 *
 * ── COLUMN LAYOUT (Listings Master tab) ──────────────────────────────────
 *  A #  · B Status · C Address · D City · E MLS# · F List Price ·
 *  G Beds · H Baths · I SqFt · J Listing URL · K Open House · ... · Z Notes
 */

var SHEET_NAME = 'Listings Master';
var STATUS_COL = 2; // column B
var ADDRESS_COL = 3; // column C
var FIRST_DATA_ROW = 4; // rows above this are titles/headers

function installTrigger() {
  // Remove any existing edit triggers for this function to avoid dupes.
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'onListingEdit') {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
  ScriptApp.newTrigger('onListingEdit')
    .forSpreadsheet(SpreadsheetApp.getActive())
    .onEdit()
    .create();
  SpreadsheetApp.getActive().toast('Listing automation trigger installed.');
}

function onListingEdit(e) {
  try {
    if (!e || !e.range) return;
    var sheet = e.range.getSheet();
    if (sheet.getName() !== SHEET_NAME) return;

    var row = e.range.getRow();
    var col = e.range.getColumn();

    // Only fire when the Status column changed, on a real data row.
    if (col !== STATUS_COL || row < FIRST_DATA_ROW) return;

    var address = sheet.getRange(row, ADDRESS_COL).getValue();
    if (!address || String(address).trim() === '') return;

    var status = sheet.getRange(row, STATUS_COL).getValue();
    if (!status || String(status).trim() === '') return;

    var v = function (c) {
      var val = sheet.getRange(row, c).getValue();
      return val === null || val === undefined ? '' : String(val).trim();
    };

    var payload = {
      status: String(status).trim(),
      address: String(address).trim(),
      city: v(4),
      mls: v(5),
      listPrice: v(6),
      beds: v(7),
      baths: v(8),
      sqft: v(9),
      listingUrl: v(10),
      openHouse: v(11),
      hook: '',
    };

    var props = PropertiesService.getScriptProperties();
    var url = props.getProperty('WEBHOOK_URL');
    var secret = props.getProperty('WEBHOOK_SECRET');
    if (!url || !secret) {
      SpreadsheetApp.getActive().toast('Listing automation: WEBHOOK_URL / WEBHOOK_SECRET not set in Script Properties.');
      return;
    }

    var res = UrlFetchApp.fetch(url, {
      method: 'post',
      contentType: 'application/json',
      headers: { 'X-Pelham-Listing-Secret': secret },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true,
    });

    var code = res.getResponseCode();
    var label = code >= 200 && code < 300 ? 'sent' : 'error ' + code;
    sheet.getActiveCell(); // keep focus
    SpreadsheetApp.getActive().toast(
      'Listing automation: ' + payload.address + ' → ' + label,
      'Status: ' + payload.status,
      6
    );
  } catch (err) {
    SpreadsheetApp.getActive().toast('Listing automation error: ' + err.message);
  }
}
