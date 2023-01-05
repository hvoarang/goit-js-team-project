console.log(1);
import { fetchApi } from "./fetch";
import { url_by_name } from "./fetch";
import { url_by_first_letter } from "./fetch";
import { createMarkup } from "./cocktails";

const searchForm = document.querySelector('.search-container__form');
const searchFormMob = document.querySelector('.search-container__form-mob');

let valueInput = "";
searchFormMob.addEventListener("submit",searchValueHeader);
searchForm.addEventListener("submit", searchValueHeader);


function searchValueHeader(e) {
  e.preventDefault();
  valueInput = e.currentTarget.elements.searchQuery.value

    fetchApi(url_by_name || url_by_first_letter, valueInput)
      .then(obj => {
        createMarkup(obj.drinks);
      })
      .catch(err => {
        console.log(err);
      });
  }

