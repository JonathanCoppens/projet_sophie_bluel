const modifBtn = document.querySelector('.open-modal');

modifBtn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();

    //generateModal();

    generateModal('Gallerie photo', (body, footer) => {
        generateGalleryModal(body, footer);
    });

    console.log('bouton "modifier" : cliqué !');
});

// Generate modal

function generateModal(title, contentGenerator) {

    // Modal header

    const Header = document.createElement('div');
    Header.classList.add('modal-header')

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', closeModal);

    //modifBtn.removeEventListener('click', generateModal);
    Header.appendChild(closeBtn);

    const modalTitle = document.createElement('h3');
    modalTitle.innerText = title;
    Header.appendChild(modalTitle);

    /* const title = document.createElement('h3');
    title.innerText = 'Gallerie photo';
    Header.appendChild(title); */

    // Modal body

    const Body = document.createElement('div');
    Body.classList.add('modal-body');

    /* const gallery = document.createElement('div');
    gallery.classList.add('modal-gallery'); */

    /* works.forEach(work => {
        const image = document.createElement('img');
        image.src = work.imageUrl;
        image.alt = work.title;

        const figure = document.createElement('figure');
        figure.appendChild(image);
        gallery.appendChild(figure);
    });

    Body.appendChild(gallery); */

    // Call the funtion to generate specific modal content

    // Modal footer

    const Footer = document.createElement('div');
    Footer.classList.add('modal-footer');

    /* const hrDiv = document.createElement('div');
    hrDiv.classList.add('hr-container');
    Footer.appendChild(hrDiv); */

    const line = document.createElement('hr');
    line.classList.add('grey-line');
    Footer.appendChild(line);

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.appendChild(Header);
    modal.appendChild(Body);
    modal.appendChild(Footer);

    // Modal overlay

    const overlay = document.createElement('div');
    overlay.classList.add('modal-overlay');
    overlay.appendChild(modal);
    overlay.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal-overlay')) {
            closeModal();
            console.log('Cliqué à côté du modal');
        }
    });

    document.body.appendChild(overlay);

    contentGenerator(Body, Footer);
}

function generateGalleryModal(body, footer) {
    //generateModal();

    // Modal header

    const header = document.querySelector('.modal-header');

    /* const title = document.createElement('div');
    title.innerText = 'Galerie photo';
    header.appendChild(title); */

    // Modal footer
    const addBtn = document.createElement('button');
    addBtn.classList.add('add-btn');
    addBtn.innerText = 'Ajouter une photo';
    addBtn.addEventListener('click', () => {
        closeModal();
        //generateNewWorkModal();
    });

    //const footer = document.querySelector('modal-footer');
    footer.appendChild(addBtn);

    // Modal body

    const gallery = document.createElement('div');
    gallery.classList.add('modal-gallery');

    works.forEach(work => {
        const image = document.createElement('img');
        image.src = work.imageUrl;
        image.alt = work.title;

        const figure = document.createElement('figure');
        figure.appendChild(image);

        gallery.appendChild(figure);
    });

    body.appendChild(gallery);
    /* const title = document.createElement('h3');
    title.classList.add('title');
    title.innerText = 'Ajout photo';
    header.appendChild(title); */

    /* const header = document.querySelector('.modal-header');
    header.innerText = 'Modal gallery';
    header.appendChild(closeBtn); */

    /* const footer = document.createElement('div');
    footer.classList.add('modal-footer');
    footer.appendChild(addBtn);
    
    paretnElement.appendChild(footer); */
}


function closeModal() {
    const modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.remove();
}

modifBtn.addEventListener('click', closeModal);