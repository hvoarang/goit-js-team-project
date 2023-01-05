import {fetchApi} from './js/fetch';
// импорт функций из JS Ярослава по клику на кнопку Learn more
// import {inputCocktail} from './js/';

const cocktailModalCard = document.querySelector('.modal-cocktail');

// function learnMoreCocktail(data) {
//     cocktailModalCard.innerHTML = '';
//         const cocktailModalCardMarkup = cocktailModalCardCreate(...data); //data[0]
//     }

function cocktailModalCardCreate ({name, src, instructions, ingredients}) {
    cocktailModalCard.innerHTML = ''; // вставить туда где fetch перед функцией, которая рендерит
    // const ingredientsArray = [];
    // for (const ingredient in ingredients) {
    //     ingredientsArray.push(ingredients[key]);
    // }  

    // как запускать разную разметку в зависимости от размера экрана устройства?
    const cocktailModalCardMarkup = `
    <h3 class="modal-cocktail__title">${name}</h3>
    <div class="modal-cocktail__wrap-instructions">
      <h4 class="modal-cocktail__subtitle">Instructions:</h4>
      <p class="modal-cocktail__instructions">${instructions}</p>
    </div>
    <img
      class="modal-cocktail__image"
      src="${src}"
      alt="${alt}"
      width="280"
      height="280"
    />
    <div class="modal-cocktail__wrap-ingredients">
      <h4 class="modal-cocktail__ingredients">Ingredients</h4>
      <p class="modal-cocktail__per">Per cocktail</p>
      <ul class="modal-cocktail__list">
        <li class="modal-cocktail__item">
          <a class="modal-cocktail__link link" href="#" target="_blank">${ingredient}</a>
        </li>
      </ul>
    </div>
    <button type="button" class="button__add-or-remove--modal">
      Add to favorite
    </button>`;
    showCocktailModalCard(cocktailModalCardMarkup);
    }

// вместо li вставить функцию в разметку, рендерить массив лишек, map

// 1. функция Create, которая делает разметку и ничего не вызывает
// 2. функция Show, которая делает добавление в дом
// 3. 

function showCocktailModalCard(cocktailMarkup); {
        cocktailModalCard.insertAdjacentHTML('afterbegin', cocktailMarkup);
    }

function showIngredientModalCard(ingredientMarkup); {
        ingredientModalCard.insertAdjacentHTML('afterbegin', ingredientMarkup);
    }

function ingredientModalCardCreate({ name, instructions, data}) {
    ingredientModalCard.innerHTML = '';
    // const ingredientsArray = [];
    // for (const ingredient in ingredients) {
    //     ingredientsArray.push(ingredients[key]);
    // }  
const ingredientModalCardMarkup = `
    <h3 class="modal-cocktail__title">${name}</h3>
    <div class="modal-cocktail__wrap-instructions">
      <h4 class="modal-cocktail__subtitle">Instructions:</h4>
      <p class="modal-cocktail__instructions">${instructions}</p>
    </div>
    <img
      class="modal-cocktail__image"
      src="${src}"
      alt="${alt}"
      width="280"
      height="280"
    />
    <div class="modal-cocktail__wrap-ingredients">
      <h4 class="modal-cocktail__ingredients">Ingredients</h4>
      <p class="modal-cocktail__per">Per cocktail</p>
      <ul class="modal-cocktail__list">
        <li class="modal-cocktail__item"><span>* ${measure} </span>
          <a class="modal-cocktail__link link" href="#" target="_blank">${ingredient}</a>
        </li>
      </ul>
    </div>
    <button type="button" class="button__add-or-remove--modal">
      Add to favorite
    </button>`;
    showIngredientModalCard(ingredientModalCardMarkup);
    }

// function ingredientModalCardCreate(name) {
//         const countryListValues = data.map(({name: {common}, flags: {svg}}) => {
//             return `<li><img src="${svg}" widht=60 height=20 </li>
//             <span>${common}</span>`
//         }).join('');
//         showIngredientModalCard(ingredientModalCard);
//     }

function showIngredientModalCard(ingredientModalCardMarkup) {
        ingredientModalCard.insertAdjacentHTML('afterbegin', ingredientModalCardMarkup);
    }


// const nameCocktail = document.querySelector('.modal-cocktail__title');
// const instructionCocktail = document.querySelector('.modal-cocktail__subtitle');
// const addFavouriteBtn = document.querySelector('.button__add-or-remove--modal');
// const linkGoIngredient = 

linkGoToIngredient.addEventListener('click', goToIngredient);
addFavouriteCocktailBtn.addEventListener('click', addFavouriteCocktail);

function goToIngredient (name) {
    
}

function addFavouriteCocktail (name) {
    // localStorage.setItem(name, JSON.stringify('${name}'));
}
