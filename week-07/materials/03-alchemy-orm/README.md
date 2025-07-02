# 🧱 Intro to Databases with SQLAlchemy ORM in FastAPI

SQLAlchemy is the most popular ORM (Object Relational Mapper) in Python. With **FastAPI**, SQLAlchemy provides a clean, powerful way to define your database models, handle relationships, and perform CRUD operations — all in Pythonic style.

---

## 🎯 What You’ll Learn

- How to use **SQLAlchemy ORM** with FastAPI
- Define and manage **database models** (classes → tables)
- Perform **CRUD operations** using Python objects
- Use **SQLite** or **PostgreSQL** with minimal configuration

---

## 📦 Requirements

```bash
pip install fastapi uvicorn sqlalchemy
# For PostgreSQL support
pip install psycopg2-binary
```

---

## 🏗️ Project Structure

```txt
project/
├── main.py
├── models.py
├── database.py
├── crud.py
```

---

## ⚙️ 1. Database Connection

```python
# database.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = "sqlite:///./test.db"
# For PostgreSQL:
# DATABASE_URL = "postgresql://user:password@localhost/dbname"

engine = create_engine(
    DATABASE_URL, connect_args={"check_same_thread": False} if "sqlite" in DATABASE_URL else {}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
```

---

## 🧱 2. Define Models

```python
# models.py
from sqlalchemy import Column, Integer, String
from database import Base

class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
```

---

## ⚙️ 3. CRUD Operations

```python
# crud.py
from sqlalchemy.orm import Session
from models import Item

def get_items(db: Session):
    return db.query(Item).all()

def create_item(db: Session, item_data):
    item = Item(**item_data.dict())
    db.add(item)
    db.commit()
    db.refresh(item)
    return item
```

---

## 🚀 4. FastAPI Endpoints

```python
# main.py
from fastapi import FastAPI, Depends
from pydantic import BaseModel
from database import SessionLocal, engine
from models import Base
import crud

Base.metadata.create_all(bind=engine)

app = FastAPI()

class ItemSchema(BaseModel):
    name: str
    description: str

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/items")
def read_items(db=Depends(get_db)):
    return crud.get_items(db)

@app.post("/items")
def create_item(item: ItemSchema, db=Depends(get_db)):
    return crud.create_item(db, item)
```

---

## ✅ Summary

| Component       | Description                           |
| --------------- | ------------------------------------- |
| `Base`          | SQLAlchemy base for models            |
| `SessionLocal`  | Creates DB session per request        |
| `Item` class    | Maps to a table (`items`)             |
| `@app.get/post` | Exposes endpoints to interact with DB |

---

## 🔍 ORM vs Raw SQL

| Feature        | ORM (SQLAlchemy)      | Raw SQL (`sqlite3`, `psycopg2`) |
| -------------- | --------------------- | ------------------------------- |
| Abstraction    | High                  | Low                             |
| Learning Curve | Moderate              | Low for small tasks             |
| Safety         | Safer (auto escaping) | Manual escaping needed          |
| Portability    | Easier to switch DBs  | Requires query changes          |

---

## 📘 Learn More

- 🔗 [SQLAlchemy ORM Docs](https://docs.sqlalchemy.org/en/20/orm/)
- 🔗 [FastAPI + SQLAlchemy Tutorial](https://fastapi.tiangolo.com/tutorial/sql-databases/)
- 🎥 [Video Tutorial](https://www.youtube.com/watch?v=0sOvCWFmrtA)

---

## 🧪 Test Locally

- Run the backend:

```bash
uvicorn main:app --reload
```

- Open Swagger docs:
  [http://localhost:8000/docs](http://localhost:8000/docs)

- Test GET and POST endpoints for `/items`

---

## 🔧 Optional: Switch to PostgreSQL

```python
# database.py
DATABASE_URL = "postgresql://username:password@localhost/dbname"
```

Then install:

```bash
pip install psycopg2-binary
```

---
