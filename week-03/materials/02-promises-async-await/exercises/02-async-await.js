'use strict';

// 🟢 Exercise 1: Convert a promise-based timeout function to async/await

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ✍️ Create an async function that waits 1 second and logs "1 second passed"

// 🟢 Exercise 2: Simulate fetching a user, then fetching that user's tasks using async/await

const getUser = () =>
    new Promise((resolve) =>
        setTimeout(() => resolve({ id: 1, name: 'John' }), 500)
    );

const getTasks = (userId) =>
    new Promise((resolve) =>
        setTimeout(() => resolve(['Task A', 'Task B']), 500)
    );

// ✍️ Your code:

// 🟢 Bonus: Handle an async function that throws an error using try...catch

// ✍️ Your code:
