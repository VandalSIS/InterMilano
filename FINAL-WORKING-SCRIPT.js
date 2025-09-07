function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = e.parameter || {};
    
    sheet.appendRow([
      new Date(),
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.crimeType || '',
      data.dateOfIncident || '',
      data.location || '',
      data.description || '',
      data.fraudMethod || '',
      data.moneyLost || '',
      data.urgency || '',
      data.anonymous || '',
      data.userAgent || '',
      data.referrer || ''
    ]);
    
    return HtmlService.createHtmlOutput('SUCCESS - Data saved to Excel!');
    
  } catch (error) {
    return HtmlService.createHtmlOutput('ERROR - Could not save data');
  }
}

function doGet(e) {
  return HtmlService.createHtmlOutput('Google Apps Script is working!');
}
