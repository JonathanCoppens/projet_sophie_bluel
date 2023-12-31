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
    const userData = await response.json();
    
    const user = {
      email: emailInput.value,      
      authToken: userData.token
    };
   
  localStorage.setItem("user", JSON.stringify(user));
  alert("Bienvenue !");  


  } else {    
    alert('Email ou mot de pass incorrect');
  }  


// redirect to main page
location.href = "index.html";

// stay on the login page till the password and email adress are both uncorrect
  if (response.status !== 200) {
    location.reload();
  } 
});