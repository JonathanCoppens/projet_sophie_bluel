/*   async function login(email, password) {
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
  }); */

/*   const loginURL = 'http://localhost:5678/api/users/login';

  async function login(email, password) {
    const response = await fetch(loginURL, {
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
    const email = document.querySelector('[type = email]').value;
    const password = document.querySelector('[type = password]').value;
  
    try {
      const user = await login(email, password);
  
      window.location.href = '/';
    } catch (error) {
      document.querySelector('#error').textContent = error.message;
    }
  });   */

  /******/

  // login.js
/* document.getElementById('connection').addEventListener('submit', function(event) {
  event.preventDefault();

  // Récupérer les valeurs du formulaire
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var errorElement = document.getElementById('error');

  // Vérifier les informations d'identification (exemple simple)
  if (email === 'votre@email.com' && password === 'votreMotDePasse') {
      // Authentification réussie, rediriger l'utilisateur ou effectuer d'autres actions
      window.location.href = 'page-de-redirection.html';
  } else {
      // Afficher un message d'erreur en cas d'informations d'identification incorrectes
      errorElement.textContent = 'Adresse e-mail ou mot de passe incorrect.';
  }
});
 */

const form = document.querySelector('#connection');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const loginUrl = 'http://localhost:5678/api/users/login';

  const response = await fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Constent-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if(response.status === 200) {
    location.href = '/';
  } else {
    alert('Erreur de connexion');
  }
});