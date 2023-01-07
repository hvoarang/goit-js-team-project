import { url_by_name } from './fetch';
import { fetchApi } from './fetch';
import { url_ingredient_by_name } from './fetch';

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

const cocktailModalCard = document.querySelector('.modal-cocktail');
console.log(cocktailModalCard);
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
    strMeasure1,
  } = cocktailObject;
  //  console.log(cocktailObject);
  let ingredientArray = [];
  for (let i = 1; i < 15; i += 1) {
    if (!cocktailObject[`strIngredient${i}`]) continue;
    // console.log(cocktail[`strIngredient${i}`]);
    ingredientArray.push(cocktailObject[`strIngredient${i}`]);
  }
  // console.log(ingredientArray);
  const ingredientArrayMarkup = ingredientArray
    .map(item => {
      return `
        <li class="modal-cocktail__item"><a class="modal-cocktail__link link" href="#" data-modal-ingredient-open>${item}</a>
        </li>`;
    })
    .join('');

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
        alt="Cocktail ${strDrink}"
      />
      <div class="modal-cocktail__wrap-ingredients">
        <h4 class="modal-cocktail__ingredients">Ingredients</h4>
        <p class="modal-cocktail__per">Per cocktail</p>
        <ul class="modal-cocktail__list">${ingredientArrayMarkup}</ul>
      </div>
    </div>
    <button type="button" class="button__add-or-remove--modal">Add to favorite</button>`;

  renderCocktailModalCard(cocktailModalCardMarkup);
}

////////////////////////////////////////////
// console.log(cocktailModalCardMarkup);

// const ingredientModalCard = document.querySelector('.modal-cocktail');

// const ingredientLinks = document.querySelectorAll('.modal-cocktail__link');
// const ingr = ingredientLink.textContent;
// console.log(ingredientLink);

////////////////////////////////////
//   if (ingredientLinks) {
//   ingredientLinks.addEventListener('click', (event) => {
//     const ingr = event.target.textContent;
//     fetchApi(url_ingredient_by_name, ingr)
//       .then(obj => {
//         console.log(obj.ingredients[0]);
//         // сreateIngredientModalCard(obj.ingredients[0]);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   });
// }

//////////////////////////////////////////

// console.log(ingredientLink.textContent);
//нажатие кнопки отправит карточку в FCocktail
// }

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

// function showIngredientModalCard(ingredientModalCardMarkup) {
//         ingredientModalCard.insertAdjacentHTML('afterbegin', ingredientModalCardMarkup);
//     }

// const nameCocktail = document.querySelector('.modal-cocktail__title');
// const instructionCocktail = document.querySelector('.modal-cocktail__subtitle');
// const addFavouriteBtn = document.querySelector('.button__add-or-remove--modal');
// const linkGoIngredient =  0;

// linkGoToIngredient.addEventListener('click', goToIngredient);
// addFavouriteCocktailBtn.addEventListener('click', addFavouriteCocktail);

// function goToIngredient (name) {

// }

// function addFavouriteCocktail (name) {
//     // localStorage.setItem(name, JSON.stringify('${name}'));
// }
