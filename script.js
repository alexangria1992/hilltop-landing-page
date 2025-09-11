const openBtn = document.querySelector(".mobile_open");
const closeBtn = document.querySelector(".mobile_close");
const menu = document.querySelector(".main_nav");
const searchOpen = document.querySelector(".search_open");
const searchClose = document.querySelector(".search_close");
const searchDrawer = document.querySelector(".search_drawer");

function toggleMenu() {
  menu.classList.toggle("active");
  openBtn.classList.toggle("active");
  closeBtn.classList.toggle("active");
}

function toggleSearch() {
  searchOpen.classList.toggle("active");
  searchClose.classList.toggle("active");
  searchDrawer.classList.toggle("active");
  if (searchDrawer.classList.contains("active")) {
    searchClose.focus();
  }
}
function removeActive() {
  menu.classList.remove("active");
  openBtn.classList.remove("active");
  closeBtn.classList.remove("active");
  searchOpen.classList.remove("active");
  searchClose.classList.remove("active");
  searchDrawer.classList.remove("active");
}

// open and close the mobile nav
openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

// open and close the search drawer
searchOpen.addEventListener("click", toggleSearch);
searchClose.addEventListener("click", toggleSearch);

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    (menu.classList.contains("active") ||
      searchDrawer.classList.contains("active"))
  ) {
    removeActive();
  }
});

function youAreHere() {
  const links = document.querySelectorAll(".nav_item a");
  const href = window.location.href;

  links.forEach((link) => {
    if (link.href === href) {
      link.classList.add("active");
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  youAreHere();
});
