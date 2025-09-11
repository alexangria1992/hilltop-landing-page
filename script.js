const openBtn = document.querySelector(".mobile_open");
const closeBtn = document.querySelector(".mobile_close");
const menu = document.querySelector(".main_nav");

function toggleMenuButton() {
  menu.classList.toggle("active");
  openBtn.classList.toggle("active");
  closeBtn.classList.toggle("active");
}

function removeActive() {
  menu.classList.remove("active");
  openBtn.classList.remove("active");
  closeBtn.classList.remove("active");
}

openBtn.addEventListener("click", toggleMenuButton);
closeBtn.addEventListener("click", toggleMenuButton);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.classList.contains("active")) {
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
