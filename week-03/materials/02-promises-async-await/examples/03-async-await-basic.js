'use strict';

// Using async/await to simplify promise-based code
const simulateFetch = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Server response received');
        }, 1000);
    });
};

const getData = async () => {
    const data = await simulateFetch();
    console.log(data);
};

getData();
