const URL =  'http://localhost:5678/api/works';
console.log(URL);
const FILTERS = document.querySelectorAll('[rel=js-filter]'); // select all elements with this attribute
console.log(FILTERS);


Array.from(FILTERS , filter => filter.onclick = applyFilter); // use the array elements to filter them on the listener event

function showPics() { // used function to show all pictures while page is loaded
    fetch(URL)
    .then(response => response.json()) // catch elements and convert them in json
    .then(works => {

        const gallery = document.querySelector('.gallery');

        Array.from(works).forEach(work => { // get elements and use const for all of them
            
            const figure = document.createElement('figure');
            figure.classList.add(`category_${work.categoryId}`);

            const imageElement = document.createElement('img');
            const figcaption = document.createElement('figcaption');

            figure.appendChild(imageElement);
            figure.appendChild(figcaption);
            gallery.appendChild(figure);

            imageElement.src = work.imageUrl;
            imageElement.alt = work.title;
            figcaption.innerHTML = work.title;

        });
        console.log(works);
    })

    .catch(error => {
        console.log(error);
    });
}

const picsDisplay = document.addEventListener('DOMContentLoaded', showPics);

function applyFilter(event) {
    const node = event.target;
    const value = node.dataset.filter;

    if (value === 'category_all') 
    showPics();
    return;

    /* Array.from(FILTERS, filter => ) */
}