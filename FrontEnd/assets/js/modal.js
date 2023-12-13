/* const modalBtn = document.querySelector('.modal-btn');

modalBtn.addEventListener('click', () => {
    // modal.style.display ='block';
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

    // Loop on work elements 
    works.forEach(work => {
    // add items to gallery 
        const figure = document.createElement('figure');
        const image = document.createElement('img');
        image.src = work.imageUrl;
        image.alt = work.title;
        figure.appendChild(image);
        gallery.appendChild(figure);
    });

    // close button
    const closeModal = document.createElement('p'); //bchanger btn attention css !!!
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

    // click add pictures to open an over modal
    
    addPicturesBtn.addEventListener('click', () => {       
            // Remove existing modal content
            const modalContainer = document.querySelector('.modal-container');
            modalContainer.innerHTML = '';
        
            // Add pic container to body
            const addPicContainer = document.querySelector('.add-pic-container');
            addPicContainer.style.display = 'block';

            // Add close button
            closeModal.addEventListener('click', () => {
                const modalOverlay = document.querySelector('.modal-overlay');
                modalOverlay.parentNode.removeChild(modalOverlay);
            });
            addPicContainer.appendChild(closeModal);

            // Add left arrow element                               !!!!!!!! NOT FINISH !!!!!!!!
            const leftArrow = document.createElement('img');        //back button
            leftArrow.classList.add('left-arrow');
            leftArrow.src = 'assets/icons/fleche-gauche.png'
            addPicContainer.appendChild(leftArrow); 
            
            leftArrow.addEventListener('click', () => {
                console.log('Flèche gauche cliquée');

                //const modalOverlay = document.querySelector('modal-overlay');
              addPicContainer.parentNode.removeChild(addPicContainer)

              modalOverlay.style.display = 'block';
              
            });
            
            // Re-append the modified modal container to the body
            modalContainer.appendChild(closeModal);
            modalContainer.appendChild(addPicContainer);
            bodyModal.appendChild(modalContainer);
            body.appendChild(modalOverlay);
        
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

function generateGalleryModal(){
    
    // generate base modal
    const modal = generateModal();

    works.forEach(work => {
        // add items to gallery 
            const figure = document.createElement('figure');
            const image = document.createElement('img');
            image.src = work.imageUrl;
            image.alt = work.title;
            figure.appendChild(image);
            modal.querySelector('.modal-body').appendChild(figure);        
        //create element
        //gallery.append(element);
    });
    //add work btn
    const btn = document.createElement('button');
    function closeBtn() {    
        btn.addEventListener('click', function() {
            // close modal
            // close button
            const closeModal = document.createElement('p'); // changer btn attention css !!!
            closeModal.classList.add('close-modal');
            closeModal.innerHTML = '&times';
            closeModal.addEventListener('click', () => {
            modalOverlay.parentNode.removeChild(modalOverlay);
            });
            // create addwork modal
        });
    }
    //modal.queryselector('modal-body');
    modal.append(gallery); 

    // addcloseBtn
    closeBtn();

    return modal;
};

function generateAddWorkModal(){
    
    const modal = generateModal();

    // back btn
    const backBtn = document.createElement('button');
    backBtn.textContent = 'Retour à la gallerie';

    backBtn.addEventListener('click', () => {
        // close modal
        modal.remove();
        // create gallery modal
        generateGalleryModal();
    });

    modal.querySelector('.modal-header').appendChild(backBtn);

    //modalHeader.append(btn);
    // ...

    //create form
    const form = document.addEventListener('form-container');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    modal.querySelector('.modal-body').appendChild(form);
    //console.log(form);

}

function generateModal() {

    // modal Header

    // modal body

    // modal footer

    // modal

    const modal = document.createElement('div');
    modal.classList.add('.modal');

    // overlay
    const overlay = document.createElement('div');
    overlay.classList.add('.overlay');
    overlay.append(modal);
    //titre
    const modalTitle = document.createElement('h3');
    modalTitle.classList.add('modal-title');
    modalTitle.innerText = 'Galerie photo';

    //bouton close modal
    closeBtn();

    return modal
}  */

/*******/

const btn = document.querySelector('.modal-btn');

function generateModalOverlay() {
  const overlay = document.createElement('div');
  overlay.classList.add('modal-overlay');

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close-modal');
  closeBtn.innerHTML = '&times';

  overlay.appendChild(closeBtn);
  return overlay;
}

function generateModalContent() {
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');

  const modalTitle = document.createElement('h3');
  modalTitle.classList.add('modal-title');
  modalTitle.innerText = 'Galerie photo';

  const gallery = document.createElement('div');
  gallery.classList.add('modal-gallery');

  const closeBtn = document.createElement('p');
  closeBtn.classList.add('close-modal');
  closeBtn.innerHTML = '&times';

  const addPictureBtn = document.createElement('button');
  addPictureBtn.classList.add('pictures-btn');
  addPictureBtn.innerText = 'Ajouter une photo';

  gallery.appendChild(addPictureBtn);

  modalContainer.appendChild(modalTitle);
  modalContainer.appendChild(gallery);

  return modalContainer;
}

const modalOverlay = generateModalOverlay();
const modalContainer = generateModalContent();

btn.addEventListener('click', () => {
  const overlay = document.body.appendChild(modalOverlay);
  document.body.appendChild(modalContainer);

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      overlay.parentNode.removeChild(overlay);
    }
  });
});

addPictureBtn.addEventListener('click', () => {
  // Implement logic for adding photos to the gallery
  works.forEach(work => {
    // add items to gallery 
        const figure = document.createElement('figure');
        const image = document.createElement('img');
        image.src = work.imageUrl;
        image.alt = work.title;
        figure.appendChild(image);
        modal.querySelector('.modal-body').appendChild(figure);        
    //create element
    //gallery.append(element);
});
});
