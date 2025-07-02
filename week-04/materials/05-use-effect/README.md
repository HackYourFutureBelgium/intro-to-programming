# 🔄 React Hook: `useEffect`

The `useEffect` hook lets you run **side effects** in your React components. Side effects are anything that **affects something outside the component**, such as:

- Fetching data from an API
- Updating the document title
- Setting up subscriptions or timers

---

## 🧠 What Is a Side Effect?

In React, rendering should be pure — it should calculate and return JSX **without changing anything else**.  
But often, we need to do things like:

- Fetch data from a server
- Log messages
- Update local storage
  These are **side effects** — and that’s what `useEffect` is for.

---

## ⚙️ Basic Syntax

```jsx
useEffect(() => {
  // Code to run after render
}, [dependencies]);
```

- The first argument is a function (the effect).
- The second argument is a **dependency array** — it controls **when** the effect runs.

---

## 🔁 Example 1: Run Once on Mount

```jsx
import { useEffect } from 'react';

function Welcome() {
  useEffect(() => {
    console.log('Component mounted!');
  }, []); // empty array → run only once

  return <h1>Hello!</h1>;
}
```

---

## 🔄 Example 2: Run When a Value Changes

```jsx
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]); // runs whenever count changes

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
```

---

## 🧹 Example 3: Cleanup on Unmount

```jsx
useEffect(() => {
  const timer = setInterval(() => console.log('tick'), 1000);

  return () => {
    clearInterval(timer); // cleanup when component unmounts
  };
}, []);
```

This prevents memory leaks when using timers, subscriptions, etc.

---

## ⚠️ Common Mistakes to Avoid

- ❌ Forgetting the dependency array — your effect runs on **every render**
- ❌ Using state-updating functions _inside_ the effect without proper dependencies

---

## 📚 Learn More

- 🔗 [React Docs – Effects: useEffect](https://react.dev/reference/react/useEffect)
- 🎥 [useEffect Hook](https://www.youtube.com/watch?v=bYFYF2GnMy8)

---

## 🚀 Summary

| Concept         | Description                                         |
| --------------- | --------------------------------------------------- |
| `useEffect()`   | Run side effects in function components             |
| `[]` dependency | Run once on mount                                   |
| `[value]`       | Run when the value changes                          |
| Cleanup         | Return a function to clean up (like `clearTimeout`) |

The `useEffect` hook makes function components **reactive and lifecycle-aware** — giving you the full power of modern React.
