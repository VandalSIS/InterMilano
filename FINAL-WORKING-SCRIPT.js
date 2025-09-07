function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = e.parameter || {};
    
    sheet.appendRow([
      new Date(),
      // Basic form data
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
      
      // Browser fingerprint and tracking data
      data.ipAddress || '',
      data.fingerprintHash || '',
      data.userAgent || '',
      data.language || '',
      data.languages || '',
      data.platform || '',
      data.cookieEnabled || '',
      data.doNotTrack || '',
      data.timezone || '',
      data.screenResolution || '',
      data.screenColorDepth || '',
      data.availableScreenResolution || '',
      data.canvasFingerprint || '',
      data.webglVendor || '',
      data.webglRenderer || '',
      data.touchSupport || '',
      data.hardwareConcurrency || '',
      data.deviceMemory || '',
      data.connectionType || '',
      data.timestamp || '',
      data.localTime || '',
      data.sessionStorage || '',
      data.localStorage || '',
      data.indexedDB || '',
      data.cpuClass || '',
      data.plugins || '',
      data.mimeTypes || '',
      data.referrer || '',
      data.currentUrl || ''
    ]);
    
    return HtmlService.createHtmlOutput('SUCCESS - Data saved to Excel!');
    
  } catch (error) {
    return HtmlService.createHtmlOutput('ERROR - Could not save data');
  }
}

function doGet(e) {
  return HtmlService.createHtmlOutput('Google Apps Script is working!');
}

// Function to set up headers in your Excel sheet (run this once)
function setupSheetHeaders() {
  const sheet = SpreadsheetApp.getActiveSheet();
  
  const headers = [
    'Timestamp',
    // Basic form data
    'First Name', 'Last Name', 'Email', 'Phone', 'Crime Type', 'Date of Incident', 
    'Location', 'Description', 'Fraud Method', 'Money Lost', 'Urgency', 'Anonymous',
    
    // Browser fingerprint and tracking data
    'IP Address', 'Fingerprint Hash', 'User Agent', 'Language', 'Languages', 'Platform',
    'Cookie Enabled', 'Do Not Track', 'Timezone', 'Screen Resolution', 'Screen Color Depth',
    'Available Screen Resolution', 'Canvas Fingerprint', 'WebGL Vendor', 'WebGL Renderer',
    'Touch Support', 'Hardware Concurrency', 'Device Memory', 'Connection Type',
    'Timestamp', 'Local Time', 'Session Storage', 'Local Storage', 'IndexedDB',
    'CPU Class', 'Plugins', 'MIME Types', 'Referrer', 'Current URL'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.getRange(1, 1, 1, headers.length).setBackground('#4285f4');
  sheet.getRange(1, 1, 1, headers.length).setFontColor('white');
  
  return 'Headers set up successfully!';
}
