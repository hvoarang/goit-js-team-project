
export function modalOpenClose() {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-cocktail-open]'),
    closeModalBtn: document.querySelector('[data-modal-cocktail-close]'),
    modal: document.querySelector('[data-modal-cocktail]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  // refs.openModalBtn.addEventListener('click', remove);
  // refs.closeModalBtn.addEventListener("click", add);

  // function remove() {
  //   refs.modal.classList.remove('is-hidden');
  // }

  // function add() {
  //   refs.modal.classList.add('is-hidden');
  // }
}
modalOpenClose();