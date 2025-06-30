'use strict';

/*
📘 JavaScript Conditions – Examples

Conditional statements let your code make decisions based on logic.
The most common ones are:
- if
- else if
- else
- ternary operator 
*/

// 🔹 Basic `if` statement
let temperature = 30;

if (temperature > 25) {
    console.log("It's warm outside.");
}

// 🔹 `if...else` statement
let isRaining = false;

if (isRaining) {
    console.log('Take an umbrella.');
} else {
    console.log('Enjoy the sunshine.');
}

// 🔹 `if...else if...else`
let score = 85;

if (score >= 90) {
    console.log('Grade: A');
} else if (score >= 75) {
    console.log('Grade: B');
} else if (score >= 60) {
    console.log('Grade: C');
} else {
    console.log('Grade: F');
}

// 🔹 Using comparison operators
let age = 18;

if (age >= 18) {
    console.log('You are an adult.');
}

if (age !== 18) {
    console.log('Your age is not exactly 18.');
}

// 🔹 Using logical operators
let isWeekend = true;
let hasFreeTime = true;

if (isWeekend && hasFreeTime) {
    console.log('You can relax!');
}

if (isWeekend || hasFreeTime) {
    console.log('You have some time off.');
}

// 🔹 Ternary operator
let isLoggedIn = true;
let message = isLoggedIn ? 'Welcome back!' : 'Please log in.';
console.log(message);

/*
💡 Summary:
- Use `if` to run code when a condition is true.
- Use `else if` to check other conditions.
- Use `else` to handle all remaining cases.
- Logical operators like && (and), || (or), and ! (not) let you combine conditions.
- Use `===` to compare values strictly (not just loosely).
*/
