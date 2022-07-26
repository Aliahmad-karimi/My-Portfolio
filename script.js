// This is menu bar and close button
const menu = document.querySelector('.menuBar');
const menuList = document.querySelector('.tool');
const close = document.querySelector('.clos-button');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuList.classList.toggle('active');
})

close.addEventListener('click', () => {
    menuList.classList.remove('active');
})