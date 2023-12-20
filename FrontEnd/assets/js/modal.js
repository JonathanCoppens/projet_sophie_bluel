const modifBtn = document.querySelector('.open-modal');

class CloseBtn {
      constructor() {
            this.btn = document.createElement('button');
            this.btn.classList.add('close-btn');
            this.btn.innerHTML = '&times;';
            this.btn.addEventListener('click', closeModal);
      }
};

// open modal function

modifBtn.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();

      generateModal();
});

/* modifBtn.addEventListener('click', () => {
      generateModal();
}); */

function generateModal() {
      // modal header

      const Header = document.createElement('div');
      Header.classList.add('modal-header');

      const closeBtn = document.createElement('button');
      closeBtn.classList.add('close-btn');
      closeBtn.innerHTML = '&times;';
      closeBtn.addEventListener('click', closeModal);

      modifBtn.removeEventListener('click', generateModal);
      Header.appendChild(closeBtn);

      const title = document.createElement('h3');
      title.innerText = 'Gallerie photo';
      Header.appendChild(title);


      // modal body

      const Body = document.createElement('div');
      Body.classList.add('modal-body');

      // modal footer

      const Footer = document.createElement('div');
      Footer.classList.add('modal-footer');

      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.appendChild(Header);
      modal.appendChild(Body);
      modal.appendChild(Footer);

      //modal header
      const overlay = document.createElement('div');
      overlay.classList.add('modal-overlay');
      //overlay.style.display = 'block';
      overlay.appendChild(modal);
      overlay.addEventListener('click', event => {

            if (event.target.classList.contains('modal-overlay')) {
                  closeModal();
            }
      });

      document.body.append(overlay);
};

function generateGalleryModal() {
      generateModal();

      // modal header

      const closeBtn = document.createElement('button');
      closeBtn.classList.add('close-btn');
      closeBtn.innerHTML = '&times;';
      modifBtn.removeEventListener('click', generateModal);

      const header = document.querySelector('.modal-header');
      header.innerText = 'Galerie photo';
      header.append(closeBtn);

      // footer

      const addBtn = document.createElement('button');
      addBtn.classList.add('add-btn');
      addBtn.innerText = 'Ajouter une photo';
      addBtn.addEventListener('click', event => {
            closeModal();
            generateNewWorkModal();
      });

      const footer = document.querySelector('.modal-footer');
      footer.append(addBtn);

      // modal body

      const gallery = document.createElement('div');
      gallery.classList.add('modal-gallery');

      works.forEach(work => {
            const image = document.createElement('image');
            image.src = work.imageUrl;
            image.alt = work.title;

            const figure = document.createElement('figure');
            figure.appendChild(image);

            gallery.appendChild(figure);
      });

      const body = document.querySelector('.modal-body');
      body.append(gallery);

      generateGalleryModal();
}

function generateNewWorkModal() {

      generateModal();

      // modal header
      const closeBtn = document.createElement('button');
      closeBtn.classList; add()
      closeBtn.innerHTML = '&times;';
      closeBtn.addEventListener('click', closeModal);

      const header = document.querySelector('.modal-header');
      header.innerText = 'Ajout photo';
      header.append(closeBtn);

}

// close modal function

function closeModal() {
      const modalOverlay = document.querySelector('.modal-overlay');
      modalOverlay.style.display = 'none';

      const close = document.querySelector('.close-btn');
      close.removeEventListener('click', closeModal);

      // attempt to click next to modal
      modalOverlay.addEventListener('click', () => {
            modifBtn.removeEventListener('click', closeModal);
      });

      modifBtn.addEventListener('click', generateModal);
}