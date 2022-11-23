let sectionModal = document.querySelector('.section-modal');
let closeIcon = document.querySelector('.modal-close');
let contactCTA = document.querySelector('.contact-cta');
let successMessage = document.querySelector('.success-message');

function openModal() {
  let bottomHeader = document.querySelector('.bottom-header')
  sectionModal.style.visibility = "visible"
  sectionModal.style.opacity = "1"
  bottomHeader.classList.remove("toggle-menu");
}
function closeModal() {
  sectionModal.style.visibility = "hidden"
  sectionModal.style.opacity = "0"
}

function sendMessage() {
  event.preventDefault();
  let name = document.querySelector('#modal-name');
  let email = document.querySelector('#modal-email');
  let message = document.querySelector('#modal-message');
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (name.value != '' && email.value != '' && email.value.match(mailformat) && message.value != '') {
    successMessage.style.visibility = "visible"
    successMessage.style.opacity = "1"

    setTimeout(() => {
      sectionModal.style.visibility = "hidden"
      sectionModal.style.opacity = "0"
      successMessage.style.opacity = "0"
      successMessage.style.visibility = "hidden"
    }, 2000);

  }
}



// ---------------------- Sticky Bottom Header  ----------------------
window.onscroll = function () { bottomFixedFunction() };

var bottomHeader = document.querySelector('.bottom-header')
var mainBody = document.body
var sticky = mainBody.offsetTop;

function bottomFixedFunction() {
  if (window.pageYOffset > sticky) {
    mainBody.classList.add("sticky");
  } else {
    mainBody.classList.remove("sticky");
  }
}

// ------------------------------  Open Menu  --------------------
function openMenu() {
  // const mainNavigation = document.querySelector('.main-navigation');
  let bottomHeader = document.querySelector('.bottom-header')
  bottomHeader.classList.toggle("toggle-menu")
}