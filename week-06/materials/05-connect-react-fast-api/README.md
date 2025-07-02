# 🔗 Connecting React to FastAPI

FastAPI handles your backend logic and APIs. React manages your frontend UI. Connecting the two allows your app to be **full-stack**, modern, and lightning-fast.

---

## 🚀 Why Connect React & FastAPI?

- 🔹 React handles the UI (frontend)
- 🔹 FastAPI handles data & logic (backend)
- 🔹 Combined = a clean, component-based full-stack app

---

## 🧠 Core Concepts

### 🛠 Folder Structure (Suggested)

```txt
project/
├── backend/        ← FastAPI project
│   └── main.py
├── frontend/       ← React app (created with Vite or CRA)
│   └── src/
```

You can keep both apps in one repo for easy management during development.

---

## ⚙️ 1. Run FastAPI Backend

Inside the `backend/` folder:

```bash
uvicorn main:app --reload
```

Your FastAPI app will be available at:
🌐 `http://localhost:8000`

Make sure CORS is enabled if React is on a different port (like `3000` or `5173`).

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # or 3000 if using CRA
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## ⚛️ 2. Setup React Frontend

Inside the `frontend/` folder:

```bash
npm install
npm run dev
```

Your React app runs on:
🌐 `http://localhost:5173` (Vite)

---

## 🔄 3. Fetch Data from FastAPI

### Example: React Component

```jsx
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return <h1>{message}</h1>;
}

export default App;
```

✅ React fetches data from FastAPI on load
✅ Works with `GET`, `POST`, and more

---

## 🧪 Bonus: Sending POST Request

### React Code

```jsx
fetch('http://localhost:8000/items', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Apple', price: 1.5 })
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### FastAPI Code

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float

@app.post("/items")
def create_item(item: Item):
    return {"received": item}
```

---

## ⚠️ Common Mistakes

- ❌ CORS errors → fix with `CORSMiddleware`
- ❌ Wrong API URL → double-check `localhost:8000` vs frontend port
- ❌ Forgetting to `JSON.stringify()` body in `POST`

---

## 📚 Best Practices

| Do This                              | Avoid This                          |
| ------------------------------------ | ----------------------------------- |
| Enable CORS in FastAPI               | Ignoring CORS → blocked requests    |
| Use `.env` for API URLs in React     | Hardcoding URLs everywhere          |
| Organize frontend/backend separately | Mixing logic into one messy folder  |
| Use `fetch` or Axios for API calls   | Writing APIs directly in React code |

---

## 📘 Learn More

- 🔗 [FastAPI Docs – CORS](https://fastapi.tiangolo.com/tutorial/cors/)
- 🔗 [React Docs – Fetching Data](https://react.dev/learn/sending-data-to-server)
- 🎥 [YouTube – Connect React to FastAPI](https://www.youtube.com/watch?v=PWG7NlUDVaA)

---

## 🚀 Summary

| Tool    | Role                             |
| ------- | -------------------------------- |
| FastAPI | Backend APIs                     |
| React   | Frontend UI                      |
| CORS    | Enables cross-origin requests    |
| Fetch   | Sends requests from React        |
| Uvicorn | Runs FastAPI on `localhost:8000` |

---

Let me know if you want to add **Docker integration**, **JWT auth**, or **uploading files** from React to FastAPI!
