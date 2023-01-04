// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');

//   const toggleMenu = () => {
//     const isMenuOpen =
//     openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();



(() => {
  const menuBtnRef = document.querySelector(".js-open-menu");
  const mobileMenuRef = document.querySelector(".js-menu-container");
  const closeMenuBtn = document.querySelector('.js-close-menu');
  
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });

closeMenuBtn.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });




})();

// -- scroll getElement
// const scrollBtn = document.querySelectorAll('[data-scroll]');
// const mobileMenu = document.querySelector('.js-menu-container');
// const mobileMenuItems = document.querySelectorAll('.mob-menu__item a');
// scrollBtn.forEach(function (item) {
//   item.addEventListener('click', function (event) {
//     event.preventDefault();

//     const blockId = document.querySelector('#' + this.dataset.scroll);
//     const blockOfset = blockId.offsetTop;
//     window.scrollTo({ top: blockOfset, behavior: 'smooth' });

//     mobileMenu.classList.remove('is-open');
//   });
// });


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



// const modalButtons = document.querySelectorAll('.js-menu-container');
// const allModals = document.querySelectorAll('[data-modal]');
// const modalCloseButtons = document.querySelectorAll('[data-modal-close]');

// // привязка модального окна к кнопке его вызова
// modalButtons.forEach(function (item) {
//   item.addEventListener('click', function () {
//     // привязываем к кнопке вызова модального окна значение дата атрибута которое соответствует id модалки
//     const modalId = document.querySelector('#' + this.dataset.modalButton);
//     modalId.classList.remove('is-hidden');

//     // отмена закрытия модального окна кликом по его контенту
//     // modalId
//     //   .querySelector('.modal-window')
//     //   .addEventListener('click', function (event) {
//     //     event.stopPropagation();
//     //   });
//   });
// });

// // закрытие модального окна кликом по кнопке внутри его "Закрыть окно"
// modalCloseButtons.forEach(function (item) {
//   item.addEventListener('click', function () {
//     const modal = this.closest('[data-modal]');
//     modal.classList.add('is-hidden');
//   });
// });

// // закрытие модального окна кликом по фейду
// // allModals.forEach(function (item) {
// //   item.addEventListener('click', function () {
// //     this.classList.add('is-hidden');
// //   });
// // });
