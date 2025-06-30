'use strict';

/*
📘 for Loop – Examples

A `for` loop repeats code a fixed number of times.
It's great when you know how many times you want to loop.
*/

// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log('Count:', i);
}

// Count backwards
for (let i = 5; i >= 1; i--) {
    console.log('Reverse count:', i);
}

// Print even numbers
for (let i = 0; i <= 10; i += 2) {
    console.log('Even:', i);
}

// Loop through an array by index
let fruits = ['apple', 'banana', 'cherry'];

for (let i = 0; i < fruits.length; i++) {
    console.log('Fruit:', fruits[i]);
}
