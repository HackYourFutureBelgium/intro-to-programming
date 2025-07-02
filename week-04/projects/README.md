# ⚛️ React Beginner Projects

## 🛠️ Setup Instructions (with Vite)

**Vite** is a fast and modern build tool for React projects.

### 📦 1. Create a New React App

```bash
npm create vite@latest
cd my-react-app
npm install
```

### ▶️ 2. Start the Development Server

```bash
npm run dev
```

Your app will open at `http://localhost:5173`

---

## 🔗 Project List

### 1. ✅ Counter App

A basic counter with buttons to increment and decrement a number.

**Concepts:**

- `useState` for tracking count
- Conditional styling based on count

---

### 2. ✅ Light/Dark Theme Toggle

A toggle switch to switch between light and dark modes using CSS classes.

**Concepts:**

- `useState` for theme toggle
- `useEffect` to apply theme on document body

---

### 3. ✅ Todo List

Create, display, and remove tasks in a todo list.

**Concepts:**

- `useState` for list of todos
- `useEffect` to store/retrieve todos from localStorage

---

### 4. ✅ Random Quote Generator

Click a button to fetch a random quote from an API.

**Concepts:**

- `useState` for quote data
- `useEffect` for API fetching

---

## 📚 Learning Goals

- Get comfortable writing **function components**
- Practice **state updates** using `useState`
- Use `useEffect` for **timers**, **APIs**, and **local storage**
- Understand **component rendering** and **side effects**

---

## 🧱 Bonus Tip: Folder Structure

```bash
my-react-app/
├── public/
├── apis/
├── src/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── vite.config.js
```

Organize each project or component in its own folder for scalability.

---

## 🎯 Ready to Build?

Start with one project, then try to combine them. You’ll be amazed how much you can do with just two hooks: `useState` and `useEffect`.

Happy coding! ⚛️🚀
