const newProducts = [
  {
    name: "Cetaphil",
    desc: "Cetaphil gentle skin cleanser",
    src: "https://tovpet.com/cdn/shop/files/0005438_cetaphil-gentle-skin-cleanser-1000ml_510-removebg-preview.png?v=1688985125",
    srcAlt: "./kimheang-assets/saboo.jpg",
    alt: "",
    discount: 0,
    price: 15,
    del_price: "",
    tag: "sale",
  },
  {
    name: "Foam",
    desc: "[Mary&May] White Collagen Cleansing Foam",
    src: "https://marynmay.us/cdn/shop/products/whitecollagencleansing_900x.jpg?v=1657732298",
    srcAlt: "./kimheang-assets/foam-mary-may-1.jpg",
    alt: "",
    discount: 15,
    price: 6,
    del_price: 75,
    tag: "new",
  },
];

container = document.getElementById("product-grid-container");

newProducts.forEach((product, index) => {
  container.innerHTML += `
    <div class="showcase">
                  <div class="showcase-banner">
                    <img
                      src="${product.src}"
                      alt="${product.alt}"
                      class="product-img default"
                      width="300"
                    />
                    <img
                      src="${product.srcAlt}"
                      alt="${product.alt}"
                      class="product-img hover"
                      width="300"
                    />

                    <p class="showcase-badge angle black">${product.tag}</p>

                    <div class="showcase-actions">
                      <button class="btn-action">
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <button class="btn-action">
                        <ion-icon name="eye-outline"></ion-icon>
                      </button>

                      <button class="btn-action">
                        <ion-icon name="repeat-outline"></ion-icon>
                      </button>

                      <button class="btn-action">
                        <ion-icon name="bag-add-outline"></ion-icon>
                      </button>
                    </div>
                  </div>

                  <div class="showcase-content">
                    <a href="#" class="showcase-category">${product.name}</a>

                    <h3>
                      <a href="#" class="showcase-title"
                        >${product.desc}</a
                      >
                    </h3>

                    <div class="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                    <div class="price-box">
                      <p class="price">$${product.price}</p>
                      
                    </div>
                  </div>
                </div>
    `;
});
