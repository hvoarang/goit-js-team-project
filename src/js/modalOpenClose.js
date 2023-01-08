import { ArrFetch } from "./pagination";
import { defArreyCard } from "./random-default-coctails";
import {createCocktailModalCard} from './modal'
// console.log(defArreyCard);
export const backdropEl = document.querySelector('[data-modal-cocktail]');
const cocktailModalCard = document.querySelector('.modal-cocktail');


export let cardInfo = {};

export function modalOpenClose(e) {
  // const backdropEl = document.querySelector('[data-modal-cocktail]');
  backdropEl.classList.toggle('is-hidden2');
  
  clearModal(cocktailModalCard);

  let idCard = e.target.attributes[0].value;
  cardInfo =
    defArreyCard[0].find(obj => obj.idDrink === idCard) ||
    ArrFetch[0].find(obj => obj.idDrink === idCard);
// console.log('cardInfo :>> ', cardInfo);
  
  createCocktailModalCard(cardInfo);
  
  // if (closeBtn) {
  //   closeBtn.addEventListener('click', () => {
  //     backdropEl.classList.add('is-hidden2');
  //     cocktailModalCard.innerHTML = '';
  //   });
  // };
  
  const closeBtn = document.querySelector('[data-modal-cocktail-close]');
  closeBtn.addEventListener('click', backdropElToggle);
  // clearModal(cocktailModalCard);
}

function backdropElToggle() {
  backdropEl.classList.toggle('is-hidden2');
};

function clearModal(modalCard) {
    modalCard.innerHTML = '';
};

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