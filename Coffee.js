// После уже реализовываем наследников, например для кофе нам нужны 
// дополнительные параметры, помимо тех 4, что названы выше. Это вид зёрен, вид молока и прочее.
import Drink from "./Drink.js";

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

export default Coffee;