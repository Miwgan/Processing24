document.addEventListener("DOMContentLoaded", function () {
  const selector = document.querySelector("input[type='tel']");
  const selector2 = document.querySelector(".tel");

  const im = new Inputmask("+7 (999)-999-99-99");
  // 

  im.mask(selector, selector2)
})


const element = document.querySelector('.select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: true,
  position: 'bottom'
});

let swiper = new Swiper(".swiper-one", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  spaceBetween: 31,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



let swiper2 = new Swiper(".partners-swiper", {
  slidesPerView: 4,
  slidesPerGroup: 2,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
});


let swiper3 = new Swiper(".swiper-reviews", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next22",
    prevEl: ".swiper-button-prev22",
  },
});