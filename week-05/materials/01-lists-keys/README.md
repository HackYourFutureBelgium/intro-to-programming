# 📋 Rendering Lists & Using Keys

In React, rendering a **list of items** is a very common task — and doing it right helps performance and avoids rendering bugs. The secret ingredient? **`.map()`** and the **`key` prop**.

---

## 🔢 Why Lists Matter

Lists appear everywhere:

- To-do items
- Search results
- Product cards
- Navigation links

Rendering them dynamically keeps your UI flexible and data-driven.

---

## 🧠 Core Concepts

### ✅ `.map()` to Render Lists

React doesn't have a built-in loop like `for`.  
Instead, use `.map()` to transform an array into **JSX elements**.

```jsx
const fruits = ['🍎 Apple', '🍌 Banana', '🍊 Orange'];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}
```

> 🔸 Problem: React will warn you that **each child needs a unique `key` prop**.

---

## 🔑 What is the `key` Prop?

The `key` is a **special prop** React uses to identify which items in a list have changed, been added, or removed.

```jsx
<ul>
  {fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ))}
</ul>
```

- 🔹 **Good key**: Unique and stable (like `id`)
- 🔹 **Avoid**: Using `index` if the list might change or reorder

---

## 📦 Example: Rendering a List of Users

```jsx
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

✅ Each item has a **unique `key`** → no warning
✅ React can re-render efficiently when data changes

---

## ⚠️ Common Mistakes

- ❌ Missing the `key` prop → React shows a warning
- ❌ Using `index` as key in lists that reorder → buggy UI
- ❌ Using non-unique values as keys → duplicated or skipped elements

---

## 📚 Best Practices

| Do This                      | Avoid This                    |
| ---------------------------- | ----------------------------- |
| Use `.map()` to render lists | Using `for` loops in JSX      |
| Provide a unique `key` prop  | Omitting the `key`            |
| Use stable IDs if possible   | Using `Math.random()` as key  |
| Keep list rendering pure     | Mutating arrays during render |

---

## 🧪 Bonus: Conditional rendering

```jsx
{
  items.length === 0 ? (
    <p>No items found.</p>
  ) : (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

---

## 📘 Learn More

- 🔗 [React Docs – Rendering Lists](https://react.dev/learn/rendering-lists)
- 🎥 [React Lists & Keys Tutorial](https://www.youtube.com/watch?v=0sasRxl35_8)

---

## 🚀 Summary

| Concept     | Description                                |
| ----------- | ------------------------------------------ |
| `.map()`    | Used to loop through arrays and render JSX |
| `key`       | Helps React identify items in a list       |
| Good Keys   | Unique, stable values like IDs             |
| Avoid Index | Don't use `index` as key in dynamic lists  |
