let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");
const dotsContainer = document.getElementById("dots");

slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.onclick = () => showSlide(i);
  dotsContainer.appendChild(dot);
});

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === currentSlide));
  document.querySelectorAll(".dot").forEach((dot, i) => dot.classList.toggle("active", i === currentSlide));
}

function changeSlide(step) {
  showSlide(currentSlide + step);
}

setInterval(() => changeSlide(1), 4500);

function orderProduct(productName) {
  const message = `Hello Shivam Imitation, I am interested in "${productName}". Please share price and availability.`;
  window.open(`https://wa.me/919714978206?text=${encodeURIComponent(message)}`, "_blank");
}

function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
}

function closeMenu() {
  document.getElementById("nav").classList.remove("open");
}

document.getElementById("year").textContent = new Date().getFullYear();
