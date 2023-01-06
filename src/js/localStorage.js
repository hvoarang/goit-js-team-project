const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export default {
  save,
  load,
};

export function addToLocalStorage(cocktailsFromFetch) {
  if (cocktailsFromFetch) {
    oneCoctailIngridients = cocktailsFromFetch.map(cocktailEl => {
      // console.log(cocktailEl);
      const { idDrink, strDrink, strDrinkThumb, strInstructions } = cocktailEl;
      let oneCocktailData = {
        cocktailId: idDrink,
        cocktailName: strDrink,
        cocktailImage: strDrinkThumb,
        cocktailIngr: allIngridient(cocktailEl, 'strIngredient'),
        cocktailMeasure: allIngridient(cocktailEl, 'strMeasure'),
        cocktailInstruction: strInstructions,
      };
      // console.log(oneCocktailData);
      function allIngridient(el, string) {
        ingridientArr = [];
        const objIngr = Object.entries(el);
        for (let i = 0; i < objIngr.length; i++) {
          if (objIngr[i][0].includes(string) && objIngr[i][1] !== null) {
            ingridientArr.push(objIngr[i][1]);
          }
        }
        return ingridientArr;
      }
      return oneCocktailData;
    });
    // console.log(oneCoctailIngridients);
    save('cocktailsFromFetch', oneCoctailIngridients);
  }
}

// if (load('cocktails') && load('cocktails').length > 0) {
//   favoriteArr.push(...load('cocktails'));
// }

let arrFromStorage = load('cocktailsFromFetch');

addFavoritesToLocalStorage(arrFromStorage);

function addFavoritesToLocalStorage(arrFromStorage) {
  console.log(arrFromStorage);
}
