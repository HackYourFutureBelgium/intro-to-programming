'use strict';

const postData = {
    title: 'JS Fetch Example',
    body: 'This is a demo post.',
    userId: 1
};

// then and catch
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
})
    .then((response) => response.json())
    .then((data) => {
        console.log('[then] Created post ID:', data.id);
    })
    .catch((err) => {
        console.error('[then] POST error:', err);
    });

// async and await
const createPost = async () => {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData)
            }
        );

        const data = await response.json();
        console.log('[async] Created post ID:', data.id);
    } catch (error) {
        console.error('[async] POST error:', error);
    }
};

createPost();
