const menuIcon = document.querySelector(".menu-icon");
const menuItems = document.querySelector(".menu-items");
menuIcon.addEventListener("click", () => {
  menuItems.classList.toggle("show-nav-ul");
});
