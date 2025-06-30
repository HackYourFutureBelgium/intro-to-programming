'use strict';

// Simulate a delayed task using a Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data loaded!');
        }, 1000);
    });
};

fetchData().then((result) => {
    console.log(result); // "Data loaded!"
});
