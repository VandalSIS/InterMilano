// SIMPLE Google Apps Script - Just copy this to script.google.com

function doPost(e) {
  // Get spreadsheet
  const sheet = SpreadsheetApp.getActiveSheet();
  
  // Get form data (with safety check)
  const data = (e && e.parameter) ? e.parameter : {};
  
  // Add row (with fallbacks)
  sheet.appendRow([
    new Date(),
    data.firstName || 'TEST',
    data.lastName || 'TEST', 
    data.email || 'test@test.com',
    data.phone || '123456789',
    data.crimeType || 'Test Crime',
    data.description || 'Test Description'
  ]);
  
  // Success message
  return HtmlService.createHtmlOutput('SUCCESS');
}

// That's it! Deploy as web app with "Anyone" access.
