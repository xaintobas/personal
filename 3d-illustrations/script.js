const menuToggler =  document.querySelector('.menu-toggler');
const overlay =  document.querySelector('.overlay');
const menuList =  document.querySelector('menu-list');
const menuBtn =  document.querySelector('.menu-btn');


menuToggler.addEventListener('click', function() {
  overlay.style.height = '30rem';
  menuList.style.top = '20rem';
})

