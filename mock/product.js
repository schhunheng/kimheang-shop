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
  {
    name: "Bae Y Face",
    desc: "",
    src: "./kimheang-assets/sunscreen.jpg",
    srcAlt: "./kimheang-assets/sunscreen.jpg",
    alt: "sun-screen",
    price: 15,
    discount: 0,
    del_price: 0,
    tag: " ៣ ហ្វីដឹក",
  },
  {
    name: "AXIS-Y New Skin Resolution Gel Mask",
    desc: "សម្រាប់ស្បែកគ្រប់ប្រភេទ ដែលមានមុន ស្នាមខ្សោយ",
    src: "./kimheang-assets/sunscreen.jpg",
    srcAlt: "./kimheang-assets/sunscreen.jpg",
    alt: "sun-screen",
    price: 13,
    discount: 0,
    del_price: 0,
    tag: "ទិញពីរ 25$",
  },
  {
    name: "AXIS-Y Dark Spot Correcting Glow Serum",
    desc: "ស៊ីរ៉ុមសម្រាប់ស្បែកស្រអាប់ ស្នាមគ្រប់ប្រភេទ",
    src: "./kimheang-assets/axis-y-dark-spot.jpg",
    srcAlt: "./kimheang-assets/axis-y-dark-spot.jpg",
    alt: "serum",
    price: 10,
    discount: 0,
    del_price: 0,
    tag: "Sell",
  },
  {
    name: "AXIS-Y Daily Perifying Treatment Toner",
    desc: "ថូណឺសម្រាប់ស្បែកមុខប្រេង មុនស្រអាប់ ស្នាម រន្ធញើសធំ",
    src: "./kimheang-assets/axis-y-daily.jpg",
    srcAlt: "./kimheang-assets/axis-y-daily.jpg",
    alt: "serum",
    price: 13,
    discount: 0,
    del_price: 0,
    tag: "ទិញពីរ 25$",
  },
  {
    name: "Nicotinamide",
    desc: "Black Face Mask",
    src: "./kimheang-assets/black-face-mask.jpg",
    srcAlt: "./kimheang-assets/black-face-mask.jpg",
    alt: "mask",
    price: 13,
    discount: 0,
    del_price: 0,
    tag: "ទិញពីរ 25$",
  },
  {
    name: "Darila Fiber",
    desc: "3 ប្រអប់ថែមដបទឹក",
    src: "./kimheang-assets/darila-fiber.jpg",
    srcAlt: "./kimheang-assets/darila-fiber.jpg",
    alt: "fiber",
    price: 10,
    discount: 0,
    del_price: 0,
    tag: "ទិញពីរ 25$",
  },
  {
    name: "Cykado Collagen",
    desc: "ជួយបណ្តឹងស្បែក ធ្វើអោយស្បែកហាប់ណឺនល្អ",
    src: "./kimheang-assets/cykado.jpg",
    srcAlt: "./kimheang-assets/cykado.jpg",
    alt: "collegen",
    price: 8,
    discount: 0,
    del_price: 0,
    tag: "Sell",
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
