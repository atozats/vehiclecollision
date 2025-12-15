# Quick Setup Steps (ತ್ವರಿತ Setup ಹಂತಗಳು)
## Copy-Paste Commands / Copy-Paste ಮಾಡಬಹುದಾದ Commands

---

## 🚀 Step 1: Commit Updated Workflows

```bash
cd c:\001work\vehiclecollision

git add .github/workflows/frontend-deploy.yml
git add .github/workflows/backend-deploy.yml
git add client/public/
git commit -m "Configure dual environments: dev and production"
git push origin dev
```

---

## 🌐 Step 2: Create GitHub Environments

### Go to GitHub:
```
https://github.com/YOUR_USERNAME/vehiclecollision/settings/environments
```

### Create Development Environment:

1. Click **"New environment"**
2. Name: `development`
3. Click **"Configure environment"**
4. Add these secrets:

```
Secret Name: VPS_SSH_KEY
Value: [Your dev server SSH private key]

Secret Name: VPS_USER  
Value: [Dev server username]

Secret Name: VPS_HOST
Value: [Dev server domain/IP]

Secret Name: VPS_PORT
Value: 22

Secret Name: VPS_APP_DIR
Value: [Dev server app path]
```

5. Set deployment branch: `dev`
6. Click **"Save protection rules"**

### Create Production Environment:

1. Click **"New environment"**
2. Name: `production`
3. Click **"Configure environment"**
4. Add these secrets:

```
Secret Name: VPS_SSH_KEY
Value: [Your production server SSH private key]

Secret Name: VPS_USER  
Value: testatozas-ucasaapp

Secret Name: VPS_HOST
Value: ucasaapp.testatozas.in

Secret Name: VPS_PORT
Value: 22

Secret Name: VPS_APP_DIR
Value: /home/testatozas-ucasaapp/htdocs/ucasaapp.testatozas.in
```

5. Enable **"Required reviewers"** (optional but recommended)
6. Set deployment branch: `main`
7. Click **"Save protection rules"**

---

## 🧪 Step 3: Test Development Deployment

```bash
# Create a test change
echo "# Test deployment" >> README.md

# Commit and push to dev
git add README.md
git commit -m "Test: development environment deployment"
git push origin dev
```

### Check Deployment:
```
https://github.com/YOUR_USERNAME/vehiclecollision/actions
```

**Expected:** 
- ✅ Shows "environment: development"
- ✅ Deploys to dev server
- ✅ Green checkmark

---

## 🎯 Step 4: Test Production Deployment

```bash
# Switch to main branch
git checkout main

# Merge tested changes from dev
git merge dev

# Push to production
git push origin main
```

### Check Deployment:
```
https://github.com/YOUR_USERNAME/vehiclecollision/actions
```

**Expected:**
- ✅ Shows "environment: production"
- ✅ Waits for approval (if enabled)
- ✅ Deploys to production server
- ✅ Green checkmark

---

## 📋 Daily Workflow Commands

### Working on New Feature:

```bash
# Ensure you're on dev branch
git checkout dev
git pull origin dev

# Make your changes
# ... edit files ...

# Commit and push (deploys to test server)
git add .
git commit -m "Add: new feature description"
git push origin dev

# Test on dev server
# Visit: dev.ucasaapp.testatozas.in (or your dev URL)
```

### Pushing to Production:

```bash
# After thorough testing on dev...

# Switch to main
git checkout main
git pull origin main

# Merge dev into main
git merge dev

# Push (deploys to live server)
git push origin main

# Verify deployment
# Visit: ucasaapp.testatozas.in
```

---

## 🔍 Verify Setup

### Check Environments:
```
https://github.com/YOUR_USERNAME/vehiclecollision/settings/environments
```

**You should see:**
```
✅ development (5 secrets) [protected]
✅ production (5 secrets) [protected]
```

### Check Recent Deployments:
```
https://github.com/YOUR_USERNAME/vehiclecollision/deployments
```

---

## 🛠️ Server Commands

### Development Server:

```bash
# SSH to dev server
ssh YOUR_DEV_USER@YOUR_DEV_HOST

# Check PM2 status
pm2 list

# View logs
pm2 logs ucasaapp-dev

# Restart if needed
pm2 restart ucasaapp-dev
```

### Production Server:

```bash
# SSH to production server
ssh testatozas-ucasaapp@ucasaapp.testatozas.in

# Check PM2 status
pm2 list

# View logs
pm2 logs ucasaapp

# Restart if needed
pm2 restart ucasaapp
```

---

## 🐛 Troubleshooting

### If deployment fails:

```bash
# Check GitHub Actions logs
https://github.com/YOUR_USERNAME/vehiclecollision/actions

# Click on failed workflow → View logs

# Common issues:
# 1. Missing secrets → Add them in Environments
# 2. Wrong environment name → Check exact spelling
# 3. SSH connection failed → Verify VPS_HOST and VPS_SSH_KEY
# 4. Permission denied → Check SSH key permissions
```

### Test SSH connection manually:

```bash
# For dev server
ssh YOUR_DEV_USER@YOUR_DEV_HOST

# For production server
ssh testatozas-ucasaapp@ucasaapp.testatozas.in
```

---

## ✅ Verification Checklist

Run through this checklist:

```
Development Environment:
□ Environment created in GitHub
□ 5 secrets added (VPS_SSH_KEY, VPS_USER, VPS_HOST, VPS_PORT, VPS_APP_DIR)
□ Branch restriction set to 'dev'
□ Test push to dev → deploys successfully
□ Dev server accessible

Production Environment:
□ Environment created in GitHub
□ 5 secrets added (VPS_SSH_KEY, VPS_USER, VPS_HOST, VPS_PORT, VPS_APP_DIR)
□ Branch restriction set to 'main'
□ Required reviewers enabled (optional)
□ Test push to main → deploys successfully
□ Production server accessible

Both Environments:
□ Different servers (or different directories/ports)
□ No conflicts between deployments
□ GitHub Actions shows correct environment
□ Apps running independently
```

---

## 📞 Quick Links

| Resource | URL |
|----------|-----|
| GitHub Repo Settings | `https://github.com/YOUR_USERNAME/vehiclecollision/settings` |
| Environments | `https://github.com/YOUR_USERNAME/vehiclecollision/settings/environments` |
| Actions (Deployments) | `https://github.com/YOUR_USERNAME/vehiclecollision/actions` |
| Deployment History | `https://github.com/YOUR_USERNAME/vehiclecollision/deployments` |
| Dev Server | `dev.ucasaapp.testatozas.in` (or your URL) |
| Production Server | `ucasaapp.testatozas.in` |

---

## 🎯 Remember

```
dev branch    →  development environment  →  Test Server
main branch   →  production environment   →  Live Server
```

**ಯಾವಾಗಲೂ dev ನಲ್ಲಿ test ಮಾಡಿ, ನಂತರ main ಗೆ merge ಮಾಡಿ!**

---

## 💡 Pro Tips

1. **Always test in dev first** - Never push untested code to main
2. **Use meaningful commit messages** - Makes tracking changes easier
3. **Enable approvals for production** - Extra safety layer
4. **Monitor deployments** - Check GitHub Actions after pushing
5. **Keep branches in sync** - Regularly merge main back to dev
6. **Use feature branches** - For major features, branch off dev
7. **Backup before major updates** - Especially for production database

---

**Need help?** Check these files:
- `GITHUB_ENVIRONMENTS_SETUP.md` - Detailed setup guide
- `DEPLOYMENT_WORKFLOW.md` - Visual workflow diagrams
- `PWA_IMPLEMENTATION_GUIDE.md` - PWA features guide

🚀 Happy deploying!

