const getEl = el => document.querySelector(el);
import orangeHeart from '../images/svg/icons.svg';
import twoColorHeart from '../images/svg/twoColorsHeart.svg';
// import emptyState from '../images/cocktails/phone/phone-x1/empty-state-1x.png';

// const heartWraper = document.querySelector('.product__heart-wraper');

// console.log(pathEl);
// var svgid = document.getElementById('small-heart');
// console.log(svgid);
// var element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
// svg.appendChild(element);

export function createMarkup(obj) {
  // console.log(obj.length);

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
      
      <li class="product__item">
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
              <button class="button button__learn-more">Learn more</button>
              <button class="button button__add-or-remove">
                Add to
                <div class="product__heart-wraper">
                  <svg class="product__big-icon--add" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
                    <use href="#bigHeart"></use>
                  </svg>
                  <svg class="product__small-icon--add" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
                    <use href="#smallHeart"></use>
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

function defoultMurkup() {
  getEl('.product').innerHTML = '';
  const defoultMurkup = `
  <h2 class="product__title">Cocktails</h2>
  <ul class="product__list"></ul>
  `;
  getEl('.product').insertAdjacentHTML('beforeEnd', defoultMurkup);
}

// const removeBtn = document.querySelector('.button button__add-or-remove');
// removeBtn.addEventListener('click', changeData);
// function changeData(event) {
//   console.log('hi');
// }

//   console.log(getEl('.button__add-or-remove'));
//   getEl('.button__add-or-remove').addEventListener('click', openModal);
// }

// strDrink
// strDrinkThumb

// function createFullMurkup(countries, countryList) {
//   // console.log('createFullMarkup', countries);
