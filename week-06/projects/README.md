# 🌾 FARM(FastAPI + React + MongoDB) Stack Projects

This repository contains 5 full-stack project ideas built with the **FARM stack**:

- ⚡ **FastAPI** – Backend API (Python)
- ⚛️ **React** – Frontend UI
- 🍃 **MongoDB** – NoSQL database

These projects are designed to help you practice real-world development with **modern tools**, **clean architecture**, and **hands-on API experience**.

---

## 🧩 Projects

### 1. ✅ Task Manager App

- **Frontend**: React with `useState`, `useEffect`, form handling
- **Backend**: FastAPI CRUD routes (`/tasks`)
- **Database**: MongoDB (task collection)
- **Features**:
  - Create, read, update, delete tasks
  - Mark as complete
  - Filter by status

---

### 2. 📦 Inventory Tracker

- **Frontend**: React forms and tables for product data
- **Backend**: FastAPI routes (`/products`)
- **Database**: MongoDB (product inventory)
- **Features**:
  - Add/edit/delete products
  - Track quantity, category, and price
  - Low-stock alerts

---

### 3. 📝 Notes App

- **Frontend**: Rich text editor + list view in React
- **Backend**: FastAPI API for managing notes
- **Database**: MongoDB (notes per user)
- **Features**:
  - Create & edit markdown notes
  - Tagging and search
  - User authentication (optional)

---

### 4. 🛒 Mini E-Commerce Store

- **Frontend**: React product list, cart, and checkout
- **Backend**: FastAPI for products, users, orders
- **Database**: MongoDB with multiple collections
- **Features**:
  - Browse products
  - Add to cart
  - Place orders
  - Admin dashboard (optional)

---

### 5. 📬 Contact Book

- **Frontend**: React form UI with validation
- **Backend**: FastAPI routes (`/contacts`)
- **Database**: MongoDB (per-user contact lists)
- **Features**:
  - Add and search contacts
  - Phone number + email validation
  - Export to CSV (optional)

---

## 🧠 Key Concepts

| Concept           | Used In                        |
| ----------------- | ------------------------------ |
| FastAPI CRUD      | All projects                   |
| MongoDB models    | Task, user, note, product data |
| React state/hooks | UI, forms, and interactions    |
| Fetch API / Axios | Frontend → backend requests    |
| REST API Design   | Backend routes & structure     |

---

## 🛠 Stack Setup Tips

- Use `uvicorn` with FastAPI (`--reload` for dev)
- Connect FastAPI to MongoDB with `motor`
- Use `react-router` in multi-page React apps
- Test your API with Swagger docs at `/docs`

Here’s a **clean, scalable project structure** for a **FARM stack** app (FastAPI + React + MongoDB), designed for clarity, separation of concerns, and ease of deployment:

---

## 🧠 Project structure

```txt
farm-project/
├── backend/                # FastAPI backend
│   ├── app/
│   │   ├── api/            # All route files (e.g., users.py, items.py)
│   │   ├── core/           # Core settings, configs, middleware
│   │   ├── db/             # MongoDB connection and utilities
│   │   ├── models/         # Pydantic models (schemas)
│   │   ├── services/       # Business logic and helpers
│   │   └── main.py         # App entry point
│   └── requirements.txt    # Backend dependencies
│
├── frontend/               # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page-level components (routes)
│   │   ├── services/       # API calls (e.g., axios.js, api.js)
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json        # Frontend dependencies
│
├── .gitignore
├── README.md
└── .env                    # Shared environment variables
```

### 🔙 `/backend/`

- `main.py`: Mounts routes, sets up middleware and CORS.
- `api/`: Modular route files (`auth.py`, `items.py`, etc.).
- `models/`: Pydantic schemas for request/response validation.
- `db/`: MongoDB connection setup with `motor` or `pymongo`.
- `services/`: Business logic (e.g., user authentication, queries).
- `core/`: Central config like `settings.py`, CORS, constants.

### ⚛️ `/frontend/`

- `components/`: Reusable pieces like buttons, navbars, cards.
- `pages/`: Views mapped to routes (e.g., Home.jsx, Login.jsx).
- `services/`: API logic using `fetch` or `axios`.
- `App.jsx`: Routes and layout.
- `main.jsx`: ReactDOM render logic.

---

## 🔗 Connecting Frontend and Backend

- Use **CORS middleware** in FastAPI to allow requests from React.

- Define API base URL in frontend as an environment variable:

  ```js
  // frontend/src/services/api.js
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  ```

- And in `.env` (at root):

  ```js
  VITE_API_BASE_URL=http://localhost:8000
  ```

---

## 🧪 Development Scripts

### Start backend

```bash
cd backend
uvicorn app.main:app --reload
```

### Start frontend

```bash
cd frontend
npm run dev
```

---

## ✅ Benefits of This Structure

- Clear separation between frontend and backend
- Scales well as app grows
- Organized, modular, and test-friendly
- Easy to deploy backend and frontend separately or together

---
