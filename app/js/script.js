const body = document.querySelector("body");
const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");
const closeBtn = document.querySelector("#close-btn");
const navbar = document.querySelector("#navbar");
const allMenuLinks = document.querySelectorAll("#menu a"); // select all the links in the menu

menuIcon.addEventListener("click", handleOpenMenu);
closeBtn.addEventListener("click", handleCloseMenu);
window.addEventListener("scroll", handleAddNavbarBg);
allMenuLinks.forEach(function (element) {
  element.addEventListener("click", handleCloseMenu);
});

// function to open the responsive menu
function handleOpenMenu() {
  menu.classList.remove("invisible");
  menu.classList.remove("close");
  menu.classList.add("open");
  body.classList.add("no-scroll");
}

// function to close the responsive menu
function handleCloseMenu() {
  menu.classList.replace("open", "close");
  setTimeout(() => {
    menu.classList.add("invisible");
  }, 200);
  body.classList.remove("no-scroll");
}

// the following function adds a background to the navbar depending on how much the user scrolls down from the top of the page
function handleAddNavbarBg() {
  window.pageYOffset > 80
    ? navbar.classList.add("has-bg")
    : navbar.classList.remove("has-bg");
}
