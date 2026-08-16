/* =========================================================
   SHIVAM IMITATION
   WEBSITE JAVASCRIPT
========================================================= */


/* ================= MOBILE MENU ================= */

function toggleMenu() {

  const nav = document.getElementById("nav");

  if (!nav) return;

  nav.classList.toggle("open");
}


function closeMenu() {

  const nav = document.getElementById("nav");

  if (!nav) return;

  nav.classList.remove("open");
}


/* ================= HERO SLIDER ================= */

let currentSlide = 0;

let slideTimer;


function getSlides() {

  return document.querySelectorAll(".hero-slide");
}


function showSlide(index) {

  const slides = getSlides();

  if (!slides.length) return;

  if (index >= slides.length) {
    currentSlide = 0;
  }

  if (index < 0) {
    currentSlide = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[currentSlide].classList.add("active");

  updateDots();
}


function changeSlide(direction) {

  const slides = getSlides();

  if (!slides.length) return;

  currentSlide += direction;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);

  restartSlider();
}


/* ================= SLIDER DOTS ================= */

function createDots() {

  const slides = getSlides();

  const dotsContainer =
    document.getElementById("dots");

  if (!dotsContainer || !slides.length) return;

  dotsContainer.innerHTML = "";

  slides.forEach((slide, index) => {

    const button =
      document.createElement("button");

    button.type = "button";

    button.setAttribute(
      "aria-label",
      "Go to slide " + (index + 1)
    );

    button.addEventListener(
      "click",
      function () {

        currentSlide = index;

        showSlide(currentSlide);

        restartSlider();
      }
    );

    dotsContainer.appendChild(button);
  });

  updateDots();
}


function updateDots() {

  const dotsContainer =
    document.getElementById("dots");

  if (!dotsContainer) return;

  const dots =
    dotsContainer.querySelectorAll("button");

  dots.forEach((dot, index) => {

    dot.classList.toggle(
      "active",
      index === currentSlide
    );
  });
}


/* ================= AUTO SLIDER ================= */

function startSlider() {

  clearInterval(slideTimer);

  slideTimer = setInterval(
    function () {

      const slides = getSlides();

      if (!slides.length) return;

      currentSlide++;

      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }

      showSlide(currentSlide);

    },
    5000
  );
}


function restartSlider() {

  startSlider();
}


/* ================= WHATSAPP ORDER ================= */

function orderProduct(productName) {

  const phone =
    "919714978206";

  const message =
    "Hello Shivam Imitation,%0A%0A" +
    "I am interested in:%0A" +
    productName +
    "%0A%0APlease share price and details.";

  const url =
    "https://wa.me/" +
    phone +
    "?text=" +
    message;

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}


/* ================= CURRENT YEAR ================= */

function setCurrentYear() {

  const year =
    document.getElementById("year");

  if (!year) return;

  year.textContent =
    new Date().getFullYear();
}


/* ================= CLOSE MENU ON ESC ================= */

document.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Escape") {

      closeMenu();
    }
  }
);


/* ================= INITIALIZE ================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    createDots();

    showSlide(0);

    startSlider();

    setCurrentYear();
  }
);
