const modal = document.querySelector(".modal-btn");
//console.log(modal.value);

modal.addEventListener("click", () => {
    const body = document.body;
    
    // creating modal elements
    const closeImg = document.createElement('img'); // remplacer par &times et 'p'
    const modalTitle = document.createElement('h3');
    const gallery = document.querySelector('gallery');
    const bodyModal = document.createElement('div');
    const modalOverlay = document.createElement('div');

    // copy gallery's elements
    const galleryCopy = gallery.cloneNode(true);

    // closing modal with the 'X' button
    closeImg.addEventListener('click', () => {
        modalOverlay.parentNode.removeChild(modalOverlay);
    });

    modalTitle.classList.add('modal-title');
    closeImg.classList.add('material-symbols-outlined');
    bodyModal.classList.add('body-modal');
    modalOverlay.classList.add('modal-overlay');

    modalTitle.innerText = 'Gallerie photo';
    closeImg.src = "./assets/icons/close-cross.png";

    // iteration on all gallery's images

    console.log(works);

    galleryCopy.querySelectorAll('figure').forEach((figure) => {
        // each img copying
        const imageCopy = figure.querySelector('img').cloneNode(true);

        // add class to resize
        imageCopy.classList.add('modal-image');

        // add img to modal
        bodyModal.appendChild(imageCopy);
    })
    bodyModal.appendChild(closeImg);
    bodyModal.prepend(modalTitle);
    modalOverlay.appendChild(bodyModal);
    body.appendChild(modalOverlay);

});

// rajouter un formulaire type image regarder dans le backend route upload image
// mettre les éléments dans le bon ordre 
// utiliser prepend pour mettre l'élément en premier après le parent
// voir entité html

for (let i = 0; i < works.length; i++) {
    console.log(works[i]);
}