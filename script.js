let menuBar = document.querySelector('.menuBar');
let toolSocial = document.querySelector('.tool-social');

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("active");
    toolSocial.classList.toggle("active");
})

document.querySelectorAll(".Line").forEach(n => n.addEventListener("click", () => {
    menuBar.classList.remove("active");
    toolSocial.classList.remove("active");
}))