# ✨ What is JSX?

**JSX** stands for **JavaScript XML**. It’s a syntax extension for JavaScript used with React to **describe what the UI should look like**.

With JSX, you can write HTML-like code **directly inside your JavaScript files**, making your components more readable and expressive.

---

## 🧠 Why Use JSX?

- 🧱 **Declarative**: JSX lets you write UI structure in a way that feels like HTML
- 🔗 **Tight Integration**: Seamlessly mixes logic and layout (JS + UI in one place)
- 🧹 **Cleaner Code**: Avoids clunky DOM manipulation like `document.createElement()`
- 🧠 **Developer Experience**: Syntax is familiar and easy to learn for web developers

---

## 📘 Example

```jsx
const App = () => {
  const name = 'Sam';
  return <h1>Hello, {name}!</h1>;
};
```

✅ This JSX compiles into JavaScript using `React.createElement()` behind the scenes.

---

## ⚠️ Note

JSX isn't valid JavaScript by default. It needs to be **compiled** (typically by tools like **Babel**) before it runs in the browser. That’s why React apps use build tools like **Vite** or **Create React App**.

---

## 📚 Learn More

- 🔗 [Official JSX Docs](https://react.dev/learn/writing-markup-with-jsx)
- 🎥 [JSX Explained in 5 Minutes](https://www.youtube.com/watch?v=7fPXI_MnBOY)

---

## 🚀 Summary

JSX makes writing React components **faster**, **more intuitive**, and **closer to how you think about building UIs**.

If you know HTML and JavaScript — you're already halfway to mastering JSX!

---
