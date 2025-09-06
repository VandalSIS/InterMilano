function doPost(e) {
  console.log('=== doPost started ===');
  
  try {
    // Log everything we receive
    console.log('Event object exists:', !!e);
    if (e) {
      console.log('e.parameter:', JSON.stringify(e.parameter));
      console.log('e.postData:', JSON.stringify(e.postData));
    }
    
    // Get the spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    console.log('Got spreadsheet sheet:', sheet.getName());
    
    // Get form data - try multiple approaches
    let data = {};
    
    if (e && e.parameter) {
      data = e.parameter;
      console.log('Using e.parameter data');
    } else {
      console.log('No parameter data found, using test data');
      data = {
        timestamp: new Date().toISOString(),
        firstName: 'TEST',
        lastName: 'ENTRY',
        email: 'test@test.com',
        crimeType: 'Test Crime',
        description: 'Test description from script'
      };
    }
    
    console.log('Data to process:', JSON.stringify(data));
    
    // Create row data
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
    
    console.log('Row data prepared:', JSON.stringify(rowData));
    
    // Add to sheet
    sheet.appendRow(rowData);
    console.log('Row added to sheet successfully');
    
    // Return HTML response
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Success</title>
          <meta charset="utf-8">
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
          </style>
        </head>
        <body>
          <div class="success">✅ Success!</div>
          <div class="message">Your crime report has been submitted successfully.</div>
          <div class="message">Thank you for your submission.</div>
          <div class="message">You can close this window now.</div>
          <script>
            console.log('Success page loaded');
            setTimeout(function() { 
              console.log('Attempting to close window');
              try {
                window.close(); 
              } catch(e) {
                console.log('Cannot close window automatically');
              }
            }, 3000);
          </script>
        </body>
      </html>
    `;
    
    console.log('Returning success HTML');
    return HtmlService.createHtmlOutput(html);
    
  } catch (error) {
    console.error('ERROR in doPost:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    const errorHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Error</title>
          <meta charset="utf-8">
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
          <div class="message">Error: ${error.message}</div>
          <div class="message">Please try again.</div>
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
    `;
    
    return HtmlService.createHtmlOutput(errorHtml);
  }
}

function doGet(e) {
  console.log('=== doGet started ===');
  console.log('doGet event:', JSON.stringify(e));
  
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Google Sheets API Test</title>
        <meta charset="utf-8">
      </head>
      <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
        <h1 style="color: #28a745;">✅ Google Sheets API is working!</h1>
        <p>Timestamp: ${new Date().toISOString()}</p>
        <p>This endpoint is ready to receive form submissions.</p>
        <hr>
        <h2>Test Form</h2>
        <form method="POST" action="${ScriptApp.getService().getUrl()}">
          <input type="hidden" name="firstName" value="Test">
          <input type="hidden" name="lastName" value="User">
          <input type="hidden" name="email" value="test@example.com">
          <input type="hidden" name="crimeType" value="Test Crime">
          <input type="hidden" name="description" value="This is a test submission">
          <button type="submit">Test Form Submission</button>
        </form>
      </body>
    </html>
  `;
  
  return HtmlService.createHtmlOutput(html);
}

function setupSheetHeaders() {
  console.log('=== Setting up sheet headers ===');
  
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    console.log('Got sheet:', sheet.getName());
    
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
    
    console.log('Headers set up successfully');
    return 'Headers setup complete';
    
  } catch (error) {
    console.error('Error in setupSheetHeaders:', error);
    throw error;
  }
}

function testDirectWrite() {
  console.log('=== Testing direct write ===');
  
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    
    const testData = [
      new Date().toISOString(),
      'Direct Test',
      'User',
      'directtest@example.com',
      '123-456-7890',
      'Test Address',
      'Test City',
      'Test Province',
      'A1A 1A1',
      'Direct Test Crime',
      '2025-01-01',
      '12:00',
      'Direct Test Location',
      'This is a direct test from the script',
      'No suspects',
      'No witnesses',
      'No evidence',
      'Low',
      'No',
      'No',
      'Direct test additional info',
      'Google Apps Script',
      'Direct Test'
    ];
    
    sheet.appendRow(testData);
    console.log('Direct test row added successfully');
    return 'Direct write test successful';
    
  } catch (error) {
    console.error('Error in direct write test:', error);
    throw error;
  }
}
