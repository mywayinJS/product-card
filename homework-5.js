// (3) Эта функция принимает 2 значения, город и температуру.
function showCityTemp(city, temp) {
  console.log(`Сейчас в ${city} температура + ${temp} градусов по Цельсию.`);
}
showCityTemp('Баку', 13);

// (4) Создана константа в которой хранится скорость света.
// И функция которая принимает аргумент для сравнения.
const LIGHT_SPEED = 299792458;

function compareWithLightSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log('Сверхсветовая скорость!');
  } else if (speed < LIGHT_SPEED) {
    console.log('Субсветовая скорость!');
  } else {
    console.log('Скорость света!');
  }
};
compareWithLightSpeed(299792458);

//  (5) Созданы переменные которые хранят в себе название и цену товара
// И функция, которая сравнивает бюджет с ценой товара, с выводом соответствующего бюджету сообщения.
let productName = ('Adidas Ozweego');
let productPrice = (19990);

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${productPrice - budget} ₽, пополните баланс!`);
  }
}
buyProduct(19980);

// (6) Для улучшения аналитических способностей
// Не хватило фантазии придумать что-то крутое
let name = ("Huzeyfa");
let age = ("27");
let country = ("Azerbaijan");

function introduceMyself() {
  console.log(`Hi! My name is ${name}, I'm ${age} years old, I live in ${country}.`);
}
introduceMyself();