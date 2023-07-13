"use strict";

document.addEventListener('DOMContentLoaded', function() {
    fetch('package.json')
        .then(response => response.json())
        .then(data => {                     
            console.log(data);
        })
        .catch(error =>{
            console.log('Une erreur s\'est produite', error);
        });
});

const body = document.querySelector('body');

const banner = document.getElementById("banner-edit-mode");
banner.textContent = "Mode édition";
banner.style.textAlign = "center";
/* banner.style.display = "none"; */
banner.style.background = "black";
banner.style.color = "white";

body.appendChild(banner);

console.log(banner);