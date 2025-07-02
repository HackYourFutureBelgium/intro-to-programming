# ⚡ Installing & Setting Up FastAPI

FastAPI is a **modern, fast (high-performance)** web framework for building APIs with Python.
It’s easy to get started, and you’ll love how intuitive it is — especially if you know Python type hints.

---

## 🚀 Why FastAPI?

- 🔹 Blazing fast (based on Starlette + Pydantic)
- 🔹 Easy to write and read
- 🔹 Auto-generated docs with Swagger UI
- 🔹 Great for building APIs fast

---

## 🔒 Set Up a Virtual Environment

Before installing anything, create a virtual environment to isolate your project dependencies:

```bash
python -m venv venv
```

Then activate it:

- 🔹 **Windows**:

  ```bash
  venv\Scripts\activate
  ```

- 🔹 **macOS/Linux**:

  ```bash
  source venv/bin/activate
  ```

> 🧠 A virtual environment keeps your FastAPI project clean and self-contained.

---

## 📦 Installing FastAPI & Uvicorn

You need two packages:

- `fastapi`: The framework itself
- `uvicorn`: The ASGI server to run your app

```bash
pip install fastapi uvicorn
```

> 🔸 Once installed, create a `requirements.txt` file using `pip freeze > requirements.txt` to track your dependencies.

---

## 🛠️ Create a Basic FastAPI App

Let’s make a simple "Hello World" API:

**`main.py`**

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}
```

---

## ▶️ Running the Server

Use `uvicorn` to serve your app:

```bash
uvicorn main:app --reload
```

- `main`: Name of your Python file (without `.py`)
- `app`: The FastAPI instance
- `--reload`: Enables auto-reload on file changes (great for development)

🌐 Go to [http://localhost:8000](http://localhost:8000)
📘 Explore docs at [http://localhost:8000/docs](http://localhost:8000/docs)

---

## ⚠️ Common Mistakes

- ❌ Forgetting `--reload` in dev → no hot reload
- ❌ Wrong filename/module in `uvicorn main:app`
- ❌ Forgetting to install both `fastapi` and `uvicorn`

---

## 📚 Best Practices

| Do This                         | Avoid This                       |
| ------------------------------- | -------------------------------- |
| Use `uvicorn main:app --reload` | Running Python script directly   |
| Keep routes in separate files   | Putting everything in one file   |
| Use type hints in functions     | Skipping types (less clear APIs) |
| Explore auto docs at `/docs`    | Ignoring what Swagger gives you  |

---

## 🧪 Bonus: Another Route

```python
@app.get("/users/{user_id}")
def get_user(user_id: int):
    return {"user_id": user_id}
```

✅ Dynamic URL parameters
✅ Type-checked `user_id: int`
✅ Automatically documented in Swagger UI

---

## 📘 Learn More

- 🔗 [FastAPI Docs – Getting Started](https://fastapi.tiangolo.com/tutorial/)
- 🎥 [FastAPI Crash Course](https://www.youtube.com/watch?v=7t2alSnE2-I&t=6s)

---

## 🚀 Summary

| Concept    | Description                              |
| ---------- | ---------------------------------------- |
| FastAPI    | Fast Python framework for APIs           |
| Uvicorn    | ASGI server to run FastAPI apps          |
| `@app.get` | Route decorator for GET requests         |
| `/docs`    | Auto-generated Swagger UI                |
| `--reload` | Enables hot-reloading during development |
| `venv`     | Virtual environment for isolated setup   |
