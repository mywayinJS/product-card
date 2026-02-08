console.log('Hello world!');
// покраска первой карточки

const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
const firstProductCard = document.querySelector('.product-card');
const blueHashColor = '#0000FF';

recolorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueHashColor;
});

// Покраска всех карточек

const recolorAllCardsButton = document.getElementById('recolor-all-cards-button');
const allProductCards = document.querySelectorAll('.product-card');
const redHashColor = '#FF0000';

recolorAllCardsButton.addEventListener('click', () => {
  allProductCards.forEach(
    card => card.style.backgroundColor = redHashColor
  )
});

// Переход на страницу Google

const googleOpenButton = document.getElementById('open-google-button');
googleOpenButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google?')

  if (answer === true) {
    window.open('https://google.com');
  } else {
    console.log('Пользователь отменил переход на Google')
  }
};

// Находим заголовок по классу, сохраняем HTML-элемент в переменную title
const title = document.querySelector('.products-title');
// Вешаем слушатель с параметром наведения мыши
title.addEventListener('mouseover', () => 
  {
    // Выводим в консоль текст который находится внутри заголовка
    console.log(title.textContent)
});

const changeColorButton = document.getElementById('change-color-button');
changeColorButton.addEventListener('click', () => {
  changeColorButton.classList.toggle('color-button-active')
});