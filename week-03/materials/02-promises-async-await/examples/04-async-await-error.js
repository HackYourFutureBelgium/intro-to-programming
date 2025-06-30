'use strict';

// Handling errors with try...catch inside async functions
const simulateError = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('Something went wrong!');
        }, 1000);
    });
};

const getSafeData = async () => {
    try {
        const result = await simulateError();
        console.log(result);
    } catch (err) {
        console.error('Caught error:', err);
    }
};

getSafeData();
