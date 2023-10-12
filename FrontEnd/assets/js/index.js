const URL = 'http://localhost:5678/api/works';

const FILTERS = document.querySelectorAll('[rel=js-filter]');
console.log(FILTERS);

const filters = document.querySelector('.filters');
console.log(filters);

const gallery = document.querySelector('.gallery');
console.log(gallery);

const works = [];
console.log(works);

function Gallery() {
  // create a var to catch loaded pictures
  const loadedImages = new Set();
  console.log(loadedImages); // log only picture's url

  fetch(URL)
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
          console.log(loadedImages); // log all picture's infos
        }
      });
    })
    .catch(error => {
      console.log(error);
    });
}
document.addEventListener('DOMContentLoaded', Gallery);

