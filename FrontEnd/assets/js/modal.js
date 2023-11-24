const icoModif = document.querySelector(".ico-modif");

const modal = document.querySelector(".modal-btn");
//console.log(modal.value);

modal.addEventListener("click", () => {
    const body = document.body;
    // new div to create an overlay for modal
    const overlay = document.createElement('div');
    // create the class to use it in the DOM
    overlay.classList.add('modal-overlay');
    // style for positionning size and color
    overlay.style.backgroundColor = '#f0f0f0';
    overlay.style.position = 'fixed';
    overlay.style.top = "0";
    overlay.style.left =" 0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.opacity = "0.5";
    // disable current page
    body.style.pointerEvents = 'none';

    body.appendChild(overlay);

    modal.style.display = 'block';
})