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
  
  } else {
    alert('Erreur de connexion');
  }

const user = {
  name: response.json().name,
  email: response.json().email,
  
  authToken: response.json().authToken
};

localStorage.setItem("user", JSON.stringify(user));

location.href = "index.html";

// stay on the login page till the password and email adress are both uncorrect
if (response.status !== 200) {
  location.reload();
}
});
