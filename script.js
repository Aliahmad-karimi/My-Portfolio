// This is menu bar and close button
const menu = document.querySelector('.menuBar');
const menuList = document.querySelector('.tool');
const clos = document.querySelector('.clos-button');
const lists = document.querySelector('.tool-social');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuList.classList.toggle('active');
});

clos.addEventListener('click', () => {
  menuList.classList.remove('active');
});

lists.addEventListener('click', () => {
  menuList.classList.remove('active');
});