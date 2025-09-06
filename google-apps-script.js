// Google Apps Script Code for Google Sheets Integration
// Copy this code into a new Google Apps Script project

function doPost(e) {
  try {
    // Get the active spreadsheet (you'll need to create one first)
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Get form data (from form submission, not JSON)
    const data = e.parameter || {};
    
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
      data.anonymous === 'true' ? 'Yes' : 'No',
      data.followUp === 'true' ? 'Yes' : 'No',
      data.additionalInfo || '',
      data.userAgent || '',
      data.referrer || ''
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success HTML page (since this will open in a new tab)
    return HtmlService
      .createHtmlOutput(`
        <html>
          <head>
            <title>Submission Successful</title>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #f0f8ff; }
              .success { color: #28a745; font-size: 24px; margin-bottom: 20px; }
              .message { color: #333; font-size: 16px; }
              .close-btn { 
                background: #007bff; color: white; border: none; padding: 10px 20px; 
                border-radius: 5px; cursor: pointer; margin-top: 20px; font-size: 16px;
              }
            </style>
          </head>
          <body>
            <div class="success">✅ Success!</div>
            <div class="message">Your crime report has been submitted successfully.</div>
            <div class="message">Thank you for your submission.</div>
            <button class="close-btn" onclick="window.close()">Close Window</button>
            <script>
              // Auto-close after 3 seconds
              setTimeout(function() {
                window.close();
              }, 3000);
            </script>
          </body>
        </html>
      `);
      
  } catch (error) {
    // Return error HTML page
    return HtmlService
      .createHtmlOutput(`
        <html>
          <head>
            <title>Submission Error</title>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #fff5f5; }
              .error { color: #dc3545; font-size: 24px; margin-bottom: 20px; }
              .message { color: #333; font-size: 16px; }
              .close-btn { 
                background: #dc3545; color: white; border: none; padding: 10px 20px; 
                border-radius: 5px; cursor: pointer; margin-top: 20px; font-size: 16px;
              }
            </style>
          </head>
          <body>
            <div class="error">❌ Error</div>
            <div class="message">There was an error submitting your report.</div>
            <div class="message">Error: ${error.toString()}</div>
            <button class="close-btn" onclick="window.close()">Close Window</button>
            <script>
              setTimeout(function() {
                window.close();
              }, 5000);
            </script>
          </body>
        </html>
      `);
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
