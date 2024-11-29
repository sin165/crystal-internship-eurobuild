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
    loop: true,
    navigation: {
      nextEl: ".news-next",
      prevEl: ".news-prev",
    },
    slidesPerView: 2,
    spaceBetween: 14,
});

var swiperProducts = new Swiper(".products-swiper", {
    navigation: {
      nextEl: ".products-next",
      prevEl: ".products-prev",
    },
    slidesPerView: "auto",
    spaceBetween: 30,
    slidesOffsetBefore: 173,
    slidesOffsetAfter: 173,
});
