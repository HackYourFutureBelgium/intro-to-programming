'use strict';

// DOM elements
const form = document.getElementById('basicForm');
const feedback = document.getElementById('feedback');

// Handlers
const submitHandler = (e) => {
    const name = document.getElementById('username').value;
    feedback.innerText = `Welcome, ${name}!`;
};

// Events
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    submitHandler(e);
});
