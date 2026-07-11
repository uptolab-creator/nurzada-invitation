const { google } = require('googleapis');

const SPREADSHEET_ID = '1Gi2n6idfXrxUXw4DbQ2TPWC07RGTLkBh4U-UtKz8o3A';
const SHEET_NAME = 'Лист1';
const HEADER_ROW = ['Имя', 'Придёт', 'Сопровождающий', 'Дата отправки'];

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, willAttend, companionName, timestamp } = req.body || {};
    if (!name) {
      res.status(400).json({ error: 'Missing name' });
      return;
    }

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1:A1`,
    });

    if (!existing.data.values || existing.data.values.length === 0) {
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A:D`,
        valueInputOption: 'USER_ENTERED',
        requestBody: { values: [HEADER_ROW] },
      });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:D`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          name,
          willAttend ? 'Да' : 'Нет',
          companionName || '',
          timestamp || new Date().toLocaleString('ru-RU'),
        ]],
      },
    });

    res.status(200).json({ status: 'ok' });
  } catch (err) {
    console.error('Failed to append RSVP to Google Sheet', err);
    res.status(500).json({ error: 'Failed to save RSVP' });
  }
};
