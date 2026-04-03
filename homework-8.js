import { products } from "./products-data.js";

const productCardTemplate = document.getElementById('product-card-template');
const productList = document.getElementById('products-list');

const cardsCount = getCards();
renderProducts(products, cardsCount);
function renderProducts(products, cardsCount) {
  products.slice(0, cardsCount).forEach(product => {
    const productClone = productCardTemplate.content.cloneNode(true);
  
  
    productClone.querySelector('.product-card__img').src = `images/${product.image}.png`;
    productClone.querySelector('.product-card__img').alt = product.image;
    productClone.querySelector('.product-card__label').textContent = product.label;
    productClone.querySelector('.product-card__title').textContent = product.title;
    productClone.querySelector('.product-card__description').textContent = product.description;
    productClone.querySelector('.product-card__price').textContent = product.price + product.currency;
    const compositionList = productClone.querySelector('.product-card__composition');
  
    product.composition.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      compositionList.appendChild(li);
    });
    productList.appendChild(productClone);
  });
}

// 4. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание
const productDescriptions = products.reduce((acc, item) => {
  acc.push({ [item.title]: item.description });
  return acc;
}, []);

function isValidNumber(num) {
  return num >= 1 && num <= 5 && !isNaN(num);
}

function handleError(input, num) {
  if (isNaN(num)) {
    alert("Это не число");
  } else if (num < 1 || num > 5) {
    alert("Введите число от 1 до 5");
  }
}

function getCards() {
  let num;
  let isValid = false;

  while (!isValid) {
    const input = prompt("Сколько карточек отобразить? от 1 до 5");
    num = parseInt(input);

    isValid = isValidNumber(num);

    if (!isValid) {
      handleError(input, num);
    }
  }

  return num;
}
