# Git Setup & GitHub Pages Deployment Guide

## Prerequisites
- Git installed on your computer
- A GitHub account (free at github.com)
- Your files ready in the `final/` folder

---

## Step 1: Initialize Git Repository

Open terminal/command prompt in your `final/` folder:

```bash
git init
git config user.name "Your Name"
git config user.email "your.email@github.com"
```

---

## Step 2: Add Files & Make First Commit

```bash
git add .
git commit -m "Initial commit: TaskFlow todo app"
```

---

## Step 3: Create GitHub Repository

1. Go to **https://github.com/new**
2. Enter repository name: `taskflow` (or any name)
3. Choose "Public" (required for free GitHub Pages)
4. Click "Create repository"
5. GitHub shows you setup instructions

---

## Step 4: Connect Local Repo to GitHub

Replace `YOUR-USERNAME` and `taskflow` with your values:

```bash
git remote add origin https://github.com/YOUR-USERNAME/taskflow.git
git branch -M main
git push -u origin main
```

---

## Step 5: Enable GitHub Pages

1. Go to your repo on GitHub: `https://github.com/YOUR-USERNAME/taskflow`
2. Click **Settings** (top menu)
3. Scroll to **Pages** section (left sidebar)
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/root` (or `/` - should be default)
5. Click "Save"
6. Wait 1-2 minutes for deployment
7. Your app is live at: **`https://YOUR-USERNAME.github.io/taskflow`**

---

## Complete URLs You'll Get

| Item | URL |
|------|-----|
| GitHub Repo | `https://github.com/YOUR-USERNAME/taskflow` |
| Deployed App | `https://YOUR-USERNAME.github.io/taskflow` |

---

## After Deployment: Making Changes

If you want to update your app:

```bash
# Make changes to files
# Then:
git add .
git commit -m "Your change description"
git push origin main
```

GitHub Pages will auto-update within 1-2 minutes.

---

## Troubleshooting

### "GitHub Pages is not currently being built from this source"
→ Check Settings > Pages shows "main" branch and "/root" folder

### "404 error when visiting the deployed link"
→ Wait 2-3 minutes, GitHub needs time to build
→ Verify repository is Public (not Private)

### "CSS not loading on GitHub Pages"
→ Make sure `style.css` is in the root folder
→ Refresh with Ctrl+Shift+R (hard refresh)

### "Changes not showing after push"
→ Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
→ Wait 1-2 minutes for GitHub to rebuild

---

## Submit Your Links

Once deployed, you'll have:
1. **GitHub Repo Link**: `https://github.com/YOUR-USERNAME/taskflow`
2. **Deployed App URL**: `https://YOUR-USERNAME.github.io/taskflow`

Submit both links as requested!

---

## Quick Command Reference

```bash
# First time setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/taskflow.git
git push -u origin main

# Subsequent updates
git add .
git commit -m "Your message"
git push origin main

# Check status
git status

# View commit history
git log --oneline
```

---

**You're all set!** Your TaskFlow app is now deployed and accessible worldwide. 🚀
