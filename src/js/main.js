// HEADER

$(function () {
  $('[data-id=headers-4-sidebar-toggle]').click(function (e) {
    e.preventDefault()
    $('#headers-4-sidebar').toggleClass('show')
  })
  $('[data-id=headers-4-sidebar-close]').click(function (e) {
    e.preventDefault()
    $('#headers-4-sidebar').removeClass('show')
  })
})

// TEAM SLIDER
var mySwiper14 = new Swiper('#slider-gallery-14', {
  speed: 400,
  loop: true,
  spaceBetween: 0,
  navigation: {
    nextEl: '#slider-gallery-14-next',
    prevEl: '#slider-gallery-14-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 'auto',
  autoplay: {
    delay: 2000,
  },
})

// TEAM SLIDER
var mySwiperCustom = new Swiper('#slider-gallery-custom', {
  speed: 400,
  loop: true,
  spaceBetween: 40,
  navigation: {
    nextEl: '#slider-gallery-14-next',
    prevEl: '#slider-gallery-14-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 'auto',
  autoplay: {
    delay: 2000,
  },
})

var mySwiper15Thumbs = new Swiper('#slider-gallery-15-thumbs', {
  spaceBetween: 30,
  centeredSlides: true,
  cssMode: true,
  speed: 400,
  slidesPerView: 'auto',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

})

var mySwiper15 = new Swiper('#slider-gallery-15', {
  spaceBetween: 30,
  speed: 400,
  navigation: {
    nextEl: '#slider-gallery-15-next',
    prevEl: '#slider-gallery-15-prev',
  },
  pagination: {
    el: '#slider-gallery-15-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2600,
    disableOnInteraction: false,
  },
  thumbs: {
    swiper: mySwiper15Thumbs,
  },
})
$(mySwiper15.slides).each(function () {
  $(this).on('click', function () {
    if (mySwiper15.activeIndex >= $(this).index()) {
      mySwiper15.slidePrev()
    } else {
      mySwiper15.slideNext()
    }
  })
})


gsap.registerPlugin(ScrollTrigger);


gsap.from(".anim1", { opacity: 0, duration: 1, y: -50, stagger: .4});

gsap.from(".anim-left-1", {
  scrollTrigger: {
    trigger: ".services",
    start: "top center",
   
  },
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 1
});

gsap.from(".anim-right-1", {
  scrollTrigger: {
    trigger: ".services",
    start: "top center",
  },
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 1
});

gsap.from(".anim-left-2", {
  scrollTrigger: {
    trigger: ".anim-left-1",
    start: "bottom center",
  },
  x: -100,
  opacity: 0,
  duration: 1,
  
});

gsap.from(".anim-right-2", {
  scrollTrigger: {
    trigger: ".anim-left-1",
    start: "bottom center",
    markers: true
  },
  x: 100,
  opacity: 0,
  duration: 1,
});

gsap.from(".anim-left-3", {
  scrollTrigger: {
    trigger: ".anim-left-2",
    start: "bottom center",
    markers: true
  },
  x: -100,
  opacity: 0,
  duration: 1,
  
});

gsap.from(".anim-right-3", {
  scrollTrigger: {
    trigger: ".anim-left-2",
    start: "bottom center",
    markers: true
  },
  x: 100,
  opacity: 0,
  duration: 1,
});


gsap.from(".anim-work", {
  scrollTrigger: {
    trigger: ".work",
    start: "top center",
    markers: true
  },
  y: 200,
  opacity: 0,
  duration: 1
})


gsap.from(".anim-entry", {
  scrollTrigger: {
    trigger: ".about-us",
    start: "top center",
   
  },
  y: 200,
  opacity: 0,
  duration: 1,
  stagger: .8
})
