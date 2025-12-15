# GitHub Environments Setup Guide
## ಎರಡು ವಿಭಿನ್ನ Servers ಗೆ Deploy ಮಾಡಲು (ಕನ್ನಡ + English)

---

## 🎯 Goal / ಗುರಿ

**Two separate deployment environments:**

1. **`dev` branch** → **Development Environment** → **Test Server**
2. **`main` branch** → **Production Environment** → **Main Live Server**

---

## 📋 What Was Configured / ಏನು Configure ಮಾಡಿದ್ದೇವೆ

### Updated Workflow Files:
- ✅ `.github/workflows/frontend-deploy.yml`
- ✅ `.github/workflows/backend-deploy.yml`

### Environment Logic:
```yaml
environment: ${{ github.ref == 'refs/heads/main' && 'production' || 'development' }}
```

**Translation:**
- `main` branch push → Uses **`production`** environment secrets
- `dev` branch push → Uses **`development`** environment secrets

---

## 🔧 GitHub Setup Steps / GitHub ನಲ್ಲಿ Setup ಮಾಡುವ ಹಂತಗಳು

### Step 1: Go to Repository Settings / Repository Settings ಗೆ ಹೋಗಿ

1. ನಿಮ್ಮ GitHub repository ಗೆ ಹೋಗಿ: `https://github.com/YOUR_USERNAME/vehiclecollision`
2. Click **Settings** (top menu)
3. Left sidebar ನಲ್ಲಿ **Environments** click ಮಾಡಿ

---

### Step 2: Create "development" Environment / Development Environment Create ಮಾಡಿ

#### 2.1: Create Environment
1. Click **"New environment"** button
2. Name: `development` (exactly this name, lowercase)
3. Click **"Configure environment"**

#### 2.2: Add Development Server Secrets / Test Server Secrets Add ಮಾಡಿ

ನಿಮ್ಮ **Test/Development Server** details ಇಲ್ಲಿ add ಮಾಡಿ:

Click **"Add secret"** and add each of these:

| Secret Name | Value Example | Description |
|------------|---------------|-------------|
| `VPS_SSH_KEY` | `-----BEGIN OPENSSH PRIVATE KEY-----`<br>`...your SSH key...`<br>`-----END OPENSSH PRIVATE KEY-----` | Dev server SSH private key |
| `VPS_USER` | `testuser` | Dev server username |
| `VPS_HOST` | `dev.ucasaapp.testatozas.in`<br>or `192.168.1.100` | Dev server hostname/IP |
| `VPS_PORT` | `22` (optional) | SSH port (leave empty for 22) |
| `VPS_APP_DIR` | `/home/testuser/dev-ucasaapp` | Dev server app directory |

**Example for Development:**
```
VPS_SSH_KEY: [Your dev server SSH key]
VPS_USER: testuser
VPS_HOST: dev.ucasaapp.testatozas.in
VPS_PORT: 22
VPS_APP_DIR: /home/testuser/htdocs/dev.ucasaapp
```

#### 2.3: Optional - Add Protection Rules (Recommended)
- ✅ **Deployment branches**: Select "Selected branches" → Add `dev`
- This ensures only `dev` branch can deploy to development environment

---

### Step 3: Create "production" Environment / Production Environment Create ಮಾಡಿ

#### 3.1: Create Environment
1. Click **"New environment"** button again
2. Name: `production` (exactly this name, lowercase)
3. Click **"Configure environment"**

#### 3.2: Add Production Server Secrets / Main Server Secrets Add ಮಾಡಿ

ನಿಮ್ಮ **Main/Production Server** details ಇಲ್ಲಿ add ಮಾಡಿ:

Click **"Add secret"** and add each of these:

| Secret Name | Value Example | Description |
|------------|---------------|-------------|
| `VPS_SSH_KEY` | `-----BEGIN OPENSSH PRIVATE KEY-----`<br>`...your production SSH key...`<br>`-----END OPENSSH PRIVATE KEY-----` | Production server SSH key |
| `VPS_USER` | `testatozas-ucasaapp` | Production server username |
| `VPS_HOST` | `ucasaapp.testatozas.in` | Production server hostname |
| `VPS_PORT` | `22` (optional) | SSH port |
| `VPS_APP_DIR` | `/home/testatozas-ucasaapp/htdocs/ucasaapp.testatozas.in` | Production app directory |

**Example for Production:**
```
VPS_SSH_KEY: [Your production server SSH key]
VPS_USER: testatozas-ucasaapp
VPS_HOST: ucasaapp.testatozas.in
VPS_PORT: (leave empty or 22)
VPS_APP_DIR: /home/testatozas-ucasaapp/htdocs/ucasaapp.testatozas.in
```

#### 3.3: Add Protection Rules (HIGHLY Recommended)
Protect production from accidental deployments:

1. ✅ **Required reviewers**: Add yourself or team member
   - Deployments will need approval before going live
   
2. ✅ **Deployment branches**: Select "Selected branches" → Add `main`
   - Only `main` branch can deploy to production
   
3. ✅ **Wait timer**: 5 minutes (optional)
   - Gives time to cancel if needed

---

## 📊 Environment Summary / ಸಾರಾಂಶ

After setup, you'll have:

```
GitHub Environments
├── development
│   ├── VPS_SSH_KEY (dev server key)
│   ├── VPS_USER (dev server user)
│   ├── VPS_HOST (dev server IP/domain)
│   ├── VPS_PORT (dev server port)
│   └── VPS_APP_DIR (dev server path)
│
└── production
    ├── VPS_SSH_KEY (production server key)
    ├── VPS_USER (production server user)
    ├── VPS_HOST (production server IP/domain)
    ├── VPS_PORT (production server port)
    └── VPS_APP_DIR (production server path)
```

---

## 🚀 How Deployment Works / Deployment ಹೇಗೆ Work ಆಗುತ್ತದೆ

### Scenario 1: Deploy to Development / Test Server

```bash
git checkout dev
git add .
git commit -m "Testing new feature"
git push origin dev
```

**What happens:**
1. ✅ GitHub Actions triggers
2. ✅ Uses **`development`** environment
3. ✅ Reads secrets from **development** environment
4. ✅ Deploys to **test server** (e.g., `dev.ucasaapp.testatozas.in`)
5. ✅ You can test without affecting main site

### Scenario 2: Deploy to Production / Main Server

```bash
git checkout main
git merge dev  # Merge tested changes from dev
git push origin main
```

**What happens:**
1. ✅ GitHub Actions triggers
2. ✅ Uses **`production`** environment
3. ✅ Waits for approval (if you set required reviewers)
4. ✅ Reads secrets from **production** environment
5. ✅ Deploys to **main live server** (`ucasaapp.testatozas.in`)

---

## 🔍 Verify Setup / Setup ಸರಿಯಾಗಿ ಆಗಿದೆಯೇ ಪರೀಕ್ಷಿಸಿ

### Check GitHub Environments:

1. Go to: `https://github.com/YOUR_USERNAME/vehiclecollision/settings/environments`
2. You should see:
   - ✅ `development` (with 5 secrets)
   - ✅ `production` (with 5 secrets)

### Test Deployment:

#### Test 1: Development Deployment
```bash
# Make a small change
echo "# Test" >> README.md
git add README.md
git commit -m "Test dev deployment"
git checkout dev
git push origin dev
```

Watch at: `https://github.com/YOUR_USERNAME/vehiclecollision/actions`

Expected:
- ✅ Uses `development` environment
- ✅ Shows deployment to dev server
- ✅ Green checkmark if successful

#### Test 2: Production Deployment
```bash
git checkout main
git merge dev
git push origin main
```

Expected:
- ✅ Uses `production` environment
- ✅ Waits for approval (if configured)
- ✅ Deploys to production server
- ✅ Green checkmark if successful

---

## 📱 Example Server Setup / Example Setup

### Your Current Setup (ನಿಮ್ಮ Current Setup):

**Production Server:**
```
Domain: ucasaapp.testatozas.in
User: testatozas-ucasaapp
Path: /home/testatozas-ucasaapp/htdocs/ucasaapp.testatozas.in
```

**Development Server Options (choose one):**

**Option A: Subdomain on same VPS**
```
Domain: dev.ucasaapp.testatozas.in
User: testatozas-ucasaapp (same user)
Path: /home/testatozas-ucasaapp/htdocs/dev.ucasaapp
Port: 5455 (different port from production 5454)
```

**Option B: Separate server/VPS**
```
Domain: test.yourserver.com
User: testuser
Path: /home/testuser/ucasaapp
Port: 22
```

**Option C: Same server, different folder (simplest)**
```
Domain: ucasaapp.testatozas.in:3000 (different port)
User: testatozas-ucasaapp
Path: /home/testatozas-ucasaapp/htdocs/dev-ucasaapp
Port: 22
```

---

## 🛠️ Additional Configuration / ಹೆಚ್ಚುವರಿ Configuration

### If you want to add more secrets:

**Example: MongoDB URIs for different environments**

**Development environment:**
```
MONGODB_URI: mongodb://dev-server/dev-collision-alarm
```

**Production environment:**
```
MONGODB_URI: mongodb://prod-server/collision-alarm
```

Add these the same way as VPS secrets.

---

## 🔐 Security Best Practices / ಸುರಕ್ಷತಾ ಸಲಹೆಗಳು

### ✅ DO:
- Use different SSH keys for dev and production
- Enable "Required reviewers" for production
- Restrict deployment branches
- Use different database for dev and production
- Test thoroughly in development before merging to main

### ❌ DON'T:
- Share SSH keys between environments
- Deploy directly to production without testing
- Skip approval process for production
- Use production database in development
- Commit secrets to git (use GitHub Secrets only)

---

## 🐛 Troubleshooting / ಸಮಸ್ಯೆ ಪರಿಹಾರ

### Problem 1: "Environment not found"
**Solution:** 
- Check environment name is exactly `development` or `production` (lowercase)
- Wait 1-2 minutes after creating environment

### Problem 2: "Secret not found"
**Solution:**
- Verify all 5 secrets are added to correct environment
- Secret names must match exactly: `VPS_SSH_KEY`, `VPS_USER`, etc.

### Problem 3: Deployment goes to wrong server
**Solution:**
- Check which branch you're on: `git branch`
- Verify secrets in correct environment
- Check workflow logs to see which environment was used

### Problem 4: SSH connection fails
**Solution:**
- Verify VPS_HOST is correct for that environment
- Check SSH key is correct for that server
- Ensure firewall allows GitHub Actions IPs

---

## 📋 Checklist / ಪರಿಶೀಲನಾ ಪಟ್ಟಿ

### GitHub Setup:
- [ ] Created `development` environment
- [ ] Added 5 secrets to development
- [ ] Created `production` environment
- [ ] Added 5 secrets to production
- [ ] Set deployment branches for both
- [ ] Enabled required reviewers for production (optional)

### Server Setup:
- [ ] Development server configured
- [ ] Production server configured
- [ ] Different SSH keys for each server
- [ ] Different app directories
- [ ] Different ports (if same server)

### Testing:
- [ ] Pushed to dev branch → deploys to dev server
- [ ] Pushed to main branch → deploys to production server
- [ ] Both deployments successful
- [ ] Apps accessible on respective URLs

---

## 🎯 Quick Reference / ತ್ವರಿತ ಉಲ್ಲೇಖ

### Deploy to Development:
```bash
git checkout dev
# make changes
git add .
git commit -m "message"
git push origin dev
```
→ Uses **development** environment → Test server

### Deploy to Production:
```bash
git checkout main
git merge dev
git push origin main
```
→ Uses **production** environment → Main server

---

## 📞 Next Steps / ಮುಂದಿನ ಹಂತಗಳು

1. **Create GitHub Environments** (Steps 2 & 3 above)
2. **Add Secrets** to both environments
3. **Commit and Push** the updated workflow files
4. **Test** deployment to dev branch
5. **Merge** to main when ready for production

---

## ✅ Summary / ಸಾರಾಂಶ

**Before (ಮೊದಲು):**
- One environment: `production`
- All branches use same server
- No separation between test and live

**After (ಈಗ):**
- Two environments: `development` + `production`
- `dev` branch → Test server
- `main` branch → Live server
- Safe testing before going live! 🎉

---

**Questions?** Check GitHub Actions logs at:
`https://github.com/YOUR_USERNAME/vehiclecollision/actions`

Each deployment will show which environment was used and which server it deployed to.

