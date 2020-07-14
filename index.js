const sideMenu = document.getElementsByClassName("User-mob");
const nav = document.getElementsByClassName("side-nav");
const overlay = document.getElementsByClassName("overlay");

sideMenu.addEventListener("click", () => {
  overlay.classList.add("show");
  nav.classList.add("show-nav");
  overlay.classList.remove("hide");

  nav.classList.remove("hide-nav");
});

overlay.addEventListener("click", () => {
  nav.classList.add("hide");
  overlay.classList.add("hide");
  nav.classList.remove("show");
  overlay.classList.remove("show-overlay");
});
