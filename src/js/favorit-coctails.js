import { defArreyCard } from './random-default-coctails';
// import { createFullMarkup } from './cocktails';
import obj from './localStorage';
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
    <div class="container"></div>
        <h1 class="favorite-title">Favorite cocktails</h1>
        <ul class="favorite-container">
        
        </ul>
    </div>

    <script type="module" src="/src/index.js"></script>
</body>

   `
  );
  const favCont = document.querySelector('.favorite-container');

  //   console.log(el);
  favCont.insertAdjacentHTML('afterbegin', createFullMarkup(objFromFav));
}
function createFullMarkup(obj) {
  return obj
    .map(
      cocktail =>
        ` <li id="${cocktail.id}" class="product__item1">   
        <div class="product__wraper1">

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

        </div>
      </li>
      
  `
    )
    .join('');
}
