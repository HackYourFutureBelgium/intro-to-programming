'use strict';

/*
📘 Arrays – Examples

Arrays are used to store multiple values in a single variable.
They are ordered, indexed, and allow duplicates.
*/

const fruits = ['apple', 'banana', 'mango'];

console.log('First fruit:', fruits[0]); // "apple"
console.log('Number of fruits:', fruits.length); // 3

// 🔄 Loop through an array
for (let i = 0; i < fruits.length; i++) {
    console.log('Fruit:', fruits[i]);
}

// ➕ Add and remove
fruits.push('kiwi'); // Add to end
fruits.unshift('grape'); // Add to beginning
fruits.pop(); // Remove from end
fruits.shift(); // Remove from beginning

console.log('Updated fruits:', fruits);

// 🔍 Check if item exists
console.log(fruits.includes('banana')); // true

// 🧪 Find index
console.log(fruits.indexOf('mango')); // 1

// 🧱 Slice and splice
let sliced = fruits.slice(0, 2); // Doesn't modify original
fruits.splice(1, 1); // Removes 1 item at index 1 (modifies original)

console.log('Sliced:', sliced);
console.log('Final fruits:', fruits);
