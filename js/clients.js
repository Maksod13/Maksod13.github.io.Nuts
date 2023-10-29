const swiperclients = new Swiper('.swiper__clients', {
  // Optional parameters
  direction: 'horizontal',

  // If we need pagination
  pagination: {
    el: '.swiper__clients--pagination',
  },

  // Navigation arrows
//   navigation: {
//     nextEl: '.swiper__clients--btnnext',
//     prevEl: '.swiper__clients--btnprev',
//   },

});
function selectTab(tabId) {
  // Скрываем все вкладки
  const tabstoreContents = document.getElementsByClassName("store__tab--content");
  for (let tabstoreContent of tabstoreContents) {
    tabstoreContent.style.display = "none";
  }

  // Убираем класс "active" у всех кнопок
  const buttons = document.getElementsByClassName("store__tab--button");
  for (let btn of buttons) {
    btn.classList.remove("active");
  }

  // Отображаем выбранную вкладку
  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.style.display = "flex";
  }

  // Добавляем класс "active" только для выбранной кнопки
  const selectedButton = document.querySelector(`[onclick="selectTab('${tabId}')"]`);
  if (selectedButton) {
    selectedButton.classList.add("active");
  }
}


const swiperstore = new Swiper('.swiper__store', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 2,

  breakpoints: {
    900: {
      slidesPerView: 2,
       autoHeight: true,
    },
    850: {
      slidesPerView: 2,
       autoHeight: true,
    },
     780: {
      slidesPerView: 1,
       autoHeight: true,
    },
      430: {
      slidesPerView: 1,
       autoHeight: true,
    },
         375: {
      slidesPerView: 1,
           autoHeight: true,
       spaceBetween: 60
    },
            320: {
      slidesPerView: 1,
           autoHeight: true,
       spaceBetween: 60
    },
  },

});