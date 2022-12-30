export const url_by_name = `https://thecocktaildb.com/api/json/v1/1/search.php?s=`;
export const url_by_first_letter = `https://thecocktaildb.com/api/json/v1/1/search.php?f=`;
export const url_ingredient_by_name = `https://thecocktaildb.com/api/json/v1/1/search.php?i=`;

export function fetchApi(url, el) {
  fetch(`${url}${el}`).then(response => {
    return response.json();
  });
}
