const modal = document.querySelector(".modal-btn");
//console.log(modal.value);

modal.addEventListener("click", () => {
    const body = document.body;
    // new div to create an overlay for modal
    const closeBtn = document.createElement("button");
    const bodyModal = document.createElement("div");
    const overlay = document.createElement('div');
    // create the class to use it in the DOM
    closeBtn.classList.add('close-modal');
    bodyModal.classList.add('body-modal');
    overlay.classList.add('modal-overlay');

    closeBtn.innerText = 'X';

    bodyModal.appendChild(closeBtn);
    overlay.appendChild(bodyModal);
    body.appendChild(overlay);

    //modal.style.display = 'block';
})

