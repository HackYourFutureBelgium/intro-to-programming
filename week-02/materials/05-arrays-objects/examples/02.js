'use strict';

/*
📘 Objects – Examples

Objects store data as key-value pairs.
They are great for grouping related info.
*/

const person = {
    name: 'Sara',
    age: 29,
    isStudent: true,
    hobbies: ['reading', 'traveling']
};

// 🔍 Accessing values
console.log('Name:', person.name); // Dot notation
console.log('Age:', person['age']); // Bracket notation

// ➕ Add new property
person.country = 'Belgium';

// 🔄 Update a value
person.age = 30;

// ❌ Delete a property
delete person.isStudent;

console.log('Updated person:', person);

// 🔁 Loop through object
for (const key in person) {
    console.log(key + ':', person[key]);
}

// 🔄 Nested access
console.log('First hobby:', person.hobbies[0]);
