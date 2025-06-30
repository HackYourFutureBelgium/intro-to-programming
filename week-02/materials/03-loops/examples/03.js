'use strict';

/*
📘 for...of Loop – Examples

`for...of` loops are used to loop directly over values in arrays.
It's simple and clean when you don't need the index.
*/

// Loop through an array
const animals = ['dog', 'cat', 'rabbit'];

for (const animal of animals) {
    console.log('Animal:', animal);
}

// Loop through characters in a string
const word = 'hello';

for (const char of word) {
    console.log('Character:', char);
}
