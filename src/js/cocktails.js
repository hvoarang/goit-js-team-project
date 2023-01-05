const getEl = el => document.querySelector(el);
import orangeHeart from '../images/svg/icons.svg';
import obj from './localStorage';
const { save, load } = obj;
let defoultStorageArr = [];
function defoultStorage() {
  console.log('зашло в defoultStorage');
  const cocktailObj = {
    id: 1,
    name: 'none',
    link: 'https',
  };
  defoultStorageArr.push(cocktailObj);
  save('cocktails', defoultStorageArr);
}
defoultStorage();

export function createMarkup(obj) {
  console.log('зашло в createMarkup');
  if (!obj) {
    emptyMarkUp();
    return;
  }

  createFullMarkup(obj);
}

function emptyMarkUp() {
  getEl('.product').innerHTML = '';
  const markup = `
  <p class="product__empty-state">
      Sorry, we didn't find any cocktail for you
    </p>
    <picture>
      <source
        srcset="
          ./images/empty-state@1x.png 1x,
          ./images/empty-state@2x.png 2x
        "
        media="(min-width:1280px)"
      />
      <source
        srcset="
          ./images/empty-state@1x.png 1x,
          ./images/empty-state@2x.png 2x,
        "
        media="(min-width:768px)"
      />
      <source
        srcset="
          ./images/empty-state@m1x.png 1x,
          ./images/empty-state@m2x.png 2x,
        "
        media="(max-width:767px)"
      />
      <img
        class="product__empty-image"
        src="./images/empty-state@m1x.png"
        alt="cocktail"
        width="280"
        height="308"
      />
    </picture>
  `;
  getEl('.product').insertAdjacentHTML('beforeEnd', markup);
}

export function createFullMarkup(obj) {
  console.log('зашло в createFullMarkup');
  defoultMurkup();
  console.log('после defoultMurkup');
  getEl('.product__list').innerHTML = '';

  let favoriteIdArr = favoritOrNotButton();
  console.log('после favoritOrNotButton');
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
              }" class="button button__learn-more">Learn more</button>
              <button data-="${
                cocktail.idDrink
              }" class="button button__add-or-remove">
              
              ${buttonTextF(favoriteIdArr, cocktail.idDrink)}
              ${console.log('do buttonTextF')}
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
}

function buttonTextF(favoriteIdArr, id) {
  console.log('зашло в buttonTextF');
  let buttonText = '';
  if (favoriteIdArr.find(idFromStorage => idFromStorage === id)) {
    buttonText = 'Remove';
    return buttonText;
    console.log('зашло в buttonTextF - if');
  }
  console.log('не зашло в buttonTextF - if');
  buttonText = 'Add to';
  return buttonText;
}

function classOfSvgF(favoriteIdArr, id) {
  console.log('зашло в classOfSvgF');
  let classOfSvg = 'add';
  if (favoriteIdArr.find(option => option === id)) {
    classOfSvg = 'remove';
    return classOfSvg;
  }
  classOfSvg = 'add';
  return classOfSvg;
}

function defoultMurkup() {
  console.log('зашло в defoultMurkup');
  getEl('.product').innerHTML = '';
  const defoultMurkup = `
  <h2 class="product__title">Cocktails</h2>
  <ul class="product__list"></ul>
  `;
  getEl('.product').insertAdjacentHTML('beforeEnd', defoultMurkup);
}

const productEl = document.querySelector('.container.product');
console.dir(productEl);
productEl.addEventListener('click', findCocktailData);

let cocktailId = 0;

function findCocktailData(event) {
  console.log('зашло в findCocktailData');
  cocktailId = event.target.attributes[0].nodeValue;
  // console.dir(cocktailId);
  takeDataFromCocktailMarkUp(cocktailId);
  // функция изменяющая внутреннее содержание кнопки
  addOrRemoveMurkup(event);
  return cocktailId;
}

function takeDataFromCocktailMarkUp(cocktailId) {
  console.log('зашло в takeDataFromCocktailMarkUp');
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

function createObj(cocktailName, cocktailLink) {
  console.log('зашло в createObj');
  const cocktailObj = {
    id: cocktailId,
    name: cocktailName,
    link: cocktailLink,
  };

  favoriteArr.push(cocktailObj);
  save('cocktails', favoriteArr);
}

function favoritOrNotButton() {
  console.log('зашло в favoritOrNotButton');
  let CocktailsInStorage = load('cocktails');
  if (CocktailsInStorage > 0) {
    console.log(CocktailsInStorage);
    const findFavoritsCocktailArr = CocktailsInStorage.map(
      cocktail => cocktail.id
    );
    return findFavoritsCocktailArr;
  }
  return 0;
}

function addOrRemoveMurkup(CocktailInStorageArr) {
  console.log('зашло в addOrRemoveMurkup');
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
