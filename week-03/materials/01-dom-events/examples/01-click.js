'use strict';

// DOM elements
const btn = document.getElementById('btn');
const output = document.getElementById('output');

// Handlers
const clickHandler = () => {
    console.log('Button clicked!');

    output.innerText = 'Button was clicked!';
};

// Events
btn.addEventListener('click', clickHandler);
