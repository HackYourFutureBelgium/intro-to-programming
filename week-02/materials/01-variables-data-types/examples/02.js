"use strict";

/*
📘 JavaScript Data Types – Examples

JavaScript has different kinds of values called "data types".
This file shows common data types and how we use them.
*/

// 🔤 String – text inside quotes
let city = "Brussels";
console.log("City:", city); // Output: Brussels

// 🔢 Number – integers or decimals
let temperature = 21.5;
console.log("Temperature:", temperature); // Output: 21.5

// 🔘 Boolean – true or false
let isRaining = false;
console.log("Is it raining?", isRaining); // Output: false

// ❌ Null – intentional empty value
let selectedItem = null;
console.log("Selected item:", selectedItem); // Output: null

// ❓ Undefined – variable declared but not assigned
let userScore;
console.log("User score:", userScore); // Output: undefined

// 📦 Object – group of properties
let user = {
  name: "Laura",
  age: 30,
};
console.log("User object:", user); // Full object
console.log("User name:", user.name); // Accessing a property

// 📚 Array – ordered list of values
let colors = ["red", "green", "blue"];
console.log("Colors array:", colors); // Full array
console.log("First color:", colors[0]); // Accessing first item

// 🧪 typeof – checking the data type
console.log(typeof city); // "string"
console.log(typeof temperature); // "number"
console.log(typeof isRaining); // "boolean"
console.log(typeof selectedItem); // "object" (a quirk of JS)
console.log(typeof userScore); // "undefined"
console.log(typeof user); // "object"
console.log(typeof colors); // "object" (arrays are a type of object)
