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

  const instructionSection = document.querySelector('.instruction-section');

  // todo list div create
  instructionSection.style.display = 'none';

  // Function to generate choice list HTML based on iconSrc array
  function generateChoiceList() {
    const iconSrc = [
      'GitHub', 'Frontend Mentor', 'Twitter', 'LinkedIn', 'YouTube',
      'Facebook', 'Twitch', 'Dev.to', 'Codewars', 'Codepen',
      'freeCodeCamp', 'GitLab', 'Hashnode', 'Stack Overflow'
    ];

    return iconSrc.map(iconName => `
      <div href="#${iconName.toLowerCase().replace(/\s+/g, '-')}" class="icon-item">
          <img src="./assets/images/icon-${iconName.toLowerCase().replace(/\s+/g, '-')}.svg" alt="${iconName} icon" />
          <h4>${iconName}</h4>
      </div>
  `).join('');
  }

  // Function to add a new link container with dynamic choice list
  function addNewLinkContainer() {
    // Create a container element
    const container = document.createElement('div');
    container.classList.add('link-lists');

    // Construct the inner HTML for the container
    container.innerHTML = `
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
              <img src="" alt="" class="choosed-icon" />
              <h4 class="choosed-text">Choose link</h4>
              <img src="./assets/images/icon-chevron-down.svg" alt="" />
          </button>
          <div class="choice-list">
              ${generateChoiceList()}
          </div>
      </div>
      <div class="link-platform">
            <h4 class="platform-names">link</h4>
            <div class="link-inputField">
              <input type="text" placeholder="e.g https:" class="link-input" />
            </div>
          </div>
  `;

    // Add event listener for the dropdown-choose button
    const dropdownChooseBtn = container.querySelector('.dropdown-choose');
    dropdownChooseBtn.addEventListener('click', function (event) {
      event.stopPropagation();
      const choiceList = container.querySelector('.choice-list');
      choiceList.style.display = choiceList.style.display === 'flex' ? 'none' : 'flex';
    });

    // Add event listeners for each choice item
    const choiceItems = container.querySelectorAll('.choice-list .icon-item');
    choiceItems.forEach(item => {
      item.addEventListener('click', function (event) {
        event.preventDefault();
        const choosedIcon = container.querySelector('.choosed-icon');
        const choosedText = container.querySelector('.choosed-text');

        const imgElement = item.querySelector('img');
        const textElement = item.querySelector('h4');

        const imgSrc = imgElement.getAttribute('src');
        choosedIcon.src = imgSrc;
        choosedText.textContent = textElement.textContent;

        const choiceList = container.querySelector('.choice-list');
        choiceList.style.display = 'none';
      });
    });

    // Insert the container at the top of the .add-link-section
    const containerMome = document.querySelector('.add-link-section');
    const firstContainer = containerMome.firstChild;
    containerMome.insertBefore(container, firstContainer);
  }

  // Example usage: Generating and inserting a new link list container
  addNewLinkContainer();


}








