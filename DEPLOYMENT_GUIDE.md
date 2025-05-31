# 🚀 Portfolio Deployment Guide

*Complete guide to deploy and manage your Next.js portfolio website*

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Deployment to Vercel](#deployment-to-vercel)
4. [Making Updates](#making-updates)
5. [Custom Domain Setup](#custom-domain-setup)
6. [Troubleshooting](#troubleshooting)
7. [Alternative Deployment Methods](#alternative-deployment-methods)

---

## 🔧 Prerequisites

### Required Software
- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Git** - Usually pre-installed on Linux/Mac
- **Code Editor** - VS Code recommended

### Accounts Needed
- **Vercel Account** - [Sign up at vercel.com](https://vercel.com)
- **GitHub Account** - [Sign up at github.com](https://github.com) (recommended for login)

---

## 🏗️ Initial Setup

### 1. Project Structure
Your project should be organized like this:
```
myportfolio/
└── portfolio/
    ├── src/
    │   └── app/
    │       ├── layout.tsx
    │       ├── page.tsx
    │       └── globals.css
    ├── package.json
    ├── next.config.ts
    └── README.md
```

### 2. Initialize Git Repository
```bash
# Navigate to your project
cd portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio website"
```

### 3. Test Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3000 to test
```

---

## 🚀 Deployment to Vercel

### Method 1: Direct CLI Deployment (Fastest)

#### Step 1: Login to Vercel
```bash
npx vercel login
```

**Login Options:**
- **Continue with GitHub** (Recommended)
- **Continue with Email**
- **Continue with GitLab**
- **Continue with Bitbucket**

#### Step 2: Deploy
```bash
# Deploy with automatic configuration
npx vercel --yes
```

**What happens:**
- Vercel auto-detects Next.js project
- Builds your website for production
- Deploys to global CDN
- Provides live URL

#### Step 3: Get Your URLs
After successful deployment, you'll receive:
- **Live URL**: `https://portfolio-xxxxx-your-username.vercel.app`
- **Dashboard**: `https://vercel.com/your-username/portfolio`
- **Inspector**: For deployment details

### Method 2: GitHub Integration (Recommended for Teams)

#### Step 1: Push to GitHub
```bash
# Create repository on GitHub first, then:
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

#### Step 2: Import to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Import your GitHub repository
4. Click **"Deploy"**

---

## 🔄 Making Updates

### Update Content and Redeploy

#### Method 1: CLI Deployment
```bash
# Make your changes to files
# Then commit and deploy:
git add .
git commit -m "Update portfolio content"
npx vercel --prod
```

#### Method 2: GitHub Auto-Deploy
```bash
# If connected to GitHub, just push:
git add .
git commit -m "Update portfolio content"
git push
# Vercel automatically deploys!
```

### Common Updates
- **Content**: Edit `src/app/page.tsx`
- **Metadata**: Edit `src/app/layout.tsx`
- **Styling**: Modify Tailwind classes or `globals.css`
- **Projects**: Add new project cards in the projects section

---

## 🌐 Custom Domain Setup

### Step 1: Buy a Domain
**Recommended Registrars:**
- [Namecheap](https://namecheap.com) - $8-12/year
- [Google Domains](https://domains.google) - $12/year
- [Cloudflare](https://cloudflare.com) - At cost pricing

**Good Domain Ideas:**
- `yourname.dev`
- `yourname.tech`
- `yourfirstnamelastname.com`

### Step 2: Add Domain to Vercel
1. Go to your **Vercel Dashboard**
2. Select your **portfolio project**
3. Go to **Settings** → **Domains**
4. Click **"Add Domain"**
5. Enter your domain name

### Step 3: Configure DNS
In your domain registrar, add these DNS records:
```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Wait time:** 24-48 hours for full propagation

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### 1. "vercel: command not found"
**Problem:** Vercel CLI not found
**Solution:** Use `npx vercel` instead of `vercel`

#### 2. "not a git repository"
**Problem:** Git not initialized
**Solution:**
```bash
git init
git add .
git commit -m "Initial commit"
```

#### 3. "The specified token is not valid"
**Problem:** Not logged into Vercel
**Solution:**
```bash
npx vercel login
```

#### 4. Build Errors
**Problem:** TypeScript or linting errors
**Solution:**
```bash
# Check for errors locally first
npm run build
npm run lint

# Fix errors, then redeploy
```

#### 5. "Could not read package.json"
**Problem:** Wrong directory
**Solution:**
```bash
# Make sure you're in the portfolio directory
cd portfolio
npm run dev
```

#### 6. Environment Variables
**Problem:** Missing environment variables
**Solution:**
1. Go to Vercel Dashboard → Settings → Environment Variables
2. Add your variables
3. Redeploy

### Debug Commands
```bash
# Check current directory
pwd

# List files
ls -la

# Check git status
git status

# Check Node/npm versions
node --version
npm --version

# Check Vercel login status
npx vercel whoami
```

---

## 🔄 Alternative Deployment Methods

### Option 1: Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=.next
```

### Option 2: GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "next build && next export && gh-pages -d out"

# Deploy
npm run deploy
```

### Option 3: Self-Hosted
```bash
# Build for production
npm run build

# Start production server
npm start

# Or export static files
npm run build && npx next export
```

---

## 📊 Monitoring and Analytics

### Vercel Analytics
1. Go to **Vercel Dashboard**
2. Select your project
3. Go to **Analytics** tab
4. View traffic, performance, and user data

### Google Analytics (Optional)
1. Create Google Analytics account
2. Get tracking ID
3. Add to `src/app/layout.tsx`:
```tsx
// Add to head section
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

---

## 🚀 Performance Optimization

### Image Optimization
```tsx
import Image from 'next/image'

// Use Next.js Image component
<Image
  src="/your-image.jpg"
  alt="Description"
  width={500}
  height={300}
  priority // for above-the-fold images
/>
```

### SEO Optimization
```tsx
// In layout.tsx
export const metadata = {
  title: "Your Name - Portfolio",
  description: "Your description",
  keywords: ["keyword1", "keyword2"],
  openGraph: {
    title: "Your Name - Portfolio",
    description: "Your description",
    images: ["/og-image.jpg"],
  },
}
```

---

## 📝 Maintenance Checklist

### Weekly
- [ ] Check website is loading correctly
- [ ] Test contact forms/links
- [ ] Review analytics data

### Monthly
- [ ] Update project descriptions
- [ ] Add new projects/experience
- [ ] Check for broken links
- [ ] Update dependencies: `npm update`

### Quarterly
- [ ] Review and update content
- [ ] Check mobile responsiveness
- [ ] Run performance audit
- [ ] Update resume/CV section

---

## 🆘 Emergency Recovery

### If Website Goes Down
1. **Check Vercel Status**: [status.vercel.com](https://status.vercel.com)
2. **Check Domain DNS**: Use [whatsmydns.net](https://whatsmydns.net)
3. **Redeploy**: `npx vercel --prod`
4. **Check Logs**: Vercel Dashboard → Functions → View Logs

### If You Lose Access
1. **Vercel Account**: Use account recovery
2. **GitHub Repository**: Clone from GitHub
3. **Local Backup**: Keep local copy of all files

---

## 📞 Support Resources

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- **Stack Overflow**: Tag questions with `vercel` and `next.js`

---

## 🎯 Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Check for errors

# Git
git add .               # Stage all changes
git commit -m "message" # Commit changes
git push                # Push to GitHub

# Vercel
npx vercel login        # Login to Vercel
npx vercel              # Deploy to preview
npx vercel --prod       # Deploy to production
npx vercel whoami       # Check login status
npx vercel ls           # List deployments
```

---

*Last updated: January 2025*

**Need help?** Check the troubleshooting section or reach out for support! 