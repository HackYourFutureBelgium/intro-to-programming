# 🌐 GitHub Collaboration Guide

GitHub is a web-based platform built on top of Git that helps developers collaborate, review code, and manage projects. This guide will walk you through the most common collaboration workflows using Git and GitHub.

---

## 🔁 Workflow Overview

1. **Clone** a repository
2. **Create a branch** for your feature
3. **Commit** and **push** your changes
4. **Open a Pull Request (PR)**
5. **Collaborate & review**
6. **Merge** the PR into the `main` branch
7. **Pull** the latest changes

---

## 📥 1. Cloning a Repository

To contribute to a project on GitHub, first clone the repository to your local machine.

### 🔹 Example

```bash
git clone https://github.com/username/repo-name.git
cd repo-name
```

> This creates a local copy of the remote GitHub repository.

---

## 🌿 2. Creating and Switching Branches

Use branches to work on features or fixes without affecting the `main` branch.

### 🔹 Create a new branch and switch to it

```bash
git checkout -b feature/new-feature
```

> Branch names should be short, lowercase, and use hyphens (`-`) for readability.

---

## 💾 3. Committing and Pushing Changes

After editing files:

### 🔹 Stage and commit your changes

```bash
git add .
git commit -m "Add new feature: description"
```

### 🔹 Push your branch to GitHub

```bash
git push origin feature/new-feature
```

> `origin` refers to the GitHub repo. This command creates the remote branch if it doesn’t exist.

---

## 🔃 4. Opening a Pull Request (PR)

Go to your repository on GitHub. You’ll see an option to “Compare & pull request.”

### 📝 Pull Request Checklist

- ✅ Use a clear title and description
- ✅ Mention related issues (e.g. `Closes #3`)
- ✅ Request reviews if working in a team

> A PR allows others to review and discuss changes before merging into `main`.

---

## 👥 5. Collaborating on Pull Requests

Others can:

- Comment on your code
- Suggest or request changes
- Approve the PR

Once approved, you or a maintainer can **merge** the branch into `main`.

---

## 📤 6. Pulling Latest Changes

Always keep your local repository up to date.

### 🔹 From the `main` branch

```bash
git checkout main
git pull origin main
```

### 🔹 If you're on a feature branch and want to update it with the latest `main`

```bash
git fetch origin
git rebase origin/main
# or
git merge origin/main
```

> Use `merge` for safety in teams. Use `rebase` for a cleaner history if you're working solo.

---

## 🧹 Optional: Deleting a Branch After Merge

Once merged, clean up old branches:

### 🔹 Locally

```bash
git branch -d feature/new-feature
```

### 🔹 Remotely

```bash
git push origin --delete feature/new-feature
```

---

## 📌 Summary of Key Commands

| Action                 | Command                                |
| ---------------------- | -------------------------------------- |
| Clone repo             | `git clone URL`                        |
| Create & switch branch | `git checkout -b branch-name`          |
| Stage changes          | `git add .`                            |
| Commit changes         | `git commit -m "Message"`              |
| Push branch            | `git push origin branch-name`          |
| Pull latest changes    | `git pull origin main`                 |
| Merge main into branch | `git merge origin/main`                |
| Delete local branch    | `git branch -d branch-name`            |
| Delete remote branch   | `git push origin --delete branch-name` |

---

## 🛠️ Pro Tips

- **Pull regularly** to avoid conflicts.
- Use **descriptive branch names** like `feature/login-form` or `bugfix/404-page`.
- Before pushing, always run:

  ```bash
  git status
  git log --oneline
  ```

- Use **draft PRs** if you're not ready for review yet.

---
