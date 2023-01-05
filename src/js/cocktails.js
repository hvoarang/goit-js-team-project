const getEl = el => document.querySelector(el);
import orangeHeart from '../images/svg/icons.svg';
import obj from './localStorage';

const { save, load } = obj;

export function createMarkup(obj) {
  // console.log(obj.length);

  if (!obj) {
    emptyMarkUp();
    return;
  }

  createFullMarkup(obj);
  // createObjCocktails(obj);
}

// function createObjCocktails(obj) {
//   const cocktailObj = {};
//   let cocktailKey = 'cocktailName';
//   obj.map(cocktail => {
//     console.log(cocktail);
//     // cocktailObj[cocktail] = cocktail.strDrink;
//   });
//   console.log(cocktailObj);
// }

function emptyMarkUp() {
  getEl('.product').innerHTML = '';
  const markup = `
  <p class="product__empty-state">
      Sorry, we didn't find any cocktail for you
    </p>
    <picture>
      <source
        srcset="
          ./images/cocktails/pc/pc-x1/empty-state-1x.png 1x,
          ./images/cocktails/pc/pc-x2/empty-state-2x.png 2x
        "
        media="(min-width:1200px)"
      />
      <source
        srcset="
          ./images/cocktails/fablet/fablet-x1/empty-state-1x.png 1x,
          ./images/cocktails/fablet/fablet-x2/empty-state-2x.png 2x
        "
        media="(min-width:768px)"
      />
      <source
        srcset="
          ./images/cocktails/phone/phone-x1/empty-state-1x.png 1x,
          ./images/cocktails/phone/phone-x2/empty-state-2x.png 2x
        "
        media="(max-width:767px)"
      />
      <img
        class="product__empty-image"
        src="./images/cocktails/phone/phone-x1/empty-state-1x.png"
        alt="cocktail"
        width="280"
        height="308"
      />
    </picture>
  `;
  getEl('.product').insertAdjacentHTML('beforeEnd', markup);
}

function createFullMarkup(obj) {
  defoultMurkup();
  var pathEl = document.createElementNS(
    './images/svg/icons.svg#big-heart',
    'path'
  );
  getEl('.product__list').innerHTML = '';
  // console.log(obj);
  // const ul = `<ul class="product__list">${markup}</ul>`;
  const markup = obj
    .map(
      cocktail => `
      
      <li id="${cocktail.idDrink}" class="product__item">
        <div class="product__wraper">
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
              <button data-="${cocktail.idDrink}" class="button button__learn-more">Learn more</button>
              <button data-="${cocktail.idDrink}" class="button button__add-or-remove">
                Add to
                <div class="product__heart-wraper">
                  <svg class="product__big-icon--add" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
                    <use href="${orangeHeart}#bigHeart"></use>
                  </svg>
                  <svg class="product__small-icon--add" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
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
  console.log(obj);
}
// openModal(obj)
function defoultMurkup() {
  getEl('.product').innerHTML = '';
  const defoultMurkup = `
  <h2 class="product__title">Cocktails</h2>
  <ul class="product__list"></ul>
  `;
  getEl('.product').insertAdjacentHTML('beforeEnd', defoultMurkup);
}

const productEl = document.querySelector('.product');
// console.dir(productEl);
productEl.addEventListener('click', findCocktailData);

function findCocktailData(event) {
  const cocktailId = event.target.attributes[0].nodeValue;
  // console.dir(cocktailId);
  takeDataFromCocktailMarkUp(cocktailId);
  // функция изменяющая внутреннее содержание кнопки
  addOrRemoveMurkup(event);
  return cocktailId;
}

function takeDataFromCocktailMarkUp(cocktailId) {
  if (+cocktailId) {
    const cocktailFroClick = document.querySelector(`[id="${cocktailId}"]`);
    const cocktailName =
      cocktailFroClick.children[0].childNodes[3].childNodes[1].innerText;
    const cocktailLink =
      cocktailFroClick.children[0].childNodes[1].childNodes[1].childNodes[7]
        .currentSrc;
    // console.log(cocktailLink, cocktailName);
    createObj(cocktailName, cocktailLink);
  }
}

function createObj(cocktailName, cocktailLink) {
  const cocktailObj = {
    name: cocktailName,
    link: cocktailLink,
  };

  save(cocktailId, cocktailObj);
  // console.log(load('cocktail'));
}

function addOrRemoveMurkup(event) {
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
