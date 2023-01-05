import { fetchApi } from './fetch';
import { url_by_first_letter } from './fetch';
import { createMarkup } from './cocktails';


const ListEl = document.querySelector('.hero__list');
const mainEl = document.querySelector('.product__list');
ListEl.addEventListener('click', takeArreyREsult);
window.matchMedia('(max-width: 320px)');

window.matchMedia('(max-width: 767px)');
window.matchMedia('(max-width: 767px)');

let count = 0;
let cnt = 6;
let paginator = document.querySelector('.paginator');

function takeArreyREsult(e) {
  const target = e.target;
  if (e.target !== e.currentTarget) {
    fetchApi(url_by_first_letter, target.textContent)
      .then(({ drinks }) => {
        createMarkup(drinks);
        count = drinks.length;
        let cnt_page = Math.ceil(count / cnt);
        // console.log(count);
        // console.log(cnt_page);
        let page = '';
        for (let i = 0; i < cnt_page; i++) {
          page +=
            '<button  class="pagination-item" data-page=' +
            i * cnt +
            '  id="page' +
            (i + 1) +
            '">' +
            (i + 1) +
            '</button>';
        }
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
      })

      .catch(err => {
        console.log(err);
      });
  }
}

//листаем
// const pagEl = document.querySelector('.paginator');
// pagEl.addEventListener('click', pagination);

//  export function pagination(event) {
//   var e = event || window.event;
//   var target = e.target;
//   var id = target.id;

//   if (target.tagName.toLowerCase() != 'span') return;

//   var num_ = id.substr(4);
//   var data_page = +target.dataset.page;
//   main_page.classList.remove('paginator_active');
//   main_page = document.getElementById(id);
//   main_page.classList.add('paginator_active');

//   var j = 0;
//   for (var i = 0; i < div_num.length; i++) {
//     var data_num = div_num[i].dataset.num;
//     if (data_num <= data_page || data_num >= data_page)
//       div_num[i].style.display = 'none';
//   }
//   for (var i = data_page; i < div_num.length; i++) {
//     if (j >= cnt) break;
//     div_num[i].style.display = 'block';
//     j++;
//   }
// }

// .num {
//   display: none;
// }
// .paginator {
//   line-height: 150%;
// }
// .paginator > span {
//   display: inline-block;
//   margin-right: 10px;
//   cursor: pointer;
// }
// .paginator_active {
//   color: red;
// }

// let count = 10; //всего записей
// let cnt = 5; //сколько отображаем сначала
// let cnt_page = Math.ceil(count / cnt); //кол-во страниц

// выводим список страниц
// let paginator = document.querySelector('.paginator');
// let page = '';
// for (var i = 0; i < cnt_page; i++) {
//   page +=
//     '<span data-page=' +
//     i * cnt +
//     '  id="page' +
//     (i + 1) +
//     '">' +
//     (i + 1) +
//     '</span>';
// }
// paginator.innerHTML = page;
// выводим первые записи {cnt}
// let div_num = document.querySelectorAll('.num');
// for (let i = 0; i < div_num.length; i++) {
//   if (i < cnt) {
//     div_num[i].style.display = 'block';
//   }
// }

// var main_page = document.getElementById('page1');
// main_page.classList.add('paginator_active');


