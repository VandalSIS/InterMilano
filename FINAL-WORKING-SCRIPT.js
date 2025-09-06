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
      data.description || ''
    ]);
    
    return HtmlService.createHtmlOutput('SUCCESS - Data saved to Excel!');
    
  } catch (error) {
    return HtmlService.createHtmlOutput('ERROR - Could not save data');
  }
}

function doGet(e) {
  return HtmlService.createHtmlOutput('Google Apps Script is working!');
}
