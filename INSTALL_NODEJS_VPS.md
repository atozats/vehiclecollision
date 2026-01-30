# Install Node.js and npm on VPS
## VPS ನಲ್ಲಿ Node.js ಮತ್ತು npm Install ಮಾಡುವುದು

---

## 🔴 Error

```
npm is not installed on the VPS. Please install Node.js and npm.
Error: Process completed with exit code 1.
```

---

## ✅ Solution: Install Node.js on VPS

### Step 1: SSH to Your VPS

```bash
ssh testatozas-ucasaapp@ucasaapp.testatozas.in
```

---

### Step 2: Check Current Node.js Version (if any)

```bash
node --version
npm --version
```

**If both show "command not found", proceed to installation.**

---

### Step 3: Install Node.js (Method 1: Using NodeSource - Recommended)

**For Ubuntu/Debian:**

```bash
# Update system packages
sudo apt update

# Install curl (if not installed)
sudo apt install -y curl

# Install Node.js 20.x LTS (recommended)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version
npm --version
```

**Expected output:**
```
v20.x.x
10.x.x
```

---

### Step 4: Install Node.js (Method 2: Using NVM - Alternative)

**If Method 1 doesn't work, use NVM:**

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload shell
source ~/.bashrc

# Install Node.js 20
nvm install 20
nvm use 20
nvm alias default 20

# Verify
node --version
npm --version
```

---

### Step 5: Install PM2 (Process Manager)

**PM2 is recommended for running Node.js apps in production:**

```bash
# Install PM2 globally
sudo npm install -g pm2

# Verify installation
pm2 --version

# Setup PM2 to start on system boot
pm2 startup
# Follow the command it shows (usually: sudo env PATH=... pm2 startup systemd -u username --hp /home/username)
```

---

### Step 6: Verify Installation

**Run these commands to verify everything is installed:**

```bash
# Check Node.js
node --version
# Should show: v20.x.x or similar

# Check npm
npm --version
# Should show: 10.x.x or similar

# Check PM2
pm2 --version
# Should show: 5.x.x or similar

# Check where they're installed
which node
which npm
which pm2
```

---

### Step 7: Test Your Setup

**Create a test file:**

```bash
cd /home/testatozas-ucasaapp/htdocs/ucasaapp.testatozas.in

# Create test file
cat > test-node.js << 'EOF'
console.log('Node.js is working!');
console.log('Version:', process.version);
EOF

# Run test
node test-node.js

# Expected output:
# Node.js is working!
# Version: v20.x.x

# Clean up
rm test-node.js
```

---

## 🔧 Quick Installation Script

**Copy-paste this entire block:**

```bash
# Update system
sudo apt update

# Install Node.js 20.x LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
sudo npm install -g pm2

# Verify
node --version
npm --version
pm2 --version
```

---

## 📋 Installation Checklist

After installation, verify:

- [ ] `node --version` shows v20.x.x or similar
- [ ] `npm --version` shows 10.x.x or similar
- [ ] `pm2 --version` shows version number
- [ ] Can run `node test-node.js` successfully
- [ ] PM2 startup configured (if using PM2)

---

## 🚀 After Installation: Deploy Again

**Once Node.js is installed:**

1. **Go back to GitHub Actions:**
   - Your deployment should automatically retry
   - Or push a new commit to trigger deployment

2. **Or manually deploy:**
   ```bash
   # On your local machine
   cd c:\001work\vehiclecollision
   git commit --allow-empty -m "Trigger deployment after Node.js install"
   git push origin dev
   ```

3. **Check deployment:**
   - Go to: https://github.com/YOUR_USERNAME/vehiclecollision/actions
   - Should now succeed!

---

## 🐛 Troubleshooting

### Issue 1: "curl: command not found"

**Solution:**
```bash
sudo apt update
sudo apt install -y curl
```

### Issue 2: "Permission denied" errors

**Solution:**
- Use `sudo` for installation commands
- Check user permissions: `whoami`
- May need to add user to sudoers (contact VPS admin)

### Issue 3: Node.js version is old

**Solution:**
```bash
# Remove old version
sudo apt remove nodejs npm

# Install new version (follow Step 3 above)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

### Issue 4: npm command not found after Node.js install

**Solution:**
```bash
# npm should come with Node.js, but if missing:
sudo apt install -y npm

# Or reinstall Node.js
sudo apt remove nodejs npm
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

### Issue 5: PM2 not found after installation

**Solution:**
```bash
# Install PM2 globally
sudo npm install -g pm2

# If still not found, check PATH
echo $PATH

# May need to reload shell
source ~/.bashrc
```

---

## 📝 Complete Installation Example

**Full installation session:**

```bash
# SSH to VPS
ssh testatozas-ucasaapp@ucasaapp.testatozas.in

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify
node --version
npm --version

# Install PM2
sudo npm install -g pm2

# Verify PM2
pm2 --version

# Setup PM2 startup
pm2 startup
# Copy and run the command it shows

# Test
cd /home/testatozas-ucasaapp/htdocs/ucasaapp.testatozas.in
node --version
```

---

## ✅ Verification Commands

**Run these to confirm everything works:**

```bash
# Check versions
node --version    # Should be v20.x.x
npm --version     # Should be 10.x.x
pm2 --version     # Should be 5.x.x

# Check installation paths
which node        # Usually: /usr/bin/node
which npm         # Usually: /usr/bin/npm
which pm2         # Usually: /usr/local/bin/pm2

# Test Node.js
node -e "console.log('Node.js works!')"
```

---

## 🎯 Next Steps

After installing Node.js:

1. ✅ **Verify installation** (see above)
2. ✅ **Install PM2** (for process management)
3. ✅ **Trigger new deployment** (push to GitHub)
4. ✅ **Check deployment logs** (should succeed now)
5. ✅ **Verify app is running** (`pm2 list`)

---

## 💡 Pro Tips

1. **Use Node.js 20.x LTS** - Most stable and recommended
2. **Install PM2** - Keeps your app running after VPS reboot
3. **Set up PM2 startup** - Auto-starts app on boot
4. **Check logs regularly** - `pm2 logs ucasaapp`

---

## 🆘 Still Having Issues?

**Check these:**

1. **VPS OS version:**
   ```bash
   cat /etc/os-release
   ```

2. **Available disk space:**
   ```bash
   df -h
   ```

3. **User permissions:**
   ```bash
   whoami
   groups
   ```

4. **Contact VPS provider** if installation fails

---

**After installing Node.js, your deployment should work!** 🚀

Run the installation commands on your VPS, then trigger a new deployment from GitHub.

