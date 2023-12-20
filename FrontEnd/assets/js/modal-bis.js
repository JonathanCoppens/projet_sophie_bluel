const modifBtn = document.querySelector('.open-modal');

modifBtn.addEventListener('click', (event) => {
    //event.preventDefault();
    //event.stopImmediatePropagation();

    event.generateModal;

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
    //closeBtn.addEventListener('click', closeModal);

    Header.appendChild(closeBtn);

    modifBtn.removeEventListener('click', generateModal); 2

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
    overlay.addEventListener('click', (event) => {
        if (event.target.classlist.contains('modal-overlay')) {
            //closeModal();
        }
    });
}