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
  const platformMome = document.querySelector('.choice-list');
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
    return `
        <div href="#${iconName.toLowerCase().replace(/\s+/g, '-')}" class="icon-item">
            <img src="./assets/images/icon-${iconName.toLowerCase().replace(/\s+/g, '-')}.svg" alt="${iconName} icon" />
            <h4>${iconName}</h4>
        </div>
    `;
  }
  function addNewLinkContainer() {
    const choiceListContent = iconSrc.map(iconName => generateIconSrc(iconName)).join('');

    const container = `
    <div class="link-lists">
        <div class="link-property">
            <div class="link-1">
                <img src="./assets/images/icon-drag-and-drop.svg" alt="" />
                <h3 class="link-count">Link#1</h3>
            </div>
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
                ${choiceListContent}
            </div>
        </div>
    </div>
`;


    // Insert the container into the DOM
    const containerMome = document.querySelector('.add-link-section');
    containerMome.insertAdjacentHTML('afterbegin', container);
  }

  // Example: Add multiple containers



  iconSrc.forEach(iconSrcs => {
    console.log(iconSrcs,)
  })
  // Construct the HTML structure using innerHTML
  for (let i = 0; i < 3; i++) {
    addNewLinkContainer();
  }

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








