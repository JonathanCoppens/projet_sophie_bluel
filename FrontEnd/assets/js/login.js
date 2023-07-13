"use strict";

document.addEventListener('DOMContentLoaded', function() {
    fetch('./Backend/routes/package.json')
        .then(response => response.json())
        .then(data => {                     
            console.log(data);
        })
        .catch(error =>{
            console.log('Une erreur s\'est produite', error);
        });
});

import SwaggerClient from 'swagger-client';
const client = await SwaggerClient('Content-Type: application/json');

const response = await client.apis.default.usersLogin ({
    body: {
        
      }
});