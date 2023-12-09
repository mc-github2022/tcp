const toggleMenu = document.querySelector(".toggle__menu");
const mainNav = document.querySelector(".main__nav");
const body = document.querySelector("body");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  mainNav.classList.toggle("open");
  body.classList.toggle("open");
});
