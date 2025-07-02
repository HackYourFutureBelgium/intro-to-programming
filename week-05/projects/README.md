# 🎧📚🎬 Projects: Movies, Books, and Music

This repository includes 3 modern React apps that demonstrate how to:

- 🔍 Build search interfaces with public APIs
- ⚛️ Manage state using `useState`
- 🔁 Handle side effects using `useEffect`
- 🧭 Navigate with `react-router-dom`
- ✅ Work with real data using free APIs (no API key required)

## 🔍 Project

### 1. 🎬 Movie Search App

- **Hook usage**: `useState`, `useEffect`
- **API**: [Dummy JSON Movies](`https://api.themoviedb.org/3/search/movie?api_key=&query=${query}`)
- **Features**:
  - Search movies by title
  - Display posters and details
  - Loading and empty-state UI

---

### 2. 📚 Book Finder App

- **Hook usage**: `useState`, `useEffect`
- **API**: [Google Books API](`https://openlibrary.org/search.json?title=${query}`)
- **Features**:
  - Search books by keyword
  - Show title, author, and preview link
  - Responsive grid layout

---

### 3. 🎧 Music Search App

- **Hook usage**: `useState`, `useEffect`
- **API**: [Deezer Public API](https://api.deezer.com/search?q=eminem)
- **Features**:
  - Search for tracks or artists
  - Show track name, artist, preview (30s clip)
  - Play audio directly in the app

---

## 🧠 Key Concepts

| Concept        | Used In                            |
| -------------- | ---------------------------------- |
| `useState`     | All apps (input, results, loading) |
| `useEffect`    | All apps (data fetching)           |
| `fetch` API    | All apps (external API requests)   |
| `react-router` | Optional for SPA integration       |

---
