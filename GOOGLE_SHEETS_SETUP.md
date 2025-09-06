# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration to capture all contact form submissions from your InterMilano website.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "InterMilano Contact Form Submissions" (or any name you prefer)

## Step 2: Set up Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete the default code and paste the code from `google-apps-script.js`
3. Save the project (Ctrl+S or Cmd+S)
4. Name your project "InterMilano Form Handler"

## Step 3: Set up Sheet Headers

1. In the Apps Script editor, run the `setupSheetHeaders()` function once:
   - Click on the function dropdown and select `setupSheetHeaders`
   - Click the **Run** button
   - Grant permissions when prompted
   - This will create all the column headers in your sheet

## Step 4: Deploy as Web App

1. In Apps Script, click **Deploy** → **New deployment**
2. Choose **Web app** as the type
3. Set the following:
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. Copy the **Web app URL** - you'll need this for your website

## Step 5: Update Your Website

1. Open `src/utils/googleSheets.js`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your actual Web app URL
3. Save the file

## Step 6: Test the Integration

1. Start your development server: `npm start`
2. Go to your contact form
3. Fill out and submit the form
4. Check your Google Sheet - you should see the data appear

## Data Captured

Your Google Sheet will capture all this information:

### Personal Information
- First Name, Last Name
- Email, Phone
- Address, City, Province, Postal Code

### Crime Information
- Crime Type, Date/Time of Incident
- Location, Description
- Suspect Information, Witness Information
- Evidence Details

### Additional Information
- Urgency Level
- Anonymous submission flag
- Follow-up request flag
- Additional comments

### Metadata
- Submission timestamp
- User agent (browser info)
- Referrer (where they came from)

## Security Notes

- The Google Apps Script is set to accept requests from anyone
- For production, consider adding authentication
- All data is stored in your Google account
- You can set up notifications for new submissions

## Troubleshooting

### If submissions aren't appearing:
1. Check the browser console for errors
2. Verify the Web app URL is correct
3. Make sure the Apps Script is deployed as a web app
4. Check that the `setupSheetHeaders()` function was run

### If you get permission errors:
1. Make sure you're logged into the correct Google account
2. Grant all requested permissions
3. Try redeploying the web app

## Next Steps

Once set up, you can:
- Set up email notifications for new submissions
- Create charts and reports from the data
- Export data to other formats
- Set up automated responses

Your contact form is now fully integrated with Google Sheets! 🎉
