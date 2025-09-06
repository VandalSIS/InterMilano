function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Debug: Log the entire event object
    console.log('Full event object:', JSON.stringify(e));
    console.log('e.parameter:', e.parameter);
    console.log('e.postData:', e.postData);
    
    // Try to get data from different sources
    let data = {};
    
    if (e.parameter) {
      data = e.parameter;
      console.log('Using e.parameter');
    } else if (e.postData && e.postData.contents) {
      // Try to parse as form data
      const formData = e.postData.contents;
      console.log('Raw form data:', formData);
      
      // Parse form data manually
      const pairs = formData.split('&');
      for (let pair of pairs) {
        const [key, value] = pair.split('=');
        data[decodeURIComponent(key)] = decodeURIComponent(value || '');
      }
      console.log('Parsed form data:', data);
    } else {
      console.log('No data found in request');
      throw new Error('No form data received');
    }
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
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
    
    console.log('Row data to be added:', rowData);
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    console.log('Data successfully added to sheet');
    
    // Return success HTML page
    return HtmlService.createHtmlOutput(`
      <html>
        <head>
          <title>Success</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              text-align: center; 
              padding: 50px; 
              background: #f0f8ff; 
            }
            .success { 
              color: #28a745; 
              font-size: 24px; 
              margin-bottom: 20px; 
            }
            .message { 
              color: #333; 
              font-size: 16px; 
              margin: 10px 0;
            }
            .close-btn { 
              background: #007bff; 
              color: white; 
              border: none; 
              padding: 10px 20px; 
              border-radius: 5px; 
              cursor: pointer; 
              margin-top: 20px; 
              font-size: 16px;
            }
          </style>
        </head>
        <body>
          <div class="success">✅ Success!</div>
          <div class="message">Your crime report has been submitted successfully.</div>
          <div class="message">Thank you for your submission.</div>
          <button class="close-btn" onclick="window.close()">Close Window</button>
          <script>
            setTimeout(function() { 
              try {
                window.close(); 
              } catch(e) {
                console.log('Cannot close window');
              }
            }, 3000);
          </script>
        </body>
      </html>
    `);
      
  } catch (error) {
    console.error('Error in doPost:', error);
    console.error('Error details:', error.toString());
    
    return HtmlService.createHtmlOutput(`
      <html>
        <head>
          <title>Error</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              text-align: center; 
              padding: 50px; 
              background: #fff5f5; 
            }
            .error { 
              color: #dc3545; 
              font-size: 24px; 
              margin-bottom: 20px; 
            }
            .message { 
              color: #333; 
              font-size: 16px; 
              margin: 10px 0;
            }
          </style>
        </head>
        <body>
          <div class="error">❌ Error</div>
          <div class="message">There was an error submitting your report.</div>
          <div class="message">Error: ${error.toString()}</div>
          <div class="message">Please try again or contact support.</div>
          <script>
            setTimeout(function() { 
              try {
                window.close(); 
              } catch(e) {
                console.log('Cannot close window');
              }
            }, 5000);
          </script>
        </body>
      </html>
    `);
  }
}

function doGet(e) {
  console.log('doGet called with:', JSON.stringify(e));
  
  return HtmlService.createHtmlOutput(`
    <html>
      <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
        <h1 style="color: #28a745;">✅ Google Sheets API is working!</h1>
        <p>Timestamp: ${new Date().toISOString()}</p>
        <p>This endpoint is ready to receive form submissions.</p>
      </body>
    </html>
  `);
}

function setupSheetHeaders() {
  const sheet = SpreadsheetApp.getActiveSheet();
  
  const headers = [
    'Timestamp', 'First Name', 'Last Name', 'Email', 'Phone', 'Address',
    'City', 'Province', 'Postal Code', 'Crime Type', 'Date of Incident',
    'Time of Incident', 'Location', 'Description', 'Suspects', 'Witnesses',
    'Evidence', 'Urgency', 'Anonymous', 'Follow Up', 'Additional Info',
    'User Agent', 'Referrer'
  ];
  
  sheet.clear();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('white');
  
  sheet.autoResizeColumns(1, headers.length);
  
  console.log('Sheet headers set up successfully!');
}

// Test function to debug
function testFunction() {
  console.log('Test function works!');
  const sheet = SpreadsheetApp.getActiveSheet();
  console.log('Sheet name:', sheet.getName());
  return 'Test successful';
}
