var elem = document.getElementsByClassName("see-more");
for (var i = 0; i < elem.length; i++) {
  elem[i].onclick = function () {
    if (this.innerHTML === "see less") {
      this.previousSibling.style.display = "none";
      this.innerHTML = "... see more";
    } else {
      this.previousSibling.style.display = "inline";
      this.innerHTML = "see less";
    }
  };
}

const sideMenu = document.getElementById("ham-menu");
const nav = document.querySelector(".side-nav");
const overlay = document.querySelector(".overlay");

sideMenu.addEventListener("click", () => {
  overlay.classList.add("show");
  //   nav.classList.add("show");
});

overlay.addEventListener("click", () => {
  //   nav.classList.remove("show");
  overlay.classList.remove("show");
});
