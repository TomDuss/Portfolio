var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
        center: true,
        items: 1,
        nav: false,
        autoplay: true,
    },
    600: {
        center: false,
        items: 3,
        nav: false,
        autoplay: false,
    },
    1000: {
        center: false,
        items: 4,
        nav: false,
        autoplay: false,
    },
  },
});
