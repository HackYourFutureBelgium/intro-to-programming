# 🟢 Node.js & npm Installation Guide

## 📦 What Are Node.js and npm?

- **Node.js** is a JavaScript runtime that allows you to run JavaScript outside the browser—primarily used to build server-side applications.
- **npm** (Node Package Manager) is a tool that comes with Node.js and is used to install and manage packages (libraries and tools) for your project.

---

## 🍏 macOS Installation

### ✅ 1. Using Homebrew (Recommended)

> Make sure [Homebrew](https://brew.sh/) is installed first.

#### 📥 Install Node.js + npm

```bash
brew install node
```

#### ✅ Verify Installation

```bash
node -v   # Should return a version like v20.x.x
npm -v    # Should return a version like 10.x.x
```

---

## 🪟 Windows Installation

### ✅ 1. Download the Installer

- Visit the official Node.js site: [https://nodejs.org](https://nodejs.org)
- Click on the **LTS** version (recommended for most users).
- Run the downloaded installer and follow the instructions (you can leave all options as default).

### ✅ 2. Verify Installation

Open **Command Prompt** (`cmd`) and run:

```bash
node -v
npm -v
```

---

## 🐧 Linux Installation (Ubuntu/Debian)

### ✅ 1. Update Your System

```bash
sudo apt update
```

### ✅ 2. Install Node.js and npm

```bash
sudo apt install nodejs npm
```

> This installs both `node` and `npm`, but it might be an older version.

### 🧠 Optional: Install the Latest Version with NodeSource

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

### ✅ 3. Verify Installation

```bash
node -v
npm -v
```

---

## 🧪 Test Installation

Create a simple JavaScript file:

```bash
echo "console.log('Node is working!');" > test.js
node test.js
```

Expected output:

```bash
Node is working!
```

---

## 🛠️ Updating npm

To update `npm` to the latest version:

```bash
npm install -g npm
```

---

## 🧰 Tips

- Use `nvm` (Node Version Manager) if you want to install and switch between multiple Node versions. [View nvm guide](https://github.com/nvm-sh/nvm).
- Always install Node.js via official channels or a trusted version manager.

---
