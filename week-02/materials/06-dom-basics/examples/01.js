'use strict';

// ✅ Selecting elements
const title = document.getElementById('main-title');
const desc = document.querySelector('.description');
const list = document.getElementById('itemList');

// ✅ Changing content
title.textContent = 'Updated DOM Example';

// ✅ Changing style
desc.style.color = 'blue';
desc.style.fontSize = '18px';

// ✅ Adding/removing classes
title.classList.add('highlight');

// ✅ Adding elements
const newItem = document.createElement('li');
newItem.textContent = 'Orange';
list.appendChild(newItem);

// ✅ Event handling
const button = document.getElementById('changeTextBtn');
button.addEventListener('click', () => {
    desc.textContent = 'You clicked the button!';
});
