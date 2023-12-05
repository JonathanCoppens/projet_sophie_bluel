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

    // click add pictures to make 
    
    addPicturesBtn.addEventListener('click', (event) => {
        if (event.target === addPicturesBtn) {        
            // Remove existing modal content
            const modalContainer = document.querySelector('.modal-container');
            modalContainer.innerHTML = '';
        
            const addPicContainer = document.querySelector('.add-pic-container');
            
            // Add close button
            closeModal.addEventListener('click', () => {
                const modalOverlay = document.querySelector('.modal-overlay');
                modalOverlay.parentNode.removeChild(modalOverlay);
            });
            addPicContainer.appendChild(closeModal);

            // left arrow element                               !!!!!!!! NOT FINISH !!!!!!!!
            const leftArrow = document.createElement('img');
            leftArrow.classList.add('left-arrow');
            leftArrow.src = 'assets/icons/fleche-gauche.png'
            addPicContainer.appendChild(leftArrow);           
            
            // Re-append the modified modal container to the body
            modalContainer.appendChild(closeModal);
            modalContainer.appendChild(addPicContainer);
            bodyModal.appendChild(modalContainer);
        }
    });

    // add elements to DOM
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