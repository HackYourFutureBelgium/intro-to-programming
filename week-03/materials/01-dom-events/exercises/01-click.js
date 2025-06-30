'use strict';

// DOM elements
const countBtn = document.getElementById('countBtn');
const countDisplay = document.getElementById('countDisplay');
const colorBtn = document.getElementById('changeColorBtn');

// State
let count = 0;

// Handlers
const countHandler = () => {
    count++;
    countDisplay.innerText = `You clicked ${count} times`;
};

const colorChangeHandler = () => {
    document.body.style.backgroundColor = '#f0f0f0';
};

// Events
countBtn.addEventListener('click', countHandler);
colorBtn.addEventListener('click', colorChangeHandler);
