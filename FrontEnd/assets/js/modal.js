const modifBtn = document.querySelector('.open-modal');

// open modal function
function generateModal() {
    modifBtn.addEventListener('click', () => {

        // modal header
        const modalOverlay = document.querySelector('.modal-overlay');
        modalOverlay.style.display = 'flex';

        const modal = document.querySelector('.modal');

        const modalHeader = document.querySelector('.modal-header');
        
        const close = document.querySelector('.close-btn');
        close.addEventListener('click', closeModal);

        modifBtn.removeEventListener('click', generateModal);

        const arrow = document.querySelector('.arrow');
        arrow.style.display = 'none';

        const title = document.querySelector('.title');
        title.innerText = 'Gallerie photo';

        // body modal
        const modalBody = document.querySelector('.modal-body');
        

        generateGalleryModal();
        // footer modal
        const line = document.querySelector('hr');

        const addBtn = document.querySelector('.add-btn');
        addBtn.innerText = 'Ajouter une photo'
        
        modal.appendChild(modalHeader);
        modal.appendChild(modalBody);
        modal.appendChild(line);
        modal.appendChild(addBtn);
        modalOverlay.appendChild(modal);
    });
}

function generateGalleryModal() {
    const modalGallery = document.querySelector('.modal-gallery');

    works.forEach(work => {
        const figure = document.createElement('figure');
        const image = document.createElement('img');
        image.src = work.imageUrl;
        image.alt = work.title;
        figure.appendChild(image);
        modalGallery.appendChild(figure);
    });
}

// close modal function
function closeModal() {
    const modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.style.display = 'none';

    const close = document.querySelector('.close-btn');
    close.removeEventListener('click', closeModal);

    modifBtn.addEventListener('click', generateModal);
}

generateModal();