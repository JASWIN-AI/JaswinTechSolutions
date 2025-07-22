# How to Get Your JASWIN Tech Website to GitHub - Simple Steps

## Method 1: Direct File Upload (Easiest)

### Step 1: Download Your Code
1. In Replit, click the three dots menu (⋯) at the top right
2. Select "Download as zip"
3. Save the zip file to your computer
4. Extract/unzip the files

### Step 2: Upload to GitHub
1. Go to your GitHub repository (jaswin-tech-website)
2. Click "uploading an existing file" link
3. Drag and drop ALL the extracted files into the upload area
4. Scroll down and click "Commit changes"

## Method 2: Using Replit Git (If Working)

### Step 1: In Replit Git Tools
1. Go to Tools > Git
2. Click "Connect to GitHub" 
3. Authorize the connection

### Step 2: Add Remote Repository
1. Click "Add remote"
2. Enter your repository URL: `https://github.com/YOURUSERNAME/jaswin-tech-website.git`
3. Set it as "origin"

### Step 3: Push Code
1. Stage all files (click the + next to each file)
2. Write commit message: "Initial JASWIN Tech website"
3. Click "Commit and push"

## After Upload - Enable GitHub Pages

1. Go to your GitHub repository
2. Click "Settings" tab
3. Scroll to "Pages" section
4. Under "Source", select "GitHub Actions"
5. Your site will be live at: `https://YOURUSERNAME.github.io/jaswin-tech-website/`

## Important Files Already Created:
- `.github/workflows/deploy.yml` - Automatic deployment setup
- `README.md` - Project documentation
- All website files ready for deployment

The website will automatically build and deploy within 2-3 minutes after upload!