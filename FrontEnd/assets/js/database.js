const email = document.querySelector("#email");
const password = document.querySelector("#password");

const emailValue = "sophie.bluel@test.tld";
const passwordValue = "S0phie";

localStorage.setItem("email", emailValue);
localStorage.setItem("password", passwordValue)

if(email.value === emailValue && password.value === passwordValue) {
    
}