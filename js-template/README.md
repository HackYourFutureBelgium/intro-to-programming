# ⚙️ JavaScript Project Template (Vite + Prettier + ESLint + Jest)

This is a modern, scalable JavaScript project template built with [Vite](https://vitejs.dev/).  
It comes pre-configured with essential tools for rapid development, clean code, and testing.

---

## 📁 Folder Structure

```bash
├── planning/ → Notes, wireframes, feature breakdowns, ideas
├── public/ → Static assets (images, icons, etc.)
├── src/ → JavaScript source code (entry: main.js)
├── styles/ → Global and modular CSS/SCSS files
├── index.html → Entry HTML file (used by Vite)
├── .eslintrc → ESLint configuration
├── .prettierrc → Prettier configuration
├── vite.config.js → Vite configuration

```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

---

## 🧪 Testing

This template uses [Jest](https://jestjs.io/) for unit testing.

```bash
npm run test
```

- ✅ Code coverage reports included
- 📁 Place your test files in `src/__tests__/` or next to the modules

---

## 🧼 Code Quality

- **Lint your code** using ESLint:

  ```bash
  npm run lint
  ```

- **Format your code** using Prettier:

  ```bash
  npm run format
  ```

---

## 📦 Available Scripts

| Script    | Description                         |
| --------- | ----------------------------------- |
| `dev`     | Start Vite dev server               |
| `build`   | Build for production                |
| `preview` | Preview built production site       |
| `format`  | Format code using Prettier          |
| `lint`    | Run ESLint on `.js` files           |
| `test`    | Run unit tests with coverage (Jest) |

---

## 💡 Features

- ⚡ **Vite** for fast development and hot module reloading
- 💅 **Prettier** for consistent code formatting
- 🚨 **ESLint** for catching issues early
- 🧪 **Jest** for unit testing with coverage
- 📁 Organized structure: `src`, `styles`, `public`, `planning`

---

## 📌 Tips

- Place assets like images and fonts in `public/` (they will be served as-is).
- Place planning notes, sketches, or tasks in `planning/`.
- Link your main JS and CSS in `index.html` via Vite:

  ```html
  <script type="module" src="/src/main.js"></script>
  <link rel="stylesheet" href="/styles/main.css" />
  ```

---

## 📄 License

This template is open-source and free to use for personal or commercial projects.

---

Happy hacking! 🚀
