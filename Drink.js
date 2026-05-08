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

export default Drink;