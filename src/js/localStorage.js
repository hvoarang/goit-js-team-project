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
export function addToLocalStorage(coctailsFromFetch) {
  if (coctailsFromFetch) {
    console.log(coctailsFromFetch);
    let oneCoctailIngredient = coctailsFromFetch.map(cocktailEl => {
      const { idDrink, strDrink, strDrinkThumb, strInstructions } = cocktailEl;
      let OneCocktailData = {
        cocktailId: idDrink,
        cocktailName: strDrink,
        cocktailImage: strDrinkThumb,
        cocktailIngr: allIngridient(cocktailEl, 'strIngredient'),
        cocktailMeasure: allIngridient(cocktailEl, 'strMeasure'),
        cocktailInstruction: strInstructions,
      };

      function allIngridient(el, string) {
        let ingridientArr = [];
        const objIngr = Object.entries(el);
        for (let i = 0; i < objIngr.length; i++) {
          if (objIngr[i][0].includes(string) && objIngr[i][1] !== null) {
            ingridientArr.push(objIngr[i][1]);
          }
        }

        return ingridientArr;
      }
      return OneCocktailData;
    });
    // console.log(oneCoctailIngredient);
    save('cocktailsFromFetch', oneCoctailIngredient);
  }
}
