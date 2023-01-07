console.log(1);
import { fetchApi } from "./fetch";
import { url_by_name } from "./fetch";
import { url_by_first_letter } from "./fetch";
import { createMarkup } from "./cocktails";
import { ArrFetch } from "./pagination";
import { paginatorBut } from "./pagination";
import { paginatorBut2 } from "./pagination";

const searchForm = document.querySelector('.search-container__form');
const searchFormMob = document.querySelector('.search-container__form-mob');

let valueInput = "";
searchFormMob.addEventListener("submit",searchValueHeader);
searchForm.addEventListener("submit", searchValueHeader);
let count = 0;
let cnt = 0;

export const paginator = document.querySelector('.paginator');

const screenD = window.matchMedia('(min-width: 1280px)');
const screenM = window.matchMedia('(max-width: 768px)');
const screenT = window.matchMedia('(max-width: 1280px)');


function searchValueHeader(e) {
  e.preventDefault();
  valueInput = e.currentTarget.elements.searchQuery.value

    fetchApi(url_by_name || url_by_first_letter, valueInput)
      .then(({ drinks }) => {
        ArrFetch.push(drinks);
        createMarkup(drinks);
        if (screenM.matches) {
          cnt = 3;
          count = drinks.length;
          let cnt_page = Math.ceil(count / cnt);
          // console.log(count);
          // console.log(cnt_page);
          let page = '';
          for (let i = 0; i < cnt_page; i++) {
            page +=
              '<button  class="paginator-item" data-page=' +
              i * cnt +
              '  id="page' +
              (i + 1) +
              '">' +
              (i + 1) +
              '</button>';
          }
          paginatorBut.style.display = 'block';
          paginatorBut2.style.display = 'block';
          paginator.innerHTML = page;

          let div_num = document.querySelectorAll('.product__wraper');

          for (let i = 0; i < div_num.length; i++) {
            if (i < cnt) {
              div_num[i].style.display = 'block';
            }
          }

          let main_page = document.getElementById('page1');
          main_page.classList.add('paginator_active');

          const pagEl = document.querySelector('.paginator');
          pagEl.addEventListener('click', pagination);

          function pagination(event) {
            const e = event || window.event;
            const target = e.target;
            const id = target.id;
            if (target.tagName.toLowerCase() !== 'button') return;
            let data_page = +target.dataset.page;
            console.log(data_page);
            main_page.classList.remove('paginator_active');
            main_page = document.getElementById(id);
            main_page.classList.add('paginator_active');

            let j = 0;
            for (let i = 0; i < div_num.length; i++) {
              let data_num = div_num[i].dataset.num;
              if (data_num <= data_page || data_num >= data_page)
                div_num[i].style.display = 'none';
            }
            for (let i = data_page; i < div_num.length; i++) {
              if (j >= cnt) break;
              div_num[i].style.display = 'block';

              j++;
            }
          }
        } else if (screenT.matches) {
          cnt = 6;
          count = drinks.length;
          let cnt_page = Math.ceil(count / cnt);
          // console.log(count);
          // console.log(cnt_page);
          let page = '';
          for (let i = 0; i < cnt_page; i++) {
            page +=
              '<button  class="paginator-item" data-page=' +
              i * cnt +
              '  id="page' +
              (i + 1) +
              '">' +
              (i + 1) +
              '</button>';
          }
          paginatorBut.style.display = 'block';
          paginatorBut2.style.display = 'block';
          paginator.innerHTML = page;

          let div_num = document.querySelectorAll('.product__wraper');
          //   console.log(div_num);
          for (let i = 0; i < div_num.length; i++) {
            if (i < cnt) {
              div_num[i].style.display = 'block';
            }
          }
          let main_page = document.getElementById('page1');
          main_page.classList.add('paginator_active');

          const pagEl = document.querySelector('.paginator');
          pagEl.addEventListener('click', pagination);

          function pagination(event) {
            //   console.log(mainEl);
            //   mainEl.innerHTML = '';

            const e = event || window.event;
            const target = e.target;
            const id = target.id;
            if (target.tagName.toLowerCase() !== 'button') return;
            let data_page = +target.dataset.page;
            console.log(data_page);
            main_page.classList.remove('paginator_active');
            main_page = document.getElementById(id);
            main_page.classList.add('paginator_active');

            let j = 0;
            for (let i = 0; i < div_num.length; i++) {
              let data_num = div_num[i].dataset.num;
              if (data_num <= data_page || data_num >= data_page)
                div_num[i].style.display = 'none';
            }
            for (let i = data_page; i < div_num.length; i++) {
              if (j >= cnt) break;
              div_num[i].style.display = 'block';
              j++;
            }
          }
        } else if (screenD.matches) {
          cnt = 9;
          count = drinks.length;
          let cnt_page = Math.ceil(count / cnt);
          // console.log(count);
          // console.log(cnt_page);
          let page = '';
          for (let i = 0; i < cnt_page; i++) {
            page +=
              '<button  class="paginator-item" data-page=' +
              i * cnt +
              '  id="page' +
              (i + 1) +
              '">' +
              (i + 1) +
              '</button>';
          }
          paginatorBut.style.display = 'block';
          paginatorBut2.style.display = 'block';
          paginator.innerHTML = page;

          let div_num = document.querySelectorAll('.product__wraper');
          //   console.log(div_num);
          for (let i = 0; i < div_num.length; i++) {
            if (i < cnt) {
              div_num[i].style.display = 'block';
            }
          }
          let main_page = document.getElementById('page1');
          main_page.classList.add('paginator_active');

          const pagEl = document.querySelector('.paginator');
          pagEl.addEventListener('click', pagination);

          function pagination(event) {
            //   console.log(mainEl);
            //   mainEl.innerHTML = '';

            const e = event || window.event;
            const target = e.target;
            const id = target.id;
            if (target.tagName.toLowerCase() !== 'button') return;

            //     let num_ = id.substr(4);
            let data_page = +target.dataset.page;
            console.log(data_page);
            main_page.classList.remove('paginator_active');
            main_page = document.getElementById(id);
            main_page.classList.add('paginator_active');

            let j = 0;
            for (let i = 0; i < div_num.length; i++) {
              let data_num = div_num[i].dataset.num;
              if (data_num <= data_page || data_num >= data_page)
                div_num[i].style.display = 'none';
            }
            for (let i = data_page; i < div_num.length; i++) {
              if (j >= cnt) break;
              div_num[i].style.display = 'block';
              j++;
            }
          }
        }
      })

      .catch(err => {
        console.log(err);
      });
  }

