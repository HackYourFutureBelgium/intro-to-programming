# 📝 Markdown Guide

## 📌 What is Markdown?

**Markdown** is a lightweight markup language that allows you to add formatting elements to plain text documents. Created by **John Gruber in 2004**, it enables easy writing of formatted documents without complex HTML.

> Ideal for documentation, README files, notes, and static site content.

---

## 🔧 Basic Syntax

### 🔹 Headings

Use `#` symbols to define headings. Markdown supports six levels (`<h1>` to `<h6>` in HTML):

```markdown
# Heading Level 1

## Heading Level 2

### Heading Level 3

#### Heading Level 4

##### Heading Level 5

###### Heading Level 6
```

---

### 🔹 Paragraphs

Separate blocks of text by one or more blank lines.

```markdown
This is the first paragraph.

This is the second paragraph.
```

---

### 🔹 Line Breaks

End a line with **two or more spaces** and press `Enter` to force a line break.

```markdown
This is the first line.  
This is the second line.
```

---

### 🔹 Bold Text

Wrap text with double asterisks (`**`) or double underscores (`__`):

```markdown
**Bold Text** or **Bold Text**
```

---

### 🔹 Italic Text

Wrap text with single asterisks (`*`) or single underscores (`_`):

```markdown
_Italic Text_ or _Italic Text_
```

---

### 🔹 Bold and Italic

Wrap text with triple asterisks (`***`) or triple underscores (`___`):

```markdown
**_Bold and Italic_**
```

---

### 🔹 Blockquotes

Use a `>` symbol to create a blockquote:

```markdown
> This is a blockquote.
```

> Nested blockquotes are allowed with `>>`, `>>>`, etc.

---

### 🔹 Ordered Lists

Use numbers followed by a period (`.`):

```markdown
1. First item
2. Second item
3. Third item
```

---

### 🔹 Unordered Lists

Use dashes (`-`), asterisks (`*`), or plus signs (`+`):

```markdown
- Item one
- Item two
- Item three
```

> Be consistent with one bullet type per list.

---

### 🔹 Code Blocks

Use triple backticks (\`\`\`) or indent lines with four spaces.

```html
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <h1>Hello, Markdown!</h1>
  </body>
</html>
```

---

### 🔹 Inline Code

Wrap text with single backticks to denote inline code:

```md
Use the `console.log()` function.
```

---

### 🔹 Images

Use `![alt text](image URL)` to insert images:

```markdown
![Markdown Logo](./assets/markdown.png)
```

---

### 🔹 Horizontal Rules

Use three or more dashes (`---`), asterisks (`***`), or underscores (`___`) on a line:

```markdown
---
```

---

### 🔹 Links

Use `[text](URL)` syntax for hyperlinks:

```markdown
[Visit GitHub](https://github.com/)
```

---

### 🔹 Tables

Use pipes (`|`) and hyphens (`-`) to build tables:

```markdown
| Syntax    | Description | Example Text     |
| --------- | ----------- | ---------------- |
| Header    | Title       | This is a sample |
| Paragraph | Body Text   | More content     |
```

---

## 🧪 Combined Example

````markdown
# My Project

Welcome to my project! Below is a list of features:

## 🚀 Features

1. **User-Friendly**
   - Easy to navigate
2. _Fast and Lightweight_
   - Minimal overhead

## 💻 Code Sample

```html
<html>
  <head>
    <title>Sample</title>
  </head>
  <body>
    <p>This is a sample paragraph.</p>
  </body>
</html>
```
````

---

## 🔗 Additional Resources

For a full reference, visit the [Markdown Guide](https://www.markdownguide.org/).

---
