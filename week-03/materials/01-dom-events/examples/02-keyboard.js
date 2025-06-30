'use strict';

// DOM elements
const input = document.getElementById('nameInput');
const result = document.getElementById('result');

// Handlers
const keyupHandler = () => {
    console.log('Key up event detected!');
    result.textContent = `Hello, ${input.value}`;
};

// Events
input.addEventListener('keyup', keyupHandler);

/*
Keyboard events are triggered when the user interacts with the keyboard.
The most common keyboard events are:
- keydown: Triggered when a key is pressed down.
- keyup: Triggered when a key is released.
*/
