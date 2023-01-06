import obj from './localStorage';
import icons from '../images/svg/icons.svg';

const { save, load } = obj;

const favoriteContainer = document.querySelector('.favorite-container');

let favArr = load('cocktails');
console.log(favArr);

function createFavMurkup(favArr) {
  const markup = favArr
    .map(
      cocktail => `
  <li id="${cocktail.id}" class="product__item">
    <div class="product__wraper" data-num="">

      <div class="product__image-part">
        <picture>
          <source
            srcset="
            ${cocktail.link} 1x,
            ${cocktail.link} 2x
            "
            media="(min-width:1200px)"
          />
          <source
            srcset="
            ${cocktail.link} 1x,
            ${cocktail.link} 2x
            "
            media="(min-width:768px)"
          />
          <source
            srcset="
            ${cocktail.link} 1x,
            ${cocktail.link} 2x
            "
            media="(max-width:767px)"
          />
          <img
            class="product__image"
            src="${cocktail.link}"
            alt="cocktail"
            width="280"
            height="280"
          />
        </picture>
      </div>

      <div class="product__description-part">
        <h3 class="product__subtitle">${cocktail.name}</h3>
        <div class="product__buttons">
          <button data-="${cocktail.id}" class="button button__learn-more">Learn more</button>
          <button data-="${cocktail.id}" class="button button__add-or-remove">
              Remove
            <div class="product__heart-wraper">

              <svg class="product__big-icon--remove" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
                <use href="${cocktail.icons}#bigHeart"></use>
              </svg>
              <svg class="product__small-icon--remove" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
                <use href="${cocktail.icons}#smallHeart"></use>
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
  favoriteContainer.insertAdjacentHTML('beforeEnd', markup);
}

createFavMurkup(favArr);
