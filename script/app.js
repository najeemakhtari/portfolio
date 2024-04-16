"use strict";

const $ = document;

const navToggleIcon = $.querySelector(".nav__toggle-icon");
const mobileMenu = $.querySelector(".mobile-menu");
/*-----------mobile menu--------*/
navToggleIcon.addEventListener("click", () => {
  navToggleIcon.classList.toggle("nav__toggle-line--open");
  mobileMenu.classList.toggle("mobile-menu--active");
});
/*-----------nav section--------*/

const menuItems = $.querySelectorAll(".menu__item");

menuItems.forEach((e) => {
  e.addEventListener("click", (item) => {
    item.preventDefault();
    $.querySelector(".menu__link--active").classList.remove(
      "menu__link--active"
    );
    e.classList.add("menu__link--active");

    const liItemData = e.getAttribute("data-content");
    const sectionClassTop = $.querySelector(`.${liItemData}`).offsetTop;
    window.scrollTo({
      top: sectionClassTop - 80,
      behavior: "smooth",
    });
  });
});

/*---------------Scroll section----------*/
const sections = $.querySelectorAll("main > section");
const observer = new IntersectionObserver(observerHandler, {
  threshold: 0.5,
});

function observerHandler(allSections) {
  allSections.map((section) => {
    const sectionClassName = section.target.className;
    if (section.isIntersecting) {
      $.querySelector(
        `.menu__item[data-content = ${sectionClassName}]`
      ).classList.add("menu__link--active");
    } else {
      $.querySelector(
        `.menu__item[data-content = ${sectionClassName}]`
      ).classList.remove("menu__link--active");
    }
  });
}
sections.forEach((section) => {
  observer.observe(section);
});

/*---------------dark and light theme----------*/
const themeBtn = $.querySelector(".theme");

themeBtn.addEventListener("click", () => {
  $.querySelector(".theme__icon-moon").classList.toggle("theme-toggle");
  $.querySelector(".theme__icon-sun").classList.toggle("theme-toggle");
  $.documentElement.classList.toggle("dark-theme");
  $.querySelector(".home").classList.toggle("home-dark-shape");
});

/*-----------resume section--------*/
const resumeBtn = $.querySelectorAll(".resume-list__title");
resumeBtn.forEach((e) => {
  e.addEventListener("click", () => {
    $.querySelector(".resume-list--active").classList.remove(
      "resume-list--active"
    );
    $.querySelector(".resume-content--active").classList.remove(
      "resume-content--active"
    );
    e.classList.add("resume-list--active");
    const resumeContentId = e.getAttribute("data-content-id");
    $.querySelector(resumeContentId).classList.add("resume-content--active");
  });
});

const portfolioItem = $.querySelectorAll(".portfolio__item");
portfolioItem.forEach((e) => {
  e.addEventListener("click", () => {
    $.querySelector(".portfolio__item--active").classList.remove(
      "portfolio__item--active"
    );
    $.querySelector(".portfolio-content--active").classList.remove(
      "portfolio-content--active"
    );

    e.classList.add("portfolio__item--active");
    const portfolioId = e.getAttribute("data-content-id");
    $.querySelector(portfolioId).classList.add("portfolio-content--active");
  });
});
/*-----------resume section--------*/

/*-----------portfolio slider section--------*/
const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 10,

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
