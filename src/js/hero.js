import { fetchApi } from './fetch';
import { url_by_first_letter } from './fetch';
import { ItcCustomSelect } from './hero-select-m';
// import { createMarkup } from './cocktails';
import { takeArreyREsult } from './pagination';

// const ListEl = document.querySelector('.hero__list');

// ListEl.addEventListener('click', takeCoctails);

export function takeCoctails(e) {
  const target = e.target;
  if (e.target !== e.currentTarget) {
    fetchApi(url_by_first_letter, target.textContent)
      .then(obj => {
        // додати функцію рендору сторінки, параметром передати obj
        // createMarkup(obj.drinks);
        // console.log(obj);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

const select2 = new ItcCustomSelect('#select-2', {
  name: 'letter',
  targetValue: 'A',
  options: [
    ['A', 'A'],
    ['B', 'B'],
    ['C', 'C'],
    ['D', 'D'],
    ['E', 'E'],
    ['F', 'F'],
    ['G', 'G'],
    ['H', 'H'],
    ['I', 'I'],
    ['J', 'J'],
    ['K', 'K'],
    ['L', 'L'],
    ['M', 'M'],
    ['N', 'N'],
    ['O', 'O'],
    ['P', 'P'],
    ['Q', 'Q'],
    ['R', 'R'],
    ['S', 'S'],
    ['T', 'T'],
    ['U', 'U'],
    ['V', 'V'],
    ['W', 'W'],
    ['X', 'X'],
    ['Y', 'Y'],
    ['Z', 'Z'],
    ['1', '1'],
    ['2', '2'],
    ['3', '3'],
    ['4', '4'],
    ['5', '5'],
    ['6', '6'],
    ['7', '7'],
    ['8', '8'],
    ['9', '9'],
    ['0', '0'],
  ],
});

const parentEl = document.querySelectorAll('.itc-select__options')[0];
parentEl.addEventListener('click', takeArreyREsult);
