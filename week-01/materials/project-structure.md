# 🗂️ Project Structure Best Practices

## 🔧 General Principles

- ✅ Organize by **feature/domain**, not by type (especially in React).
- ✅ Use **hyphen** for folders, **camelCase** for files (optional but consistent).
- ✅ Keep root folder clean — only essentials (src, public, vite.config.js, etc.).
- ✅ Group reusable code like utils, constants, and services.

---

## 📁 Vanilla JavaScript (with Vite)

### 🔸 Suggested Structure

```bash
vanilla-js-app/
├── public/                 # Static files (e.g., images, favicon)
│   └── index.html
├── src/
│   ├── assets/             # Images, fonts, icons, etc.
│   ├── css/                # Global or module styles
│   ├── js/                 # JavaScript modules
│   │   ├── main.js         # Entry point
│   │   ├── api.js          # API calls (if any)
│   │   ├── utils.js        # Utility functions
│   │   └── dom.js          # DOM manipulation logic
│   └── data/               # JSON, constants, dummy data
├── .gitignore
├── vite.config.js
├── package.json
└── README.md
```

### 📝 Notes

- Split logic into small, manageable modules (e.g., `utils.js`, `dom.js`).
- Keep `main.js` as the entry point to initialize the app.
- Avoid mixing logic and DOM manipulation in a single file.

---

## ⚛️ React (with Vite)

### 🔸 Suggested Structure (Modular/Feature-Based)

```bash
react-vite-app/
├── public/                 # Static files (served as-is)
│   └── favicon.svg
├── src/
│   ├── assets/             # Images, icons, fonts
│   ├── components/         # Reusable UI components
│   │   ├── Button.jsx
│   │   └── Header.jsx
│   ├── features/           # Feature-based folders
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   ├── authSlice.js
│   │   │   └── authAPI.js
│   │   └── dashboard/
│   ├── hooks/              # Custom hooks
│   ├── pages/              # Route-level components
│   ├── routes/             # Central route configuration
│   ├── services/           # API service logic (Axios, fetch, etc.)
│   ├── store/              # Redux or context setup
│   ├── styles/             # Global CSS, Tailwind config, etc.
│   ├── utils/              # Reusable helper functions
│   ├── App.jsx
│   └── main.jsx            # Vite entry point
├── .env
├── .gitignore
├── vite.config.js
├── package.json
└── README.md
```
