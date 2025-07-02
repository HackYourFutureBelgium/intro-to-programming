# 🧠 React Hooks & `useState`

**Hooks** are special functions in React that let you “hook into” React features from **function components** — things like state, side effects, and context.

---

## 📌 What Are React Hooks?

Hooks are functions that:

- Start with the word `use`
- Let you tap into React features (like state or lifecycle logic)
- Are used **only inside function components**

### 🔧 Commonly Used Hooks

| Hook         | Purpose                               |
| ------------ | ------------------------------------- |
| `useState`   | Adds local state to components        |
| `useEffect`  | Runs code after render (side effects) |
| `useContext` | Shares data between components        |

---

## ⚠️ Rules of Hooks

1. ✅ **Only call Hooks at the top level**  
   Don’t use hooks inside loops, conditions, or nested functions.

2. ✅ **Only call Hooks from React function components or custom Hooks**  
   Never call Hooks from regular functions or class components.

React enforces these rules to make state and effects predictable and consistent.

---

## 🎯 `useState` – The Most Common Hook

The `useState` hook lets you create and manage state in a function component.

### 🔍 Syntax

```jsx
const [state, setState] = useState(initialValue);
```

- `state` is the current value
- `setState` is the function to update it

---

### ✏️ Example: Counter App

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

Every time the button is clicked, React re-renders the component with the new `count` value.

---

## 📚 Learn More

- 🔗 [React Docs – State: useState](https://react.dev/reference/react/useState)
- 🎥 [useState Hook Explained Simply](https://www.youtube.com/watch?v=O6P86uwfdR0)
- 🎥 [What are React Hooks?](https://www.youtube.com/watch?v=f687hBjwFcM)

---

## 🚀 Summary

| Concept      | Explanation                                |
| ------------ | ------------------------------------------ |
| `useState()` | Adds reactive state to function components |
| Hooks        | Functions that hook into React features    |
| Rules        | Top-level only, React components only      |
