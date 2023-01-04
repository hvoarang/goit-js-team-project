const getEl = el => document.querySelector(el);

export function createMarkup(obj) {
  // console.log(obj.length);
  if (!obj) {
    emptyMarkUp();
    return;
  }
  defoultMurkup();
  createFullMarkup(obj);
}

function defoultMurkup() {
  getEl('.product').innerHTML = '';
  const defoultMurkup = `
  <h2 class="product__title">Cocktails</h2>
  <ul class="product__list"></ul>
  `;
  getEl('.product').insertAdjacentHTML('beforeEnd', defoultMurkup);
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

function createFullMarkup(obj) {
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
                Remove
                <div class="product__heart-wraper">
                  <svg class="product__big-icon--remove" width="19" height="17">
                    <use href="./images/svg/icons.svg#big-heart"></use>
                  </svg>
                  <svg
                    class="product__small-icon--remove"
                    width="15.38"
                    height="13.42"
                  >
                    <use href="./images/svg/icons.svg#small-heart"></use>
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
  // getEl('.product__list').innerHTML = '';
}

//   console.log(getEl('.button__add-or-remove'));
//   getEl('.button__add-or-remove').addEventListener('click', openModal);
// }

// strDrink
// strDrinkThumb

// function createFullMurkup(countries, countryList) {
//   // console.log('createFullMarkup', countries);
