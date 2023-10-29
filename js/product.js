const swipercatalog2 = new Swiper('.catalog__swiper', {
  
  // Optional parameters
  direction: 'horizontal',
  


  // Navigation arrows
  navigation: {
    nextEl: '.catalog__swiper--btnnext',
    prevEl: '.catalog__swiper--btnprev',
  },

});
function chooseTab(tabId) {
  // Скрываем все вкладки
  const tabchooseContents = document.getElementsByClassName("stock__tab--content");
  for (let tabchooseContent of tabchooseContents) {
    tabchooseContent.style.display = "none";
  }

  // Убираем класс "active" у всех кнопок
  const tabButtons = document.getElementsByClassName("stock__tab--button");
  for (let tabButton of tabButtons) {
    tabButton.classList.remove("active");
  }

  // Отображаем выбранную вкладку
  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.style.display = "flex";
  }

  // Добавляем класс "active" к текущей кнопке
  const selectedButton = document.querySelector(`button[onclick="chooseTab('${tabId}')"]`);
  if (selectedButton) {
    selectedButton.classList.add("active");
  }
}



