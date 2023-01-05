import { fetchApi } from './fetch';
import { url_by_first_letter } from './fetch';
import { createMarkup } from './cocktails';

function makeid() {
  let text = '';
  let possible = 'cdgijklnpv4';

  for (let i = 0; i < 1; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
const screenD = window.matchMedia('(min-width: 1280px)');
const screenM = window.matchMedia('(max-width: 768px)');
const screenT = window.matchMedia('(max-width: 1280px)');
let quantityCard = 0;
console.log(makeid());
fetchApi(url_by_first_letter, makeid())
  .then(obj => {
    createMarkup(obj.drinks);
    let divEl = document.querySelectorAll('.product__wraper');
    if (screenM.matches) {
      quantityCard = Array.from(divEl).slice(0, 3);
      showCard(quantityCard);
    } else if (screenT.matches) {
      quantityCard = Array.from(divEl).slice(0, 6);
      showCard(quantityCard);
    } else if (screenD.matches) {
      quantityCard = Array.from(divEl).slice(0, 9);
      showCard(quantityCard);
    }
  })
  .catch(err => {
    console.log(err);
  });

function showCard(arr) {
  for (let el of arr) {
    el.style.display = 'block';
  }
}
