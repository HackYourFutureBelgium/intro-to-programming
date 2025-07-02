# 🔐 JWT Authentication & Protected Routes in FastAPI

Secure your FastAPI API with **JWT (JSON Web Token)** authentication. This guide walks you through setting up token-based auth, issuing tokens on login, and protecting private routes with dependency injection.

---

## 📦 Install Requirements

```bash
pip install fastapi uvicorn python-jose[cryptography] passlib[bcrypt]
```

---

## 📚 Key Concepts

- **JWT**: A signed token that securely stores user identity
- **OAuth2PasswordBearer**: A FastAPI dependency that extracts the token from requests
- **Bearer Token**: The `Authorization: Bearer <token>` header

---

## ⚙️ JWT Configuration

```python
# auth.py
from datetime import datetime, timedelta
from jose import JWTError, jwt

SECRET_KEY = "your-secret-key"  # use .env in production
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=15))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def decode_access_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        return None
```

---

## 🔐 Hashing Passwords

```python
# security.py
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str):
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)
```

---

## 👤 OAuth2 Dependency

```python
# dependencies.py
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from auth import decode_access_token

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

def get_current_user(token: str = Depends(oauth2_scheme)):
    payload = decode_access_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid token")
    return payload  # Typically contains user_id or username
```

---

## 🚀 Main API Example

```python
# main.py
from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel
from auth import create_access_token
from security import hash_password, verify_password
from dependencies import get_current_user

app = FastAPI()

# fake user
fake_user = {
    "username": "alice",
    "hashed_password": hash_password("secret")
}

class Token(BaseModel):
    access_token: str
    token_type: str

class LoginData(BaseModel):
    username: str
    password: str

@app.post("/login", response_model=Token)
def login(form: LoginData):
    if form.username != fake_user["username"] or not verify_password(form.password, fake_user["hashed_password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token({"sub": fake_user["username"]})
    return {"access_token": token, "token_type": "bearer"}

@app.get("/protected")
def protected_route(user=Depends(get_current_user)):
    return {"message": f"Hello, {user['sub']}! You accessed a protected route."}
```

---

## 🧪 Test with Swagger

- Run server:

```bash
uvicorn main:app --reload
```

- Go to:
  [http://localhost:8000/docs](http://localhost:8000/docs)

- Use `/login` to get a token

- Click "Authorize" in Swagger and paste:

```txt
Bearer <your_token>
```

- Access `/protected`

---

## ✅ Summary

| Task             | Function                    |
| ---------------- | --------------------------- |
| Hash password    | `hash_password()`           |
| Create JWT token | `create_access_token()`     |
| Verify token     | `decode_access_token()`     |
| Secure route     | `Depends(get_current_user)` |

---

## 📘 Learn More

- 🔗 [FastAPI Security Docs](https://fastapi.tiangolo.com/tutorial/security/)
- 🔗 [JWT Introduction](https://jwt.io/introduction)
- 🔐 [Passlib Docs](https://passlib.readthedocs.io/)
- 🔐 [OAuth2 in FastAPI](https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/)

---

## 🔐 Bonus: Security Best Practices

- ✅ Use `.env` for your secret key
- ✅ Store tokens in `Authorization` headers
- ✅ Set token expiration time
- ✅ Use HTTPS in production
- ❌ Never store plain passwords or JWTs in localStorage (for SPAs)

---
