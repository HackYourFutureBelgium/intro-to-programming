# 🌀 Git: Introduction to Version Control

## 🔍 What is Git?

**Git** is the most widely-used **distributed version control system** for tracking changes in source code during software development. It helps developers collaborate, manage changes, and maintain code quality over time.

> Think of Git as a **time machine** for your codebase.

![Git Over Time](./assets/change-files.png)

---

## 🚀 Key Features of Git

- **Local-first**: Git stores your entire project and its history **locally**, so you can work offline.
- **Efficient change tracking**: It records line-by-line changes, making it easy to review or roll back.
- **Seamless collaboration**: Git enables multiple developers to contribute to the same codebase without conflict.

![Git](./assets/git.png)

---

## 📦 What is a Git Repository?

A **Git repository** (or **repo**) is a project directory with a special hidden folder called `.git`. This folder stores metadata, commit history, branches, and more.

> A Git repo = your project + its full timeline of changes.

---

## 🔄 The Three States in Git

Git tracks your files through three distinct states:

| State     | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| Modified  | You’ve made changes to a file, but haven’t staged it yet.                 |
| Staged    | You’ve marked changes to be included in the next commit.                  |
| Committed | Changes are safely stored in the Git database as a snapshot of your work. |

![Git States](./assets/git-states.png)

---

## 🌿 Git Branching

Branches allow parallel development. You can work on features or bug fixes in **isolated branches**, then merge them into `main` when ready.

![Git Branches](./assets/branches.png)

> **Pro Tip**: Always create a new branch for a feature or fix. Avoid committing directly to `main`.

---

## 🔗 Git Merging

**Merging** integrates changes from one branch into another. For example:

```bash
git checkout main
git merge feature-branch
```

> After merging, the `main` branch will include all changes from `feature-branch`.

---

## 🔧 Common Git Commands

### 🛠️ Configuration (First-Time Setup)

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global core.editor "code --wait"
```

**Line-ending configuration:**

- **macOS/Linux**:

  ```bash
  git config --global core.autocrlf input
  ```

- **Windows**:

  ```bash
  git config --global core.autocrlf true
  ```

**View/edit global config:**

```bash
git config --global -e
```

---

### 🔰 Starting a New Git Project

**Initialize a Git repository:**

```bash
git init
```

**Check repo status:**

```bash
git status
```

---

### 📥 Staging & Committing Changes

**Stage a specific file:**

```bash
git add <file-name>
```

**Stage everything:**

```bash
git add .
```

**Unstage a file:**

```bash
git reset <file-name>
```

**Commit changes:**

```bash
git commit -m "Describe your change clearly"
```

> **Tip**: Use short, meaningful commit messages like `"Fix login redirect bug"`.

---

### 💼 Stashing Temporary Work

**Save work-in-progress:**

```bash
git stash
```

**Restore stashed changes:**

```bash
git stash apply
```

---

### 🌱 Working with Branches

**Create a new branch:**

```bash
git branch <branch-name>
```

**Switch to a branch:**

```bash
git checkout <branch-name>
```

**Create and switch in one command:**

```bash
git checkout -b <branch-name>
```

---

### 🧹 Undoing Changes

**Revert a specific commit:**

```bash
git revert <commit-hash>
```

**Reset changes in working directory:**

```bash
git reset
```

> Be cautious with `reset`—it alters history. Use `revert` in collaborative environments.

---

### 🔍 Inspecting History and Diffs

**View commit history:**

```bash
git log
```

**Quick, one-line log:**

```bash
git log --oneline
```

**Compare file changes:**

```bash
git diff
```

---

### 🧬 Rebase (Advanced)

**Move a branch onto another base:**

```bash
git rebase <branch-name>
```

> **Use rebase for a cleaner history**, but only on your own branches—never rebase shared branches unless you’re sure.

---

## ✅ Summary Cheat Sheet

| Action                | Command                         |
| --------------------- | ------------------------------- |
| Initialize repository | `git init`                      |
| Stage changes         | `git add .` or `git add <file>` |
| Commit changes        | `git commit -m "message"`       |
| Check status          | `git status`                    |
| View history          | `git log`, `git log --oneline`  |
| Create/switch branch  | `git checkout -b <branch>`      |
| Merge branches        | `git merge <branch>`            |
| Stash work            | `git stash` / `git stash apply` |
| Undo commit (safe)    | `git revert <hash>`             |
| Compare changes       | `git diff`                      |

---
