function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Debug: Log the event object first
    console.log('=== DEBUG: Event object ===');
    console.log('Event object type:', typeof e);
    console.log('Event object:', e);
    console.log('Event is null/undefined:', e === null || e === undefined);
    
    if (!e) {
      console.log('ERROR: Event object is null or undefined');
      return HtmlService.createHtmlOutput('ERROR - No event object received');
    }
    
    console.log('Event.parameter exists:', 'parameter' in e);
    console.log('Event.parameter type:', typeof e.parameter);
    console.log('Event.parameter:', e.parameter);
    
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
  console.log('=== doGet called ===');
  console.log('GET Event object type:', typeof e);
  console.log('GET Event object:', e);
  
  if (e && e.parameter) {
    console.log('GET parameters received:', Object.keys(e.parameter).length);
    console.log('GET parameters:', JSON.stringify(e.parameter, null, 2));
  }
  
  return HtmlService.createHtmlOutput(`
    <h2>Google Apps Script Debug Version</h2>
    <p>Script is working! Time: ${new Date()}</p>
    <p>Event object type: ${typeof e}</p>
    <p>Parameters: ${e && e.parameter ? Object.keys(e.parameter).length : 'none'}</p>
    
    <h3>Test Form</h3>
    <form method="POST" action="${ScriptApp.getService().getUrl()}">
      <input type="text" name="testField" value="testValue" />
      <input type="submit" value="Test POST" />
    </form>
  `);
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

// Test function to simulate receiving data
function testDoPost() {
  console.log('=== TESTING doPost function ===');
  
  // Create a mock event object
  const mockEvent = {
    parameter: {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      phone: '123-456-7890',
      crimeType: 'Online Scam/Fraud',
      dateOfIncident: '2024-01-15',
      location: 'Online',
      description: 'Test description',
      fraudMethod: 'Email',
      moneyLost: '100',
      urgency: 'medium',
      anonymous: 'FALSE',
      ipAddress: '192.168.1.1',
      fingerprintHash: 'abc123',
      userAgent: 'Test Browser',
      language: 'en',
      platform: 'Win32',
      timezone: 'America/New_York'
    }
  };
  
  console.log('Calling doPost with mock data...');
  const result = doPost(mockEvent);
  console.log('Result:', result.getContent());
  
  return 'Test completed - check logs and sheet';
}

// Function to check deployment info
function checkDeployment() {
  try {
    const url = ScriptApp.getService().getUrl();
    console.log('Deployment URL:', url);
    console.log('Script ID:', ScriptApp.newTrigger().getScriptId());
    
    return `
      Deployment URL: ${url}
      Check that:
      1. Deployment is set to "Anyone" access
      2. Deployment is set as "Web app"
      3. URL matches the one in your React app
    `;
  } catch (error) {
    console.error('Error checking deployment:', error);
    return 'Error checking deployment: ' + error.toString();
  }
}

// Simple function to test if script execution works
function simpleTest() {
  console.log('Simple test function called at:', new Date());
  return 'Simple test successful at ' + new Date();
}
