import { ArrFetch } from "./pagination";
import { defArreyCard } from "./random-default-coctails";
import {createCocktailModalCard} from './modal'
// console.log(defArreyCard);
export const backdropEl = document.querySelector('[data-modal-cocktail]');
export const cocktailModalCard = document.querySelector('.modal-cocktail');


export let cardInfo = {};

export function modalOpenClose(e) {
  backdropEl.classList.toggle('is-hidden2');
  clearModal(cocktailModalCard);

  let idCard = e.target.attributes[0].value;
  cardInfo =
    defArreyCard[0].find(obj => obj.idDrink === idCard) ||
    ArrFetch[0].find(obj => obj.idDrink === idCard);
    createCocktailModalCard(cardInfo);
    const closeBtn = document.querySelector('[data-modal-cocktail-close]');
   closeBtn.addEventListener('click', backdropElToggle);
  ;
}


export function backdropElToggle() {
  backdropEl.classList.toggle('is-hidden2');
};

export function clearModal(modalCard) {
    modalCard.innerHTML = '';
};

