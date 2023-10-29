document.addEventListener("DOMContentLoaded", function() {
    // Получаем ссылку на кнопки и на элементы хедера
    const toggleButton = document.querySelector(".header__middle--svg");
    const crossButton = document.querySelector(".header__cross--btn");
    const headerMenu = document.querySelector(".header__container");
    const headerMenuMobile = document.querySelector(".header__menu--mobile");

    // Добавляем обработчик события на кнопку "Меню"
    toggleButton.addEventListener("click", function() {
        // Получаем текущее значение стиля display элементов
        const menuDisplayStyle = getComputedStyle(headerMenu).display;
        const mobileMenuDisplayStyle = getComputedStyle(headerMenuMobile).display;

        // Переключаем видимость элементов хедера
        if (menuDisplayStyle === "none") {
            headerMenu.style.display = "block";
            headerMenuMobile.style.display = "none";
        } else {
            headerMenu.style.display = "none";
            headerMenuMobile.style.display = "block";
        }
    });

    // Добавляем обработчик события на кнопку "Закрыть"
    crossButton.addEventListener("click", function() {
        // Возвращаем все в исходное положение
        headerMenu.style.display = "block";
        headerMenuMobile.style.display = "none";
    });
});




document.addEventListener("DOMContentLoaded", function() {
  const cartIcon = document.getElementById("cartIcon");
  const cartPopup = document.querySelector(".cart__popup");

  cartIcon.addEventListener("click", function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке

    if (cartPopup.classList.contains("open")) {
      cartPopup.classList.remove("open");
    } else {
      cartPopup.classList.add("open");
    }
  });

  // Добавляем обработчик клика на ссылку внутри блока cartPopup
  const cartPopupLink = cartPopup.querySelector("a");
  cartPopupLink.addEventListener("click", function(event) {
    // Отменяем предотвращение перехода по ссылке
    event.stopPropagation(); // Останавливаем всплытие события
  });
});



