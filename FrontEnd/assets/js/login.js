"use strict";

const url = "http://localhost:5678/api/users/login";

var email = localStorage.getItem("email");
var password = localStorage.getItem("password");

const btn =  document.getElementById('submit-log-btn');

btn.addEventListener('click', (event) => {
    event.preventDefault();

    // Récup  des données du formulaire

    fetch(url) //Vérification adresse serveur
    .then (response => response.json()) //Récupération info serveur
    .then (data => {
        console.log(data); // Data doit représenter le token émis par le serveur

        

    });

});

/*******/

/*    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4OTU4MzY1MSwiZXhwIjoxNjg5NjcwMDUxfQ.xdvwYjLFwUth24oZcIP8Lhsy8303kNAd6AXz40RcqEs";

    localStorage.setItem("token", token);

    const myHeaders = new Headers ({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + token,
    });

    fetch('http://localhost:5678/api/users/login', {
        method:'GET',
        headers: myHeaders,
    })

    .then (response => response.json())
    .then(data => {
        console.log(data);
    })

    .catch(error => {
        console.log('Une erreur s\'est produite', error);
    });

import {value} from "./storage.json";
value(userID, token, email, password)
    .then(() => {
        console.log('Upload réussis');
    })
    .catch((error) => {
        console.log('Erreur lors de l\'upload', error);
    }); */

    /*****/

    document.getElementById("login").addEventListener("submit", function (e) {
        e.preventDefault();

        var xhr = new XMLHttpRequest ();
        xhr.onreadystatechange = function () {
            console.log(this);
        };

        xhr.open("GET", "/async/script")

        return false;
    });