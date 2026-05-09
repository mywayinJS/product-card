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

export default Cafe;