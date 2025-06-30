'use strict';

// Chaining multiple then() calls
const fetchUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: 'Alice', id: 123 });
        }, 1000);
    });
};

const fetchUserPosts = (userId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Post 1', 'Post 2']);
        }, 1000);
    });
};

fetchUser()
    .then((user) => {
        console.log('User:', user.name);
        return fetchUserPosts(user.id);
    })
    .then((posts) => {
        console.log('Posts:', posts);
    });
