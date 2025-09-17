document.addEventListener("DOMContentLoaded", function () {
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

  // ACCORDIONS
  const initAccordion = (selector) => {
    const buttons = document.querySelectorAll(`${selector} .accordion__button`);

    buttons.forEach((button) => {
      const content = button.nextElementSibling;

      if (button.classList.contains("accordion__button--active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      }

      button.addEventListener("click", () => {
        const isOpen = button.classList.contains("accordion__button--active");

        buttons.forEach((btn) => {
          btn.classList.remove("accordion__button--active");
          btn.nextElementSibling.style.maxHeight = null;
        });

        if (!isOpen) {
          button.classList.add("accordion__button--active");
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  };

  if (document.querySelector(".custom__accodion--faq")) {
    initAccordion(".custom__accodion--faq");
  }
});
