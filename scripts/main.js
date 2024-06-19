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

// add new link
const addnewLink = function () {
  const containerMome = document.querySelector('.add-link-section');
  const instructionSection = document.querySelector('.instruction-section');

  // todo list div create
  instructionSection.style.display = 'none';

  const iconSrc = [
    'GitHub',
    'Frontend Mentor',
    'Twitter',
    'LinkedIn',
    'YouTube',
    'Facebook',
    'Twitch',
    'Dev.to',
    'Codewars',
    'Codepen',
    'freeCodeCamp',
    'GitLab',
    'Hashnode',
    'Stack Overflow'
  ];


  function generateIconSrc(iconName) {
    return `./assets/images/icon-${iconName}.svg`;
  }
  iconSrc.forEach(iconSrcs => {
    console.log(iconSrcs,)
  })
  // Construct the HTML structure using innerHTML
  const container = `
    <div class="link-lists">
          <div class="link-property">
            <h3 class="link-1">
              <img src="./assets/images/icon-drag-and-drop.svg" alt="" />Link#1
            </h3>
            <button class="remove-link">Remove</button>
          </div>
          <div class="platform-choice">
            <h4 class="platform-names">Platform</h4>
            <button class="dropdown-choose">
              <img src="" alt="" id="choosed-icon" />
              <h4 id="choosed-text">Choose link</h4>
              <img src="./assets/images/icon-chevron-down.svg" alt="" />
            </button>
            <div class="choice-list">
              <div href="#github">
                <img src="./assets/images/icon-github.svg" alt="github-icon" />
                <h4>GitHub</h4>
              </div>
              <div href="#frontend-mentortemas">
                <img
                  src="./assets/images/icon-frontend-mentor.svg"
                  alt="icon-frontend-mentor"
                />
                <h4>Frontend Mentor</h4>
              </div>
              <div href="#twitter">
                <img
                  src="./assets/images/icon-twitter.svg"
                  alt="icon-twitter"
                />
                <h4>twitter</h4>
              </div>
            </div>
          </div>
          <div class="link-platform">
            <h4 class="platform-names">link</h4>
            <div class="link-inputField">
              <input type="text" placeholder="e.g https:" class="link-input" />
            </div>
          </div>
        </div>
  `;
  containerMome.insertAdjacentHTML('afterbegin', container);

  // todo remove button functionally
  const removeLinks = document.querySelectorAll('.remove-link');
  removeLinks.forEach(removeLink => {
    removeLink.addEventListener('click', function (event) {
      console.log('asdasd')
      if (event.target.classList.contains('remove-link')) {
        // Find the closest parent div with class 'container' and remove it
        var container = event.target.closest('.link-lists');
        if (container) {
          container.remove();
        }
      }
    })
  })

  // todo dropdown choose link
  const dropdownChoosBtns = document.querySelectorAll('.dropdown-choose');
  const choiceList = document.querySelectorAll('.choice-list');
  const aTags = document.querySelectorAll('.choice-list div');
  dropdownChoosBtns.forEach(dropdownChoosBtn => {
    dropdownChoosBtn.addEventListener('click', function () {

      choiceList.forEach(choiceLists => {
        choiceLists.style.display = "flex";
      });

      // Show only the corresponding choice list
      const currentChoiceList = choiceLists[index];
      currentChoiceList.style.display = "flex";

      aTags.forEach(aTag => {
        aTag.addEventListener('click', function (event) {
          event.preventDefault();
          const choosedIcon = document.getElementById('choosed-icon');
          const choosedText = document.getElementById('choosed-text');

          const imgElement = aTag.querySelector('img');
          const textElement = aTag.querySelector('h4');

          const imgSrc = imgElement.getAttribute('src');
          choosedText.textContent = textElement.textContent
          choosedIcon.src = imgSrc;
          currentChoiceList.style.display = "none";
        });
      });
    });
  })

}








