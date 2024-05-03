const loader = document.querySelector(".loader_container");
loader.addEventListener("load", () => {
  loader.classList.add("fade-out");
});
window.onload = function () {
  loader.classList.add("fade-out");
};

window.onscroll = function () {
  navBar.classList.remove("show");
  menuButton.classList.remove("fa-times");
  navBar.classList.remove("show");
};

// ============= SWIPER SETTINGS ================
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    375: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 3.2,
      spaceBetween: 23,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 26,
    },
    991: {
      slidesPerView: 4.5,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 6.2,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".mySwiper_2", {
  slidesPerView: 7,
  spaceBetween: 4,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints: {
  //   375: {
  //     slidesPerView: 3,
  //     spaceBetween: 10,
  //   },
  //   450: {
  //     slidesPerView: 2,
  //     spaceBetween: 13,
  //   },
  //   768: {
  //     slidesPerView: 5.5,
  //     spaceBetween: 16,
  //   },
  //   991: {
  //     slidesPerView: 6.5,
  //     spaceBetween: 10,
  //   },
  //   1200: {
  //     slidesPerView: 6.2,
  //     spaceBetween: 10,
  //   },
  // },
});

// ============== FADE IN ANIMATION SETTINGS ==============
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-up-active");
    }
  });
});
const fadeUP = document.querySelectorAll(".fade-up");
fadeUP.forEach((el) => observer.observe(el));

// close and open cart
const cartOpen = document.querySelectorAll("#cart-icon");
cartOpen.forEach((btn) => {
  btn.addEventListener("click", handle_openCart);
});
const cartItems = document.querySelector("#cart-items");
const cartClose = document.querySelector("#close-cart");
const nav = document.getElementById("navbar");
const addCart_btns = document.querySelectorAll("#addbtn");

function handle_openCart() {
  cartItems.classList.add("showCart");
  navBars.forEach((navBar) => {
    navBar.classList.remove("show");
  });
  menuIcons.forEach((menuIcon) => {
    menuIcon.classList.remove("fa-times");
  });
  searchIcons.forEach((searchIcon) => {
    searchIcon.classList.add("hide");
  });
}
cartClose.onclick = function () {
  cartItems.classList.remove("showCart");

  searchIcons.forEach((searchIcon) => {
    searchIcon.classList.remove("hide");
  });
};

//================ ADD ITEMS TO CART/ ALL CART SETTINGS ==================
//================ ADD ITEMS TO CART/ ALL CART SETTINGS ==================
//================ ADD ITEMS TO CART/ ALL CART SETTINGS ==================
// starts when the document is ready
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}

// =========== start ==============
function start() {
  addEvents();
}

// =========== update ==============
function update() {
  addEvents();
  updateTotals();
}

// =========== addEvents ==============
function addEvents() {
  const cartRemove_btns = document.querySelectorAll(".remove-items");
  cartRemove_btns.forEach((btn) => {
    btn.addEventListener("click", handle_removerCartItem);
  });

  // =========== change item quantity ==============
  let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
  cartQuantity_inputs.forEach((input) => {
    input.addEventListener("change", handle_changeItemQuantity);
  });

  // ============== add items to cart =================
  let addCart_btns = document.querySelectorAll(".addBtn");
  addCart_btns.forEach((btn) => {
    btn.addEventListener("click", handle_addCartItem);
  });

  //================ check out =========================
  const checkOut_btn = document.querySelector(".checkOut");
  checkOut_btn.addEventListener("click", handle_checkOut);
}

// ============= HANDLE EVENTS FUNCTIONS =============
let itemsAdded = [];

function handle_addCartItem() {
  product = this.parentElement;
  let title = product.querySelector(".product-title").innerHTML;
  let price = product.querySelector("#prices").innerHTML;
  let imgSrc = product.querySelector(".product-img").src;
  console.log(title, price, imgSrc);

  let newToAdd = {
    title,
    price,
    imgSrc,
  };

  // handle item  already exist
  if (itemsAdded.find((el) => el.title == newToAdd.title)) {
    alert("Product Already In Cart!");
    return;
  } else {
    itemsAdded.push(newToAdd);
  }

  let cartBoxElement = cartBoxComponent(title, price, imgSrc);
  let newNode = document.createElement("div");
  newNode.innerHTML = cartBoxElement;
  const cartContent = document.querySelector(".cart-content");
  cartContent.appendChild(newNode);

  update();
}

function handle_removerCartItem() {
  this.parentElement.remove();
  itemsAdded = itemsAdded.filter(
    (el) =>
      el.title !=
      this.parentElement.querySelector(".cart-product-title").innerHTML
  );

  update();
}

function handle_changeItemQuantity() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  this.value = Math.floor(this.value); //to keep it in an integer value

  update();
}

function handle_checkOut() {
  if (itemsAdded.length <= 0) {
    alert("Your Cart Is Empty! 'add products to cart'");
  }
  const cartContent = document.querySelector(".cart-content");
  cartContent.innerHTML = "";
  alert("Successfully Check Out Product(s)");
  itemsAdded = [];
  update();
}

function updateTotals() {
  let cartBoxes = document.querySelectorAll(".cart-box");
  const totalElement = document.querySelector(".totalA");
  const totalElementB = document.querySelector(".totalB");
  let total = 0;
  cartBoxes.forEach((cartBox) => {
    let priceElement = cartBox.querySelector(".cart-price");
    let price = parseFloat(priceElement.innerHTML.replace("$", ""));
    let quantity = cartBox.querySelector(".cart-quantity").value;

    total += price * quantity;
  });

  total = total.toFixed(2); // to made it a decimal of 2 numbers

  totalElement.innerHTML = "$" + total;
  totalElementB.innerHTML = "$" + total;
}

function cartBoxComponent(title, price, imgSrc) {
  return `
  <div class="cart-box">
   <img src=${imgSrc} alt="" class="cart-img" />
   <div class="detail-box">
     <div class="cart-product-title">${title}</div>
     <div class="cart-price">${price}</div>
     <div class="cart-size">
       <select name="size" id="select">
         <option value="small">S</option>
         <option value="medium">M</option>
         <option value="large">L</option>
         <option value="extra large">XL</option>
         <option value="extrra extra">XXL</option>
       </select>
     </div>
     <input type="number" value="1" class="cart-quantity" />
   </div>
   <i class="fas fa-trash remove-items"></i>
 </div>`;
}
//================ ADD ITEMS TO CART/ ALL CART SETTINGS ==================
//================ ADD ITEMS TO CART/ ALL CART SETTINGS ==================
//================ ADD ITEMS TO CART/ ALL CART SETTINGS ==================

// window.addEventListener("scroll", reveal);
// function reveal() {
//   var reveals = document.querySelectorAll(".");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowheight = window.innerHeight;
//     var revealtop = reveals[i].getBoundingClientRect().top;
//     var revealpoint = 150;

//     if (revealtop < windowheight - revealpoint) {
//       reveals[i].classList.add("-active");
//     } else {
//       reveals[i].classList.remove("-active");
//     }
//   }
// }

// const progressCircle = document.querySelector(".autoplay-progress svg");
// const progressContent = document.querySelector(".autoplay-progress span");
// var swiper = new Swiper(".swiperShowcase", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   on: {
//     autoplayTimeLeft(s, time, progress) {
//       progressCircle.style.setProperty("--progress", 1 - progress);
//       progressContent.textContent = `${Math.ceil(time / 1000)}s`;
//     },
//   },
// });

// ============= product tabs settings ==============
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active_tab");
    });

    target.classList.add("active_tab");

    tabs.forEach((tab) => {
      tab.classList.remove("active_tab");
    });
    tab.classList.add("active_tab");
  });
});

// ============= TYPING SETTINGS =============
var typed = new Typed(".typing", {
  strings: [
    "and receive $25 coupon for first shopping.",
    "get free delivery on first order.",
  ],
  typespeed: 100,
  backSpeed: 60,
  loop: true,
});

// ============== TIMER SETTINGS ================
// let days = 0;
// let hours = 0;
// let minutes = 0;
// let seconds = 0;

// const timerElements = document.querySelectorAll(".timer");

// const updateTimer = () => {
//   seconds++;

//   if (seconds === 60) {
//     seconds = 0;
//     minutes++;
//   }

//   if (minutes === 60) {
//     minutes = 0;
//     hours++;
//   }

//   if (hours === 24) {
//     hours = 0;
//     days++;
//   }

//   timerElements.forEach((timer) => {
//     timer.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
//   });
// };

// setInterval(updateTimer, 1000);

// ============== RESPONSIVE NABAR SETTINGS ================
const navBars = document.querySelectorAll(".responsive_bar");
const menuIcons = document.querySelectorAll(".menu_icon");
const searchIcons = document.querySelectorAll(".search-icons");
const searchIcon = document.querySelectorAll(".search_img");
const searchInputs = document.querySelectorAll(".search_2");

// Function to toggle classes on click
function toggleClasses() {
  navBars.forEach((navBar) => {
    navBar.classList.toggle("show");
  });

  menuIcons.forEach((menuIcon) => {
    menuIcon.classList.toggle("fa-times");
  });

  searchIcons.forEach((searchIcon) => {
    searchIcon.classList.toggle("hide");
  });
}
function toggleClass() {
  searchInputs.forEach((searchInput) => {
    searchInput.classList.toggle("show");
  });
}

// Add click event listener to each menu icon
menuIcons.forEach((menuIcon) => {
  menuIcon.addEventListener("click", toggleClasses);
});
searchIcon.forEach((searchIco) => {
  searchIco.addEventListener("click", toggleClass);
});

// Function to remove classes on scroll
function removeClasses() {
  searchInput.forEach((s) => {
    searchIcon.classList.remove("hide");
  });

  searchInputs.forEach((searchInput) => {
    searchInput.classList.remove("show");
  });

  navBars.forEach((navBar) => {
    navBar.classList.remove("show");
  });

  menuIcons.forEach((menuIcon) => {
    menuIcon.classList.remove("fa-times");
  });
}

// Add scroll event listener to window
window.addEventListener("scroll", removeClasses);

// ============== IMAGE GALLERY SETTINGS ===============
const largeImg = document.querySelector(".large_img");
const smallImg = document.querySelectorAll(".small_img");

smallImg[0].onclick = function () {
  largeImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  largeImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  largeImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  largeImg.src = smallImg[3].src;
};
smallImg[4].onclick = function () {
  largeImg.src = smallImg[4].src;
};
