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
function changeTab(tabId) {
  // Скрываем все вкладки
  const tabContents = document.getElementsByClassName("tab__content");
  for (let tabContent of tabContents) {
    tabContent.style.display = "none";
  }

  // Убираем класс "active" у всех кнопок
  const buttons = document.getElementsByClassName("tab-button");
  for (let button of buttons) {
    button.classList.remove("active");
  }

  // Отображаем выбранную вкладку
  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.style.display = "flex";
  }

  // Добавляем класс "active" только для выбранной кнопки
  const selectedButton = document.querySelector(`button[onclick="changeTab('${tabId}')"]`);
  if (selectedButton) {
    selectedButton.classList.add("active");
  }
}


const swipermanufactory = new Swiper('.swiper__manufactory', {
  
  // Optional parameters
  direction: 'horizontal',


  // Navigation arrows
  navigation: {
    nextEl: '.swiper__manufactory--btnnext',
    prevEl: '.swiper__manufactory--btnprev',
  },
  

});
document.querySelector('.filter__btn').addEventListener('click', function () {
  var filterMenu = document.querySelector('.filter__menu--inner');
  if (filterMenu.style.display === 'none' || filterMenu.style.display === '') {
    filterMenu.style.display = 'flex';
  } else {
    filterMenu.style.display = 'none';
  }
});

