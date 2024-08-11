// GET THE HTML ELEMENTS
const btnOpenEl = document.querySelector('.btn-open');
const btnCloseEl = document.querySelector('.btn-close');
const asideContentEl = document.querySelector('.aside-content');
const mainContentEl =  document.querySelector('.main-content');
const overlayEl = document.querySelector('.overlay');


// FUNCTION TO OPEN AND CLOSE SIDE CONTENT

const openSideContent = function () {
  asideContentEl.style.left = '0rem';
  overlayEl.classList.remove('hidden');
};

const closeSideContent = function () {
  asideContentEl.style.left = '-30rem';
  mainContentEl.style.marginLeft = '0rem';
  overlayEl.classList.add('hidden');
};


btnOpenEl.addEventListener('click', openSideContent);
overlayEl.addEventListener('click', closeSideContent);
btnCloseEl.addEventListener('click', closeSideContent);


