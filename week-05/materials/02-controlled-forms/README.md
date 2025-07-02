# ✍️ Controlled Forms

A **controlled form** in React is a form where the input values are **controlled by React state**.  
This gives you full control over what's typed, submitted, or validated.

---

## 🧠 What Is a Controlled Component?

In a **controlled component**, form data is handled by the component’s state:

```jsx
const [name, setName] = useState('');
```

The value of an input is **linked to state**, and updated via `onChange`.

---

## ⚙️ Basic Example: Controlled Input

```jsx
import { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

> 🔒 The `<input>` is “controlled” because its value comes from React state.

---

## 🔁 Why Use Controlled Forms?

- ✅ Real-time validation
- ✅ Dynamic input handling
- ✅ Easier debugging
- ✅ Full control over UI behavior

---

## 🧪 Example: Controlled Form With Multiple Inputs

```jsx
function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

---

## ⚠️ Common Mistakes to Avoid

- ❌ Forgetting to call `e.preventDefault()` in `onSubmit`
- ❌ Using uncontrolled inputs with controlled ones (mixed behavior)
- ❌ Not updating state properly in `onChange`

---

## 📚 Best Practices

| Do This                                | Avoid This                        |
| -------------------------------------- | --------------------------------- |
| Use `useState()` for each input        | Mixing refs + state unnecessarily |
| Use `name` attributes for dynamic keys | Hardcoding every field by hand    |
| Prevent default behavior in forms      | Letting form reload the page      |
| Validate inputs before submit          | Waiting until backend errors      |

---

## 🧩 Related Concepts

- 🔗 [Uncontrolled components](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
- 🎥 [Form Handling](https://www.youtube.com/watch?v=7Vo_VCcWupQ)

---

## 🚀 Summary

| Concept            | Description                                      |
| ------------------ | ------------------------------------------------ |
| Controlled input   | Value comes from React state                     |
| `onChange` handler | Updates the state when input changes             |
| `onSubmit` handler | Controls what happens when the form is submitted |
| Multiple inputs    | Use object state and dynamic `name` keys         |
