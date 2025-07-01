'use strict';

const fetchBooks = async (query) => {
    try {
        const res = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
        );
        const data = await res.json();

        console.log(data);
        books.forEach((book) => {
            const title = book.volumeInfo.title;
            console.log(`📘 ${title}`);
        });
    } catch (err) {
        console.error('Failed to fetch books:', err);
    }
};

fetchBooks('javascript');
