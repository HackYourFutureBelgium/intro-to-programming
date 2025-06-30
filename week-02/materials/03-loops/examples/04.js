'use strict';

/*
📘 for...in Loop – Examples

`for...in` is used to loop through the **keys (properties)** of an object.

It's ideal for accessing all property names (keys) in an object.
*/

const user = {
    name: 'Alice',
    age: 28,
    isMember: true
};

for (const key in user) {
    console.log('Key:', key); // name, age, isMember
    console.log('Value:', user[key]); // Alice, 28, true
}

// 🔹 You can also use it on arrays, but not recommended (use `for` or `for...of` instead)
const colors = ['red', 'green', 'blue'];

for (const index in colors) {
    console.log('Index:', index); // 0, 1, 2
    console.log('Color:', colors[index]); // red, green, blue
}

/*
💡 Summary:
- Use `for...in` to loop through all keys in an object.
- It's great for dynamic or unknown object structures.
- Avoid using it on arrays unless you're working with keys explicitly.
*/
