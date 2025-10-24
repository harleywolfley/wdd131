function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

const menuButton = document.querySelector(".menu-btn");
menuButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);
handleResize();

