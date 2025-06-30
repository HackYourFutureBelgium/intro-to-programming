'use strict';

// 🟢 Exercise 1: Change the header text to "JS DOM Exercises"
const header = document.getElementById('header');
header.textContent = 'JS DOM Exercises';

// 🟢 Exercise 2: Change the paragraph text when button is clicked
const task = document.getElementById('task');
const btn = document.getElementById('actionBtn');

btn.addEventListener('click', () => {
    task.textContent = 'You clicked the button!';
});

// 🟢 Exercise 3: Add a new list item "Strawberry" to the fruit list
const fruitList = document.getElementById('fruitList');
const newFruit = document.createElement('li');
newFruit.textContent = 'Strawberry';
fruitList.appendChild(newFruit);

// 🟢 Exercise 4: Change the list’s text color to blue
fruitList.style.color = 'blue';

// 🟢 Bonus: Add a new paragraph and set its content and style
const newPara = document.createElement('p');
newPara.textContent = 'This was created dynamically.';
newPara.style.color = 'green';
newPara.style.fontStyle = 'italic';
document.body.appendChild(newPara);
