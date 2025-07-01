'use strict';

const fetchMovie = async (title) => {
    try {
        const res = await fetch(
            `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(title)}`
        );
        const data = await res.json();

        console.log(data);
    } catch (err) {
        console.error('OMDb fetch error:', err);
    }
};

fetchMovie('The Matrix');
