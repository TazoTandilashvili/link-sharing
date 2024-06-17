'use strict'
// *sections
const loginSection = document.getElementById('login-section');
const signUpSection = document.getElementById('sign-up');
// TODO login function
// const loginButton = document.getElementById('login-button');
// const emailLogin = document.getElementById('email-login');
// const passwordLogin = document.getElementById('password-login');
// loginButton.addEventListener('click', function () {
//   const email = emailLogin.value;
//   const password = passwordLogin.value;
//   console.log(email, password)
// });
// TODO create section open
function showSignUpSection() {
  loginSection.style.display = 'none';
  signUpSection.style.display = 'block';
};
// TODO get bet to the login page
function backTologin() {
  loginSection.style.display = 'block';
  signUpSection.style.display = 'none';
};


