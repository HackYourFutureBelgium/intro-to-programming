'use strict';

// DOM elements
const form = document.getElementById('signupForm');
const message = document.getElementById('message');

// Handlers
const validateForm = (e) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (password.length < 6) {
        message.innerText = 'Password must be at least 6 characters.';
    } else {
        message.innerText = `Signed up with ${email}`;
    }
};

// Events
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm(e);
});
