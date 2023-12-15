const loginUrl = 'http://localhost:5678/api/users/login';

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginForm = document.querySelector('#connection');

loginForm.addEventListener('submit', async (event) => {
  
  // prevent default behavior
  event.preventDefault();
  
  const response = await fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: emailInput.value,
      password: passwordInput.value
    })
  });

  if(response.status === 200) {
    alert('Bienvenu ');
  } else {    
    alert('Email ou mot de pass incorrect');
  }

const user = {
  name: response.json().name,
  email: response.json().email,
  
  authToken: response.json().authToken
};
console.log(user);

localStorage.setItem("user", JSON.stringify(user));

// redirect to main page
location.href = "index.html";

// stay on the login page till the password and email adress are both uncorrect
  if (response.status !== 200) {
    location.reload();
  } 
});