'use strict';

// then and catch
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((data) => {
        console.log('[then] Post title:', data.title);
    })
    .catch((err) => {
        console.error('[then] Fetch error:', err);
    });

// async and await
const getPost = async () => {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts/1'
        );
        const data = await response.json();
        console.log('[async] Post title:', data.title);
    } catch (err) {
        console.error('[async] Fetch error:', err);
    }
};

getPost();
