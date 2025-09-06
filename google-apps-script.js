// Google Apps Script Code for Google Sheets Integration
// Copy this code into a new Google Apps Script project

function doPost(e) {
  try {
    // Get the active spreadsheet (you'll need to create one first)
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date(),
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
      data.anonymous || false,
      data.followUp || false,
      data.additionalInfo || '',
      data.userAgent || '',
      data.referrer || ''
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle OPTIONS request for CORS preflight
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'Google Sheets API is working',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Function to set up the sheet headers (run this once)
function setupSheetHeaders() {
  const sheet = SpreadsheetApp.getActiveSheet();
  
  const headers = [
    'Timestamp',
    'First Name',
    'Last Name',
    'Email',
    'Phone',
    'Address',
    'City',
    'Province',
    'Postal Code',
    'Crime Type',
    'Date of Incident',
    'Time of Incident',
    'Location',
    'Description',
    'Suspects',
    'Witnesses',
    'Evidence',
    'Urgency',
    'Anonymous',
    'Follow Up',
    'Additional Info',
    'User Agent',
    'Referrer'
  ];
  
  // Clear existing data and add headers
  sheet.clear();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('white');
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
  
  console.log('Sheet headers set up successfully!');
}
