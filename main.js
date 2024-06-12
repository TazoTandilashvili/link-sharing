'use strict'

// *create account section 
const loginSection = document.getElementById('login-section');
const createAccountSection = document.getElementById('sign-up"');
const createSection = function () {
  loginSection.style.display = 'none';
  createAccountSection.style.display = 'block'
};
//TODO create account logic

const createBtn = document.getElementById('create-button');
const signUpEmail = document.getElementById('signUpMail');
const signUpPass = document.getElementById('password');
createBtn.addEventListener('click', function () {
  const email = signUpEmail.value;
  const password = signUpPass.value
  console.log(email, password);
})
