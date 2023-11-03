const URL = 'http://localhost:5678/api/works';
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
    imageElement.loading = "lazy";
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

window.addEventListener('load', async () => {
  try {
    works = await httpGet(URL);
    //console.log(works);
    applyFilter(); // Afficher toutes les œuvres par défaut après le chargement complet de la page
    //console.log(applyFilter);
  } catch (error) {
    console.error("Une erreur s'est produite lors du chargement de la gallerie :", error);
  }
});