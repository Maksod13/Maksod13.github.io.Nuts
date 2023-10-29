const swipercatalog = new Swiper('.swiper__catalog', {
  
  // Optional parameters
  direction: 'horizontal',

  // If we need pagination
  pagination: {
    el: '.swiper__catalog--pagination',
  },

  // Navigation arrows
//   navigation: {
//     nextEl: '.swiper__catalog--btnnext',
//     prevEl: '.swiper__catalog--btnprev',
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
const swipercatalog2 = new Swiper('.catalog__swiper', {
  
  // Optional parameters
  direction: 'horizontal',
  

  navigation: {
    nextEl: '.catalog__swiper--btnnext',
    prevEl: '.catalog__swiper--btnprev',
  },

});
const swipersmall = new Swiper('.swipersmall', {
  // Optional parameters
  direction: 'horizontal',

  // If we need pagination
  pagination: {
    el: '.swipersmall__pagination',
  },

  // Navigation arrows
//   navigation: {
//     nextEl: '.swipersmall__btnnext',
//     prevEl: '.swipersmall__btnprev',
//   },

});
document.querySelector('.filter__btn').addEventListener('click', function () {
  var filterMenu = document.querySelector('.filter__menu--inner');
  if (filterMenu.style.display === 'none' || filterMenu.style.display === '') {
    filterMenu.style.display = 'flex';
  } else {
    filterMenu.style.display = 'none';
  }
});