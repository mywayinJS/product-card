// (3) Эта функция принимает 2 значения, город и температуру.
function showCityTemp (city, temp) {
  console.log(`Сейчас в ${city} температура + ${temp} градусов по Цельсию.`)
}
showCityTemp('Баку', 13);

// (4) Создана константа в которой хранится скорость света.
// И функция которая принимает аргумент для сравнения.
const lightSpeed = 299792458;
function compareWithLightSpeed (speed) {
if (speed > lightSpeed)
  console.log('Сверхсветовая скорость!');
else if (speed < lightSpeed)
  console.log('Субсветовая скорость!');
else
  console.log('Скорость света!');
};
compareWithLightSpeed(299792458);

//  (5) Созданы переменные которые хранят в себе название и цену товара
// И функция, которая сравнивает бюджет с ценой товара, с выводом соответствующего бюджету сообщения.
let sneakersName = ('Adidas Ozweego');
let sneakersPrice = (19990);
function buySneakers (budget) {
  if (budget >= sneakersPrice)
    console.log(`${sneakersName} приобретён. Спасибо за покупку!`);
  else
  console.log(`Вам не хватает ${sneakersPrice - budget} ₽, пополните баланс!`)
}
buySneakers(19980)

// (6) Для улучшения аналитических способностей
// Не хватило фантазии придумать что-то крутое
  let name = ("Huzeyfa");
  let age = ("27");
  let country = ("Azerbaijan");
  function introduceMyself () {
    console.log(`Hi! My name is ${name}, I'm ${age} years old, I live in ${country}.`);
  }
introduceMyself();