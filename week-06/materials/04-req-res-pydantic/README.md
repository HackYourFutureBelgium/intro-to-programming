# 📦 Request & Response with Pydantic Models

In FastAPI, **Pydantic models** are the heart of data validation and serialization.
They ensure that your request bodies and responses are **well-structured, clean, and type-safe** — with minimal code.

---

## 🚀 Why Use Pydantic Models?

- 🔹 Auto-validate incoming JSON
- 🔹 Define clear API schemas
- 🔹 Auto-generate OpenAPI docs
- 🔹 Return clean, structured responses

---

## 🧠 Core Concepts

### 📥 Defining Request Models

Use `pydantic.BaseModel` to define the **expected structure** of incoming data:

```python
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    price: float
    is_available: bool = True
```

- ✅ Validates fields and types
- ✅ Sets default values
- ✅ Automatically used in Swagger docs

---

### 📤 Using Request Model in POST

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float

@app.post("/items")
def create_item(item: Item):
    return {"message": "Item received", "item": item}
```

✅ FastAPI parses the JSON and converts it into an `Item` object
✅ Invalid inputs return detailed errors automatically

---

### 📬 Customizing the Response Model

You can define what the **response** should look like using `response_model`.

```python
class ItemResponse(BaseModel):
    name: str
    price: float

@app.post("/items", response_model=ItemResponse)
def create_item(item: Item):
    return item
```

✅ Filters out extra fields
✅ Produces clean, controlled API output

---

## 🧪 Bonus: Add Extra Validation

```python
from pydantic import BaseModel, Field

class Product(BaseModel):
    name: str = Field(..., min_length=3)
    quantity: int = Field(..., gt=0, description="Must be greater than zero")
```

✅ Validates `name` is at least 3 characters
✅ `quantity` must be > 0
✅ Shows in Swagger UI automatically

---

## ⚠️ Common Mistakes

- ❌ Forgetting to inherit from `BaseModel`
- ❌ Using raw dicts instead of Pydantic models
- ❌ Returning un validated data without a `response_model`

---

## 📚 Best Practices

| Do This                               | Avoid This                     |
| ------------------------------------- | ------------------------------ |
| Use `BaseModel` for request/response  | Using untyped dictionaries     |
| Validate data at entry                | Handling validation manually   |
| Use `response_model` for clean output | Returning raw internal objects |
| Use `Field()` for rich validation     | Relying only on basic types    |

---

## 🧰 Example: Full Request + Response

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class UserIn(BaseModel):
    username: str
    password: str

class UserOut(BaseModel):
    username: str

@app.post("/users", response_model=UserOut)
def create_user(user: UserIn):
    return {"username": user.username}
```

✅ Only `username` is returned — `password` is hidden
✅ Secure and explicit data flow

---

## 📘 Learn More

- 🔗 [FastAPI – Request Body + Pydantic](https://fastapi.tiangolo.com/tutorial/body/)
- 🔗 [FastAPI – Response Model](https://fastapi.tiangolo.com/tutorial/response-model/)
- 🎥 [FastAPI Tutorial on Pydantic Models](https://www.youtube.com/watch?v=0sOvCWFmrtA&t=2070s)

---

## 🚀 Summary

| Concept          | Description                        |
| ---------------- | ---------------------------------- |
| `BaseModel`      | Defines data structure             |
| Request Body     | Automatically parsed and validated |
| `response_model` | Filters output based on model      |
| `Field()`        | Add metadata and rules to fields   |
