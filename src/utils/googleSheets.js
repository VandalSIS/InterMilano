// Google Sheets integration for contact form submissions
// This will send form data to a Google Sheet via Google Apps Script

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyhDr74eZBDNCfE4PB_MRkdkDVKkOdONiE6kXVr6YRg23UgRjZgQMs_Dm7hmgtO0kvM/exec';

export const submitToGoogleSheets = async (formData) => {
  try {
    console.log('=== SUBMITTING TO GOOGLE SHEETS ===');
    console.log('Google Script URL:', GOOGLE_SCRIPT_URL);
    
    // Use form submission method (more reliable for Google Apps Script)
    console.log('Using form submission method...');

    // Fallback to form submission method
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'hidden-form-iframe';
    document.body.appendChild(iframe);
    
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = GOOGLE_SCRIPT_URL;
    form.target = 'hidden-form-iframe';
    form.style.display = 'none';
    
    // Add ALL form fields including fingerprint data
    const fields = [
      // Basic form data
      ['firstName', formData.firstName || ''],
      ['lastName', formData.lastName || ''],
      ['email', formData.email || ''],
      ['phone', formData.phone || ''],
      ['crimeType', formData.crimeType || ''],
      ['dateOfIncident', formData.dateOfIncident || ''],
      ['location', formData.location || ''],
      ['description', formData.description || ''],
      ['fraudMethod', formData.fraudMethod || ''],
      ['moneyLost', formData.moneyLost || ''],
      ['urgency', formData.urgency || ''],
      ['anonymous', formData.anonymous ? 'TRUE' : 'FALSE'],
      
      // Browser fingerprint and tracking data
      ['ipAddress', formData.ipAddress || ''],
      ['fingerprintHash', formData.fingerprintHash || ''],
      ['userAgent', formData.userAgent || ''],
      ['language', formData.language || ''],
      ['languages', formData.languages || ''],
      ['platform', formData.platform || ''],
      ['cookieEnabled', formData.cookieEnabled || ''],
      ['doNotTrack', formData.doNotTrack || ''],
      ['timezone', formData.timezone || ''],
      ['screenResolution', formData.screenResolution || ''],
      ['screenColorDepth', formData.screenColorDepth || ''],
      ['availableScreenResolution', formData.availableScreenResolution || ''],
      ['canvasFingerprint', (formData.canvasFingerprint || '').substring(0, 100) + '...'],
      ['webglVendor', formData.webglVendor || ''],
      ['webglRenderer', formData.webglRenderer || ''],
      ['touchSupport', formData.touchSupport || ''],
      ['hardwareConcurrency', formData.hardwareConcurrency || ''],
      ['deviceMemory', formData.deviceMemory || ''],
      ['connectionType', formData.connectionType || ''],
      ['timestamp', formData.timestamp || ''],
      ['localTime', formData.localTime || ''],
      ['sessionStorage', formData.sessionStorage || ''],
      ['localStorage', formData.localStorage || ''],
      ['indexedDB', formData.indexedDB || ''],
      ['cpuClass', formData.cpuClass || ''],
      ['plugins', formData.plugins || ''],
      ['mimeTypes', formData.mimeTypes || ''],
      ['referrer', formData.referrer || ''],
      ['currentUrl', formData.currentUrl || '']
    ];
    
    console.log('=== DEBUG: Sending fields to Google Sheets ===');
    console.log('Total fields to send:', fields.length);
    
    fields.forEach(([name, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = String(value);
      form.appendChild(input);
      
      // Debug: Log each field being sent
      if (value && value !== '') {
        console.log(`Sending ${name}: ${String(value).substring(0, 50)}${String(value).length > 50 ? '...' : ''}`);
      }
    });
    
    console.log('=== END DEBUG ===');
    
    document.body.appendChild(form);
    form.submit();
    
    // Clean up
    setTimeout(() => {
      if (document.body.contains(form)) {
        document.body.removeChild(form);
      }
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
    }, 1000);
    
    // Always return success - don't wait for response
    return { success: true, message: 'Data sent successfully' };
    
  } catch (error) {
    console.error('Error:', error);
    return { success: false, error: error.message };
  }
};

// Alternative: Direct Google Sheets API (requires more setup)
export const submitToGoogleSheetsAPI = async (formData) => {
  // This would require Google Sheets API setup with authentication
  // For now, we'll use the Google Apps Script approach above
  console.log('Google Sheets API submission:', formData);
  return { success: true, message: 'Data logged to console (API not configured)' };
};
