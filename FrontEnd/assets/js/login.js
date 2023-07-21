"use strict";

const r = fetch('http://localhost:5678/api/users/login');
console.log(r);

const btn = document.getElementById('submit-btn');
btn.addEventListener('click', (event) => {
    event.preventDefault()

    alert('Connecté !');

}
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4OTU4MzY1MSwiZXhwIjoxNjg5NjcwMDUxfQ.xdvwYjLFwUth24oZcIP8Lhsy8303kNAd6AXz40RcqEs";

    localStorage.setItem("token", token);

    const myHeaders = new Headers ({
        'Content-Type': 'application/json',
        'Autorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4OTU4MzY1MSwiZXhwIjoxNjg5NjcwMDUxfQ.xdvwYjLFwUth24oZcIP8Lhsy8303kNAd6AXz40RcqEs'
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

});

import {value} from "./storage.json";
value(userID, token, email, password)
    .then(() => {
        console.log('Upload réussis');
    })
    .catch((error) => {
        console.log('Erreur lors de l\'upload', error);
    });
