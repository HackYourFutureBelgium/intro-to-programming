# 🔧 Git Installation

## 🍏 macOS

### ✅ Steps

1. Press `Command (⌘)` + `Space`, type `Terminal`, and press `Enter`.
2. In the Terminal, type:

   ```bash
   git --version
   ```

   - If you see a version like `git version 2.x.x`, Git is already installed.
   - If not, you’ll be prompted to install Xcode Command Line Tools (Git is included), or you can install Git via **Homebrew**.

### 💡 Install Git with Homebrew

If you prefer using Homebrew:

1. Install Homebrew by pasting this into Terminal:

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. After installation, run:

   ```bash
   brew install git
   ```

> You can verify installation by running `git --version` again.

---

## 🪟 Windows

1. Click the **Search** icon (or press `Win + S`) and type `cmd` to open the Command Prompt.
2. Type:

   ```bash
   git --version
   ```

   - If you see a version number, Git is already installed.
   - If not, proceed to install it manually.

### 💡 Install Git for Windows

1. Visit [gitforwindows.org](https://gitforwindows.org/)
2. Download the installer and run it.
3. Follow the setup instructions, and make sure:

   - "Git from the command line" is selected.
   - The default options are usually fine for most users.

---

## 🐧 Linux (Ubuntu/Debian-based)

1. Open your Terminal.
2. Check if Git is already installed:

   ```bash
   git --version
   ```

   - If not installed, proceed with the steps below.

### 💡 Install Git via APT

```bash
sudo apt update
sudo apt install git
```

## ✅ Post-Installation (All Platforms)

After installing Git, configure your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

You can verify settings with:

```bash
git config --list
```
