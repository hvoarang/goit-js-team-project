// ****************mobbbbbbbb*************
const light = document.querySelector('#checkbox__light');
const black = document.querySelector('#checkbox__dark');
const slider = document.querySelector('#slider_round');

// ***************deskkkkkkkk****************
const lightt = document.querySelector('#checkbox__lightt');
const blackk = document.querySelector('#checkbox__darkk');
const sliderr = document.querySelector('#slider_roundd');

// ******************************************************************

const dropBTN = document.querySelector('.dropbtn');
const dropBTNMob = document.querySelector('.dropbtn-mob');
const dropBTNDesk = document.querySelector('.dropdown-content-desk');
const bodyMain = document.querySelector('.body');
const siteNavLink = document.querySelector('.site-nav__link');
const imputHeader = document.querySelector('.imput__header');
const productTitle = document.querySelector('.product__title');
const iconMenu = document.querySelector('.icon__menu');
const backdropMob = document.querySelector('.backdrop-mob');
const dropdownContent = document.querySelector('.dropdown-content a');
const dropdownContenti = document.querySelector('.dropdown-content_i');
const paginatorItem = document.querySelector('.paginator-item');
const favorTiteitle = document.querySelector('.favorite-title');
const btnOrRemove = document.querySelector('.button__add-or-remove');

const mobMenuItem = document.querySelector('.mob-menu__link');
// const blac = document.querySelector('.checkbox__dark');
console.log(mobMenuItem);

slider.addEventListener('click', changeTheme);
sliderr.addEventListener('click', changeThemeMain);

function changeTheme() {
  if (document.body.classList.toggle('dark')) {
    bodyMain.style.backgroundColor = 'var(--black-bg-color)';
    imputHeader.style.backgroundColor = 'var(--black-bg-color)';
    imputHeader.style.color = 'var(--orange-text-color)';
    siteNavLink.style.color = 'var(--white-bg-color)';
    dropBTN.style.color = 'var(--white-bg-color)';
    dropBTNDesk.style.backgroundColor = 'transparent';
    dropBTNMob.style.backgroundColor = 'var(--white-bg-color)';
    dropdownContent.style.color = 'var(--white-bg-color)';
    dropdownContenti.style.color = 'var(--white-bg-color)';
    dropBTNMob.style.borderSolid = 'var(--orange-text-color)';
    iconMenu.style.color = 'var(--white-bg-color)';
    backdropMob.style.background = 'var(--black-bg-color)';
    // btnOrRemove.style.background = 'var(--black-bg-color)';
    // productTitle.style.color = 'var(--white-bg-color)';
    // paginatorItem.style.color = 'var(--white-bg-color)';
    // favorTiteitle.style.color = 'var(--black-bg-color)';
    // ligh.style.color = 'var(--white-bg-color)';
    // blac.style.color = 'var(--orange-text-color)';
    lightt.style.color = 'var(--white-bg-color)';
    blackk.style.color = 'var(--orange-text-color)';
    mobMenuItem.style.color = 'var(--white-bg-color)';
  } else {
    bodyMain.style.backgroundColor = 'var(--white-bg-color)';
    imputHeader.style.backgroundColor = 'var(--white-bg-color)';
    imputHeader.style.color = 'var(--black-bg-color)';
    siteNavLink.style.color = 'var(--black-bg-color)';
    dropBTN.style.color = 'var(--black-bg-color)';
    dropBTNDesk.style.backgroundColor = 'var(--white-bg-color)';
    dropBTNMob.style.backgroundColor = 'var(--white-bg-color)';
    dropdownContent.style.color = 'var(--black-bg-color)';
    dropdownContenti.style.color = 'var(--black-bg-color)';
    dropBTNMob.style.borderSolid = 'var(--white-bg-color)';
    backdropMob.style.background = 'var(--white-bg-color)';
    iconMenu.style.color = 'var(--black-bg-color)';
    // productTitle.style.color = 'var(--black-bg-color)';
    // btnOrRemove.style.background = 'var(--white-bg-color)';
    // paginatorItem.style.color = 'var(--black-bg-color)';
    // favorTiteitle.style.color = 'var(--white-bg-color)';
    // ligh.style.color = 'var(--orange-text-color)';
    // blac.style.color = 'var(--black-bg-color)';
    lightt.style.color = 'var(--orange-text-color)';
    blackk.style.color = 'var(--black-bg-color)';
    mobMenuItem.style.color = 'var(--black-bg-color)';
  }
}

function changeThemeMain() {
  if (document.body.classList.toggle('dark')) {
    bodyMain.style.background = 'var(--black-bg-color)';
    imputHeader.style.backgroundColor = 'var(--black-bg-color)';
    imputHeader.style.color = 'var(--orange-text-color)';
    siteNavLink.style.color = 'var(--white-bg-color)';
    dropBTN.style.color = 'var(--white-bg-color)';
    dropBTNDesk.style.backgroundColor = 'transparent';
    dropBTNMob.style.backgroundColor = 'var(--white-bg-color)';
    dropdownContent.style.color = 'var(--white-bg-color)';
    dropdownContenti.style.color = 'var(--white-bg-color)';
    dropBTNMob.style.borderSolid = 'var(--orange-text-color)';
    iconMenu.style.color = 'var(--white-bg-color)';
    backdropMob.style.background = 'var(--black-bg-color)';
    // productTitle.style.color = 'var(--white-bg-color)';
    // btnOrRemove.style.background = 'var(--black-bg-color)';
    // paginatorItem.style.color = 'var(--white-bg-color)';
    // favorTiteitle.style.color = 'var(--black-bg-color)';
    // ligh.style.color = 'var(--white-bg-color)';
    // blac.style.color = 'var(--orange-text-color)';
    lightt.style.color = 'var(--white-bg-color)';
    blackk.style.color = 'var(--orange-text-color)';
    mobMenuItem.style.color = 'var(--white-bg-color)';
  } else {
    bodyMain.style.backgroundColor = 'var(--white-bg-color)';
    imputHeader.style.backgroundColor = 'var(--white-bg-color)';
    imputHeader.style.color = 'var(--black-bg-color)';
    siteNavLink.style.color = 'var(--black-bg-color)';
    dropBTN.style.color = 'var(--black-bg-color)';
    dropBTNDesk.style.backgroundColor = 'var(--white-bg-color)';
    dropBTNMob.style.backgroundColor = 'var(--white-bg-color)';
    dropdownContent.style.color = 'var(--black-bg-color)';
    dropdownContenti.style.color = 'var(--black-bg-color)';
    dropBTNMob.style.borderSolid = 'var(--white-bg-color)';
    iconMenu.style.color = 'var(--black-bg-color)';
    backdropMob.style.background = 'var(--white-bg-color)';
    // productTitle.style.color = 'var(--black-bg-color)';
    // btnOrRemove.style.background = 'var(--white-bg-color)';
    // favorTiteitle.style.color = 'var(--white-bg-color)';
    // paginatorItem.style.color = 'var(--black-bg-color)';
    // ligh.style.color = 'var(--orange-text-color)';
    // blac.style.color = 'var(--black-bg-color)';
    lightt.style.color = 'var(--orange-text-color)';
    blackk.style.color = 'var(--black-bg-color)';
    mobMenuItem.style.color = 'var(--black-bg-color)';
  }
}
