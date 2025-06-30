'use strict';

/*
📘 Function Scope – Examples

Variables declared inside a function are only accessible **inside that function**.
This is called **function scope**.
*/

// 🔹 Example 1: Local vs Global
let globalMessage = "I'm global";

function showMessage() {
    let localMessage = "I'm local to showMessage";
    console.log(globalMessage); // ✅ Works
    console.log(localMessage); // ✅ Works
}

showMessage();
// console.log(localMessage);  ❌ Error: localMessage is not defined

// 🔹 Example 2: Variables with same name in different scopes
function printName() {
    let name = 'Alice';
    console.log('Inside function:', name);
}

let name = 'Bob';
printName();
console.log('Outside function:', name);

// 🔹 Example 3: Nested functions
function outerFunction() {
    let outerVar = "I'm in outerFunction";

    function innerFunction() {
        console.log(outerVar); // ✅ Inner function can access outer scope
    }

    innerFunction();
}

outerFunction();

// 🔹 Example 4: Variable declared without `let/const` (not recommended)
function unsafeFunction() {
    accidentalGlobal = "Oops! I'm global now!";
}

unsafeFunction();
console.log(accidentalGlobal); // 😬 Avoid this — always use `let` or `const`
