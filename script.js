document.addEventListener("DOMContentLoaded", () => {

  /* ================= HERO SLIDER ================= */

  let currentSlide = 0;

  const slides = document.querySelectorAll(".hero-slide");
  const dotsContainer = document.getElementById("dots");

  if (slides.length && dotsContainer) {

    // Create slider dots
    slides.forEach((_, index) => {

      const dot = document.createElement("span");

      dot.className =
        "dot" + (index === 0 ? " active" : "");

      dot.setAttribute(
        "aria-label",
        `Go to slide ${index + 1}`
      );

      dot.addEventListener("click", () => {
        showSlide(index);
      });

      dotsContainer.appendChild(dot);

    });


    function showSlide(index) {

      currentSlide =
        (index + slides.length) % slides.length;

      slides.forEach((slide, i) => {

        slide.classList.toggle(
          "active",
          i === currentSlide
        );

      });

      document
        .querySelectorAll(".dot")
        .forEach((dot, i) => {

          dot.classList.toggle(
            "active",
            i === currentSlide
          );

        });

    }


    function changeSlide(step) {

      showSlide(currentSlide + step);

    }


    // Make functions available to HTML buttons
    window.changeSlide = changeSlide;
    window.showSlide = showSlide;


    // Automatic slider
    setInterval(() => {

      changeSlide(1);

    }, 4500);

  }


  /* ================= WHATSAPP ORDER ================= */

  window.orderProduct = function(productName) {

    const message =
      `Hello Shivam Imitation, I am interested in "${productName}". Please share price and availability.`;

    const whatsappURL =
      `https://wa.me/919714978206?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

  };


  /* ================= MOBILE MENU ================= */

  const menuButton =
    document.querySelector(".menu-btn");

  const nav =
    document.getElementById("nav");


  if (menuButton && nav) {

    window.toggleMenu = function() {

      nav.classList.toggle("open");

    };


    window.closeMenu = function() {

      nav.classList.remove("open");

    };


    // Close menu when clicking outside
    document.addEventListener("click", (event) => {

      if (
        nav.classList.contains("open") &&
        !nav.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {

        nav.classList.remove("open");

      }

    });

  }


  /* ================= CURRENT YEAR ================= */

  const yearElement =
    document.getElementById("year");

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }


  /* ================= SCROLL EFFECT ================= */

  const navbar =
    document.querySelector(".navbar");

  if (navbar) {

    window.addEventListener(
      "scroll",
      () => {

        if (window.scrollY > 30) {

          navbar.classList.add("scrolled");

        } else {

          navbar.classList.remove("scrolled");

        }

      },
      { passive: true }
    );

  }


  /* ================= ESC KEY ================= */

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      if (nav) {

        nav.classList.remove("open");

      }

    }

  });

});
