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
  spaceBetween: 5,
  slidesPerView: 3,
  loop: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  autoplay: {
    delay: 5000,
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
    delay: 5000,
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
