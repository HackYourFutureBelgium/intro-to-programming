# 🚀 Full Stack Projects with React & FastAPI

This repository contains three full-stack projects built with **React** for the frontend and **FastAPI** for the backend, demonstrating how to integrate different databases: **SQLite**, **PostgreSQL**, and **MongoDB**.

Each project includes:

- React frontend (with React Router DOM & Axios)
- FastAPI backend (with authentication and authorization)
- Separate database integration
- Clean folder structure
- RESTful API implementation

---

## 📁 Project Structure

```txt
/project-name/
├── backend/
│   ├── app/
│   ├── database/
│   ├── models/
│   ├── routes/
│   ├── auth/
│   └── main.py
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.jsx
├── README.md
└── .env
```

---

## 🧩 Project 1: Task Manager (SQLite + SQLAlchemy)

**Description**: A simple task manager where users can register, log in, and manage their own to-do list.

- **Frontend**: React with login, register, task list pages
- **Backend**: FastAPI with SQLAlchemy and SQLite
- **Auth**: JWT tokens with hashed passwords using `bcrypt`
- **DB**: Lightweight SQLite

- [Source code](https://github.com/intro-to-programming-2025-1/task-manager)

```bash
# Backend
cd task-manager/backend
uvicorn main:app --reload

# Frontend
cd ../frontend
npm install
npm run dev
```

---

## 🧩 Project 2: Blog Platform (PostgreSQL + SQLAlchemy)

**Description**: A basic blog platform where users can create accounts, write blog posts, and edit/delete their own content.

- **Frontend**: React with routing for blog posts, login/register
- **Backend**: FastAPI with PostgreSQL and SQLAlchemy
- **Auth**: JWT & hashed passwords
- **DB**: PostgreSQL (psycopg2 + SQLAlchemy ORM)

- [Source code](https://github.com/intro-to-programming-2025-1/blog)

```bash
# Setup PostgreSQL (via Docker or local)
# Then run backend
cd blog/backend
uvicorn main:app --reload

# Frontend
cd ../frontend
npm install
npm run dev
```

---

## 🧩 Project 3: Books (MongoDB + Motor)

**Description**: A library management system where users can register, search, and save books they read.

- **Frontend**: React app for browsing and managing books
- **Backend**: FastAPI with `motor` for MongoDB
- **Auth**: JWT token-based
- **DB**: MongoDB

- [Source code](https://github.com/intro-to-programming-2025-1/books)

```bash
# Start MongoDB locally or with Docker
cd books/backend
uvicorn main:app --reload

# Frontend
cd ../frontend
npm install
npm run dev
```

---

## ✅ Common Features

- 🔐 User Registration & Login
- 🛡️ JWT Authentication
- ⚡ FastAPI with modular routes
- 🧠 React with clean component structure
- 🌐 Axios for API communication
- 🌍 Cross-Origin Resource Sharing enabled

---

## 🛠️ Tech Stack

| Frontend         | Backend             | Database   |
| ---------------- | ------------------- | ---------- |
| React            | FastAPI             | SQLite     |
| React Router DOM | SQLAlchemy / Motor  | PostgreSQL |
| Axios            | JWT, OAuth2, Bcrypt | MongoDB    |

---
