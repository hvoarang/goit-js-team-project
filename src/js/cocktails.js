const getEl = el => document.querySelector(el);
import orangeHeart from '../images/svg/icons.svg';
import obj from './localStorage';
import { modalOpenClose } from './modalOpenClose';
const { save, load } = obj;
// let defoultStorageArr = [];
// function defoultStorage() {
//   console.log('зашло в defoultStorage');
//   const cocktailObj = {
//     id: 1,
//     name: 'none',
//     link: 'https',
//   };
//   defoultStorageArr.push(cocktailObj);
//   save('cocktails', defoultStorageArr);
// }
// defoultStorage();

export function createMarkup(obj) {
  // console.log('зашло в createMarkup');
  if (!obj) {
    emptyMarkUp();
    return;
  }

  createFullMarkup(obj);
}
const urlMobile = require('../images/emptyState.png');
const urlMobile2x = require('../images/emptyStateM2x.png');

function emptyMarkUp() {
  getEl('.product').innerHTML = '';
  const markup = `
  <p class="product__empty-state">
      Sorry, we didn't find any cocktail for you
    </p>
    <picture>
      <source
        srcset="
        ${urlMobile} 1x,
          ${urlMobile2x} 2x
        "
        media="(min-width:1200px)"
      />
      <source
        srcset="
        ${urlMobile} 1x,
          ${urlMobile2x} 2x
        "
        media="(min-width:768px)"
      />
      <source
        srcset="
        ${urlMobile} 1x,
          ${urlMobile2x} 2x
        "
        media="(max-width:767px)"
      />
      <img
        class="product__empty-image"
        src="${urlMobile}"
        alt="cocktail"
        width="280"
        height="308"
      />
    </picture>
  `;
  getEl('.product').insertAdjacentHTML('beforeEnd', markup);
}

export function createFullMarkup(obj) {
  // console.log('зашло в createFullMarkup');
  defoultMurkup();
  // console.log('после defoultMurkup');
  getEl('.product__list').innerHTML = '';

  let favoriteIdArr = favoritOrNotButton();
  // console.log(favoriteIdArr);
 

  const markup = obj
    .map(
      (cocktail, index) => `
      

      <li id="${cocktail.idDrink}" class="product__item">   
        <div class="product__wraper" data-num="${index}">

          <div class="product__image-part">
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
                class="product__image"
                src="${cocktail.strDrinkThumb}"
                alt="cocktail"
                width="280"
                height="280"
              />
            </picture>
          </div>

          <div class="product__description-part">
            <h3 class="product__subtitle">${cocktail.strDrink}</h3>
            <div class="product__buttons">
              <button data-="${
                cocktail.idDrink
              }" class="button button__learn-more" data-modal-cocktail-open >Learn more</button>
              <button data-="${
                cocktail.idDrink
              }" class="button button__add-or-remove">
              
              ${buttonTextF(favoriteIdArr, cocktail.idDrink)}
                <div class="product__heart-wraper">

                  <svg class="product__big-icon--${classOfSvgF(
                    favoriteIdArr,
                    cocktail.idDrink
                  )}" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
                    <use href="${orangeHeart}#bigHeart"></use>
                  </svg>
                  <svg class="product__small-icon--${classOfSvgF(
                    favoriteIdArr,
                    cocktail.idDrink
                  )}" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
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
  getEl('.product__list').insertAdjacentHTML('beforeEnd', markup);
  const ButLearnMoreArr = document.querySelectorAll(
    '.button.button__learn-more'
  );
  const ArrButCard = Array.from(ButLearnMoreArr);
  ArrButCard.map(but => {
    but.addEventListener('click', modalOpenClose);
  });
}
function buttonTextF(favoriteIdArr, id) {
  // console.log(favoriteIdArr);
  let buttonText = '';
  if (favoriteIdArr !== undefined) {
    if (favoriteIdArr.find(idFromStorage => idFromStorage === id)) {
      buttonText = 'Remove';
      // console.log('зашло в buttonTextF - if');
      return buttonText;
    }
  }
  // console.log('не зашло в buttonTextF - if');
  buttonText = 'Add to';
  return buttonText;
}

function classOfSvgF(favoriteIdArr, id) {
  let classOfSvg = '';
  if (favoriteIdArr !== undefined) {
    if (favoriteIdArr.find(idFromStorage => idFromStorage === id)) {
      // console.log('зашло в classOfSvgF');
      classOfSvg = 'remove';
      return classOfSvg;
    }
  }
  // console.log('не зашло в classOfSvgF - if');
  classOfSvg = 'add';
  return classOfSvg;
}

function defoultMurkup() {
  // console.log('зашло в defoultMurkup');
  getEl('.product').innerHTML = '';
  const defoultMurkup = `
  <h2 class="product__title">Cocktails</h2>
  <ul class="product__list"></ul>
  `;
  getEl('.product').insertAdjacentHTML('beforeEnd', defoultMurkup);
}

const productEl = document.querySelector('.container.product');
// console.dir(productEl);
if (productEl) {
  productEl.addEventListener('click', findCocktailData);
}

let cocktailId = 0;

function findCocktailData(event) {
  // console.log('зашло в findCocktailData');
  cocktailId = event.target.attributes[0].nodeValue;
  takeDataFromCocktailMarkUp(cocktailId);
  // функция изменяющая внутреннее содержание кнопки
  addOrRemoveMurkup(event);
  return cocktailId;
}

function takeDataFromCocktailMarkUp(cocktailId) {
  // console.log('зашло в takeDataFromCocktailMarkUp');
  if (+cocktailId) {
    const cocktailFroClick = document.querySelector(`[id="${cocktailId}"]`);
    const cocktailName =
      cocktailFroClick.children[0].childNodes[3].childNodes[1].innerText;
    const cocktailLink =
      cocktailFroClick.children[0].childNodes[1].childNodes[1].childNodes[7]
        .currentSrc;
    createObj(cocktailName, cocktailLink);
  }
}

const favoriteArr = [];

if (load('cocktails') && load('cocktails').length > 0) {
  favoriteArr.push(...load('cocktails'));
}

function createObj(cocktailName, cocktailLink) {
  let arrFromStorage = load('cocktails');

  const cocktailObj = {
    id: cocktailId,
    name: cocktailName,
    link: cocktailLink,
  };
  favoriteArr.push(cocktailObj);
  // console.log(favoriteArr);
  save('cocktails', favoriteArr);
}

function favoritOrNotButton() {
  // console.log('зашло в favoritOrNotButton');
  let cocktailsInStorage = load('cocktails');
  // console.log(cocktailsInStorage);
  if (cocktailsInStorage && cocktailsInStorage.length > 0) {
    // console.log(cocktailsInStorage);
    const findFavoritsCocktailArr = cocktailsInStorage.map(
      cocktail => cocktail.id
    );
    return findFavoritsCocktailArr;
  }
}

function addOrRemoveMurkup(event) {
  // console.log('зашло в addOrRemoveMurkup');
  if (event.target.innerText === 'Add to') {
    event.target.innerHTML = `Remove
    <div class="product__heart-wraper">
      <svg class="product__big-icon--remove" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
        <use href="${orangeHeart}#bigHeart"></use>
      </svg>
      <svg class="product__small-icon--remove" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
        <use href="${orangeHeart}#smallHeart"></use>
      </svg>
    </div>`;
  } else if (event.target.innerText === 'Remove') {
    event.target.innerHTML = `Add to
    <div class="product__heart-wraper">
      <svg class="product__big-icon--add" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
        <use href="${orangeHeart}#bigHeart"></use>
      </svg>
      <svg class="product__small-icon--add" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
        <use href="${orangeHeart}#smallHeart"></use>
      </svg>
    </div>`;
  }
}
