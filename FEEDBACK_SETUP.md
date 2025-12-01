# Feedback System Setup Guide

This website uses **GitHub Gists API** to store user feedback without needing a database. It's completely free!

## How It Works

- User submits feedback → Stored in a GitHub Gist → Displayed on website in real-time
- No database required
- Free forever
- Real-time updates

## Setup Instructions

### Step 1: Create a GitHub Personal Access Token

1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Click **"Generate new token (classic)"**
3. Give it a name: `EduRelief Feedback`
4. Select the scope: **`gist`** (check the box)
5. Click **"Generate token"**
6. **Copy the token immediately** (you won't see it again!)

### Step 2: Set Environment Variables

#### For Local Development:

Create a file named `.env.local` in the root directory:

```env
GITHUB_TOKEN=your_github_token_here
GITHUB_GIST_ID=
```

**Note:** Leave `GITHUB_GIST_ID` empty - it will be created automatically on first use.

#### For Production (Vercel/Netlify/etc.):

1. Go to your hosting platform's environment variables settings
2. Add:
   - `GITHUB_TOKEN` = your GitHub token
   - `GITHUB_GIST_ID` = (leave empty or add after first feedback is submitted)

### Step 3: Test It!

1. Start your development server: `npm run dev`
2. Go to `/feedback` page
3. Submit a test feedback
4. The system will automatically create a GitHub Gist and store your feedback

### Step 4: (Optional) Get the Gist ID

After submitting your first feedback:
1. Check your GitHub Gists: https://gist.github.com
2. Find the gist named "EduRelief SL - User Feedback"
3. Copy the Gist ID from the URL (the long hash)
4. Add it to your `.env.local` as `GITHUB_GIST_ID` for faster loading

## Security Notes

- ⚠️ **Never commit `.env.local` to Git** - it's already in `.gitignore`
- ✅ The GitHub token only needs `gist` scope (minimal permissions)
- ✅ Gists are public by default (feedback is meant to be visible)
- ✅ Users can submit feedback anonymously

## Troubleshooting

**Error: "GitHub token not configured"**
- Make sure you created `.env.local` with `GITHUB_TOKEN`
- Restart your dev server after adding environment variables

**Error: "Failed to create gist"**
- Check that your token has `gist` scope
- Verify the token is correct (no extra spaces)

**Feedback not showing up**
- Check browser console for errors
- Verify the API route is working: visit `/api/feedback` in browser
- Make sure the GitHub token is valid

## Features

✅ Users can submit feedback with optional name  
✅ Real-time feedback display  
✅ Automatic refresh button  
✅ Character limit (1000 chars)  
✅ Responsive design  
✅ No database needed!

