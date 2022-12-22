const read_more = document.querySelectorAll('.read-more');

// We shall use the for loop to select individual button and its parent;

for(let i = 0; i < read_more.length; i++) {
    read_more[i].addEventListener('click', () => {
        read_more[i].parentNode.classList.toggle('active');
    })
}

// Now lets experiment if this class is being toggled;