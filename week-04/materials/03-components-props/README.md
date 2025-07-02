# ⚛️ Week 4: React Basics

Sure! Here's a well-structured and clear `README.md` section explaining **React components and props**, perfect for beginners or students:

---

````markdown
# 🧩 Components & Props in React

React is all about **components** — the building blocks of your user interface. Components let you split your UI into **reusable, self-contained pieces**.

---

## 📦 What is a Component?

A **component** is just a JavaScript function that returns JSX.

```jsx
function Welcome() {
  return <h1>Hello, world!</h1>;
}
```
````

You can use it like a custom HTML tag:

```jsx
<Welcome />
```

React components can be written as:

- **Function components** (most common)
- **Class components** (older style)

---

## 🎁 What Are Props?

**Props** (short for "properties") are how you **pass data into components** from a parent.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage:
<Welcome name="Alice" />;
```

✅ Now `props.name` is `"Alice"` inside the `Welcome` component.

---

## 🧠 Why Props Matter

- 📤 **Reusable Components**: Write one component, use it with different data
- 🔁 **Dynamic UIs**: Change how components render based on input
- 🔒 **One-way data flow**: Props flow from **parent → child**

---

## ✨ Modern Syntax: Destructuring Props

```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

Cleaner, shorter, and easier to read!

---

## 📚 Learn More

- 🔗 [React Docs - Components and Props](https://react.dev/learn/passing-props-to-a-component)
- 🎥 [React Props in 5 Minutes](https://www.youtube.com/watch?v=m7OWXtbiXX8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=9)

---

## 🚀 Summary

| Concept   | Meaning                                          |
| --------- | ------------------------------------------------ |
| Component | A function that returns JSX                      |
| Props     | Input to a component (like function arguments)   |
| Benefit   | Reusability, readability, separation of concerns |
