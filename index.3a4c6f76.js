function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},l=o.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},o.parcelRequired7c6=l),l.register("kyEFX",(function(t,o){var n,r;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var l={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)l[t[o]]=e[t[o]]},r=function(e){var t=l[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),l("kyEFX").register(JSON.parse('{"5ZPII":"index.3a4c6f76.js","5QaWd":"icons.3e73bffe.svg","h565r":"emptyState.4efd87c2.png","3DaIG":"emptyStateM2x.c9ea35c5.png"}')),(()=>{const e=document.querySelector(".js-open-menu"),t=document.querySelector(".js-menu-container"),o=document.querySelector(".js-close-menu");e.addEventListener("click",(()=>{const o="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open")})),o.addEventListener("click",(()=>{const o="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open")}))})();const s=document.querySelector("#dropdownmob"),c=document.querySelector("#dropdowndesk");s.addEventListener("click",(function(){document.getElementById("myDropdownn").classList.toggle("show")})),c.addEventListener("click",(function(){document.getElementById("myDropdown").classList.toggle("show")})),window.onclick=function(e){if(!e.target.matches(".dropbtn")){const e=document.getElementsByClassName("dropdown-content");let t;for(t=0;t<e.length;t++){let o=e[t];o.classList.contains("show")&&o.classList.remove("show")}}};function a(e,t){return fetch(`${e}${t}`).then((e=>e.json()))}var i;i=new URL(l("kyEFX").resolve("5QaWd"),import.meta.url).toString();const d=(e,t)=>{try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(e){console.error("Set state error: ",e.message)}},u=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};var g={save:d,load:u,remove:(e,t)=>{try{let o=u(e);for(let e=0;e<o.length;e++)o[e].idDrink===t&&o.splice(e,1);d(e,o)}catch(e){console.error("Get state error: ",e.message)}}};function m(e,t){if(t){let o=t.map((e=>{const{idDrink:t,strDrink:o,strDrinkThumb:n,strInstructions:r}=e;function l(e,t){let o=[];const n=Object.entries(e);for(let e=0;e<n.length;e++)n[e][0].includes(t)&&null!==n[e][1]&&o.push(n[e][1]);return o}return{idDrink:t,strDrink:o,strDrinkThumb:n,cocktailIngr:l(e,"strIngredient"),cocktailMeasure:l(e,"strMeasure"),strInstructions:r}}));d(e,o)}}const p=[];function h(e,t){d(e,p.push(t))}p.push(u("ingridient"));const v=document.querySelector(".hero__list");document.querySelector(".product__list");v.addEventListener("click",E);let _=0,y=0,b=[];const k=document.querySelector(".paginator"),f=document.querySelector(".pagination-buttton"),w=document.querySelector(".second-vector"),x=window.matchMedia("(min-width: 1280px)"),L=window.matchMedia("(max-width: 768px)"),S=window.matchMedia("(max-width: 1280px)");function E(e){const t=e.target;if(e.target!==e.currentTarget)return a("https://thecocktaildb.com/api/json/v1/1/search.php?f=",t.textContent).then((({drinks:e})=>{b.push(e),K(e);const t=document.querySelector(".product__list");if(L.matches){y=3,_=e.length;let t=Math.ceil(_/y),o="";for(let e=0;e<t;e++)o+='<button  class="paginator-item" data-page='+e*y+'  id="page'+(e+1)+'">'+(e+1)+"</button>";f.style.display="block",w.style.display="block",k.innerHTML=o;let n=document.querySelectorAll(".product__wraper");for(let e=0;e<n.length;e++)e<y&&(n[e].style.display="block");let r=document.getElementById("page1");r.classList.add("paginator_active");document.querySelector(".paginator").addEventListener("click",(function(e){const t=(e||window.event).target,o=t.id;if("button"!==t.tagName.toLowerCase())return;let l=+t.dataset.page;console.log(l),r.classList.remove("paginator_active"),r=document.getElementById(o),r.classList.add("paginator_active");let s=0;for(let e=0;e<n.length;e++){let t=n[e].dataset.num;(t<=l||t>=l)&&(n[e].style.display="none")}for(let e=l;e<n.length&&!(s>=y);e++)n[e].style.display="block",s++}))}else if(S.matches){y=6,_=e.length;let o=Math.ceil(_/y),n="";for(let e=0;e<o;e++)n+='<button  class="paginator-item" data-page='+e*y+'  id="page'+(e+1)+'">'+(e+1)+"</button>";f.style.display="block",w.style.display="block",k.innerHTML=n;let r=document.querySelectorAll(".product__wraper");for(let e=0;e<r.length;e++)e<y&&(t.style.gap="0",r[e].style.cssText="\n                 display:block;\n                 margin-right: 10px;\n                 margin-bottom: 20px;\n                  ");let l=document.getElementById("page1");l.classList.add("paginator_active");document.querySelector(".paginator").addEventListener("click",(function(e){const t=(e||window.event).target,o=t.id;if("button"!==t.tagName.toLowerCase())return;let n=+t.dataset.page;console.log(n),l.classList.remove("paginator_active"),l=document.getElementById(o),l.classList.add("paginator_active");let s=0;for(let e=0;e<r.length;e++){let t=r[e].dataset.num;(t<=n||t>=n)&&(r[e].style.display="none")}for(let e=n;e<r.length&&!(s>=y);e++)r[e].style.cssText="\n                 display:block;\n                 margin-right: 10px;\n                 margin-bottom: 20px;\n                  ",s++}))}else if(x.matches){y=9,_=e.length;let o=Math.ceil(_/y),n="";for(let e=0;e<o;e++)n+='<button  class="paginator-item" data-page='+e*y+'  id="page'+(e+1)+'">'+(e+1)+"</button>";f.style.display="block",w.style.display="block",k.innerHTML=n;let r=document.querySelectorAll(".product__wraper");for(let e=0;e<r.length;e++)e<y&&(t.style.gap="0",r[e].style.cssText="\n                 display:block;\n                 margin-right: 10px;\n                 margin-bottom: 20px;\n                  ");let l=document.getElementById("page1");l.classList.add("paginator_active");document.querySelector(".paginator").addEventListener("click",(function(e){const t=(e||window.event).target,o=t.id;if("button"!==t.tagName.toLowerCase())return;let n=+t.dataset.page;console.log(n),l.classList.remove("paginator_active"),l=document.getElementById(o),l.classList.add("paginator_active");let s=0;for(let e=0;e<r.length;e++){let t=r[e].dataset.num;(t<=n||t>=n)&&(r[e].style.display="none")}for(let e=n;e<r.length&&!(s>=y);e++)r[e].style.cssText="\n                 display:block;\n                 margin-right: 10px;\n                 margin-bottom: 20px;\n                  ",s++}))}})).catch((e=>{console.log(e)}))}function T(){let e="",t="ADGIJKLNSPV";for(let o=0;o<1;o++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}const q=window.matchMedia("(min-width: 1280px)"),$=window.matchMedia("(max-width: 768px)"),A=window.matchMedia("(max-width: 1280px)");let D=0,M=[];function H(e){for(let t of e)t.style.display="block"}console.log(T()),a("https://thecocktaildb.com/api/json/v1/1/search.php?f=",T()).then((e=>{M.push(e.drinks),K(e.drinks);let t=document.querySelectorAll(".product__wraper");$.matches?(D=Array.from(t).slice(0,3),H(D)):A.matches?(D=Array.from(t).slice(0,6),H(D)):q.matches&&(D=Array.from(t).slice(0,9),H(D))})).catch((e=>{console.log(e)}));const{save:I,load:C}=g;const O=document.querySelector(".modal-cocktail");function B(e){let{strDrink:o,strDrinkThumb:n,strInstructions:r,strGlass:l,strCategory:s}=e,c=[],a=[];for(let t=1;t<15;t+=1)e[`strIngredient${t}`]&&(a.push(e[`strIngredient${t}`]),c.push(e[`strMeasure${t}`]));const d=a.map((e=>`\n\n        <li class="modal-cocktail__item">\n        <a class="modal-cocktail__link link" href="#" data-modal-ingredient-open>${e}</a>\n\n        </li>`)).join("");var u;u=`\n\n    <button class="modal__close-btn" type="button" data-modal-cocktail-close>\n      <svg class="modal__close-svg" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">\n        <use href="${t(i)}#menu-close"></use>\n      </svg>\n    </button>\n\n    <h3 class="modal-cocktail__title">${o}</h3>\n    <div class="modal-wraper">\n      <div class="modal-cocktail__wrap-instructions">\n        <h4 class="modal-cocktail__subtitle">Instructions:</h4>\n        <p class="modal-cocktail__instructions">${r}</p>\n      </div>\n      <img\n        class="modal-cocktail__image"\n        src="${n}"\n        alt="Cocktail ${l} "\n      />\n      <div class="modal-cocktail__wrap-ingredients">\n        <h4 class="modal-cocktail__ingredients">Ingredients</h4>\n        <p class="modal-cocktail__per">Per cocktail</p>\n        <ul class="modal-cocktail__list">${d}</ul>\n      </div>\n    </div>\n    <button type="button" class="button__add-or-remove--modal">Add to favorite</button>`,O.insertAdjacentHTML("afterbegin",u);const g=document.querySelectorAll("[data-modal-ingredient-open]");Array.from(g).map((e=>{e.addEventListener("click",F)}))}const j={openModalIngred:document.querySelector("[data-modal-ingredient-open]"),closeModalIngred:document.querySelector(".modal-ingredient__backdrop"),modalIngred:document.querySelector("[data-modal-ingredient]")};function F(e){const t=e.target.textContent;j.closeModalIngred.classList.remove("is-hidden2"),a("https://thecocktaildb.com/api/json/v1/1/search.php?i=",t).then((e=>{!function(e){document.querySelector(".ingridient-wrapper")&&(document.querySelector(".ingridient-wrapper").innerHTML="");t=`\n <div class="ingridient-wrapper">\n  <h3 class="modal-ingredient__title">${e.strIngredient}</h3>\n    <h4 class="modal-ingredient__subtitle">${e.strType}</h4>\n    <hr class="modal-ingredient__line" />\n    <p class="modal-ingredient__description">\n      <span class="modal-ingredient__name-span">${e.strIngredient}</span> ${e.strDescription="drink"}\n    </p>\n    <ul class="modal-ingredient__list list">\n      <li class="modal-ingredient__item">Type: ${e.strType}</li>\n      <li class="modal-ingredient__item">Alcohol by volume: ${e.strABV=0}%</li>\n      <li class="modal-ingredient__item">Flavour: fantastic </li>\n\n    </ul>\n    <div class="modal-ingredient__button">\n      <button type="button" class="button__add-or-remove--modal-ingr">\n        Add to favorite\n      </button>\n </div>\n`,document.querySelector(".modal-ingredient").insertAdjacentHTML("afterbegin",t);var t;const o=document.querySelector(".button__add-or-remove--modal-ingr");o.style.boxShadow="0 1px 1px #0000001f, 0 4px 4px #0000000f, 1px 4px 6px #00000029",o.addEventListener("click",h("ingridient",e)),j.closeModalIngred.addEventListener("click",(()=>j.closeModalIngred.classList.add("is-hidden2")))}(e.ingredients[0]),console.log(e),I("ingridient",e.ingredients[0])})).catch((e=>{console.log(e)}))}const N=document.querySelector("[data-modal-cocktail]"),P=document.querySelector(".modal-cocktail");let R={};function G(e){N.classList.toggle("is-hidden2"),W(P);let t=e.target.attributes[0].value;R=M[0].find((e=>e.idDrink===t))||b[0].find((e=>e.idDrink===t)),B(R);document.querySelector("[data-modal-cocktail-close]").addEventListener("click",V)}function V(){N.classList.toggle("is-hidden2")}function W(e){e.innerHTML=""}const J=e=>document.querySelector(e),{save:U,load:X,remove:Q}=g,Y=[];function K(e){e?function(e){(function(){J(".product").innerHTML="";const e='\n  <h2 class="product__title">Cocktails</h2>\n  <ul class="product__list"></ul>\n  ';J(".product").insertAdjacentHTML("beforeEnd",e)})(),J(".product__list").innerHTML="";const o=e.map(((e,o)=>`<li id="${e.idDrink}" class="product__item">   \n        <div class="product__wraper" data-num="${o}">\n\n          <div class="product__image-part">\n            <picture>\n              <source\n                srcset="\n                ${e.strDrinkThumb} 1x,\n                ${e.strDrinkThumb} 2x\n                "\n                media="(min-width:1200px)"\n              />\n              <source\n                srcset="\n                ${e.strDrinkThumb} 1x,\n                ${e.strDrinkThumb} 2x\n                "\n                media="(min-width:768px)"\n              />\n              <source\n                srcset="\n                ${e.strDrinkThumb} 1x,\n                ${e.strDrinkThumb} 2x\n                "\n                media="(max-width:767px)"\n              />\n              <img\n                class="product__image"\n                src="${e.strDrinkThumb}"\n                alt="cocktail"\n                width="280"\n                height="280"\n              />\n            </picture>\n          </div>\n          <div class="product__description-part">\n            <h3 class="product__subtitle">${e.strDrink}</h3>\n            <div class="product__buttons">\n              <button data-="${e.idDrink}" class="button button__learn-more" data-modal-cocktail-open >Learn more</button>\n              <button data-="${e.idDrink}" class="button button__add-or-remove">\n              \n              ${ee("Add to",e.idDrink)?"Remove":"Add to"}\n                <div class="product__heart-wraper">\n\n                  <svg class="product__big-icon--${ee("Add to",e.idDrink)?"remove":"add"}" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n                    <use href="${t(i)}#bigHeart"></use>\n                  </svg>\n                  <svg class="product__small-icon--${ee("Add to",e.idDrink)?"remove":"add"}" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n                    <use href="${t(i)}#smallHeart"></use>\n                  </svg>\n                </div>\n              </button>\n            </div>\n          </div>\n        </div>\n      </li>`)).join("");J(".product__list").insertAdjacentHTML("beforeEnd",o);const n=document.querySelectorAll(".button.button__learn-more");Array.from(n).map((e=>{e.addEventListener("click",G)})),m("cocktailsFromFetch",e)}(e):function(){J(".product").innerHTML="",k.innerHTML="",f.innerHTML="",w.innerHTML="";const e=`\n  <p class="product__empty-state">\n      Sorry, we didn't find any cocktail for you\n    </p>\n    <picture>\n      <source\n        srcset="\n        ${Z} 1x,\n          ${z} 2x\n        "\n        media="(min-width:1200px)"\n      />\n      <source\n        srcset="\n        ${Z} 1x,\n          ${z} 2x\n        "\n        media="(min-width:768px)"\n      />\n      <source\n        srcset="\n        ${Z} 1x,\n          ${z} 2x\n        "\n        media="(max-width:767px)"\n      />\n      <img\n        class="product__empty-image"\n        src="${Z}"\n        alt="cocktail"\n        width="280"\n        height="308"\n      />\n    </picture>\n  `;J(".product").insertAdjacentHTML("beforeEnd",e)}()}X("cocktails")&&X("cocktails").length>0&&Y.push(...X("cocktails")),console.log("favoriteArr 12str",Y);var Z;Z=new URL(l("kyEFX").resolve("h565r"),import.meta.url).toString();var z;function ee(e,t){if(null==X("cocktails"))return!1;return X("cocktails").map((e=>e.idDrink)).find((e=>e===t))}z=new URL(l("kyEFX").resolve("3DaIG"),import.meta.url).toString();const te=document.querySelector(".container.product");te&&te.addEventListener("click",(function(e){oe=e.target.attributes[0].nodeValue;let o=X("cocktailsFromFetch");Y.map((e=>e.idDrink)).find((e=>e===oe))?function(e,o){"Remove"===e.target.innerText&&(e.target.innerHTML=`Add to\n  <div class="product__heart-wraper">\n    <svg class="product__big-icon--add" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n      <use href="${t(i)}#bigHeart"></use>\n    </svg>\n    <svg class="product__small-icon--add" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n      <use href="${t(i)}#smallHeart"></use>\n    </svg>\n  </div>`);Q("cocktails",o)}(e,oe):function(e,o,n){"Add to"===e.target.innerText&&(e.target.innerHTML=`Remove\n    <div class="product__heart-wraper">\n      <svg class="product__big-icon--remove" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n        <use href="${t(i)}#bigHeart"></use>\n      </svg>\n      <svg class="product__small-icon--remove" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n        <use href="${t(i)}#smallHeart"></use>\n      </svg>\n    </div>`,function(e,t,o){const n=[];t.map((e=>{e.idDrink===o&&n.push(e)}));Y.push(...n),U("cocktails",Y)}(0,o,n))}(e,o,oe),console.log(Y)}));let oe=0;const ne=document.querySelector(".search-container__form"),re=document.querySelector(".search-container__form-mob");let le="";re.addEventListener("submit",ge),ne.addEventListener("submit",ge);let se=0,ce=0;const ae=document.querySelector(".paginator"),ie=window.matchMedia("(min-width: 1280px)"),de=window.matchMedia("(max-width: 768px)"),ue=window.matchMedia("(max-width: 1280px)");function ge(e){const t=document.querySelector(".backdrop-mob");document.querySelector(".js-open-menu").classList.remove("is-open"),t.classList.remove("is-open"),e.preventDefault(),le=e.currentTarget.elements.searchQuery.value,a("https://thecocktaildb.com/api/json/v1/1/search.php?s=",le).then((({drinks:e})=>{b.push(e),K(e);const t=document.querySelector(".product__list");if(de.matches){ce=3,se=e.length;let t=Math.ceil(se/ce),o="";for(let e=0;e<t;e++)o+='<button  class="paginator-item" data-page='+e*ce+'  id="page'+(e+1)+'">'+(e+1)+"</button>";f.style.display="block",w.style.display="block",ae.innerHTML=o;let n=document.querySelectorAll(".product__wraper");for(let e=0;e<n.length;e++)e<ce&&(n[e].style.display="block");let r=document.getElementById("page1");r.classList.add("paginator_active");document.querySelector(".paginator").addEventListener("click",(function(e){const t=(e||window.event).target,o=t.id;if("button"!==t.tagName.toLowerCase())return;let l=+t.dataset.page;console.log(l),r.classList.remove("paginator_active"),r=document.getElementById(o),r.classList.add("paginator_active");let s=0;for(let e=0;e<n.length;e++){let t=n[e].dataset.num;(t<=l||t>=l)&&(n[e].style.display="none")}for(let e=l;e<n.length&&!(s>=ce);e++)n[e].style.display="block",s++}))}else if(ue.matches){ce=6,se=e.length;let o=Math.ceil(se/ce),n="";for(let e=0;e<o;e++)n+='<button  class="paginator-item" data-page='+e*ce+'  id="page'+(e+1)+'">'+(e+1)+"</button>";f.style.display="block",w.style.display="block",ae.innerHTML=n;let r=document.querySelectorAll(".product__wraper");for(let e=0;e<r.length;e++)e<ce&&(t.style.gap="0",r[e].style.cssText="\n                 display:block;\n                 margin-right: 10px;\n                 margin-bottom: 20px;\n                  ");let l=document.getElementById("page1");l.classList.add("paginator_active");document.querySelector(".paginator").addEventListener("click",(function(e){const t=(e||window.event).target,o=t.id;if("button"!==t.tagName.toLowerCase())return;let n=+t.dataset.page;console.log(n),l.classList.remove("paginator_active"),l=document.getElementById(o),l.classList.add("paginator_active");let s=0;for(let e=0;e<r.length;e++){let t=r[e].dataset.num;(t<=n||t>=n)&&(r[e].style.display="none")}for(let e=n;e<r.length&&!(s>=ce);e++)r[e].style.cssText="\n                 display:block;\n                 margin-right: 10px;\n                 margin-bottom: 20px;\n                  ",s++}))}else if(ie.matches){ce=9,se=e.length;let o=Math.ceil(se/ce),n="";for(let e=0;e<o;e++)n+='<button  class="paginator-item" data-page='+e*ce+'  id="page'+(e+1)+'">'+(e+1)+"</button>";f.style.display="block",w.style.display="block",ae.innerHTML=n;let r=document.querySelectorAll(".product__wraper");for(let e=0;e<r.length;e++)e<ce&&(t.style.gap="0",r[e].style.cssText="\n                 display:block;\n                 margin-right: 10px;\n                 margin-bottom: 20px;\n                  ");let l=document.getElementById("page1");l.classList.add("paginator_active");document.querySelector(".paginator").addEventListener("click",(function(e){const t=(e||window.event).target,o=t.id;if("button"!==t.tagName.toLowerCase())return;let n=+t.dataset.page;console.log(n),l.classList.remove("paginator_active"),l=document.getElementById(o),l.classList.add("paginator_active");let s=0;for(let e=0;e<r.length;e++){let t=r[e].dataset.num;(t<=n||t>=n)&&(r[e].style.display="none")}for(let e=n;e<r.length&&!(s>=ce);e++)r[e].style.cssText="\n                 display:block;\n                 margin-right: 10px;\n                 margin-bottom: 20px;\n                  ",s++}))}})).catch((e=>{console.log(e)}))}const{save:me,load:pe,remove:he}=g,ve=pe("cocktails"),_e=document.querySelector("[data-modal-cocktail]"),ye=document.querySelectorAll(".qweqwe"),be=document.querySelector(".hero"),ke=document.querySelector(".section-cocktails"),fe=document.querySelector(".paginator-sections");function we(){if(document.querySelector(".backdrop-mob.js-menu-container").classList.remove("is-open"),ke.style.display="none",fe.style.display="none",be.innerHTML="",be.insertAdjacentHTML("afterbegin",'\n<body>\n    <div class="container favorite"></div>\n        <h1 class="favorite__title">Favorite cocktails</h1>\n        <ul class="favorite__list">\n        </ul>\n        <p class="default-text">You haven\'t added any favorite cocktails yet</p>\n    </div>\n\n    <script type="module" src="/src/index.js"><\/script>\n</body>\n\n   '),document.querySelector(".default-text")){be.style.marginBottom="40px";document.querySelector(".favorite__list").insertAdjacentHTML("afterbegin",function(e){if(e){document.querySelector(".default-text").style.display="none"}return e.map((e=>`\n        <li id="${e.idDrink}" class="favorite__item">   \n          <div class="favorite__wraper">\n\n\n          <div class="favorite__image-part">\n            <picture>\n              <source\n                srcset="\n                ${e.strDrinkThumb} 1x,\n                ${e.strDrinkThumb} 2x\n                "\n                media="(min-width:1200px)"\n              />\n              <source\n                srcset="\n                ${e.strDrinkThumb} 1x,\n                ${e.strDrinkThumb} 2x\n                "\n                media="(min-width:768px)"\n              />\n              <source\n                srcset="\n                ${e.strDrinkThumb} 1x,\n                ${e.strDrinkThumb} 2x\n                "\n                media="(max-width:767px)"\n              />\n              <img\n                class="favorite__image"\n                src="${e.strDrinkThumb}"\n                alt="cocktail"\n                width="280"\n                height="280"\n              />\n            </picture>\n          </div>\n\n          <div class="favorite__description-part">\n            <h3 class="favorite__subtitle">${e.strDrink}</h3>\n            <div class="favorite__buttons">\n              <button data-="${e.idDrink}" class="button button__learn-more" data-modal-cocktail-open >Learn more</button>\n              <button data-="${e.idDrink}" class="button button__add-or-remove">\n              \n              Remove\n                <div class="favorite__heart-wraper">\n\n                  <svg class="favorite__big-icon--remove" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n                    <use href="${t(i)}#bigHeart"></use>\n                  </svg>\n                  <svg class="favorite__small-icon--remove" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n                    <use href="${t(i)}#smallHeart"></use>\n                  </svg>\n                </div>\n              </button>\n            </div>\n          </div>\n        </div>\n      </li>\n      \n  `)).join("")}(ve))}else{document.querySelector(".default-text").style.display="block"}}Array.from(ye).map((e=>{e.addEventListener("click",we)}));document.querySelector("body").addEventListener("click",(function(e){if(document.querySelector(".favorite__list")){document.querySelector(".favorite__list").addEventListener("click",(function(e){if("Remove"==e.target.innerText){const o=e.target.attributes[0].nodeValue;e.target.innerHTML=`Add to\n          <div class="product__heart-wraper">\n            <svg class="product__big-icon--add" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n              <use href="${t(i)}#bigHeart"></use>\n            </svg>\n            <svg class="product__small-icon--add" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n              <use href="${t(i)}#smallHeart"></use>\n            </svg>\n          </div>`,he("cocktails",o)}else if("Add to"==e.target.innerText){const o=e.target.attributes[0].nodeValue;e.target.innerHTML=`Remove\n        <div class="product__heart-wraper">\n          <svg class="product__big-icon--remove" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n            <use href="${t(i)}#bigHeart"></use>\n          </svg>\n          <svg class="product__small-icon--remove" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">\n            <use href="${t(i)}#smallHeart"></use>\n          </svg>\n        </div>`,addToFavoriteLocalStorage(KEYFAVORITE,cocktailFromFetch,o)}else if("Learn more"===e.target.innerText){_e.classList.toggle("is-hidden2"),W(P);const t=JSON.parse(localStorage.getItem("cocktails"));idCard=e.target.attributes[0].value;B(t.find((e=>e.idDrink===idCard)));document.querySelector("[data-modal-cocktail-close]").addEventListener("click",V)}}))}}));const{save:xe,load:Le}=g,Se=(Le("cocktails"),document.querySelectorAll(".qweqwe123")),Ee=document.querySelector(".hero"),Te=document.querySelector(".section-cocktails"),qe=document.querySelector(".paginator-sections");function $e(){document.querySelector(".backdrop-mob.js-menu-container").classList.remove("is-open"),Te.style.display="none",qe.style.display="none",Ee.innerHTML="",Ee.insertAdjacentHTML("afterbegin",'\n<body>\n    <div class="container favorite"></div>\n        <h1 class="favorite__title">Favorite ingredients</h1>\n         <ul class="favorite__list">\n        </ul>\n        <p class="default-text">You haven\'t added any favorite cocktails yet</p>\n    </div>\n\n    <script type="module" src="/src/index.js"><\/script>\n</body>\n\n   ');document.querySelector(".favorite__list")}Array.from(Se).map((e=>{e.addEventListener("click",$e)}));document.querySelector("#checkbox__light"),document.querySelector("#checkbox__dark");const Ae=document.querySelector("#slider_round"),De=document.querySelector("#checkbox__lightt"),Me=document.querySelector("#checkbox__darkk"),He=document.querySelector("#slider_roundd"),Ie=document.querySelector(".dropbtn"),Ce=document.querySelector(".dropbtn-mob"),Oe=document.querySelector(".dropdown-content-desk"),Be=document.querySelector(".body"),je=document.querySelector(".site-nav__link"),Fe=document.querySelector(".imput__header"),Ne=(document.querySelector(".product__title"),document.querySelector(".icon__menu")),Pe=document.querySelector(".backdrop-mob"),Re=document.querySelector(".dropdown-content button"),Ge=document.querySelector(".favorite-ingridients"),Ve=document.querySelector(".mob-menu__link"),We=document.querySelector(".product__title");Ae.addEventListener("click",(function(){document.body.classList.toggle("dark")?(Be.style.backgroundColor="var(--black-bg-color)",Fe.style.backgroundColor="var(--black-bg-color)",Fe.style.color="var(--orange-text-color)",je.style.color="var(--white-bg-color)",Ie.style.color="var(--white-bg-color)",Oe.style.backgroundColor="transparent",Ce.style.backgroundColor="var(--white-bg-color)",Re.style.color="var(--white-bg-color)",Ge.style.color="var(--white-bg-color)",Ce.style.borderSolid="var(--orange-text-color)",Ne.style.color="var(--white-bg-color)",Pe.style.background="var(--black-bg-color)",We.style.color="var(--white-bg-color)",De.style.color="var(--white-bg-color)",Me.style.color="var(--orange-text-color)",Ve.style.color="var(--white-bg-color)"):(Be.style.backgroundColor="var(--white-bg-color)",Fe.style.backgroundColor="var(--white-bg-color)",Fe.style.color="var(--black-bg-color)",je.style.color="var(--black-bg-color)",Ie.style.color="var(--black-bg-color)",Oe.style.backgroundColor="var(--white-bg-color)",Ce.style.backgroundColor="var(--white-bg-color)",Re.style.color="var(--black-bg-color)",Ge.style.color="var(--black-bg-color)",Ce.style.borderSolid="var(--white-bg-color)",Pe.style.background="var(--white-bg-color)",Ne.style.color="var(--black-bg-color)",We.style.color="var(--black-bg-color)",De.style.color="var(--orange-text-color)",Me.style.color="var(--black-bg-color)",Ve.style.color="var(--black-bg-color)")})),He.addEventListener("click",(function(){document.body.classList.toggle("dark")?(Be.style.background="var(--black-bg-color)",Fe.style.backgroundColor="var(--black-bg-color)",Fe.style.color="var(--orange-text-color)",je.style.color="var(--white-bg-color)",Ie.style.color="var(--white-bg-color)",Oe.style.backgroundColor="transparent",Ce.style.backgroundColor="var(--white-bg-color)",Re.style.color="var(--white-bg-color)",Ge.style.color="var(--white-bg-color)",Ce.style.borderSolid="var(--orange-text-color)",Ne.style.color="var(--white-bg-color)",Pe.style.background="var(--black-bg-color)",We.style.color="var(--white-bg-color)",De.style.color="var(--white-bg-color)",Me.style.color="var(--orange-text-color)",Ve.style.color="var(--white-bg-color)"):(Be.style.backgroundColor="var(--white-bg-color)",Fe.style.backgroundColor="var(--white-bg-color)",Fe.style.color="var(--black-bg-color)",je.style.color="var(--black-bg-color)",Ie.style.color="var(--black-bg-color)",Oe.style.backgroundColor="var(--white-bg-color)",Ce.style.backgroundColor="var(--white-bg-color)",Re.style.color="var(--black-bg-color)",Ge.style.color="var(--black-bg-color)",Ce.style.borderSolid="var(--white-bg-color)",Ne.style.color="var(--black-bg-color)",Pe.style.background="var(--white-bg-color)",We.style.color="var(--black-bg-color)",De.style.color="var(--orange-text-color)",Me.style.color="var(--black-bg-color)",Ve.style.color="var(--black-bg-color)")}));var Je={};Object.defineProperty(Je,"__esModule",{value:!0}),Je.default=function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o;return e};class Ue{static template(e){const{name:t,options:o,targetValue:n}=e,r=[];let l=-1,s="",c="Выберите из списка";return o.forEach(((e,t)=>{let o="";e[0]===n&&(o=` ${this.EL_OPTION_SELECTED}`,l=t,s=e[0],c=e[1]),r.push(`<li class="itc-select__option${o}" data-select="option"\n        data-value="${e[0]}" data-index="${t}">${e[1]}</li>`)})),`<button type="button" class="itc-select__toggle" name="${t}"\n      value="${s}" data-select="toggle" data-index="${l}">\n      ${c}</button><div class="itc-select__dropdown">\n      <ul class="itc-select__options">${r.join("")}</ul></div>`}static hideOpenSelect(){document.addEventListener("click",(e=>{if(!e.target.closest(`.${this.EL}`)){document.querySelectorAll(`.${this.EL_SHOW}`).forEach((e=>{e.classList.remove(this.EL_SHOW)}))}}))}static create(e,t){return this._el="string"==typeof e?document.querySelector(e):e,this._el?new this(e,t):null}_onClick(e){const{target:t}=e,o=t.closest(this.constructor.DATA).dataset.select;"toggle"===o?this.toggle():"option"===o&&this._changeValue(t)}_updateOption(e){const t=e.closest(`.${this.constructor.EL_OPTION}`),o=this._el.querySelector(`.${this.constructor.EL_OPTION_SELECTED}`);return o&&o.classList.remove(this.constructor.EL_OPTION_SELECTED),t.classList.add(this.constructor.EL_OPTION_SELECTED),this._elToggle.textContent=t.textContent,this._elToggle.value=t.dataset.value,this._elToggle.dataset.index=t.dataset.index,this._el.dispatchEvent(new CustomEvent("itc.select.change")),this._params.onSelected&&this._params.onSelected(this,t),t.dataset.value}_reset(){const e=this._el.querySelector(`.${this.constructor.EL_OPTION_SELECTED}`);return e&&e.classList.remove(this.constructor.EL_OPTION_SELECTED),this._elToggle.textContent="Выберите из списка",this._elToggle.value="",this._elToggle.dataset.index="-1",this._el.dispatchEvent(new CustomEvent("itc.select.change")),this._params.onSelected&&this._params.onSelected(this,null),""}_changeValue(e){e.classList.contains(this.constructor.EL_OPTION_SELECTED)||(this._updateOption(e),this.hide())}show(){document.querySelectorAll(this.constructor.EL_SHOW).forEach((e=>{e.classList.remove(this.constructor.EL_SHOW)})),this._el.classList.add(`${this.constructor.EL_SHOW}`)}hide(){this._el.classList.remove(this.constructor.EL_SHOW)}toggle(){this._el.classList.contains(this.constructor.EL_SHOW)?this.hide():this.show()}dispose(){this._el.removeEventListener("click",this._onClickFn)}get value(){return this._elToggle.value}set value(e){let t=!1;this._el.querySelectorAll(".select__option").forEach((o=>{o.dataset.value===e&&(t=!0,this._updateOption(o))})),t||this._reset()}get selectedIndex(){return this._elToggle.dataset.index}set selectedIndex(e){const t=this._el.querySelector(`.select__option[data-index="${e}"]`);t&&this._updateOption(t),this._reset()}constructor(e,t){this._el="string"==typeof e?document.querySelector(e):e,this._params=t||{},this._onClickFn=this._onClick.bind(this),this._params.options&&(this._el.innerHTML=this.constructor.template(this._params),this._el.classList.add(this.constructor.EL)),this._elToggle=this._el.querySelector(this.constructor.DATA_TOGGLE),this._el.addEventListener("click",this._onClickFn)}}t(Je)(Ue,"EL","itc-select"),t(Je)(Ue,"EL_SHOW","itc-select_show"),t(Je)(Ue,"EL_OPTION","itc-select__option"),t(Je)(Ue,"EL_OPTION_SELECTED","itc-select__option_selected"),t(Je)(Ue,"DATA","[data-select]"),t(Je)(Ue,"DATA_TOGGLE",'[data-select="toggle"]'),Ue.hideOpenSelect();new Ue("#select-2",{name:"letter",targetValue:"A",options:[["A","A"],["B","B"],["C","C"],["D","D"],["E","E"],["F","F"],["G","G"],["H","H"],["I","I"],["J","J"],["K","K"],["L","L"],["M","M"],["N","N"],["O","O"],["P","P"],["Q","Q"],["R","R"],["S","S"],["T","T"],["U","U"],["V","V"],["W","W"],["X","X"],["Y","Y"],["Z","Z"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["0","0"]]});document.querySelectorAll(".itc-select__options")[0].addEventListener("click",E);
//# sourceMappingURL=index.3a4c6f76.js.map
