const sideMenu = document.querySelector(".User-mob");
const nav = document.querySelector(".side-nav");
const overlay = document.querySelector(".overlay");

sideMenu.addEventListener("click", () => {
  overlay.classList.add("show");
  nav.classList.add("show-nav");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("show-nav");
  overlay.classList.remove("show");
});
