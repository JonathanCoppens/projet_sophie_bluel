const modal = document.querySelector(".modal-btn");
//console.log(modal.value);

modal.addEventListener("click", () => {
    const body = document.body;
    
    /* const xmarkIcon = document.createElement('i'); */
    const closeImg = document.createElement('img');
    const closeModal = document.createElement('button');
    const bodyModal = document.createElement('div');
    const modalOverlay = document.createElement('div');
    /* const closeModalBtn = document.querySelector('.close-modal'); */

    /* xmarkIcon.classList.add('fa-solid', 'fa-xmark') */
    closeImg.classList.add('material-symbols-outlined');
    closeModal.classList.add('close-modal');
    bodyModal.classList.add('body-modal');
    modalOverlay.classList.add('modal-overlay');
    closeImg.src = "./assets/icons/close-cross.png";


    //closeModal.innerText = 'x';
    
    /* closeModalBtn.appendChild(xmarkIcon); */
    closeModal.appendChild(closeImg)
    bodyModal.appendChild(closeModal);
    modalOverlay.appendChild(bodyModal);
    body.appendChild(modalOverlay);

})