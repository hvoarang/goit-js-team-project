// чтобы найти форму  для моб меню и в хедере есть два классы(но там разные названия) и id (тут поиск по id)
const searchForm = document.querySelector('.search-container__form');
// searchForm.addEventListener('submit', eventSearch);


export const url_by_name=`https: //thecocktaildb.com/api/json/v1/1/search.php?s=`;
export const url_by_first_letter=`https: //thecocktaildb.com/api/json/v1/1/search.php?f=`;
export const url_ingredient_by_name=`https: //thecocktaildb.com/api/json/v1/1/search.php?i=`;

export function fetchApi(url, el) {
  return fetch(`${url}${el}`).then(response=> {
      return response.json();
    });
}

// import {
//   fetchApi
// }

// from "./fetch";

// import {
//   url_by_first_letter
// }

// from "./fetch";

// import {
//   ItcCustomSelect
// }

// from "./hero-select-m";


// const ListEl=document.querySelector(".hero__list");

searchForm.addEventListener('submit', eventSearch);

export function eventSearch(e) {
    e.preventDefault();
    console.log(e.value);
  const target = e.target if (e.target !==e.currentTarget) {
    fetchApi(url_by_name, target.textContent) .then(obj=> {
        // додати функцію рендору сторінки, параметром передати obj
        console.log(obj);

      }) .catch(err=> {
        console.log(err);
      });
  }
}
