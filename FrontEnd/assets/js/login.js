/* // .env gitignore comment récupérer le token ? pour ne pas afficher les données sensibles
const data = `{
    "userId": 1,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5NDc1ODQ1NywiZXhwIjoxNjk0ODQ0ODU3fQ.7XlBR7cF3NEyXIcNRGQNT1ojoXPV6Py1VSLLYhqMUzM"
}`;

const jsonString = JSON.stringify(data); // mise en chaîne de caractère desdonnées JSON

const fs = require("fs");

fs.writeFile("./credentials.json", jsonString, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Le fichier a été créé");
    }
})

const parseData = JSON.parse(data);

const token = parseData.token;

const url = "http://localhost:5678/api-docs/";

const request = fetch(url);

request.then((response) => {
    if (response.status === 200) {
        const data = response.json();
        
        console.log("Connected");
    }
    if (response.status === 401) {
        console.log("Not Authorized");
    } 
    if (response.status === 404) {
        console.log("User not found");
    }
}) */



/* const data = {
    email: "sophie.bluel@test.tld",
    password: "S0phie"
  };

  
  
  const response = await fetch("http://localhost:5678/api-docs/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  
  if (response.status === 200) {
    const data = response.json();
    console.log("Connected");
  } else if (response.status === 401) {
    console.log("Not Authorized");    
  } else (response.status === 404) {
    console.log("User not found");
  } */

  async function login(email, password) {
    const response = await fetch('http://localhost:5678/api-docs/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Login failed with status code ${response.status}`);
    }
  }

  document.querySelector('#submit-log-btn').addEventListener('click', async () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    try {
      const user = await login(email, password);

      window.location.href = '/';
    } catch (error) {
      document.querySelector('#error').textContent = error.message;
    }
  });