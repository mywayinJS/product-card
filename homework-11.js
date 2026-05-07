// класс должен содержать общие свойства, связанные со всеми напитками 
// (это то, что есть у каждого напитка), а это: 
// 1) название   2) размер
// 3) цена   4) температура (приватный).
//  Почему? Потому что мы не можем влиять на температуру вне класса.
class Drink {
  #temperature;
  constructor (name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature; //(приватный)

    if (this.constructor === Drink) {
      throw new Error('Это абстрактный класс!');
    }
  }

  getInfo() {
    return `название: ${this.name}, размер: ${this.size}, цена: ${this.price}₽`
  }
  getTemperature() {
    return `${this.#temperature}°C`;
  }
  setTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }
  #makeDrink() /*(приватный)*/{
    return `Ваш ${this.name} готовится!`
  }
  serveDrink() {
    console.log(this.#makeDrink());
    console.log(`Ваш ${this.name} подан!`)
  }
};


// После уже реализовываем наследников, например для кофе нам нужны 
// дополнительные параметры, помимо тех 4, что названы выше. Это вид зёрен, вид молока и прочее.
class Coffee extends Drink {
  constructor(name, size, price, temperature, beanType, milkType) {
    super(name, size, price, temperature);
    this.beanType = beanType;
    this.milkType = milkType;
  }
  getInfo() {
    return `${super.getInfo()}, тип зерен: ${this.beanType}, тип молока:${this.milkType}`;
  }
};

class Tea extends Drink {
  constructor(name, size, price, temperature, teaType) {
    super(name, size, price, temperature);
    this.teaType = teaType;
  }
  getInfo() {
    return `${super.getInfo()}, тип чая: ${this.teaType}`;
  }
};

class Smoothie extends Drink {
  constructor(name, size, price, temperature, smoothieType) {
    super(name, size, price, temperature);
    this.smoothieType = smoothieType;
  }
  getInfo() {
    return `${super.getInfo()}, тип смузи: ${this.smoothieType}`;
  }
};

class Lemonade extends Drink {
  constructor(name, size, price, temperature, citrusType) {
    super(name, size, price, temperature);
    this.citrusType = citrusType;
  }
  getInfo() {
    return `${super.getInfo()}, тип лимонада: ${this.citrusType}`;
  }
};

// 4. После того, как реализовали класс "напиток" и его наследников, приступаем к классу "Кафе". 
// Он у нас будет принимать 2 параметра, например название кафе и его месторасположение. Реализуем 2 метода внутри него:
// 1) получить информацию про кафе  // 2) заказать напиток
class Cafe {
  constructor(nameCafe, locationCafe) {
    this.nameCafe = nameCafe;
    this.locationCafe = locationCafe;
  }
  getCafeInfo() {
    return `Кафе - ${this.nameCafe} находится по адресу: ${this.locationCafe}`
  }
  orderDrink(drink) {
    drink.serveDrink()
  }
};

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
const test = new Drink('test', 'asda', 1000, 100);
console.log(test);