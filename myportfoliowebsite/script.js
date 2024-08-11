// GET THE HTML ELEMENTS
const btnOpenEl = document.querySelector('.btn-open');
const btnCloseEl = document.querySelector('.btn-close');
const asideContentEl = document.querySelector('.aside-content');
const mainContentEl =  document.querySelector('.main-content');
const overlayEl = document.querySelector('.overlay');
const timeNowEl = document.querySelector('.time-now');
const dateNowEl = document.querySelector('.date-now');


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


// GET THE CURRENT TIME AND DAY

const date = new Date();
const day = date.getDay();
const currentHours = date.getHours();
const currentMins = date.getMinutes();

const getCurrentTime = currentHours >= 12 ? `${currentHours} : ${currentMins} PM` : `${currentHours} : ${currentMins} AM`;

timeNowEl.textContent = getCurrentTime;

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

for (let i = 0; i <= days.length; i++) {
  if (day === i) {
    // console.log(days[i]);
    dateNowEl.textContent = `Today is: ${days[i]}`;
  }
}