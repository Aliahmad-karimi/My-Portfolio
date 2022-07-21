const menu = document.querySelector('.menubtn');
const menuList = document.querySelector('.tool');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuList.classList.toggle('active');
});

const close = document.querySelector('.clos-button');

close.addEventListener('click', () => {
    menuList.classList.remove('active');
});

const lists = document.querySelector('.tool-social');

lists.addEventListener('click', () => {
    menuList.classList.remove('active');
})