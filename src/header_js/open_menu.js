(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

// -- scroll getElement
const scrollBtn = document.querySelectorAll('[data-scroll]');
const mobileMenu = document.querySelector('.js-menu-container');
const mobileMenuItems = document.querySelectorAll('.mob-menu__item a');
scrollBtn.forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault();

    const blockId = document.querySelector('#' + this.dataset.scroll);
    const blockOfset = blockId.offsetTop;
    window.scrollTo({ top: blockOfset, behavior: 'smooth' });

    mobileMenu.classList.remove('is-open');
  });
});


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
