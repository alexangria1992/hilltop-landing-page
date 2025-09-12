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
  // Slider
  const slider = document.querySelector(".slider");
  const sliderItems = slider.querySelectorAll(".slider_item");
  const next = slider.querySelector(".slider_next");
  const prev = slider.querySelector(".slider_prev");

  if (slider && sliderItems.length) {
    let currentIndex = 0;
    const totalSlides = sliderItems.length;

    const updateSlider = (index) => {
      sliderItems.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        slide.setAttribute("aria-label", `Slide ${i + 1} of ${totalSlides}`);
        slide.setAttribute("aria-hidden", i !== index);
      });
    };

    const showNext = () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider(currentIndex);
    };

    const showPrev = () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider(currentIndex);
    };

    next?.addEventListener("click", showNext);
    prev?.addEventListener("click", showPrev);

    slider.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    });

    updateSlider(currentIndex);
  }
});
