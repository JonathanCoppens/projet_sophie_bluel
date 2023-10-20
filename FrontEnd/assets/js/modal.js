const URL = 'http://localhost:5678/api/works';
console.log(URL);

const FILTERS = document.querySelectorAll('[rel=js-filter]'); // select all elements with this attribute
console.log(FILTERS);

let works = [];

async function httpGet(URL) {
  const response = await fetch(URL);
  console.log(response);
  return await response.json();
}
console.log(httpGet(URL));

function applyFilter() {
  const filteredWorks = works.filter(work => work.categoryId);
    console.log(applyFilter);

  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
    console.log(gallery);

  filteredWorks.forEach(work => {

    const figure = document.createElement('figure');
    figure.classList.add = (`category_${work.categoryId}`);
    /* figure.setAttribute('data-category', work.categoryId); */
    

    const imageElement = document.createElement('img');
    const figcaption = document.createElement('figcaption');
    
    imageElement.src = work.imageUrl;
    imageElement.alt = work.title;
    figcaption.innerHTML = work.title;

    figure.appendChild(imageElement);
    figure.appendChild(figcaption);
    gallery.appendChild(figure);
    console.log(figure);

  });
}

async function showPics() {
    await httpGet(URL);

  applyFilter(); // Display all works by default.
}

// Add event listeners to filter buttons.
FILTERS.forEach(filter => {
  filter.addEventListener('click', () => {
    applyFilter(filter.dataset.category);
  });
});

// Call the showPics() function when the DOM is loaded.
document.addEventListener('click', applyFilter);
//console.log(showPics);
document.addEventListener('DOMContentLoaded', showPics);
console.log(applyFilter);