'use strict';

const artist = 'Adele';

const fetchTracks = async (artist) => {
    try {
        const res = await fetch(
            `https://api.deezer.com/search?q=${encodeURIComponent(artist)}`
        );
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};

fetchTracks('Adele');
