const modifBtn = document.querySelector('.open-modal');

modifBtn.addEventListener('click', () => {
    /* event.preventDefault();
    event.stopImmediatePropagation(); */

    generateModal();

    console.log('bouton "modifier" : cliqué !');
});

// Generate modal

function generateModal() {

    // Modal header

    const Header = document.createElement('div');
    Header.classList.add('modal-header')

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', closeModal);

    modifBtn.removeEventListener('click', generateModal);
    Header.appendChild(closeBtn);

    const title = document.createElement('h3');
    title.innerText = 'Gallerie photo';
    Header.appendChild(title);

    // Modal body

    const Body = document.createElement('div');
    Body.classList.add('modal-body')

    // Modal footer

    const Footer = document.createElement('div');
    Footer.classList.add('modal-footer');

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.appendChild(Header);
    modal.appendChild(Body);
    modal.appendChild(Footer);

    // Modal header

    const overlay = document.createElement('div');
    overlay.classList.add('modal-overlay');
    // have to add a style in css
    overlay.appendChild(modal);
    overlay.addEventListener('click', event => {
        if (event.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    });

    document.body.append(overlay);
}

/* function generateGalleryModal() {
    generateModal();

    // Modal header

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';
    modifBtn.removeEventListener('click', generateModal);

    const header = document.querySelector('modal-header');
    
} */

function closeModal() {
    const modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.remove();
    
    //const close = document.querySelector('.close-btn');
    //close.addEventListener('click', closeModal);
    
    modalOverlay.addEventListener('click', () => {
        modifBtn.removeEventListener('click', closeModal);
    });

    modifBtn.addEventListener('click', generateModal);
}