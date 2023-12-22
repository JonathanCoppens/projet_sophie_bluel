const modifBtn = document.querySelector('.open-modal');

modifBtn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();

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
    Header.appendChild(closeBtn);

    const modalTitle = document.createElement('h3');
    modalTitle.innerText = title;
    Header.appendChild(modalTitle);

    // Modal body

    const Body = document.createElement('div');
    Body.classList.add('modal-body');

    // Call the funtion to generate specific modal content

    // Modal footer

    const Footer = document.createElement('div');
    Footer.classList.add('modal-footer');

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

    // Modal header

    const header = document.querySelector('.modal-header');

    // Modal footer
    const addBtn = document.createElement('button');
    addBtn.classList.add('add-btn');
    addBtn.innerText = 'Ajouter une photo';
    addBtn.addEventListener('click', () => {
        closeModal();
        generateNewWorkModal();
    });

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
}

function generateNewWorkModal() {
    generateModal('Ajout photo', (body, footer) => {

        // Modal header

        const header = document.createElement('div');
        header.classList.add('modal-header');

        const back = document.createElement('button');
        back.classList.add('back-arrow');
        back.src = './assets/icons/fleche-gauche.png';
        header.appendChild(back);

        const title = document.createElement('h3');
        title.innerText = 'Ajout photo';
        header.appendChild(title);

        // Modal body

        /* const bodyContent = document.createElement('div');
        bodyContent.classList.add('modal-body'); */

        // Add container

        const addContainer = document.createElement('div');
        addContainer.classList.add('add-container');
        body.appendChild(addContainer);

        const picIcon = document.createElement('img');
        picIcon.classList.add('icon');
        picIcon.src = './assets/icons/logo-img.png'
        addContainer.appendChild(picIcon);
        
        const addPic = document.createElement('button');
        addPic.classList.add('add-pic');
        addPic.innerText = '+ Ajouter photo';
        addContainer.appendChild(addPic);

        const addDetails = document.createElement('p');
        addDetails.classList.add('add-details');
        addDetails.innerText = 'jpg, png, : 4Mo max';
        addContainer.appendChild(addDetails);

        // Modal form

        const formContainer = document.createElement('div');
        formContainer.classList.add('form-div');
        body.appendChild(formContainer);

        const form = document.createElement('form');
        formContainer.appendChild(form);

        const labelInput = document.createElement('label');
        labelInput.innerText = 'Titre';
        form.appendChild(labelInput);

        const formInput = document.createElement('input');
        form.appendChild(formInput);

        const labelSelect = document.createElement('label');
        labelSelect.innerText = 'Catégorie';
        form.appendChild(labelSelect);

        const selectForm = document.createElement('select');
        selectForm.classList.add('select');
        
        let options = ['Objets', 'Appartements', 'Hôtels & restaurants'];
        for (let i = 0; i < options.length; i++) {
            let optionElement = document.createElement('option');
            optionElement.text = options[i];
            optionElement.value = 'option' + (i + 1);
            selectForm.appendChild(optionElement);

            console.log(options[i]);
        }

        form.appendChild(selectForm);

        // add-container
        // form

        // Modal footer

        
        /* const footerContent = document.createElement('div');
        footerContent.classList.add('modal-footer'); */

        /* body.appendChild(bodyContent);
        footer.appendChild(footerContent); */
    });
}

function closeModal() {
    const modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.remove();
}

modifBtn.addEventListener('click', closeModal);