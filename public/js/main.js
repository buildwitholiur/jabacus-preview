document.addEventListener("DOMContentLoaded", function () {
  // Password Eye Toggle
  const passwordEyetToggles = document.querySelectorAll(".toggle-eye-btn");

  if (passwordEyetToggles.length > 0) {
    passwordEyetToggles.forEach((btn) => {
      btn.addEventListener("click", () => {
        const passwordWrapper = btn.closest(".relative");
        const passwordInput = passwordWrapper.querySelector(".password-input");

        if (!passwordInput) return; // extra safety check

        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";

        btn.classList.toggle("toggle-eye-btn--show", isPassword);
      });
    });
  }

  // Trust Review Slider
  const trustSlider = document.querySelector(".swiper--trust");

  if (trustSlider) {
    const swiperChallange = new Swiper(".swiper--trust", {
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
  }

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

  // GSAP Scroll Animation
  if (document.querySelector(".spreadsheets-code__items")) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".spreadsheets-code__item", {
      scrollTrigger: {
        trigger: ".spreadsheets-code__items",
        start: "150 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
        markers: false,
      },
      duration: 1.3,
      autoAlpha: 0,
      stagger: 0.25,
    });
  }

  if (document.querySelector(".why-structural__items")) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".why-structural__item", {
      scrollTrigger: {
        trigger: ".why-structural__items",
        start: "150 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
        markers: false,
      },
      duration: 1.4,
      autoAlpha: 0,
      stagger: 0.4,
    });
  }

  if (document.querySelector(".critical__items")) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".critical__item", {
      scrollTrigger: {
        trigger: ".critical__items",
        start: "150 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
        markers: false,
      },
      duration: 1.6,
      autoAlpha: 0,
      stagger: 0.4,
    });
  }

  if (document.querySelector(".saving-hours__items")) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".saving-hours__item", {
      scrollTrigger: {
        trigger: ".saving-hours__items",
        start: "150 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
        markers: false,
      },
      duration: 1.2,
      autoAlpha: 0,
      stagger: 0.3,
    });
  }

  if (document.querySelector(".features__items")) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".features__item", {
      scrollTrigger: {
        trigger: ".features__items",
        start: "150 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
        markers: false,
      },
      duration: 1.6,
      autoAlpha: 0,
      stagger: 0.4,
    });
  }

  // illustrations Movement Effect
  const screenArea = document.querySelector(".screen-icons-area");
  if (screenArea) {
    const screenIcons = document.querySelectorAll(".screen-icon");

    screenArea.addEventListener("mousemove", (e) => {
      const { width, height, left, top } = screenArea.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;

      screenIcons.forEach((icon, i) => {
        const factor = (i + 1) * 0.004;
        let moveX = Math.max(-100, Math.min(100, x * factor));
        let moveY = Math.max(-100, Math.min(100, y * factor));

        gsap.to(icon, {
          x: moveX,
          y: moveY,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    });

    screenArea.addEventListener("mouseleave", () => {
      screenIcons.forEach((icon) => {
        gsap.to(icon, { x: 0, y: 0, duration: 0.6, ease: "power2.out" });
      });
    });
  }

  // Vertical Sticker Animation
  const testimonialTrack = document.querySelector(".testimonial-track");
  const testimonialWrapper = document.querySelector(".testimonial-wrapper");

  if (testimonialTrack && testimonialWrapper) {
    const testimonialClone = testimonialTrack.cloneNode(true);
    testimonialClone.style.marginTop = "24px"; // 6rem if you want more
    testimonialTrack.parentNode.appendChild(testimonialClone);

    const testimonialScrollAnim = gsap.to(".testimonial-track", {
      yPercent: -100,
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    testimonialWrapper.addEventListener("mouseenter", () =>
      testimonialScrollAnim.pause()
    );
    testimonialWrapper.addEventListener("mouseleave", () =>
      testimonialScrollAnim.resume()
    );
  }
});
