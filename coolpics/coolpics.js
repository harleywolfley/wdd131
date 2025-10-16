element.addEventListener("event", handlerFunction)
const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
    const menu = document.querySelector("menu-button");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);