const modal = document.querySelector(".modal-btn");
//console.log(modal.value);

modal.addEventListener("click", () => {
    const body = document.body;
    
    // creating modal elements
    const closeImg = document.createElement('img');
    const gallery = document.querySelector('.gallery');
    const bodyModal = document.createElement('div');
    const modalOverlay = document.createElement('div');
    
    // copy gallery's elements
    const galleryCopy = gallery.cloneNode(true);
    galleryCopy.style.display = 'none';

    // 
    closeImg.addEventListener('click', () => {
        modalOverlay.parentNode.removeChild(modalOverlay);
    });

    closeImg.classList.add('material-symbols-outlined');
    galleryCopy.classList.add('modal-gallery', 'scroller');
    bodyModal.classList.add('body-modal');
    modalOverlay.classList.add('modal-overlay');

    closeImg.src = "./assets/icons/close-cross.png";

    bodyModal.appendChild(closeImg)
    bodyModal.appendChild(galleryCopy)
    modalOverlay.appendChild(bodyModal);
    body.appendChild(modalOverlay);

})