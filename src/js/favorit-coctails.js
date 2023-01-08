import { defArreyCard } from './random-default-coctails';
// import { createFullMarkup } from './cocktails';
import obj from './localStorage';
import { renderTextAndHeart } from './cocktails';
import orangeHeart from '../images/svg/icons.svg';
const { save, load } = obj;
const objFromFav = load('cocktails');

const butQwe = document.querySelectorAll('.qweqwe');
// console.log()
const heroEl = document.querySelector('.hero');
const cocSec = document.querySelector('.section-cocktails');
const pagSec = document.querySelector('.paginator-sections');
const butOpCocArr = Array.from(butQwe);
butOpCocArr.map(but => {
  but.addEventListener('click', showFavorite);
});
// addEventListener('click', showFavorite);

function showFavorite() {
  cocSec.style.display = 'none';
  pagSec.style.display = 'none';
  heroEl.innerHTML = '';
  heroEl.insertAdjacentHTML(
    'afterbegin',
    `
<body>
    <div class="container favorite"></div>
        <h1 class="favorite__title">Favorite cocktails</h1>
        <ul class="favorite__list">
        
        </ul>
    </div>

    <script type="module" src="/src/index.js"></script>
</body>

   `
  );

  const favCont = document.querySelector('.favorite__list');

  console.log(objFromFav);

  favCont.insertAdjacentHTML('afterbegin', createFullMarkup(objFromFav));
}
function createFullMarkup(obj) {
  return obj
    .map(
      cocktail =>

        `
        <li id="${cocktail.idDrink}" class="favorite__item">   
          <div class="favorite__wraper">


          <div class="favorite__image-part">
            <picture>
              <source
                srcset="
                ${cocktail.strDrinkThumb} 1x,
                ${cocktail.strDrinkThumb} 2x
                "
                media="(min-width:1200px)"
              />
              <source
                srcset="
                ${cocktail.strDrinkThumb} 1x,
                ${cocktail.strDrinkThumb} 2x
                "
                media="(min-width:768px)"
              />
              <source
                srcset="
                ${cocktail.strDrinkThumb} 1x,
                ${cocktail.strDrinkThumb} 2x
                "
                media="(max-width:767px)"
              />
              <img
                class="favorite__image"
                src="${cocktail.strDrinkThumb}"
                alt="cocktail"
                width="280"
                height="280"
              />
            </picture>
          </div>

          <div class="favorite__description-part">
            <h3 class="favorite__subtitle">${cocktail.strDrink}</h3>
            <div class="favorite__buttons">
              <button data-="${
                cocktail.idDrink
              }" class="button button__learn-more" data-modal-cocktail-open >Learn more</button>
              <button data-="${
                cocktail.idDrink
              }" class="button button__add-or-remove">
              
              ${'Remove'}
                <div class="favorite__heart-wraper">

                  <svg class="favorite__big-icon--${'remove'}" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
                    <use href="${orangeHeart}#bigHeart"></use>
                  </svg>
                  <svg class="favorite__small-icon--${'remove'}" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
                    <use href="${orangeHeart}#smallHeart"></use>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </li>
      
  `
    )
    .join('');
}
