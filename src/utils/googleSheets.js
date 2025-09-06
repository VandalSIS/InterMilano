// Google Sheets integration for contact form submissions
// This will send form data to a Google Sheet via Google Apps Script

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxy91Eza9RIks6qT7uttAEE9REsSw-jn7LRFqFeZwuY5g_nhhCl1TEs7v0d9AGp-IVj/exec';

export const submitToGoogleSheets = async (formData) => {
  try {
    // Create a form element to submit data (bypasses CORS)
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = GOOGLE_SCRIPT_URL;
    form.target = '_blank'; // Open in new tab to avoid navigation
    form.style.display = 'none';
    
    // Add all form data as hidden inputs
    const fields = {
      timestamp: new Date().toISOString(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      province: formData.province,
      postalCode: formData.postalCode,
      crimeType: formData.crimeType,
      dateOfIncident: formData.dateOfIncident,
      timeOfIncident: formData.timeOfIncident,
      location: formData.location,
      description: formData.description,
      suspects: formData.suspects,
      witnesses: formData.witnesses,
      evidence: formData.evidence,
      urgency: formData.urgency,
      anonymous: formData.anonymous,
      followUp: formData.followUp,
      additionalInfo: formData.additionalInfo,
      userAgent: navigator.userAgent,
      referrer: document.referrer
    };
    
    // Create hidden inputs for each field
    Object.keys(fields).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = fields[key] || '';
      form.appendChild(input);
    });
    
    // Add form to document, submit, then remove
    document.body.appendChild(form);
    form.submit();
    
    // Clean up - remove form and close the popup after a short delay
    setTimeout(() => {
      document.body.removeChild(form);
      // Try to close the popup window that opened
      const popups = window.open('', '_blank');
      if (popups) popups.close();
    }, 1000);
    
    console.log('Data sent to Google Sheets successfully');
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
