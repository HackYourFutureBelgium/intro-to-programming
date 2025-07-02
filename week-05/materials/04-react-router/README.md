# 🧭 React Router DOM

`react-router-dom` is the **standard routing library** for React web applications.  
It lets you build **single-page apps (SPAs)** with multiple pages, routes, and navigation — all without reloading the browser.

---

## 🚀 Installation

First, install `react-router-dom` via npm or yarn:

```bash
npm install react-router-dom
# or
yarn add react-router-dom
```

Make sure you’re using **React v18+** and **react-router-dom v6+**.

---

## 📦 Basic Project Structure

```txt
src/
├── App.jsx
├── main.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── NotFound.jsx
└── components/
    └── Navbar.jsx
```

---

## 🔧 Initial Setup

Wrap your app with the `BrowserRouter` in `main.jsx`:

```jsx
// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

## 🛤️ Define Routes

Use `Routes` and `Route` in `App.jsx`:

```jsx
// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
```

---

## 🧭 Navigation

Use `Link` or `NavLink` instead of `<a>` tags to avoid full page reloads:

```jsx
// components/Navbar.jsx
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink>
    </nav>
  );
}
```

> 🔸 `NavLink` adds an `active` class when the route is matched

---

## 📄 Route Components

```jsx
// pages/Home.jsx
function Home() {
  return <h1>🏠 Welcome to the Home Page</h1>;
}

export default Home;

// pages/About.jsx
function About() {
  return <h1>ℹ️ About This App</h1>;
}

export default About;

// pages/NotFound.jsx
function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

export default NotFound;
```

---

## 🔄 Route Parameters

Dynamic routes using `:param` syntax:

```jsx
<Route path="/user/:id" element={<UserProfile />} />
```

Access the parameter using `useParams()`:

```jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}
```

---

## 🔁 Redirects

Use `Navigate` for programmatic redirects:

```jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isLoggedIn }) {
  return isLoggedIn ? <Dashboard /> : <Navigate to="/login" />;
}
```

---

## 🧪 Nested Routes (Optional)

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

Use `<Outlet />` in the parent component (`Dashboard`) to render child routes.

---

## 📚 Learn More

- 📘 [React Router Docs](https://reactrouter.com/home)
- 🎥 [React Router Crash Course](https://www.youtube.com/watch?v=UWYOC8g5N_0&list=PLC3y8-rFHvwjkxt8TOteFdT_YmzwpBlrG)

---

## ✅ Best Practices

| Do This                             | Avoid This                         |
| ----------------------------------- | ---------------------------------- |
| Use `Link`/`NavLink` for navigation | Using `<a>` tags                   |
| Use `useParams`, `useNavigate`      | Manually parsing `window.location` |
| Structure pages/components cleanly  | Putting all routes in one file     |
| Handle `*` path for 404 pages       | Letting bad URLs crash the app     |

---

## 🏁 Summary

| Feature            | Usage                         |
| ------------------ | ----------------------------- |
| `BrowserRouter`    | Wraps the app for routing     |
| `Routes` + `Route` | Defines each route/page       |
| `Link` / `NavLink` | Navigation without reloading  |
| `useParams()`      | Access dynamic route segments |
| `Navigate`         | Redirect to another route     |
| `Outlet`           | Render nested routes          |

React Router DOM gives your app **navigation, structure, and page control** — all within a modern, SPA-friendly API.

---
