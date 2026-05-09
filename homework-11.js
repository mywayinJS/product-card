import Drink from "./Drink.js";
import Coffee from "./Coffee.js";
import Tea from "./Tea.js";
import Smoothie from "./Smoothie.js";
import Lemonade from "./Lemonade.js";
import Cafe from "./Cafe.js"

// получение информации о напитке
const coffeeLatte = new Coffee('latte', 'medium', 150, 70, 'arabica', 'almond');
console.log(coffeeLatte.getInfo()); // получаем инф. о напитке

const teaEarlGrey = new Tea('tea', 'small', 100, 80, 'earlGrey');
teaEarlGrey.setTemperature(90); //меняем температуру
console.log(teaEarlGrey.getTemperature()); //получаем инф. о температуре

const fruitSmoothie = new Smoothie('Smoothie', 'large', 250, 10, 'multiFruit');
console.log(fruitSmoothie.getInfo());

const lemonade = new Lemonade('Lemonade', 'medium', 150, 10, 'tarragon');
console.log(lemonade.getInfo());

console.log(coffeeLatte.temperature); //undefined, потому что свойство скрыто

// получение информации о кафе
const starbucks = new Cafe('Starbucks', '2521 Broadway The Lyric Building, Нью-Йорк');
console.log(starbucks.getCafeInfo());

// заказ напитка
starbucks.orderDrink(coffeeLatte); 

//проверка абстрактности класса Drink
const test = new Drink('test', 'test1', 1000, 100);
console.log(test);