const worksUrl = 'http://localhost:5678/api/works';
console.log(worksUrl);

const categoriesUrl = 'http://localhost:5678/api/categories';
console.log(categoriesUrl);

const FILTERS = document.querySelectorAll('[rel=js-filter]');
console.log(FILTERS);

const filters = document.querySelector('.filters');
console.log(filters);

const gallery = document.querySelector('.gallery');
console.log(gallery);

const works = [];
console.log(works);

let categories = [];

function Gallery() {
  // create a var to catch loaded pictures
  const loadedImages = new Set();
  console.log(loadedImages); // log only picture's url

  fetch(worksUrl)
    .then(response => response.json())
    .then(works => {
      works.forEach(work => {
        // verify if picture is already loaded
        if (!loadedImages.has(work.imageUrl)) {
          // create an img element
          const imageElement = document.createElement('img');

          // load the picture
          imageElement.src = work.imageUrl;

          // add picture to gallery
          gallery.appendChild(imageElement);

          // set picture as loaded
          loadedImages.add(work.imageUrl);
          //console.log(loadedImages); // log all picture's infos
        }
      });
    })
    .catch(error => {
      console.log(error);
    });

  return loadedImages;
}

function filterWorksByCategory(works, category) {
  return works.filter(work => work.categoryId === category.id);
}

function sortWorks(works) {
  works.sort((work1, work2) => work1.title.localeCompare(work2.title));

  return works;
}

document.addEventListener('DOMContentLoaded', () => {
  // get the works array from the Gallery function
  const worksArray = Gallery();
  console.log(worksArray);

  // get the categories array
  fetch(categoriesUrl)
    .then(response => response.json())
    .then(categories => {
      this.categories = categories;
    })
    .catch(error => {
      console.log(error);
    });

  // sort the works array by title
  const sortedWorks = sortWorks(worksArray);

  // empty the gallery
  gallery.innerHTML = '';

  // update gallery with sortd pictures
  sortedWorks.forEach(work => {
    const imageElement = document.createElement('img');
    imageElement.src = work.imageUrl;
    gallery.appendChild(imageElement);
  });
});

FILTERS.forEach(filter => {
  filter.addEventListener('click', function () {
    // get clicked button category
    const category = this.dataset.category;

    // filter the works array by category
    const filteredWorks = filterWorksByCategory(worksArray, category);

    // empty the gallery
    gallery.innerHTML = '';

    // update gallery with filtered and sorted pictures
    filteredWorks.forEach(work => {
      const imageElement = document.createElement('img');
      imageElement.src = work.imageUrl;
      gallery.appendChild(imageElement);
    });
  });
});
