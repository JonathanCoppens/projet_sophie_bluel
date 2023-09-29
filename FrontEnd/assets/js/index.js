const allBtn = document.querySelector('#all-btn');
const objectBtn = document.querySelector('#object-btn');
const appartBtn = document.querySelector('#appart-btn');
const hotelRestaurantBtn = document.querySelector('#hotel-restaurant-btn');

const url = 'http://localhost:5678/api/works';

fetch(url)
  .then(response => response.json())
  .then(works => {
    // Trier les éléments de la galerie en fonction du type d'ouvrage
    works.sort((workA, workB) => workA.type.localeCompare(workB.type));

    // Créer une fonction pour trier les éléments de la galerie en fonction du bouton cliqué
    function sortGallery(button) {
      // Obtenir le type d'ouvrage sélectionné
      const type = button.getAttribute('data-type');

      // Filtrer les éléments de la galerie en fonction du type d'ouvrage sélectionné
      const filteredWorks = works.filter(work => work.type === type);

      // Afficher les éléments de la galerie filtrés
      displayGallery(filteredWorks);
    }

    // Ajouter un gestionnaire d'événements à chaque bouton de la barre de navigation
    allBtn.addEventListener('click', () => sortGallery(allBtn));
    objectBtn.addEventListener('click', () => sortGallery(objectBtn));
    appartBtn.addEventListener('click', () => sortGallery(appartBtn));
    hotelRestaurantBtn.addEventListener('click', () => sortGallery(hotelRestaurantBtn));

    // Afficher la galerie initiale
    displayGallery(works);
  })
  .catch(error => {
    console.log(error);
  });

// Fonction pour afficher la galerie
function displayGallery(works) {
  // ...
}
