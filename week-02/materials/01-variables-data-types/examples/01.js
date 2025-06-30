"use strict";

/*
📘 What is a Variable?

In JavaScript, a variable is a named container for storing data. 
It allows us to store, update, and retrieve values throughout our code.

Think of a variable like a labeled box: 
you give it a name, put something inside, and later you can look inside or replace the contents.
*/

// ✅ Declaring a variable using `let`
let userName = "Laura";

// Accessing the value
console.log("Hello, " + userName); // Output: Hello, Laura

// 🔁 Reassigning the variable
userName = "Sam";
console.log("Hi again, " + userName); // Output: Hi again, Sam

// 🔄 Another example: Storing and updating a score
let score = 0;
console.log("Initial score:", score); // Output: Initial score: 0

score = 10;
console.log("Updated score:", score); // Output: Updated score: 10

/*
🛠 Why Use Variables?

- To avoid repeating values
- To make code easier to understand and maintain
- To store user input, calculations, or results
*/

// Example: Without a variable
console.log("Welcome, Alice");
console.log("Welcome, Alice");
console.log("Welcome, Alice");

// Example: With a variable
let guestName = "Alice";
console.log("Welcome, " + guestName);
console.log("Welcome, " + guestName);
console.log("Welcome, " + guestName);

/*
🧩 How Do You Create Variables?

In modern JavaScript, we use one of the following keywords:
- `let`: for variables that can change later
- `const`: for variables that should stay constant
- `var`: old way (not recommended in modern code)
*/

let city = "Paris"; // Can be updated later
const country = "France"; // Should remain the same
var oldWay = "This uses var"; // Not preferred — use let or const

// Example using let (recommended for updatable values)
let points = 5;
points = 10; // ✅ Allowed
console.log("Points:", points);

// Example using const (recommended for fixed values)
const birthYear = 1990;
// birthYear = 1995; ❌ This will cause an error (can't change a const)

// var is function-scoped and can be hoisted, which can lead to bugs:
var message = "Hello";
var message = "Hi again"; // ❗ Allowed, but can cause confusion
console.log(message); // Output: Hi again

/*
💡 Summary:
- A variable lets you store and reuse values.
- Use `let` for values that can change.
- Use `const` for values that should not change.
- Avoid `var` in modern code.
- Always use `"use strict";` to catch common mistakes.
*/
