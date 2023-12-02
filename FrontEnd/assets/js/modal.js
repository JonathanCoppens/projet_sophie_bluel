const modal = document.querySelector(".modal-btn");

modal.addEventListener('click', () => {
    const body = document.body;

    // overlay modal
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modal-overlay');

    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            modalOverlay.parentNode.removeChild(modalOverlay);
        }
    });

    // body modal
    const bodyModal = document.createElement('div');
    bodyModal.classList.add('body-modal');

    // modal container
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');

    // gallery
    const gallery = document.createElement('div');
    gallery.classList.add('modal-gallery');

    works.forEach(work => {
    // add items to gallery 
        const figure = document.createElement('figure');
        const imageElement = document.createElement('img');
        imageElement.src = work.imageUrl;
        imageElement.alt = work.title;
        figure.appendChild(imageElement);
        gallery.appendChild(figure);
    });

    // close button
    const closeModal = document.createElement('p');
    closeModal.classList.add('close-modal');
    closeModal.innerHTML = '&times';
    closeModal.addEventListener('click', () => {
        modalOverlay.parentNode.removeChild(modalOverlay);
    });

    // modal title
    const modalTitle = document.createElement('h3');
    modalTitle.classList.add('modal-title');
    modalTitle.innerText = 'Galerie photo';

    // gallery contaitner
    const galleryContainer = document.createElement('div');
    galleryContainer.classList.add('gallery-container');

    // separation line
    const separationLine = document.createElement('hr');
    separationLine.classList.add('separation-line');
    
    // add picture button
    const addPicturesBtn = document.createElement('button');
    addPicturesBtn.classList.add('pictures-btn');
    addPicturesBtn.innerText = 'Ajouter une photo';

    addPicturesBtn.addEventListener('click', () => {
        modalContainer.parentNode.removeChild(modalContainer);

        const leftArrow = document.createElement('img');
        leftArrow.classList.add('left-arrow');
        leftArrow.scr = 'asset/icons/fleche-gauche.png';

        bodyModal.appendChild(leftArrow);
        modalOverlay.appendChild(bodyModal);
    });

    galleryContainer.appendChild(gallery);

    
    modalContainer.appendChild(modalTitle);
    modalContainer.appendChild(galleryContainer);
    modalContainer.appendChild(separationLine);
    modalContainer.appendChild(addPicturesBtn);

    bodyModal.appendChild(closeModal);
    bodyModal.appendChild(modalContainer)
    modalOverlay.appendChild(bodyModal);
    body.appendChild(modalOverlay);
});