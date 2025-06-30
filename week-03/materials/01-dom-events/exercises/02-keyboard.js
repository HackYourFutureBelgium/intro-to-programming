'use strict';

// DOM elements
const liveInput = document.getElementById('liveInput');
const previewText = document.getElementById('previewText');

// Handlers
const livePreviewHandler = () => {
    previewText.innerText = liveInput.value;
};

// Events
liveInput.addEventListener('keyup', livePreviewHandler);
