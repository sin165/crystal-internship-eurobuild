var swiperBanner = new Swiper(".banner-swiper", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiperNews = new Swiper(".news-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 2,
    spaceBetween: 14,
});
