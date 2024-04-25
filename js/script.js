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

// ============== FADE IN ANIMATION SETTINGS ==============
