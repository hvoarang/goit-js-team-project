import { fetchApi } from "./fetch";
import { url_by_first_letter } from "./fetch";
import { createMarkup } from "./cocktails";


function makeid() {
  let text = '';
  let possible =
    'cdgijklnpv4';

  for (let i = 0; i < 1; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
console.log(makeid());
const screenD = window.matchMedia('(max-width: 1280px)');
const screenM = window.matchMedia('(max-width: 480px)');
const screenT = window.matchMedia('(max-width: 768px)');
let quantityCard = 0;


  fetchApi(url_by_first_letter, makeid())
    .then(obj => {
      // додати функцію рендору сторінки, параметром передати obj
      createMarkup(obj.drinks);
      let divEl = document.querySelectorAll('.product__wraper');
     console.log(divEl);
      if (screenM.matches) {
        quantityCard = Array.from(divEl).slice(0,3);
         for (let el of quantityCard) {
           el.style.display = 'block';
           console.log(el);
         }
      } else if (screenT.matches){
         quantityCard = Array.from(divEl).slice(0,6);
          for (let el of quantityCard) {
            el.style.display = 'block';
            console.log(el);
          }
      } else {
         quantityCard = Array.from(divEl).slice(0,9);
          for (let el of quantityCard) {
            el.style.display = 'block';
            console.log(el);
          }
      }
       
    })
    .catch(err => {
      console.log(err);
    });
