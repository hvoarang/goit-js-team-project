import { fetchApi } from './fetch';
import { url_by_first_letter } from './fetch';
import { createMarkup } from './cocktails';

const ListEl = document.querySelector('.hero__list');
const mainEl = document.querySelector('.product__list');
ListEl.addEventListener('click', takeArreyREsult);
let count = 0;
let cnt = 0;
export let ArrFetch = [];
export const paginator = document.querySelector('.paginator');
export const paginatorBut = document.querySelector('.pagination-buttton');
export const paginatorBut2 = document.querySelector(
  '.second-vector'
);
const screenD = window.matchMedia('(min-width: 1280px)');
const screenM = window.matchMedia('(max-width: 768px)');
const screenT = window.matchMedia('(max-width: 1280px)');

export function takeArreyREsult(e) {
  const target = e.target;
  if (e.target !== e.currentTarget) {
    return fetchApi(url_by_first_letter, target.textContent)
      .then(({ drinks }) => {
        ArrFetch.push(drinks);
        createMarkup(drinks);
        const listEl = document.querySelector('.product__list');
        
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
          paginatorBut.style.display='block';
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
              listEl.style.gap = '0';
              // div_num[i].style.display = 'block';
              div_num[i].style.cssText = `
                 display:block;
                 margin-right: 10px;
                 margin-bottom: 20px;
                  `;
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
              div_num[i].style.cssText = `
                 display:block;
                 margin-right: 10px;
                 margin-bottom: 20px;
                  `;

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
              listEl.style.gap = '0';
              // div_num[i].style.display = 'block';
              div_num[i].style.cssText = `
                 display:block;
                 margin-right: 10px;
                 margin-bottom: 20px;
                  `;
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
               div_num[i].style.cssText = `
                 display:block;
                 margin-right: 10px;
                 margin-bottom: 20px;
                  `;
              j++;
            }
          }
        }
      })

      .catch(err => {
        console.log(err);
      });
  }
}
