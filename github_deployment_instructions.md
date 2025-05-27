# GitHub Deployment Instructions for Updated AssuredAI Website

This document provides step-by-step instructions for deploying your updated AssuredAI website to GitHub Pages.

## What's New in This Update

1. Updated main page content with revised text
2. Added AssuredAI logo and favicon
3. Optimized mobile display and fixed overlap issues
4. Implemented email contact form using FormSubmit.co
5. Added new "Business Leaders Dilemma" page
6. Improved overall responsiveness and navigation

## Deployment Steps

### Option 1: Using GitHub Web Interface (Recommended)

1. **Go to your existing repository**
   - Navigate to your GitHub repository at https://github.com/yourusername/landing
   - If you're creating a new repository instead, click the "+" icon in the top right corner and select "New repository"

2. **Upload your updated files**
   - In your repository, click the "Add file" button and select "Upload files"
   - Drag and drop all the files from the `assuredai-website-update` folder or use the file selector
   - Make sure to include:
     - index.html
     - business-leaders-dilemma.html
     - styles.css
     - script.js
     - images folder with logo.png and favicon.png
   - Add a commit message like "Update website with new content and features"
   - Click "Commit changes"

3. **Verify GitHub Pages settings**
   - Go to your repository's "Settings" tab
   - Scroll down to the "Pages" section in the left sidebar
   - Under "Source", ensure "Deploy from a branch" is selected
   - Under "Branch", confirm "main" branch is selected with "/(root)" folder
   - If any changes were made, click "Save"
   - Wait a few minutes for your site to be published
   - The URL will be https://yourusername.github.io/landing/ (or your custom repository name)

### Option 2: Using Git Command Line

1. **Clone your repository locally** (skip if you're updating an existing local clone)
   ```bash
   git clone https://github.com/yourusername/landing.git
   cd landing
   ```

2. **Copy your updated website files**
   - Copy all files from the provided zip into this folder, replacing existing files

3. **Commit and push your changes**
   ```bash
   git add .
   git commit -m "Update website with new content and features"
   git push origin main
   ```

4. **Verify GitHub Pages settings** as in Option 1, Step 3

## Important Notes About the Email Form

The contact form is configured to use FormSubmit.co, a free service that forwards form submissions to your email:

1. The form is pre-configured to send submissions to info@assuredai.io
2. On the first form submission, FormSubmit will send a confirmation email to activate the form
3. You must click the activation link in that email to start receiving form submissions
4. The form includes these configuration options:
   - Subject line: "New AssuredAI Website Inquiry"
   - Redirect after submission: to a thank-you page (you may need to create this)
   - CAPTCHA is disabled for better user experience

## Troubleshooting Common Issues

### CSS and JavaScript Not Loading

If your CSS and JavaScript files aren't loading correctly after deployment, check the following:

1. **File paths**: All file paths in the HTML are relative and don't start with a slash, which should work correctly with GitHub Pages.

2. **Case sensitivity**: GitHub Pages is case-sensitive. The filenames in this update match exactly in all references.

3. **Wait for propagation**: Sometimes changes can take a few minutes to propagate. Wait 5-10 minutes and try again.

### Images Not Displaying

If images aren't displaying:

1. Verify the images folder was uploaded with the logo.png and favicon.png files
2. Check that the image paths in HTML files are correct (should be "images/logo.png" and "images/favicon.png")

### Form Not Working

If the contact form isn't sending emails:

1. Make sure you've activated the FormSubmit service by clicking the link in their confirmation email
2. Check your spam folder for the activation email
3. Verify the form action URL is correct in the HTML

## Need Help?

If you encounter any issues with deployment, please don't hesitate to reach out for assistance.
