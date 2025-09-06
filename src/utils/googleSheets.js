// Google Sheets integration for contact form submissions
// This will send form data to a Google Sheet via Google Apps Script

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxy91Eza9RIks6qT7uttAEE9REsSw-jn7LRFqFeZwuY5g_nhhCl1TEs7v0d9AGp-IVj/exec';

export const submitToGoogleSheets = async (formData) => {
  try {
    // Create a simple form with individual input fields (most reliable method)
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = GOOGLE_SCRIPT_URL;
    form.target = '_blank'; // Open in new tab
    form.style.display = 'none';
    
    // Create individual input fields for each piece of data
    const fields = [
      ['timestamp', new Date().toISOString()],
      ['firstName', formData.firstName || ''],
      ['lastName', formData.lastName || ''],
      ['email', formData.email || ''],
      ['phone', formData.phone || ''],
      ['address', formData.address || ''],
      ['city', formData.city || ''],
      ['province', formData.province || ''],
      ['postalCode', formData.postalCode || ''],
      ['crimeType', formData.crimeType || ''],
      ['dateOfIncident', formData.dateOfIncident || ''],
      ['timeOfIncident', formData.timeOfIncident || ''],
      ['location', formData.location || ''],
      ['description', formData.description || ''],
      ['suspects', formData.suspects || ''],
      ['witnesses', formData.witnesses || ''],
      ['evidence', formData.evidence || ''],
      ['urgency', formData.urgency || ''],
      ['anonymous', formData.anonymous ? 'true' : 'false'],
      ['followUp', formData.followUp ? 'true' : 'false'],
      ['additionalInfo', formData.additionalInfo || ''],
      ['userAgent', navigator.userAgent || ''],
      ['referrer', document.referrer || '']
    ];
    
    // Add each field as a hidden input
    fields.forEach(([name, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = String(value);
      form.appendChild(input);
    });
    
    // Add form to document and submit
    document.body.appendChild(form);
    
    console.log('Submitting form to:', GOOGLE_SCRIPT_URL);
    console.log('Form fields:', fields.map(([name, value]) => `${name}: ${value}`));
    
    form.submit();
    
    // Clean up after a delay
    setTimeout(() => {
      if (document.body.contains(form)) {
        document.body.removeChild(form);
      }
    }, 1000);
    
    console.log('Form submitted successfully');
    return { success: true, message: 'Data sent successfully' };
    
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
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
