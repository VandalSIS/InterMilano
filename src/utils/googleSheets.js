// Google Sheets integration for contact form submissions
// This will send form data to a Google Sheet via Google Apps Script

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyhDr74eZBDNCfE4PB_MRkdkDVKkOdONiE6kXVr6YRg23UgRjZgQMs_Dm7hmgtO0kvM/exec';

export const submitToGoogleSheets = async (formData) => {
  try {
    // Just submit the form - don't wait for response
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = GOOGLE_SCRIPT_URL;
    form.target = '_blank';
    form.style.display = 'none';
    
    // Add only the main fields
    const fields = [
      ['firstName', formData.firstName || ''],
      ['lastName', formData.lastName || ''],
      ['email', formData.email || ''],
      ['phone', formData.phone || ''],
      ['crimeType', formData.crimeType || ''],
      ['description', formData.description || '']
    ];
    
    fields.forEach(([name, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = String(value);
      form.appendChild(input);
    });
    
    document.body.appendChild(form);
    form.submit();
    
    // Clean up
    setTimeout(() => {
      if (document.body.contains(form)) {
        document.body.removeChild(form);
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
