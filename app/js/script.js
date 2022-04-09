const body = document.querySelector("body");
const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");
const closeBtn = document.querySelector("#close-btn");

menuIcon.addEventListener("click", handleOpenMenu);
closeBtn.addEventListener("click", handleCloseMenu);

// logic to open the responsive menu
function handleOpenMenu() {
  menu.classList.remove("invisible");
  menu.classList.remove("close");
  menu.classList.add("open");
  body.classList.add("no-scroll");
}

// logic to close the responsive menu
function handleCloseMenu() {
  menu.classList.replace("open", "close");
  setTimeout(() => {
    menu.classList.add("invisible");
  }, 200);
  body.classList.remove("no-scroll");
}
