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

  traditional: [
    {
      image: "product-4.jpg",
      category: "TRADITIONAL",
      name: "Classic Gold Pendant Set"
    }
  ],

  bridal: [
    {
      image: "product-5.jpg",
      category: "BRIDAL STYLE",
      name: "Heritage Statement Set"
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


const categoryNames = {

  necklace: "Necklace Collection",

  traditional: "Traditional Collection",

  bridal: "Bridal Collection",

  "daily-wear": "Daily Wear Collection",

  bracelet: "Bracelet Collection",

  novelty: "Novelty Collection"

};


function openCategory(category) {

  const productSection =
    document.getElementById("productSection");

  const productGrid =
    document.getElementById("productGrid");

  const productDetails =
    document.getElementById("productDetails");

  const categoryTitle =
    document.getElementById("categoryTitle");


  productDetails.classList.remove("show");

  productSection.classList.add("show");


  categoryTitle.textContent =
    categoryNames[category];


  productGrid.innerHTML = "";


  products[category].forEach((product, index) => {

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


    card.addEventListener("click", function() {

      openProduct(
        category,
        index
      );

    });


    productGrid.appendChild(card);

  });


  productSection.scrollIntoView({
    behavior: "smooth"
  });

}


function openProduct(category, index) {

  const product =
    products[category][index];


  const productSection =
    document.getElementById("productSection");

  const productDetails =
    document.getElementById("productDetails");


  document.getElementById("detailImage").src =
    product.image;


  document.getElementById("detailImage").alt =
    product.name;


  document.getElementById("detailCategory").textContent =
    product.category;


  document.getElementById("detailName").textContent =
    product.name;


  const message =
    "Hello Shivam Imitation, I want to know about " +
    product.name;


  document.getElementById("detailWhatsapp").href =
    "https://wa.me/919714978206?text=" +
    encodeURIComponent(message);


  productSection.classList.remove("show");

  productDetails.classList.add("show");


  productDetails.scrollIntoView({
    behavior: "smooth"
  });

}


function backToCategories() {

  const productSection =
    document.getElementById("productSection");

  const productDetails =
    document.getElementById("productDetails");


  productSection.classList.remove("show");

  productDetails.classList.remove("show");


  document.querySelector(".catalog-section")
    .scrollIntoView({
      behavior: "smooth"
    });

}


function closeProduct() {

  const productDetails =
    document.getElementById("productDetails");

  productDetails.classList.remove("show");


  document.querySelector(".catalog-section")
    .scrollIntoView({
      behavior: "smooth"
    });

}
