'use strict';

const badUrl = 'https://jsonplaceholder.typicode.com/invalid';

// then and catch
fetch(badUrl)
    .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
    })
    .then((data) => {
        console.log('[then] Data:', data);
    })
    .catch((err) => {
        console.error('[then] Error:', err.message);
    });

// async and await
const fetchWithError = async () => {
    try {
        const res = await fetch(badUrl);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        console.log('[async] Data:', data);
    } catch (err) {
        console.error('[async] Error:', err.message);
    }
};

fetchWithError();
