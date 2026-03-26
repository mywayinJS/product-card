import { products } from "./productsData.js";

const productCardTemplate = document.getElementById('product-card-template');

console.log(productCardTemplate);
const productList = document.getElementById('products-list');

const count = getCards();
products.slice(0, count).forEach(product => {
  const productClone = productCardTemplate.content.cloneNode(true);

  const productImg = productClone.querySelector('.product-card__img');
  productImg.src = product.image;
  productImg.alt = product.title;
  productClone.querySelector('.product-card__label').textContent = product.label
  productClone.querySelector('.product-card__title').textContent = product.title
  productClone.querySelector('.product-card__description').textContent = product.description
  productClone.querySelector('.product-card__composition').textContent = product.composition
  productClone.querySelector('.product-card__price').textContent = product.price + product.currency
  // не разобрался с помощью какого метода можно оптимизировать код, чтобы не повторялся roductClone.querySelector
  productList.appendChild(productClone)
});
// 4. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание
const productDescriptions = products.reduce((acc, item) => {
  acc.push({ [item.title]: item.description })
  return acc
}, [])
console.log(productDescriptions)


function getCards() {
  let num
  do {
    let numInput = prompt("Сколько карточек отобразить? от 1 до 5");
    num = parseInt(numInput);
  } while (num < 1 || num > 5 || isNaN(num))
  return num
}