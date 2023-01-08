import { url_by_name } from "./fetch";
import { fetchApi } from "./fetch";
import { url_ingredient_by_name } from "./fetch";
import { backdropEl } from "./modalOpenClose";
import { cardInfo } from "./modalOpenClose";
import closeBtnSvg from '../images/svg/icons.svg';

// import { addIngridientToStorage } from './localStorage';
import obj from './localStorage';
const { save, load } = obj;
const INGR = 'ingridient';


const cocktailModalCard = document.querySelector('.modal-cocktail');
// console.log(cocktailModalCard);
function renderCocktailModalCard(element) {
  cocktailModalCard.insertAdjacentHTML('afterbegin', element);
}
export function createCocktailModalCard(cocktailObject) {
 
  let {
    strDrink,
    strDrinkThumb,
    strInstructions,
    strGlass,
    strCategory,
  } = cocktailObject;

  //  console.log(cocktailObject);
  let ingredientArray = [];
  let measureArray = [];
  for (let i = 1; i < 15; i += 1) {
    if (!cocktailObject[`strIngredient${i}`]) continue;
    // console.log(cocktail[`strIngredient${i}`]);
    ingredientArray.push(cocktailObject[`strIngredient${i}`]);
    measureArray.push(cocktailObject[`strMeasure${i}`]);
  }
  // console.log(ingredientArray);
  const ingredientArrayMarkup = ingredientArray
    .map(item => {
      return `
        <li class="modal-cocktail__item"><span class="modal-cocktail__measure">${measureArray[1]}</span><a class="modal-cocktail__link link" href="#" data-modal-ingredient-open>${item}</a>
        </li>`;
    })
    .join('');

  const cocktailModalCardMarkup = `
    <button class="modal__close-btn" type="button" data-modal-cocktail-close>
      <svg class="modal__close-svg" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <use href="${closeBtnSvg}#menu-close"></use>
      </svg>
    </button>
    <h3 class="modal-cocktail__title">${strDrink}</h3>
    <div class="modal-wraper">
      <div class="modal-cocktail__wrap-instructions">
        <h4 class="modal-cocktail__subtitle">Instructions:</h4>
        <p class="modal-cocktail__instructions">${strInstructions}</p>
      </div>
      <img
        class="modal-cocktail__image"
        src="${strDrinkThumb}"
        alt="Cocktail ${(strDrink, strGlass)} "
      />
      <div class="modal-cocktail__wrap-ingredients">
        <h4 class="modal-cocktail__ingredients">Ingredients</h4>
        <p class="modal-cocktail__per">Per cocktail</p>
        <ul class="modal-cocktail__list">${ingredientArrayMarkup}</ul>
      </div>
    </div>
    <button type="button" class="button__add-or-remove--modal">Add to favorite</button>`;
  // cocktailModalCard.innerHTML = cocktailModalCardMarkup;
  // console.log('closeBtn :>> ', closeBtn);
  renderCocktailModalCard(cocktailModalCardMarkup);

  /////// IngredientCard //////////////////////////////////////////

  // const IngrLink = document.querySelector('[data-modal-ingredient-open]');
  // IngrLink.addEventListener('click', сreateIngredientModalCard);
  const ingrLinks = document.querySelectorAll('[data-modal-ingredient-open]');
  const ingrLinksArr = Array.from(ingrLinks);
  ingrLinksArr.map(link => {
    // console.log('link :>> ', link);
    link.addEventListener('click', takeIngredients);
  });
}

const refs = {
  openModalIngred: document.querySelector('[data-modal-ingredient-open]'),
  closeModalIngred: document.querySelector('.modal-ingredient__backdrop'),
  modalIngred: document.querySelector('[data-modal-ingredient]'),

  };


function takeIngredients(event) {
  const ingr = event.target.textContent;
  // console.log('event.target.textContent :>> ', event.target.textContent);

  // refs.closeModalIngred.classList.remove('is-hidden2');

  fetchApi(url_ingredient_by_name, ingr)
    .then(obj => {
      console.log('(obj.ingredients[0]); :>> ', (obj.ingredients[0]));
      refs.closeModalIngred.classList.remove('is-hidden2');
      // refs.modalIngred.innerHTML = '';
      createIngredientModalCard(obj.ingredients[0]);
save(INGR, obj.ingredients[0]);
      })
      .catch(err => {
        console.log(err);
      });

}

// const ingrList = document.querySelector('.modal-cocktail__list');
// ingrList.addEventListener('click', (event) => {
//   });


function createIngredientModalCard(ingrObj) {
  const { strIngredient, strType, strDescription, strABV, strAlcohol } = ingrObj;
  
  // refs.modalIngred.innerHTML = '';
    // console.log('ingrObj :>> ', ingrObj);
 
  const ingredientModalCardMarkup = `
    <button class="modal__close-btn" type="button" data-modal-ingredient-close>
      <svg class="modal__close-svg" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <use href="${closeBtnSvg}#menu-close"></use>
      </svg>
    </button>
    <h3 class="modal-ingredient__title">${strIngredient}</h3>

    <h4 class="modal-ingredient__subtitle">${strType}</h4>
    <hr class="modal-ingredient__line" />
    <p class="modal-ingredient__description">
      <span class="modal-ingredient__name-span">${strIngredient}</span> ${strDescription||''}</p>
    <ul class="modal-ingredient__list list">
      <li class="modal-ingredient__item">Type: ${strType}</li>
      <li class="modal-ingredient__item">Alcohol: ${strAlcohol}, ${'by volume %' && strABV ||'No alcohol'}</li>
    </ul>
    <div class="modal-ingredient__button">
      <button type="button" class="button__add-or-remove--modal">
        Add to favorite
      </button>`;
  renderIngredientModalCard(ingredientModalCardMarkup);

// refs.addFavoriteBtn.addEventListener('click', addFavorite);
//   function addFavorite(e) {
//   console.log(e.target);
// };
  // addFavoriteBtn = document.querySelector('.button__add-or-remove--modal'),
  // addFavoriteBtn.addEventListener('click', (e) => console.log(e.target));
  
  closeModalBtnIngred = document.querySelector('[data-modal-ingredient-close]'),
  // refs.closeModalIngred.classList.add('is-hidden2');
  // closeModalIngred.addEventListener('click', () => refs.closeModalIngred.classList.add('is-hidden2'));
  refs.closeModalIngred.addEventListener('click', () => refs.closeModalIngred.classList.add('is-hidden2'));
  closeModalBtnIngred.addEventListener('click', () => refs.closeModalIngred.classList.add('is-hidden2'));

};


function renderIngredientModalCard(string) {
  const ingredientModal = document.querySelector('.modal-ingredient');
  // console.log('ingredientModal :>> ', ingredientModal);
  ingredientModal.insertAdjacentHTML('afterbegin', string);

};

//   function сreateIngredientModalCard(ingredient) {
//     const ingredientModalCardMarkup = `<h3 class="modal-ingredient__title">Campari</h3>
//     <h4 class="modal-ingredient__subtitle">Liqueur</h4>
//     <hr class="modal-ingredient__line" />
//     <p class="modal-ingredient__description">
//       <span class="modal-ingredient__name-span">Campari</span> is an Italian
//       alcoholic liqueur, considered an apéritif (20.5%, 21%, 24%, 25%, or 28.5%
//       ABV, depending on the country in which it is sold), obtained from the
//       infusion of herbs and fruit (including chinotto and cascarilla) in alcohol
//       and water. It is a bitters, characterised by its dark red colour.
//     </p>
//     <ul class="modal-ingredient__list list">
//       <li class="modal-ingredient__item">Type: Bitters</li>
//       <li class="modal-ingredient__item">Country of origin: Italy</li>
//       <li class="modal-ingredient__item">Alcohol by volume: 20.5–28.5%</li>
//       <li class="modal-ingredient__item">Flavour: Bitter, spicy and sweet</li>
//     </ul>
//     <div class="modal-ingredient__button">
//       <button type="button" class="button__add-or-remove--modal">
//         Add to favorite
//       </button>
// `;
//     renderCocktailModalCard(ingredientModalCardMarkup);
//     // function showIngredientModalCard(ingredientMarkup) {
//     //         ingredientModalCard.insertAdjacentHTML('afterbegin', ingredientMarkup);
//     //     }
//   };
// };

// function createTest({strDescription}) {
//   const test = `<span>${strDescription}</span>`;
//     cocktailModalCard.innerHTML = '';
//   renderCocktailModalCard(test);

//разметка на новую модалку
// }

// вставить туда где fetch перед функцией, которая рендерит

// function ingredientModalCardCreate({ name, instructions, data}) {
//     ingredientModalCard.innerHTML = '';
//     // const ingredientsArray = [];
//     // for (const ingredient in ingredients) {
//     //     ingredientsArray.push(ingredients[key]);
//     // }
//         <li class="modal-cocktail__item"><span>* ${measure} </span>
//           <a class="modal-cocktail__link link" href="#" target="_blank">${ingredient}</a>

//     showIngredientModalCard(ingredientModalCardMarkup);
//     }

// // function ingredientModalCardCreate(name) {
// //         showIngredientModalCard(ingredientModalCard);
// //     }

// const addFavouriteBtn = document.querySelector('.button__add-or-remove--modal');

// linkGoToIngredient.addEventListener('click', goToIngredient);
// addFavouriteCocktailBtn.addEventListener('click', addFavouriteCocktail);

// function goToIngredient (name) {

// }

// function addFavouriteCocktail (name) {
//     // localStorage.setItem(name, JSON.stringify('${name}'));
// }

//План:
// 1. импорт
// 2. ссылки на DOM, обработчики (на бэкдропе, на модалке)
// 3. по нажатию кнопки Learn more:
//   забираем id коктейля,
//   делаем запрос на сервер,
//   получаем объект, парсим его,
//   достаем данные для создания разметки,
//   запускаем функцию создания карточки коктейля и функцию рендеринга на экране:
// 4. функция создания и рендеринга карточки:
// открываем модалку
// чистим экран
// добавляем в дом разметку

// закрываем модалку

