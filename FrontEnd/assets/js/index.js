const URL =  'http://localhost:5678/api/works';
console.log(URL);
const FILTERS = document.querySelectorAll('[rel=js-filter]'); // select all elements with this attribute
console.log(FILTERS);


let works =[];

const FilterAll = document.querySelector('[data-category="category_all"]');
const Filter1 = document.querySelector('[data-category="category_1"]');
const Filter2 = document.querySelector('[data-category="category_2"]');
const Filter3 = document.querySelector('[data-category="category_3"]');


Array.from(FILTERS, filter => {
    filter.addEventListener('click', event => { 
    console.log("Bouton de filtre cliqué");
    applyFilter(event, works);
        });
    }); // use the array elements to filter them on the listener event

function showPics() { // used function to show all pictures while page is loaded
    fetch(URL)
        .then(response => response.json()) // catch elements and convert them in json
        .then(data => {
            works = data;
            const gallery = document.querySelector('.gallery');
            gallery.innerHTML = '';
            
            works.forEach(work => { // get elements and use const for all of them
                
                const figure = document.createElement('figure');
                figure.classList.add(`category_${work.categoryId}`);
                figure.setAttribute('data-category', work.categoryId); // keep the ID of each pics
                
                console.log(figure);
                
                const imageElement = document.createElement('img');
                const figcaption = document.createElement('figcaption');
                
                imageElement.src = work.imageUrl;
                imageElement.alt = work.title;
                figcaption.innerHTML = work.title;

                figure.appendChild(imageElement);
                figure.appendChild(figcaption);
                gallery.appendChild(figure);

            });
            console.log(works);
        })

    .catch(error => {
        console.log(error);
    });
}

FILTERS.forEach(filter => {
    filter.addEventListener('click', event => {
        applyFilter(event);
    });
});

function applyFilter(event) {
    console.log('filtre appliqué');
    const selectedCategory = event.target.dataset.category;
    //console.log(selectedCategory);
    if (!works || !Array.isArray(works)) {
        return;
    }

    const filteredWorks = works.filter(work => {
        return selectedCategory === 'category_all' || work.categoryId === selectedCategory;
    
    });
    //console.log(filteredWorks);
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML= '';
    
    filteredWorks.forEach(work => {
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

    if (event) {
        console.log("l'objet event est défini");
    } else {
        console.log("l'objet event n'est pas défini");
    }

}
console.log();

document.addEventListener('DOMContentLoaded', showPics);