const loginUrl = 'http://localhost:5678/api/users/login';

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('#connection');

form.addEventListener('submit', async (event) => {
  // bloque l'action prévue par l'évènement
  event.preventDefault();
  
  const response = await fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  });

  if(response.status === 200) {
    console.log(response);
    //location.href = '/';
  } else {
    alert('Erreur de connexion');
  }
});