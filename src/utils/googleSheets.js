// Google Sheets integration for contact form submissions
// This will send form data to a Google Sheet via Google Apps Script

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxy91Eza9RIks6qT7uttAEE9REsSw-jn7LRFqFeZwuY5g_nhhCl1TEs7v0d9AGp-IVj/exec';

export const submitToGoogleSheets = async (formData) => {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Personal Information
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        province: formData.province,
        postalCode: formData.postalCode,
        
        // Crime Information
        crimeType: formData.crimeType,
        dateOfIncident: formData.dateOfIncident,
        timeOfIncident: formData.timeOfIncident,
        location: formData.location,
        description: formData.description,
        suspects: formData.suspects,
        witnesses: formData.witnesses,
        evidence: formData.evidence,
        
        // Additional Information
        urgency: formData.urgency,
        anonymous: formData.anonymous,
        followUp: formData.followUp,
        additionalInfo: formData.additionalInfo,
        
        // Metadata
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer
      })
    });

    // With no-cors mode, we can't read the response or check status
    // But if fetch doesn't throw an error, the request was sent successfully
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
