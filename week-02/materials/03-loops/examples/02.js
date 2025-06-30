'use strict';

/*
📘  while Loop – Examples

A `while` loop repeats code **as long as** a condition is true.
It's useful when you don't know how many times you'll loop in advance.
*/

// Count from 1 to 5
let count = 1;

while (count <= 5) {
    console.log('Count:', count);
    count++;
}

// Count down from 5
let n = 5;

while (n > 0) {
    console.log('Down:', n);
    n--;
}

// Loop until user input matches "yes" (simulated)
let userInput = '';
let attempts = 0;

while (userInput !== 'yes' && attempts < 3) {
    console.log('Try again...');
    userInput = 'yes'; // simulate correct input
    attempts++;
}
