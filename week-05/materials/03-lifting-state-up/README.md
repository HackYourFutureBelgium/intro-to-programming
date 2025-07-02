# ⬆️ Lifting State Up

In React, **"lifting state up"** means moving shared state to the **nearest common parent component**.  
This allows **sibling components** to access and update the same state.

---

## 🤔 Why Lift State?

Sometimes, **two or more components need to share the same data**.

Instead of duplicating state, we **lift it up** to their **common ancestor**, so:

- Data flows from parent → child
- Children update state via props (functions)

---

## 📦 Simple Example

Let’s say two components need to keep the same value in sync.

```jsx
function Parent() {
  const [text, setText] = useState('');

  return (
    <>
      <InputBox value={text} onChange={setText} />
      <Preview text={text} />
    </>
  );
}

function InputBox({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

function Preview({ text }) {
  return <p>You typed: {text}</p>;
}
```

> 🔁 `InputBox` updates the value, and `Preview` reflects it — **both connected through the parent.**

---

## 🔄 How It Works

| Step | Description                                     |
| ---- | ----------------------------------------------- |
| 1️⃣   | Create state in the **common parent**           |
| 2️⃣   | Pass the value + setter down as **props**       |
| 3️⃣   | Children **read** or **update** via those props |

---

## 🧪 Another Example: Two Counters Share the Same Value

```jsx
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter label="Counter A" count={count} setCount={setCount} />
      <Counter label="Counter B" count={count} setCount={setCount} />
    </>
  );
}

function Counter({ label, count, setCount }) {
  return (
    <div>
      <h3>
        {label}: {count}
      </h3>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

✅ Both components **share the same count**
✅ Updating one updates both

---

## ⚠️ When You Should Lift State

- ✅ Two sibling components need to **stay in sync**
- ✅ A child needs to **update data** in another component
- ✅ Shared logic should live in a **centralized place**

---

## 📚 Best Practices

| ✅ Do This                      | 🚫 Avoid This                                   |
| ------------------------------- | ----------------------------------------------- |
| Keep shared state in the parent | Duplicate state in children                     |
| Pass handlers as props          | Try to sync with `useEffect()`                  |
| Keep child components stateless | Let both child and parent manage the same state |

---

## 🧩 Related Concepts

- 🔗 [Prop drilling](https://react.dev/learn/passing-props-to-a-component)
- 🎥 [Lifting state up](https://www.youtube.com/watch?v=UaeQ-LWOFDg)

---

## 🚀 Summary

| Concept           | Description                                    |
| ----------------- | ---------------------------------------------- |
| Lifting state     | Move shared state to the nearest common parent |
| Props             | Pass value + setters to children via props     |
| Sync logic        | Ensures consistency across related components  |
| Simpler data flow | Keeps data flow top-down and easier to manage  |
