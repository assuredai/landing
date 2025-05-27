# Setting Up GitHub Pages - Step by Step Guide

Here's a detailed guide with screenshots to help you enable GitHub Pages for your AssuredAI landing page.

## Step 1: Go to Repository Settings

Click on the "Settings" tab in the top navigation bar of your repository.

## Step 2: Navigate to Pages Settings

In the left sidebar, scroll down and click on "Pages" under the "Code and automation" section.

## Step 3: Configure Source Branch

Under "Source", select "Deploy from a branch" if it's not already selected.

## Step 4: Select Branch and Folder

Under "Branch", select "main" from the dropdown menu and "/(root)" for the folder, then click "Save".

## Step 5: Wait for Deployment

GitHub will now build and deploy your site. This typically takes 1-3 minutes.

## Step 6: Access Your Live Site

Once deployment is complete, you'll see a message at the top of the page saying:
"Your site is live at https://[yourusername].github.io/landing/"

The URL will be based on your GitHub username and repository name.

## Troubleshooting

If your site doesn't appear or styles aren't loading:

1. **Check file paths**: Ensure all file paths in your HTML are relative and don't start with a slash.
2. **Verify case sensitivity**: GitHub Pages is case-sensitive. Make sure filenames match exactly.
3. **Check deployment status**: At the top of the Pages settings, look for any error messages.
4. **Wait a few minutes**: Sometimes changes take time to propagate.

## Additional Tips

- You can add a custom domain in the "Custom domain" section if desired
- Each time you push changes to your repository, GitHub Pages will automatically rebuild your site
- You can check the build status in the "GitHub Pages" section of your repository settings
