
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
}
modalOpenClose();
	
	function modalOpenCloseIngredient() {
	  const refs = {
	    openModalBtn2: document.querySelector('[data-modal-ingredient-open]'),
	    closeModalBtn2: document.querySelector('.modal-ingredient__backdrop'),
	    modal2: document.querySelector('[data-modal-ingredient]'),
	  };
	
	  refs.openModalBtn2.addEventListener('click', toggleModal);
	  refs.closeModalBtn2.addEventListener('click', toggleModal);
	
	function toggleModal() {
	    refs.modal2.classList.toggle('is-hidden');
	  }
}
	modalOpenCloseIngredient();