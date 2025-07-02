# 🗃️ Intro to Databases : SQLite & PostgreSQL

In this guide, you'll learn how to connect to **SQLite** and **PostgreSQL** directly using raw SQL in **FastAPI** — without using any Object-Relational Mapping (ORM) tools. This gives you full control and a deeper understanding of how databases work.

---

## 🎯 Why Raw SQL?

- 🛠️ Full control over SQL queries
- 🚫 No abstraction layer (like SQLAlchemy)
- 🧠 Great for learning how SQL works behind the scenes

---

## 🗄️ SQLite: Lightweight & Easy

SQLite is a **serverless**, **file-based** database — perfect for development and testing.

### 📦 Installing

No installation needed — Python has a built-in `sqlite3` module.

---

### 🔌 Connecting to SQLite

```python
import sqlite3

conn = sqlite3.connect("test.db")  # Creates test.db if it doesn't exist
cursor = conn.cursor()
```

---

### 🧱 Creating a Table

```python
cursor.execute("""
CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT
)
""")
conn.commit()
```

---

### 📤 Inserting Data

```python
cursor.execute("INSERT INTO items (name, description) VALUES (?, ?)", ("Pen", "Blue ink"))
conn.commit()
```

---

### 📥 Fetching Data

```python
cursor.execute("SELECT * FROM items")
items = cursor.fetchall()
print(items)
```

---

### ✅ FastAPI Example with SQLite

```python
from fastapi import FastAPI
import sqlite3

app = FastAPI()

@app.get("/items")
def get_items():
    conn = sqlite3.connect("test.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM items")
    results = cursor.fetchall()
    conn.close()
    return {"items": results}
```

---

## 🐘 PostgreSQL: Powerful & Production-Ready

PostgreSQL is a robust, scalable open-source database.

### 📦 Install `psycopg2`

```bash
pip install psycopg2-binary
```

---

### 🔌 Connecting to PostgreSQL

```python
import psycopg2

conn = psycopg2.connect(
    dbname="your_db",
    user="your_user",
    password="your_password",
    host="localhost",
    port="5432"
)
cursor = conn.cursor()
```

---

### 🧱 Creating a Table

```python
cursor.execute("""
CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT
)
""")
conn.commit()
```

---

### 📤 Inserting Data

```python
cursor.execute("INSERT INTO items (name, description) VALUES (%s, %s)", ("Notebook", "A5 size"))
conn.commit()
```

---

### 📥 Fetching Data

```python
cursor.execute("SELECT * FROM items")
items = cursor.fetchall()
print(items)
```

---

### ✅ FastAPI Example with PostgreSQL

```python
from fastapi import FastAPI
import psycopg2

app = FastAPI()

@app.get("/items")
def get_items():
    conn = psycopg2.connect(
        dbname="your_db",
        user="your_user",
        password="your_password",
        host="localhost",
        port="5432"
    )
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM items")
    results = cursor.fetchall()
    conn.close()
    return {"items": results}
```

---

## ⚠️ Common Mistakes

| Mistake                                     | Fix                                            |
| ------------------------------------------- | ---------------------------------------------- |
| Not committing transactions                 | Use `conn.commit()` after INSERT/UPDATE/DELETE |
| Forgetting to close connections             | Always use `conn.close()` or a context manager |
| Mixing up `?` (SQLite) vs `%s` (PostgreSQL) | Use correct placeholders per DB                |
| Hardcoding credentials                      | Use environment variables or `.env` files      |

---

## 🔍 Key Differences

| Feature       | SQLite                                                | PostgreSQL                         |
| ------------- | ----------------------------------------------------- | ---------------------------------- |
| Type          | File-based, embedded                                  | Server-based                       |
| Setup         | None required                                         | Requires installation/config       |
| Use Case      | Local dev, testing, small apps                        | Production, large apps, multi-user |
| Python Driver | Built-in `sqlite3`                                    | External `psycopg2`                |
| SQL Syntax    | Similar, but PostgreSQL is stricter and more powerful |                                    |

---

## 📘 Learn More

- 🔗 [SQLite in Python](https://docs.python.org/3/library/sqlite3.html)
- 🔗 [PostgreSQL + psycopg2](https://www.psycopg.org/docs/)
- 🔗 [PostgreSQL Official Docs](https://www.postgresql.org/docs/)
- 🎥 [FastAPI + Raw SQL Video](https://www.youtube.com/watch?v=0sOvCWFmrtA)

---

## 🧪 Test Locally

1. Start FastAPI:

   ```bash
   uvicorn main:app --reload
   ```

2. Open Swagger docs:
   [http://localhost:8000/docs](http://localhost:8000/docs)

3. Use your frontend (React) or Postman to test API routes.

---

## ✅ Summary

| Tool       | Use Case                | Python Driver | Example Use            |
| ---------- | ----------------------- | ------------- | ---------------------- |
| SQLite     | Quick dev/testing       | `sqlite3`     | Local file database    |
| PostgreSQL | Real-world applications | `psycopg2`    | Production-ready setup |

---
