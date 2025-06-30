'use strict';

// DOM elements
const form = document.getElementById('userForm');
const nameInput = document.getElementById('userName');
const formOutput = document.getElementById('formOutput');

// Handlers
const submitHandler = (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();

    if (name === '') {
        formOutput.innerText = 'Please enter your name.';
    } else {
        formOutput.innerText = `Welcome, ${name}!`;
    }
};

// Events
form.addEventListener('submit', submitHandler);
