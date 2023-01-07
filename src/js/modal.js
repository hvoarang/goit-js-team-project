
import { url_by_name } from "./fetch";
import { fetchApi } from "./fetch";
import { url_ingredient_by_name } from "./fetch";
import { backdropEl } from "./modalOpenClose";
import { cardInfo } from "./modalOpenClose";



const cocktailModalCard = document.querySelector('.modal-cocktail');
// console.log(cocktailModalCard);
function renderCocktailModalCard(element) {
  cocktailModalCard.insertAdjacentHTML('afterbegin', element);
}

export function сreateСocktailModalCard(cocktailObject) {
 
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
        <li class="modal-cocktail__item"><a class="modal-cocktail__link link" href="#" data-modal-ingredient-open>${item}</a>
        </li>`;
    })
    .join('');

  // <span>* ${measureArray[1]}</span>
  
  //     <button class="modal__close-btn" type="button" data-modal-cocktail-close>
  //     <svg class="modal__close-svg">
  //       <use href="./images/svg/icons.svg#menu-close"></use>
  //     </svg>
  // </button>
  
  const cocktailModalCardMarkup = `

    <h3 class="modal-cocktail__title">${strDrink}</h3>
    <div class="modal-wraper">
      <div class="modal-cocktail__wrap-instructions">
        <h4 class="modal-cocktail__subtitle">Instructions:</h4>
        <p class="modal-cocktail__instructions">${strInstructions}</p>
      </div>
      <img
        class="modal-cocktail__image"
        src="${strDrinkThumb}"
        alt="Cocktail ${strDrink, strGlass} "
      />
      <div class="modal-cocktail__wrap-ingredients">
        <h4 class="modal-cocktail__ingredients">Ingredients</h4>
        <p class="modal-cocktail__per">Per cocktail</p>
        <ul class="modal-cocktail__list">${ingredientArrayMarkup}</ul>
      </div>
    </div>
    <button type="button" class="button__add-or-remove--modal">Add to favorite</button>`;

  renderCocktailModalCard(cocktailModalCardMarkup);

  // const IngrLink = document.querySelector('[data-modal-ingredient-open]');
  // IngrLink.addEventListener('click', сreateIngredientModalCard);
  const ingrLinks = document.querySelectorAll('[data-modal-ingredient-open]');
  const ingrLinksArr = Array.from(ingrLinks);
  ingrLinksArr.map(link => {
    // console.log('link :>> ', link);
    link.addEventListener('click', takeIngredients);
  });
}

// function modalOpenCloseIngredient(e) {
  
//   // сreateIngredientModalCard(cardInfo);

// 	  // refs.openModalIngred.addEventListener('click', toggleModal);
// 	  // refs.closeModalIngred.addEventListener('click', toggleModal);
	
//     // function toggleModal() {
//     //   refs.modalIngred.classList.toggle('is-hidden2');
//     // }
// }

const refs = {
  openModalIngred: document.querySelector('[data-modal-ingredient-open]'),
  closeModalIngred: document.querySelector('.modal-ingredient__backdrop'),
  closeModalBtnIngred: document.querySelector('[data-modal-ingredient-close]'),
  modalIngred: document.querySelector('[data-modal-ingredient]'),
    };

function takeIngredients (event) {
   const ingr = event.target.textContent;
  // console.log('event.target.textContent :>> ', event.target.textContent);
  // backdropEl.classList.add('is-hidden2');
  
  // console.log('refs.openModalIngred :>> ', refs.openModalIngred);
  // console.log('refs.closeModalIngred :>> ', refs.closeModalIngred);
  // console.log('refs.modalIngred :>> ', refs.modalIngred);

  refs.closeModalIngred.classList.remove('is-hidden2');  
  fetchApi(url_ingredient_by_name, ingr)
      .then(obj => {
        // console.log(obj.ingredients[0]);
        сreateIngredientModalCard(obj.ingredients[0]);
      })
      .catch(err => {
        console.log(err);
      });
}

// const ingrList = document.querySelector('.modal-cocktail__list');
// ingrList.addEventListener('click', (event) => {
//   });

function сreateIngredientModalCard({strIngredient, strType, strDescription, strABV} ) {
    // const { } = ingrObj;
    // ingredientModal.innerHTML = '';
    // console.log('cardInfo :>> ', cardInfo);
    const ingredientModalCardMarkup = `<h3 class="modal-ingredient__title">${strIngredient}</h3>
    <h4 class="modal-ingredient__subtitle">${strType}</h4>
    <hr class="modal-ingredient__line" />
    <p class="modal-ingredient__description">
      <span class="modal-ingredient__name-span">${strIngredient}</span> ${strDescription}
    </p>
    <ul class="modal-ingredient__list list">
      <li class="modal-ingredient__item">Type: ${strType}</li>
      <li class="modal-ingredient__item"></li>
      <li class="modal-ingredient__item">Alcohol by volume: ${strABV}%</li>
      <li class="modal-ingredient__item">Flavour: </li>
    </ul>
    <div class="modal-ingredient__button">
      <button type="button" class="button__add-or-remove--modal">
        Add to favorite
      </button>`;
  renderIngredientModalCard(ingredientModalCardMarkup);
  // refs.closeModalIngred.classList.add('is-hidden2');
  // closeModalIngred.addEventListener('click', () => refs.closeModalIngred.classList.add('is-hidden2'));
  refs.closeModalIngred.addEventListener('click', () => refs.closeModalIngred.classList.add('is-hidden2'));
  refs.closeModalBtnIngred.addEventListener('click', () => refs.closeModalIngred.classList.add('is-hidden2'));

  };

function renderIngredientModalCard(string) {
  const ingredientModal = document.querySelector('.modal-ingredient');
  // console.log('ingredientModal :>> ', ingredientModal);
  ingredientModal.insertAdjacentHTML('afterbegin', string);
};

// fetchApi(url_ingredient_by_name, 'gin')
//       .then(obj => {
//         console.log(obj.ingredients[0]);
//         сreateIngredientModalCard(obj.ingredients[0]);
//       })
//       .catch(err => {
//         console.log(err);
//       });

// const ingrList = document.querySelector('.modal-cocktail__list');
// ingrList.addEventListener('click', (event) => {
//     const ingr = event.target.textContent;
//     fetchApi(url_ingredient_by_name, ingr)
//       .then(obj => {
//         console.log(obj.ingredients[0]);
//         сreateIngredientModalCard(obj.ingredients[0]);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   });

//   

// const ingredientsArray = [];
// for (const ingredient in ingredients) {
//     ingredientsArray.push(ingredients[key]);
// }

  //////////////////////////////////////////
  
// console.log(ingredientLink.textContent);
  //нажатие кнопки отправит карточку в FCocktail   
// }

  // function createTest({strDescription}) {
//   const test = `<span>${strDescription}</span>`;
//     cocktailModalCard.innerHTML = '';
//   renderCocktailModalCard(test);
// }

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


// function createObject(name) {
//  return  fetchApi(url_by_name, name)
//     .then(obj => {
      
//       // console.log(obj.drinks[0]);
//       сreateСocktailModalCard(obj.drinks[0]);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };
//   //  console.log(ArrFetch);

// createObject('marg');
// событие и кнопка у Ярослава, export, как из Амаретто выбрать конкретный?