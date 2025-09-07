function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = e.parameter || {};
    
    // Debug: Log all received data
    console.log('=== DEBUG: All received data ===');
    console.log('Number of parameters received:', Object.keys(data).length);
    console.log('All parameters:', JSON.stringify(data, null, 2));
    
    // Get current timestamp
    const now = new Date();
    
    // Prepare row data with ALL fields
    const rowData = [
      now, // Timestamp
      
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
    ];
    
    console.log('Row data length:', rowData.length);
    console.log('Adding row to sheet...');
    
    // Add the row to the sheet
    sheet.appendRow(rowData);
    
    console.log('Row added successfully!');
    
    return HtmlService.createHtmlOutput('SUCCESS - Data saved to Excel! Fields: ' + Object.keys(data).length);
    
  } catch (error) {
    console.error('Error in doPost:', error);
    console.error('Error details:', error.toString());
    return HtmlService.createHtmlOutput('ERROR - Could not save data: ' + error.toString());
  }
}

function doGet(e) {
  return HtmlService.createHtmlOutput('Google Apps Script is working! Debug version.');
}

// Function to set up headers in your Excel sheet (run this once)
function setupSheetHeaders() {
  const sheet = SpreadsheetApp.getActiveSheet();
  
  const headers = [
    'Timestamp',
    // Basic form data (13 fields)
    'First Name', 'Last Name', 'Email', 'Phone', 'Crime Type', 'Date of Incident', 
    'Location', 'Description', 'Fraud Method', 'Money Lost', 'Urgency', 'Anonymous',
    
    // Browser fingerprint and tracking data (28 fields)
    'IP Address', 'Fingerprint Hash', 'User Agent', 'Language', 'Languages', 'Platform',
    'Cookie Enabled', 'Do Not Track', 'Timezone', 'Screen Resolution', 'Screen Color Depth',
    'Available Screen Resolution', 'Canvas Fingerprint', 'WebGL Vendor', 'WebGL Renderer',
    'Touch Support', 'Hardware Concurrency', 'Device Memory', 'Connection Type',
    'Form Timestamp', 'Local Time', 'Session Storage', 'Local Storage', 'IndexedDB',
    'CPU Class', 'Plugins', 'MIME Types', 'Referrer', 'Current URL'
  ];
  
  console.log('Setting up headers. Total headers:', headers.length);
  
  // Clear existing data and set headers
  sheet.clear();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.getRange(1, 1, 1, headers.length).setBackground('#4285f4');
  sheet.getRange(1, 1, 1, headers.length).setFontColor('white');
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
  
  return 'Headers set up successfully! Total columns: ' + headers.length;
}

// Test function to check what data we're receiving
function testDataReceived() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastRow = sheet.getLastRow();
  
  if (lastRow > 1) {
    const lastRowData = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn()).getValues()[0];
    console.log('Last submitted data:', lastRowData);
    console.log('Number of fields in last submission:', lastRowData.length);
    return 'Last row has ' + lastRowData.length + ' fields';
  } else {
    return 'No data found in sheet';
  }
}
