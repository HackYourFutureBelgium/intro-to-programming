'use strict';

// DOM elements
const signupForm = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const feedback = document.getElementById('feedback');

// Handlers
const signupHandler = (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email.includes('@') || !email.includes('.')) {
        feedback.innerText = 'Please enter a valid email.';
    } else if (password.length < 6) {
        feedback.innerText = 'Password must be at least 6 characters.';
    } else {
        feedback.innerText = 'Signup successful!';
    }
};

// Events
signupForm.addEventListener('submit', signupHandler);
