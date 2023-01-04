import { fetchApi } from "./fetch";
import { url_by_first_letter } from "./fetch";
import { createMarkup } from "./cocktails";


function makeid() {
  let text = '';
  let possible =
    'acdfgijklnptv134678';

  for (let i = 0; i < 1; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(makeid());
fetchApi(url_by_first_letter, makeid())
  .then(obj => {
    // додати функцію рендору сторінки, параметром передати obj
    createMarkup(obj.drinks);
     let divEl = document.querySelectorAll('.product__wraper')
     console.log(divEl);
     for (let el of Array.from(divEl).slice(-4)) {
       el.style.display = 'block';
       console.log(el);
     }
  
  })
  .catch(err => {
    console.log(err);
  });
