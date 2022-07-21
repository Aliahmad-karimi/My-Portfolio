const menuBar = document.querySelector('.menuBar');
const toolSocial = document.querySelector('.tool-social');
const n = 0;

menuBar.addEventListener('click', () => {
  menuBar.classList.toggle('active');
  toolSocial.classList.toggle('active');
});

document.querySelectorAll('.Line').forEach(n, () => n.addEventListener('click', () => {
  menuBar.classList.remove('active');
  toolSocial.classList.remove('active');
}));