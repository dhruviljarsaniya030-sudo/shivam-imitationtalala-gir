// =====================================================
// SHIVAM IMITATION - FIREBASE COLLECTION
// =====================================================

import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// =====================================================
// FIREBASE CONFIG
// =====================================================

const firebaseConfig = {

  apiKey:
    "AIzaSyDEbDU7EnS8f0k5o6nRSxGSl-X7k9Uz2A4",

  authDomain:
    "shivam-imitation.firebaseapp.com",

  projectId:
    "shivam-imitation",

  storageBucket:
    "shivam-imitation.firebasestorage.app",

  messagingSenderId:
    "625171137884",

  appId:
    "1:625171137884:web:d1928af5e11fad077e6d99",

  measurementId:
    "G-ER1ETZSLPD"

};


// =====================================================
// INITIALIZE FIREBASE
// =====================================================

const app =
  initializeApp(firebaseConfig);

const db =
  getFirestore(app);


// =====================================================
// ELEMENTS
// =====================================================

const productSection =
  document.getElementById("productSection");

const productGrid =
  document.getElementById("productGrid");

const productDetails =
  document.getElementById("productDetails");

const categoryTitle =
  document.getElementById("categoryTitle");

const detailImage =
  document.getElementById("detailImage");

const detailName =
  document.getElementById("detailName");

const detailCategory =
  document.getElementById("detailCategory");

const detailWhatsapp =
  document.getElementById("detailWhatsapp");


// =====================================================
// PRODUCTS
// =====================================================

let products = [];


// =====================================================
// LOAD PRODUCTS FROM FIRESTORE
// =====================================================

async function loadProducts() {

  try {

    const productsRef =
      collection(db, "products");

    let snapshot;

    try {

      const productsQuery =
        query(
          productsRef,
          orderBy("createdAt", "desc")
        );

      snapshot =
        await getDocs(
          productsQuery
        );

    } catch (error) {

      console.warn(
        "Sorting unavailable. Loading products normally.",
        error
      );

      snapshot =
        await getDocs(
          productsRef
        );

    }


    products = [];

    snapshot.forEach(
      function (doc) {

        products.push({

          id: doc.id,

          ...doc.data()

        });

      }
    );


    console.log(
      "Products loaded:",
      products
    );


    // Show all products initially

    displayProducts(
      products,
      "All Products"
    );

  }

  catch (error) {

    console.error(
      "FIREBASE PRODUCTS ERROR:",
      error
    );


    if (productGrid) {

      productGrid.innerHTML = `
        <div style="
          width:100%;
          text-align:center;
          padding:40px 20px;
          color:#d8d8d8;
        ">
          <h3>Unable to load products.</h3>
          <p>
            Please try again later.
          </p>
        </div>
      `;

    }

  }

}


// =====================================================
// DISPLAY PRODUCTS
// =====================================================

function displayProducts(
  productList,
  title
) {

  if (!productGrid) return;


  if (categoryTitle) {

    categoryTitle.textContent =
      title;

  }


  productGrid.innerHTML =
    "";


  if (!productList.length) {

    productGrid.innerHTML = `
      <div style="
        width:100%;
        text-align:center;
        padding:50px 20px;
      ">
        <h3>
          No products found
        </h3>

        <p>
          New products will be added soon.
        </p>
      </div>
    `;

    return;

  }


  productList.forEach(
    function (product) {

      const card =
        document.createElement(
          "article"
        );


      card.className =
        "catalog-product-card";


      const price =
        product.price !== undefined &&
        product.price !== null
          ? "₹" + product.price
          : "Price on request";


      card.innerHTML = `

        <div class="catalog-product-image">

          <img
            src="${escapeHTML(product.image || "")}"
            alt="${escapeHTML(product.name || "Shivam Imitation Product")}"
            loading="lazy"
            onerror="this.style.display='none';"
          >

        </div>


        <div class="catalog-product-content">

          <span>
            ${escapeHTML(product.category || "JEWELLERY")}
          </span>

          <h3>
            ${escapeHTML(product.name || "Product")}
          </h3>

          <p>
            ${escapeHTML(product.description || "")}
          </p>

          <div class="catalog-product-bottom">

            <strong>
              ${price}
            </strong>

            <button
              type="button"
              class="gold-btn product-view-btn">

              View Product

            </button>

          </div>

        </div>

      `;


      const viewButton =
        card.querySelector(
          ".product-view-btn"
        );


      if (viewButton) {

        viewButton.addEventListener(
          "click",
          function () {

            openProduct(
              product
            );

          }
        );

      }


      productGrid.appendChild(
        card
      );

    }
  );


  if (productSection) {

    productSection.style.display =
      "block";

  }

}


// =====================================================
// OPEN CATEGORY
// =====================================================

window.openCategory =
  function (category) {

    let filtered =
      [];


    const categoryMap = {

      "necklace":
        "Necklaces",

      "bridal":
        "Bridal",

      "traditional":
        "Traditional",

      "daily-wear":
        "Daily Wear",

      "bracelet":
        "Bracelets",

      "novelty":
        "Novelties"

    };


    const firebaseCategory =
      categoryMap[category] ||
      category;


    filtered =
      products.filter(
        function (product) {

          return String(
            product.category || ""
          ).toLowerCase() ===
          String(
            firebaseCategory
          ).toLowerCase();

        }
      );


    displayProducts(
      filtered,
      firebaseCategory
    );


    if (productSection) {

      productSection.scrollIntoView({
        behavior: "smooth"
      });

    }

};


// =====================================================
// BACK TO CATEGORIES
// =====================================================

window.backToCategories =
  function () {

    if (productSection) {

      productSection.style.display =
        "none";

    }


    if (productDetails) {

      productDetails.style.display =
        "none";

    }


    const catalogSection =
      document.querySelector(
        ".catalog-section"
      );


    if (catalogSection) {

      catalogSection.scrollIntoView({
        behavior: "smooth"
      });

    }

};


// =====================================================
// OPEN PRODUCT DETAILS
// =====================================================

function openProduct(
  product
) {

  if (!productDetails) return;


  if (detailImage) {

    detailImage.src =
      product.image || "";

    detailImage.alt =
      product.name || "Product";

  }


  if (detailName) {

    detailName.textContent =
      product.name || "Product";

  }


  if (detailCategory) {

    detailCategory.textContent =
      product.category ||
      "SHIVAM IMITATION";

  }


  if (detailWhatsapp) {

    const message =
      "Hello Shivam Imitation, I am interested in: " +
      (product.name || "this product") +
      ". Price: ₹" +
      (product.price || "Please tell me");

    detailWhatsapp.href =
      "https://wa.me/919714978206?text=" +
      encodeURIComponent(
        message
      );

  }


  if (productSection) {

    productSection.style.display =
      "none";

  }


  productDetails.style.display =
    "block";


  productDetails.scrollIntoView({
    behavior: "smooth"
  });

}


// =====================================================
// CLOSE PRODUCT
// =====================================================

window.closeProduct =
  function () {

    if (productDetails) {

      productDetails.style.display =
        "none";

    }


    if (productSection) {

      productSection.style.display =
        "block";

    }

  };


// =====================================================
// ESCAPE HTML
// =====================================================

function escapeHTML(
  value
) {

  return String(value)
    .replace(
      /&/g,
      "&amp;"
    )
    .replace(
      /</g,
      "&lt;"
    )
    .replace(
      />/g,
      "&gt;"
    )
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /'/g,
      "&#039;"
    );

}


// =====================================================
// START
// =====================================================

loadProducts();
