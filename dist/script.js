AOS.init();

// TOGGLE MENU
const toggleMenu = document.querySelector(".toggle__menu");
const mainNav = document.querySelector(".main__nav");
const body = document.querySelector("body");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  mainNav.classList.toggle("open");
  body.classList.toggle("open");
});

// MATERIALS

const materialBtns = document.querySelectorAll(".material-btn");
const materialContent = document.querySelectorAll(".material-content");

materialBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeAllActive();
    btn.classList.add("active");
    document.getElementById(`content-${btn.id}`).classList.add("active");
  });
});

function removeAllActive() {
  materialBtns.forEach((item) => {
    item.classList.remove("active");
  });

  materialContent.forEach((item) => {
    item.classList.remove("active");
  });
}
