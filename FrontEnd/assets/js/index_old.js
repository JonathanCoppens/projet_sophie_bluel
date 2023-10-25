/* const URL =  'http://localhost:5678/api/works';
console.log(URL);
const FILTERS = document.querySelectorAll('[rel=js-filter]'); // select all elements with this attribute
console.log(FILTERS);


let works =[];

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


function applyFilter(event) {
    console.log('filtre appliqué');
    const selectedCategory = event.target.dataset.category;
    //console.log(selectedCategory);
    if (!works || !Array.isArray(works)) {
        return;
        
    }

    const filteredWorks = works.filter(work => {
        return selectedCategory === 'all' || work.categoryId == selectedCategory;
      });
    
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

document.addEventListener('DOMContentLoaded', showPics); */



/* const URL = 'http://localhost:5678/api/works';
//console.log(URL);

const FILTERS = document.querySelectorAll('[rel=js-filter]'); // select all elements with this attribute
//console.log(FILTERS);

let works = [];

async function httpGet(URL) {
  const response = await fetch(URL);
  //console.log(response);
  return await response.json();
  
}
//console.log(httpGet(URL));

FILTERS.forEach(filter => {
    filter.addEventListener('click', () => {
      applyFilter(filter.dataset.category);
      console.log(applyFilter);
    });
  });

function applyFilter(category) {
  const filteredWorks = works.filter(work => category == 'all' || work.categoryId == category);
    //console.log(applyFilter);

  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
    //console.log(gallery);

  filteredWorks.forEach(work => {
    const figure = document.createElement('figure');
    figure.classList.add(`category_${work.categoryId}`);
    /* figure.setAttribute('data-category', work.categoryId); */ 

    const imageElement = document.createElement('img');    
    imageElement.src = work.imageUrl;
    imageElement.alt = work.title;

    const figcaption = document.createElement('figcaption');
    figcaption.innerHTML = work.title;
    
    figure.appendChild(imageElement);
    figure.appendChild(figcaption);    
    gallery.appendChild(figure);
    //console.log(figure);

  });
}


/* window.addEventListener('load', async () => {
  try {
    works = await httpGet(URL);
    applyFilter(); // Afficher toutes les œuvres par défaut après le chargement complet de la page
  } catch (error) {
    console.error("Une erreur s'est produite lors du chargement des œuvres :", error);
  }
}); */



(async () => {
    works = await httpGet(URL);
    applyFilter();
})(); */