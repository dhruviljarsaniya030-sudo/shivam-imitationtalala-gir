/* =========================================================
   SHIVAM IMITATION - COLLECTION SYSTEM
========================================================= */

const products = {

  necklace: [
    {
      image: "product-1.jpg",
      category: "NECKLACE SET",
      name: "Royal Green Drop Set"
    },
    {
      image: "product-2.jpg",
      category: "NECKLACE SET",
      name: "Elegant Pearl Drop Set"
    },
    {
      image: "product-3.jpg",
      category: "NECKLACE",
      name: "Butterfly Charm Necklace"
    },
    {
      image: "product-6.jpg",
      category: "NECKLACE",
      name: "Multicolor Stone Necklace"
    }
  ],

  bridal: [
    {
      image: "product-5.jpg",
      category: "BRIDAL STYLE",
      name: "Heritage Statement Set"
    }
  ],

  traditional: [
    {
      image: "product-4.jpg",
      category: "TRADITIONAL",
      name: "Classic Gold Pendant Set"
    }
  ],

  "daily-wear": [
    {
      image: "product-7.jpg",
      category: "DAILY WEAR",
      name: "Minimal Rose Pendant"
    }
  ],

  bracelet: [
    {
      image: "product-8.jpg",
      category: "BRACELET",
      name: "Rose Gold Crystal Bracelet"
    },
    {
      image: "product-9.jpg",
      category: "BRACELET",
      name: "Black Stone Bracelet"
    }
  ],

  novelty: [
    {
      image: "product-10.jpg",
      category: "NOVELTY",
      name: "Crystal Hair Accessories"
    }
  ]

};


/* =========================================================
   CATEGORY NAMES
========================================================= */

const categoryNames = {

  necklace: "Necklace Collection",

  bridal: "Bridal Collection",

  traditional: "Traditional Collection",

  "daily-wear": "Daily Wear Collection",

  bracelet: "Bracelet Collection",

  novelty: "Novelty Collection"

};


/* =========================================================
   OPEN CATEGORY
========================================================= */

function openCategory(category){

  const productSection =
    document.getElementById("productSection");

  const productDetails =
    document.getElementById("productDetails");

  const productGrid =
    document.getElementById("productGrid");

  const categoryTitle =
    document.getElementById("categoryTitle");


  if(!products[category]){
    return;
  }


  /* Hide product details */

  productDetails.classList.remove("show");


  /* Set category title */

  categoryTitle.textContent =
    categoryNames[category];


  /* Clear old products */

  productGrid.innerHTML = "";


  /* Create products */

  products[category].forEach(function(product, index){

    const card =
      document.createElement("article");

    card.className =
      "catalog-product-card";


    card.innerHTML = `

      <div class="catalog-product-image">

        <img
          src="${product.image}"
          alt="${product.name}">

        <div class="product-view">
          View Product →
        </div>

      </div>

      <div class="catalog-product-info">

        <small>
          ${product.category}
        </small>

        <h3>
          ${product.name}
        </h3>

      </div>

    `;


    /* Product click */

    card.addEventListener("click", function(){

      openProduct(category, index);

    });


    productGrid.appendChild(card);

  });


  /* Show product section */

  productSection.classList.add("show");


  /* Scroll smoothly */

  setTimeout(function(){

    productSection.scrollIntoView({
      behavior:"smooth",
      block:"start"
    });

  },100);

}


/* =========================================================
   OPEN PRODUCT DETAILS
========================================================= */

function openProduct(category, index){

  const product =
    products[category][index];


  if(!product){
    return;
  }


  const productSection =
    document.getElementById("productSection");

  const productDetails =
    document.getElementById("productDetails");

  const detailImage =
    document.getElementById("detailImage");

  const detailCategory =
    document.getElementById("detailCategory");

  const detailName =
    document.getElementById("detailName");

  const detailWhatsapp =
    document.getElementById("detailWhatsapp");


  /* Product image */

  detailImage.src =
    product.image;

  detailImage.alt =
    product.name;


  /* Product information */

  detailCategory.textContent =
    product.category;

  detailName.textContent =
    product.name;


  /* WhatsApp message */

  const message =
    "Hello Shivam Imitation, I want to know about " +
    product.name +
    ".";


  detailWhatsapp.href =
    "https://wa.me/919714978206?text=" +
    encodeURIComponent(message);


  /* Hide product list */

  productSection.classList.remove("show");


  /* Show details */

  productDetails.classList.add("show");


  /* Scroll to details */

  setTimeout(function(){

    productDetails.scrollIntoView({
      behavior:"smooth",
      block:"start"
    });

  },100);

}


/* =========================================================
   BACK TO CATEGORIES
========================================================= */

function backToCategories(){

  const productSection =
    document.getElementById("productSection");

  const productDetails =
    document.getElementById("productDetails");


  productDetails.classList.remove("show");

  productSection.classList.remove("show");


  setTimeout(function(){

    document.querySelector(".catalog-section")
      .scrollIntoView({
        behavior:"smooth",
        block:"start"
      });

  },100);

}


/* =========================================================
   CLOSE PRODUCT
========================================================= */

function closeProduct(){

  const productDetails =
    document.getElementById("productDetails");

  const productSection =
    document.getElementById("productSection");


  productDetails.classList.remove("show");

  productSection.classList.add("show");


  setTimeout(function(){

    productSection.scrollIntoView({
      behavior:"smooth",
      block:"start"
    });

  },100);

}


/* =========================================================
   YEAR
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function(){

    const year =
      document.getElementById("year");

    if(year){

      year.textContent =
        new Date().getFullYear();

    }

  }
);
