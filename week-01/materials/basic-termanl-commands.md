# 💻 Terminal Basics: Most Popular Bash/Zsh Commands

Whether you’re using **Bash** (default in many Linux distros) or **Zsh** (default on macOS), mastering a few terminal commands can greatly boost your productivity.

This guide covers essential shell commands for file management, navigation, system info, searching, and more.

---

## 📁 File and Directory Management

### `ls` – List Directory Contents

```bash
ls         # List files and folders
ls -la     # List all, with details (hidden files too)
```

### `cd` – Change Directory

```bash
cd folder-name     # Go into a folder
cd ..              # Go back one level
cd ~               # Go to home directory
```

### `pwd` – Print Working Directory

```bash
pwd        # Shows the current path
```

### `mkdir` – Make Directory

```bash
mkdir my-folder
```

### `touch` – Create a New File

```bash
touch file.txt
```

### `cp` – Copy Files or Folders

```bash
cp file.txt copy.txt          # Copy a file
cp -r dir1 dir2               # Copy a folder recursively
```

### `mv` – Move or Rename Files

```bash
mv old.txt new.txt            # Rename a file
mv file.txt ~/Documents       # Move file to Documents
```

### `rm` – Remove Files or Folders

```bash
rm file.txt                   # Delete a file
rm -r folder-name             # Delete a folder recursively
```

> ⚠️ **Caution**: There’s no trash/recycle bin in the terminal.

---

## 🔍 Searching and Finding

### `find` – Locate Files

```bash
find . -name "*.js"           # Find all `.js` files in current directory
```

### `grep` – Search Inside Files

```bash
grep "function" file.js       # Find lines containing "function"
grep -r "TODO" .              # Search recursively
```

---

## 🧭 Navigation and Info

### `history` – Show Command History

```bash
history                       # View previous commands
```

### `clear` – Clear Terminal Screen

```bash
clear
```

### `man` – Manual Pages (Help)

```bash
man ls                        # Show manual for `ls`
```

> Press `q` to quit the manual page.

---

## 📦 Package Managers (macOS/Linux)

### `brew` (Homebrew for macOS)

```bash
brew install node             # Install a package
brew list                     # List installed packages
```

### `apt` (Debian/Ubuntu)

```bash
sudo apt update               # Update package lists
sudo apt install git          # Install a package
```

---

## ⚙️ System Commands

### `top` or `htop` – Process Viewer

```bash
top                           # Show system processes (press `q` to quit)
```

### `whoami` – Show Current User

```bash
whoami
```

### `uname` – Show System Info

```bash
uname -a                      # All system info
```

---

## 📂 Path Shortcuts

| Shortcut | Meaning           |
| -------- | ----------------- |
| `.`      | Current directory |
| `..`     | Parent directory  |
| `~`      | Home directory    |
| `/`      | Root directory    |

---

## 🧰 Bonus Tips

- Use `Tab` to autocomplete file or folder names.
- Use `↑` and `↓` arrows to navigate command history.
- Use `Ctrl + C` to stop a running process.
- Use `&&` to chain commands:

  ```bash
  mkdir test && cd test
  ```

---

## 🧪 Practice Challenge

Try this:

```bash
mkdir playground
cd playground
touch hello.txt
echo "Hello World!" > hello.txt
cat hello.txt
```

---
