# Deployment Workflow Diagram
## ಎರಡು ವಿಭಿನ್ನ Servers ಗೆ Deployment Flow

---

## 🔄 Complete Workflow / ಸಂಪೂರ್ಣ Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                        LOCAL DEVELOPMENT                         │
│                     ನಿಮ್ಮ Computer ನಲ್ಲಿ                        │
└─────────────────────────────────────────────────────────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    ▼                         ▼
        ┌─────────────────────┐   ┌─────────────────────┐
        │   git push origin   │   │   git push origin   │
        │        dev          │   │        main         │
        └─────────────────────┘   └─────────────────────┘
                    │                         │
                    ▼                         ▼
        ┌─────────────────────┐   ┌─────────────────────┐
        │  GitHub Actions     │   │  GitHub Actions     │
        │  Triggers           │   │  Triggers           │
        └─────────────────────┘   └─────────────────────┘
                    │                         │
                    ▼                         ▼
        ┌─────────────────────┐   ┌─────────────────────┐
        │   Uses Environment  │   │   Uses Environment  │
        │    "development"    │   │    "production"     │
        └─────────────────────┘   └─────────────────────┘
                    │                         │
                    ▼                         ▼
        ┌─────────────────────┐   ┌─────────────────────┐
        │  Reads Dev Secrets: │   │ Reads Prod Secrets: │
        │  - VPS_SSH_KEY      │   │  - VPS_SSH_KEY      │
        │  - VPS_USER         │   │  - VPS_USER         │
        │  - VPS_HOST (dev)   │   │  - VPS_HOST (prod)  │
        │  - VPS_PORT         │   │  - VPS_PORT         │
        │  - VPS_APP_DIR      │   │  - VPS_APP_DIR      │
        └─────────────────────┘   └─────────────────────┘
                    │                         │
                    ▼                         ▼
        ┌─────────────────────┐   ┌─────────────────────┐
        │   SSH Connection    │   │   SSH Connection    │
        │   to DEV Server     │   │   to PROD Server    │
        └─────────────────────┘   └─────────────────────┘
                    │                         │
                    ▼                         ▼
        ┌─────────────────────┐   ┌─────────────────────┐
        │  Deploy to:         │   │  Deploy to:         │
        │  dev.ucasaapp...    │   │  ucasaapp.test...   │
        │  Test Server ✅     │   │  Live Server ✅     │
        └─────────────────────┘   └─────────────────────┘
```

---

## 🌿 Branch Strategy / Branch ಕಾರ್ಯತಂತ್ರ

```
┌──────────────────────────────────────────────────────────┐
│                    BRANCH WORKFLOW                        │
└──────────────────────────────────────────────────────────┘

    main branch (Production - Live Site)
    ═══════════════════════════════════════════════
    │
    │ ← git merge dev (after testing)
    │
    dev branch (Development - Test Site)
    ───────────────────────────────────────────────
    │
    │ ← daily development work
    │
    feature branches (Local testing)
    ···········································


WORKFLOW:
1. Create feature → Commit to dev
2. Push dev → Deploy to test server
3. Test thoroughly on test server
4. If OK → Merge dev to main
5. Push main → Deploy to live server
```

---

## 🎯 Environment Mapping / Environment ಮ್ಯಾಪಿಂಗ್

### Development Environment (Test Server)

```
┌──────────────────────────────────────────────────┐
│         DEVELOPMENT ENVIRONMENT                   │
├──────────────────────────────────────────────────┤
│  Branch:       dev                                │
│  Domain:       dev.ucasaapp.testatozas.in        │
│  User:         testuser (or same user)           │
│  Directory:    /home/.../dev-ucasaapp            │
│  Port:         5455 (or different)               │
│  PM2 Name:     ucasaapp-dev                      │
│  Database:     collision-alarm-dev               │
│  Purpose:      Testing new features              │
└──────────────────────────────────────────────────┘
```

### Production Environment (Live Server)

```
┌──────────────────────────────────────────────────┐
│         PRODUCTION ENVIRONMENT                    │
├──────────────────────────────────────────────────┤
│  Branch:       main                               │
│  Domain:       ucasaapp.testatozas.in            │
│  User:         testatozas-ucasaapp               │
│  Directory:    /home/.../ucasaapp.testatozas.in  │
│  Port:         5454                              │
│  PM2 Name:     ucasaapp                          │
│  Database:     collision-alarm                   │
│  Purpose:      Live production site              │
└──────────────────────────────────────────────────┘
```

---

## 🔐 Secrets Configuration / Secrets Setup

### In GitHub: Settings → Environments

```
┌─────────────────────────────────────────────────────────┐
│               ENVIRONMENT: development                   │
├─────────────────────────────────────────────────────────┤
│  VPS_SSH_KEY:    [Dev Server SSH Private Key]          │
│  VPS_USER:       testuser                               │
│  VPS_HOST:       dev.ucasaapp.testatozas.in            │
│  VPS_PORT:       22                                     │
│  VPS_APP_DIR:    /home/testuser/dev-ucasaapp           │
├─────────────────────────────────────────────────────────┤
│  Protection:     ✓ Only dev branch can deploy          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│               ENVIRONMENT: production                    │
├─────────────────────────────────────────────────────────┤
│  VPS_SSH_KEY:    [Production Server SSH Private Key]   │
│  VPS_USER:       testatozas-ucasaapp                    │
│  VPS_HOST:       ucasaapp.testatozas.in                │
│  VPS_PORT:       22                                     │
│  VPS_APP_DIR:    /home/.../ucasaapp.testatozas.in      │
├─────────────────────────────────────────────────────────┤
│  Protection:     ✓ Only main branch can deploy         │
│                  ✓ Require approval (recommended)       │
│                  ✓ Wait timer: 5 min (optional)        │
└─────────────────────────────────────────────────────────┘
```

---

## 📋 Deployment Commands / Deploy ಮಾಡುವ Commands

### Deploy to Development (Test Server)

```bash
# Switch to dev branch
git checkout dev

# Make your changes
# ... edit files ...

# Commit and push
git add .
git commit -m "Testing: new feature XYZ"
git push origin dev

# ✅ Automatically deploys to TEST server
# Visit: dev.ucasaapp.testatozas.in
```

### Deploy to Production (Live Server)

```bash
# Switch to main branch
git checkout main

# Merge tested changes from dev
git merge dev

# Push to trigger production deployment
git push origin main

# ✅ Automatically deploys to LIVE server
# (May require approval if configured)
# Visit: ucasaapp.testatozas.in
```

---

## 🧪 Testing Workflow / ಪರೀಕ್ಷಣಾ Flow

### Step-by-Step Testing Process:

```
1. LOCAL DEVELOPMENT
   └─> Code new feature on local machine
   └─> Test locally (npm start)

2. DEPLOY TO DEV
   └─> git push origin dev
   └─> Triggers GitHub Actions
   └─> Deploys to TEST server

3. TEST ON DEV SERVER
   └─> Visit: dev.ucasaapp.testatozas.in
   └─> Test all functionality
   └─> Check for bugs
   └─> Get user feedback

4. FIX ISSUES (if any)
   └─> Make fixes
   └─> Push to dev again
   └─> Re-test

5. READY FOR PRODUCTION
   └─> git checkout main
   └─> git merge dev
   └─> git push origin main

6. PRODUCTION DEPLOYMENT
   └─> GitHub Actions triggers
   └─> (Wait for approval if enabled)
   └─> Deploys to LIVE server

7. VERIFY PRODUCTION
   └─> Visit: ucasaapp.testatozas.in
   └─> Quick smoke test
   └─> Monitor for issues
```

---

## ⚠️ Important Notes / ಮುಖ್ಯ ಸೂಚನೆಗಳು

### 🚨 NEVER Deploy Directly to Production Without Testing!

```
❌ BAD WORKFLOW:
Local → main branch → Production
(Risky! No testing!)

✅ GOOD WORKFLOW:
Local → dev branch → Test Server → (test thoroughly) 
     → main branch → Production Server
(Safe! Tested before going live!)
```

### 🔒 Security Checklist:

```
✓ Use different SSH keys for dev and production
✓ Don't share secrets between environments
✓ Enable approval for production deployments
✓ Use different databases for dev and production
✓ Test user authentication separately
✓ Backup production before major updates
```

---

## 📊 GitHub Actions Logs / Logs ಅನ್ನು ನೋಡುವುದು

### Where to see deployment status:

```
https://github.com/YOUR_USERNAME/vehiclecollision/actions
```

**What you'll see:**

```
┌─────────────────────────────────────────┐
│  ✅ Deploy Frontend (dev branch)        │
│  Environment: development               │
│  Branch: dev                            │
│  Duration: 2m 34s                       │
│  Deployed to: dev.ucasaapp...          │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  ✅ Deploy Backend (main branch)        │
│  Environment: production                │
│  Branch: main                           │
│  Duration: 3m 12s                       │
│  Deployed to: ucasaapp.testatozas.in   │
└─────────────────────────────────────────┘
```

---

## 🛠️ PM2 Configuration / PM2 Setup

### Development Server:

```bash
# SSH to dev server
ssh testuser@dev.ucasaapp.testatozas.in

# Start with different name
pm2 start index.js --name ucasaapp-dev
pm2 save

# Check status
pm2 list
```

### Production Server:

```bash
# SSH to production server
ssh testatozas-ucasaapp@ucasaapp.testatozas.in

# Start production app
pm2 start index.js --name ucasaapp
pm2 save

# Check status
pm2 list
```

**Expected PM2 Output:**
```
┌─────┬──────────────┬─────────┬─────────┬──────────┐
│ id  │ name         │ mode    │ status  │ port     │
├─────┼──────────────┼─────────┼─────────┼──────────┤
│ 0   │ ucasaapp-dev │ fork    │ online  │ 5455     │
│ 1   │ ucasaapp     │ fork    │ online  │ 5454     │
└─────┴──────────────┴─────────┴─────────┴──────────┘
```

---

## 🎯 Quick Commands Reference / ತ್ವರಿತ Commands

### Git Commands:

```bash
# Check current branch
git branch

# Switch to dev
git checkout dev

# Switch to main
git checkout main

# See uncommitted changes
git status

# Merge dev into main
git checkout main
git merge dev

# See deployment history
git log --oneline
```

### Server Commands:

```bash
# Check running processes
pm2 list

# View logs
pm2 logs ucasaapp        # Production
pm2 logs ucasaapp-dev    # Development

# Restart
pm2 restart ucasaapp     # Production
pm2 restart ucasaapp-dev # Development

# Stop
pm2 stop ucasaapp        # Production
pm2 stop ucasaapp-dev    # Development
```

---

## ✅ Setup Checklist / ಸೆಟಪ್ ಪರಿಶೀಲನೆ

### GitHub Configuration:
- [ ] Created `development` environment in GitHub
- [ ] Added all 5 secrets to development environment
- [ ] Created `production` environment in GitHub
- [ ] Added all 5 secrets to production environment
- [ ] Set branch restrictions (dev → development, main → production)
- [ ] Enabled required reviewers for production (optional)

### Server Configuration:
- [ ] Development server accessible
- [ ] Production server accessible
- [ ] Different SSH keys generated (or same if same server)
- [ ] PM2 installed on both servers
- [ ] Node.js installed on both servers
- [ ] App directories created on both servers

### Testing:
- [ ] Pushed to dev → deploys to development server ✅
- [ ] Pushed to main → deploys to production server ✅
- [ ] Both apps running on different ports/domains ✅
- [ ] No conflicts between environments ✅

---

## 🎉 Success Indicators / ಯಶಸ್ಸಿನ ಸೂಚಕಗಳು

### You'll know it's working when:

```
✅ Push to dev → Test site updates automatically
✅ Push to main → Live site updates (after approval)
✅ Both sites running independently
✅ No downtime during deployments
✅ Clear separation between test and production
✅ GitHub Actions shows correct environment name
✅ Deployment logs show correct server details
```

---

**Ready to set up?** Follow the detailed steps in `GITHUB_ENVIRONMENTS_SETUP.md`! 🚀

