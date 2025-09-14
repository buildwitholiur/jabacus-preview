// Trust Review Slider
var swiperChallange = new Swiper(".swiper--trust", {
  slidesPerView: 1,
  spaceBetween: 24,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination--trust",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next--trust",
    prevEl: ".swiper-button-prev--trust",
  },
});

// HAMBURGER MENU TOGGLER
document.querySelectorAll(".navbar__toggler").forEach((toggler) => {
  toggler.addEventListener("click", () => {
    const headerArea = toggler.closest(".header");
    if (headerArea) {
      headerArea.classList.toggle("header--show");
    }
    toggler.classList.toggle("change");
    document.body.classList.toggle("overflow-hidden");
  });
});

// Password Eye Toggle
const passwordEyetToggles = document.querySelectorAll(".toggle-eye-btn");

passwordEyetToggles.forEach((btn) => {
  btn.addEventListener("click", () => {
    const passwordWrapper = btn.closest(".relative");
    const passwordInput = passwordWrapper.querySelector(".password-input");

    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";

    if (isPassword) {
      btn.classList.add("toggle-eye-btn--show");
    } else {
      btn.classList.remove("toggle-eye-btn--show");
    }
  });
});
