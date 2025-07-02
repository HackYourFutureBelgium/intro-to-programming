# 🐍 Python Basics

Python is known for being simple and readable. Three of its most important building blocks are
**variables**, **loops**, and **functions**. Mastering these gives you the power to build
anything — from small scripts to complex applications.

---

## 🔢 Why These Basics Matter

You’ll find these core elements everywhere in Python:

- Variables to store data
- Loops to repeat tasks
- Functions to organize and reuse logic

These concepts form the foundation of all Python programs.

---

## 🧠 Core Concepts

### 🧮 Variables in Python

Variables hold data. Python is **dynamically typed**, so you don’t need to declare types explicitly.

```python
name = "Alice"
age = 30
is_active = True
```

- 🔹 Strings: `"Hello"`
- 🔹 Integers: `42`
- 🔹 Booleans: `True` / `False`

> 🔸 Python uses **snake_case** for variable names by convention.

---

### 🔁 Loops: `for` and `while`

Loops let you repeat actions:

#### ✅ `for` Loop

```python
fruits = ["apple", "banana", "orange"]

for fruit in fruits:
    print(fruit)
```

✅ Clean way to loop over lists, strings, or ranges.

#### ✅ `while` Loop

```python
count = 0

while count < 3:
    print("Counting:", count)
    count += 1
```

✅ Useful when you don’t know the end condition in advance.

> ⚠️ Be careful with infinite loops! Always update the loop variable.

---

### 🧰 Functions: Reusable Logic

Functions let you **package code** for reuse and clarity.

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Sam")
```

- 🔹 `def` defines a function
- 🔹 Parameters go in parentheses
- 🔹 Use `return` to give back a result

```python
def add(a, b):
    return a + b

result = add(2, 3)
print(result)  # 5
```

---

## ⚠️ Common Mistakes

- ❌ Forgetting `:` after `if`, `for`, `while`, `def`
- ❌ Incorrect indentation → Python is strict!
- ❌ Using a variable before assigning it

---

## 📚 Best Practices

| Do This                        | Avoid This                              |
| ------------------------------ | --------------------------------------- |
| Use clear variable names       | Using `x`, `y`, `temp` too often        |
| Write small reusable functions | One giant function that does everything |
| Use `for` for clean iteration  | Over complicating with `while`          |
| Follow PEP 8 style guide       | Ignoring indentation and naming rules   |

---

## 🧪 Bonus: `if` + `loop` + `function` Combined

```python
def is_even(n):
    return n % 2 == 0

numbers = [1, 2, 3, 4, 5]

for num in numbers:
    if is_even(num):
        print(num, "is even")
```

✅ You can combine all core concepts to write clear, readable code.

---

## 📘 Learn More

- 🔗 [Python Docs – Built-in Functions](https://docs.python.org/3/library/functions.html)
- 🎥 [Python for Beginners](https://www.youtube.com/watch?v=QXeEoD0pB3E&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3)

---

## 🚀 Summary

| Concept   | Description                           |
| --------- | ------------------------------------- |
| Variables | Store data with names                 |
| Loops     | Repeat actions using `for` or `while` |
| Functions | Group logic and reuse it easily       |
| `def`     | Keyword to define a function          |
| `return`  | Sends back a value from a function    |
