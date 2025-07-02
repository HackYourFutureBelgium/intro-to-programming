# ⚙️ CRUD App

This project demonstrates how to build a **CRUD (Create, Read, Update, Delete)** application using:

- 🔧 **FastAPI** for the backend
- 🧱 **SQLAlchemy ORM** for the database (SQLite or PostgreSQL)
- 💻 **React** for the frontend

---

## 🗂️ Project Structure

```txt
project/
├── backend/
│   ├── main.py
│   ├── models.py
│   ├── database.py
│   ├── crud.py
│   └── schemas.py
├── frontend/
│   └── (React app files)

```

---

## ⚙️ Backend (FastAPI + SQLAlchemy)

### 📦 Requirements

```bash
pip install fastapi uvicorn sqlalchemy
```

For PostgreSQL (optional):

```bash
pip install psycopg2-binary
```

---

### 1. Database Setup

```python
# database.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = "sqlite:///./test.db"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
```

---

### 2. Model & Schema

```python
# models.py
from sqlalchemy import Column, Integer, String
from .database import Base

class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
```

```python
# schemas.py
from pydantic import BaseModel

class ItemBase(BaseModel):
    name: str
    description: str

class ItemCreate(ItemBase):
    pass

class Item(ItemBase):
    id: int

    class Config:
        orm_mode = True
```

---

### 3. CRUD Operations

```python
# crud.py
from sqlalchemy.orm import Session
from . import models, schemas

def get_items(db: Session):
    return db.query(models.Item).all()

def get_item(db: Session, item_id: int):
    return db.query(models.Item).filter(models.Item.id == item_id).first()

def create_item(db: Session, item: schemas.ItemCreate):
    db_item = models.Item(**item.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

def update_item(db: Session, item_id: int, item: schemas.ItemCreate):
    db_item = db.query(models.Item).filter(models.Item.id == item_id).first()
    db_item.name = item.name
    db_item.description = item.description
    db.commit()
    return db_item

def delete_item(db: Session, item_id: int):
    db_item = db.query(models.Item).filter(models.Item.id == item_id).first()
    db.delete(db_item)
    db.commit()
    return {"message": "Deleted"}
```

---

### 4. API Routes

```python
# main.py
from fastapi import FastAPI, Depends, HTTPException
from . import models, schemas, crud
from .database import engine, SessionLocal
from sqlalchemy.orm import Session

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/items/", response_model=schemas.Item)
def create(item: schemas.ItemCreate, db: Session = Depends(get_db)):
    return crud.create_item(db, item)

@app.get("/items/", response_model=list[schemas.Item])
def read_all(db: Session = Depends(get_db)):
    return crud.get_items(db)

@app.get("/items/{item_id}", response_model=schemas.Item)
def read(item_id: int, db: Session = Depends(get_db)):
    db_item = crud.get_item(db, item_id)
    if not db_item:
        raise HTTPException(status_code=404, detail="Item not found")
    return db_item

@app.put("/items/{item_id}", response_model=schemas.Item)
def update(item_id: int, item: schemas.ItemCreate, db: Session = Depends(get_db)):
    return crud.update_item(db, item_id, item)

@app.delete("/items/{item_id}")
def delete(item_id: int, db: Session = Depends(get_db)):
    return crud.delete_item(db, item_id)
```

## 🧪 Test Locally

- Start FastAPI:

```bash
cd backend
uvicorn main:app --reload
```

- Start React frontend:

```bash
cd frontend
npm run dev
```

---

## ✅ Summary

| Layer     | Tool                   | Description                          |
| --------- | ---------------------- | ------------------------------------ |
| Frontend  | React + Axios          | UI and API calls                     |
| Backend   | FastAPI                | RESTful API server                   |
| Database  | SQLAlchemy ORM         | Define models and perform CRUD in DB |
| DB Engine | SQLite (or PostgreSQL) | Stores persistent data               |

---

## 📘 Learn More

- 🔗 [FastAPI SQLAlchemy Docs](https://fastapi.tiangolo.com/tutorial/sql-databases/)
- 🔗 [SQLAlchemy ORM Guide](https://docs.sqlalchemy.org/en/20/orm/)

---
