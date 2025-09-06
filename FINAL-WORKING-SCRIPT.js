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
      data.address || '',
      data.city || '',
      data.province || '',
      data.postalCode || '',
      data.crimeType || '',
      data.dateOfIncident || '',
      data.timeOfIncident || '',
      data.location || '',
      data.description || '',
      data.suspects || '',
      data.witnesses || '',
      data.evidence || '',
      data.urgency || '',
      data.anonymous || '',
      data.followUp || '',
      data.additionalInfo || '',
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
