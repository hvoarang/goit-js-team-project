// import { сreateСocktailModalCard } from "./modal";

import { ArrFetch } from "./pagination";
import { defArreyCard } from "./random-default-coctails";
import {сreateСocktailModalCard} from './modal'
// console.log(defArreyCard);
export const backdropEl = document.querySelector('[data-modal-cocktail]');
const cocktailModalCard = document.querySelector('.modal-cocktail');

export let cardInfo = {};

export function modalOpenClose(e) {
  // const backdropEl = document.querySelector('[data-modal-cocktail]');
  const closeBtn = document.querySelector('[data-modal-cocktail-close]');
 
  let idCard = e.target.attributes[0].value;

  backdropEl.classList.remove('is-hidden2');
  
  cardInfo =
    defArreyCard[0].find(obj => obj.idDrink === idCard) ||
    ArrFetch[0].find(obj => obj.idDrink === idCard);
// console.log('cardInfo :>> ', cardInfo);
  сreateСocktailModalCard(cardInfo);
  closeBtn.addEventListener('click', () => {
    backdropEl.classList.add('is-hidden2');
    cocktailModalCard.innerHTML = '';
  });
  
}


  //   const refs = {
  //     // openModalBtn: document.querySelector('[data-modal-cocktail-open]'),
  //     closeModalBtn: document.querySelector('[data-modal-cocktail-close]'),

  //     modal: document.querySelector('[data-modal-cocktail]'),
  //   };
  // console.log(refs.closeModalBtn);
  // console.log(refs.modal);

  //   refs.closeModalBtn.addEventListener('click', toggleModal);

  //   function toggleModal() {
  //     refs.modal.classList.toggle('is-hidden');
  //   }
// }
// modalOpenClose();

// 	function modalOpenCloseIngredient() {
// 	  const refs = {
// 	    openModalBtn2: document.querySelector('[data-modal-ingredient-open]'),
// 	    closeModalBtn2: document.querySelector('.modal-ingredient__backdrop'),
// 	    modal2: document.querySelector('[data-modal-ingredient]'),
// 	  };

// 	  refs.openModalBtn2.addEventListener('click', toggleModal);
// 	  refs.closeModalBtn2.addEventListener('click', toggleModal);

// 	function toggleModal() {
// 	    refs.modal2.classList.toggle('is-hidden');
// 	  }
// }
// 	modalOpenCloseIngredient();
