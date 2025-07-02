# 🌐 Creating Endpoints: GET & POST in FastAPI

In FastAPI, creating API endpoints is **simple, clean, and powerful**. Whether you're fetching data with `GET` or
submitting data with `POST`, the syntax is intuitive and fully documented — automatically!

---

## 🚀 Why Endpoints Matter

APIs exist to expose **endpoints** that clients (like frontend apps or mobile apps) interact with.

- `GET`: Retrieve data
- `POST`: Submit data
- FastAPI makes both easy — with built-in validation and docs

---

## 🧠 Core Concepts

### 📥 GET Endpoint

Use `@app.get()` to define a route that **returns data** to the client.

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the API!"}
```

✅ Use for read-only operations
✅ Automatically visible at `/docs`

---

### 📤 POST Endpoint

Use `@app.post()` to **accept data from the client**, like a form or JSON body.

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

✅ FastAPI auto-validates input using `Pydantic`
✅ Client sends data as JSON, you receive it as Python object

---

## 🧪 Bonus: GET with Path and Query Parameters

```python
@app.get("/users/{user_id}")
def get_user(user_id: int, active: bool = True):
    return {"user_id": user_id, "active": active}
```

- `/users/5?active=false` → `user_id = 5`, `active = False`
- Path params: `user_id`
- Query params: `active`

---

## ⚠️ Common Mistakes

- ❌ Missing or misusing decorators (`@app.get`, `@app.post`)
- ❌ Not using `BaseModel` for POST body → can't validate input
- ❌ Forgetting to test endpoints with tools like **curl**, **Postman**, or **Swagger UI**

---

## 📚 Best Practices

| Do This                            | Avoid This                                               |
| ---------------------------------- | -------------------------------------------------------- |
| Use `@app.get()` and `@app.post()` | Mixing up methods (e.g. using `GET` for form submission) |
| Use `BaseModel` for request bodies | Accepting raw `dict` types                               |
| Test with Swagger at `/docs`       | Blindly assuming your route works                        |
| Use descriptive route names        | Vague or duplicated endpoints                            |

---

## 🔧 Testing Endpoints with Swagger UI

FastAPI comes with Swagger docs at:

🔗 [http://localhost:8000/docs](http://localhost:8000/docs)

- Test `GET` and `POST` easily
- Input validation and response preview
- Zero setup required

---

## 📘 Learn More

- 🔗 [FastAPI – Path Operations](https://fastapi.tiangolo.com/tutorial/path-operation-configuration/?h=path+operation)
- 🔗 [FastAPI – Request Body](https://fastapi.tiangolo.com/tutorial/body/)
- 🎥 [FastAPI Tutorial – GET & POST](https://www.youtube.com/watch?v=0sOvCWFmrtA&t=1670s)

---

## 🚀 Summary

| Method      | Use Case             | Decorator      | Input Format  |
| ----------- | -------------------- | -------------- | ------------- |
| `GET`       | Read data            | `@app.get()`   | Path/query    |
| `POST`      | Submit/send data     | `@app.post()`  | JSON body     |
| `BaseModel` | Validates POST input | Used with POST | JSON → Python |
