# 🔐 Password Hashing with Passlib in FastAPI

Handling user passwords securely is a critical part of any web application. You should **never store plain-text passwords**. This guide shows how to use **[Passlib](https://passlib.readthedocs.io/en/stable/)** — a secure password hashing library — with **FastAPI** to safely hash and verify passwords.

---

## 🚫 Never Store Plain-Text Passwords

Instead of storing:

```json
{
  "username": "alice",
  "password": "my password"
}
```

Store:

```json
{
  "username": "alice",
  "hashed_password": "$2b$12$RgMEK..."
}
```

---

## 📦 Installation

```bash
pip install passlib[bcrypt]
```

> We use the `bcrypt` algorithm — it’s slow (on purpose) and secure for password hashing.

---

## 🔧 Setup Passlib Context

```python
# security.py
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)
```

---

## 🧪 Example Usage

```python
# test_password.py
from security import hash_password, verify_password

plain = "mysecret"
hashed = hash_password(plain)

print("Hashed:", hashed)
print("Match?", verify_password("mysecret", hashed))   # True
print("Wrong?", verify_password("wrongpass", hashed))  # False
```

---

## ✅ Use in User Registration & Login

### 🔐 Registration

```python
from security import hash_password

@app.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
    hashed_pw = hash_password(user.password)
    db_user = User(username=user.username, hashed_password=hashed_pw)
    db.add(db_user)
    db.commit()
    return {"message": "User registered"}
```

### 🔐 Login

```python
from security import verify_password

@app.post("/login")
def login(form: UserLogin, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == form.username).first()
    if not user or not verify_password(form.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"message": "Login successful"}
```

---

## 🔐 Why Passlib?

| Feature                   | ✅  |
| ------------------------- | --- |
| Secure (uses bcrypt)      | ✅  |
| Easy to use               | ✅  |
| Supports multiple schemes | ✅  |
| Recommended by FastAPI    | ✅  |

---

## 🛡️ Security Best Practices

- ✅ Always hash passwords before storing
- ✅ Use slow algorithms like `bcrypt`
- ✅ Use a password hashing library — **not** `hashlib`
- ❌ Don’t compare passwords manually (`==`)
- ❌ Don’t store passwords in plain text

---

## 📘 Learn More

- 🔗 [Passlib Documentation](https://passlib.readthedocs.io/en/stable/)
- 🔗 [FastAPI Security Docs](https://fastapi.tiangolo.com/tutorial/security/)
- 🔐 [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)

---

## ✅ Summary

| Task               | Code Snippet                      |
| ------------------ | --------------------------------- |
| Hash a password    | `hash_password("secret")`         |
| Verify a password  | `verify_password("secret", hash)` |
| Recommended scheme | `bcrypt`                          |
| Library used       | `passlib`                         |

---
