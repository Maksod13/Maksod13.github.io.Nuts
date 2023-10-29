const swiperabout = new Swiper('.swiper__about', {
  // Optional parameters
  direction: 'horizontal',

  // If we need pagination
  pagination: {
    el: '.swiper__about--pagination',
  },

  // Navigation arrows
//   navigation: {
//     nextEl: '.swiper__about--btnnext',
//     prevEl: '.swiper__about--btnprev',
//   },

});
const swipermanufactory = new Swiper('.swiper__manufactory', {
  
  // Optional parameters
  direction: 'horizontal',


  // Navigation arrows
  navigation: {
    nextEl: '.swiper__manufactory--btnnext',
    prevEl: '.swiper__manufactory--btnprev',
  },
  

});
const swiperfreshnews = new Swiper('.freshnews__swiper', {
  // Optional parameters
  direction: 'horizontal',
 slidesPerView: 3,
 breakpoints: {
    // when window width is >= 320px
    1920: {
      slidesPerView: 3,
      spaceBetween: 20
    },
   
    1100: {
      slidesPerView: 2,
      spaceBetween: 40
   },
  
     600: {
      slidesPerView: 1,
      spaceBetween: 40
   },
      400: {
      slidesPerView: 1,
      spaceBetween: 40
   },
         320: {
      slidesPerView: 1,
      spaceBetween: 60
    }
  },
 
  navigation: {
    nextEl: '.freshnews__swiper--btnnext',
    prevEl: '.freshnews__swiper--btnprev',
  },
  
});