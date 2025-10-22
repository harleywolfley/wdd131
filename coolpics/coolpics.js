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

const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);
handleResize();

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
gallery.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    modal.showModal();
  }
})

const closeButton = document.querySelector('.close-viewer')
closeButton.addEventListener('click', () => {
    modal.close()
});
