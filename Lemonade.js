import Drink from "./Drink.js";

class Lemonade extends Drink {
  constructor(name, size, price, temperature, citrusType) {
    super(name, size, price, temperature);
    this.citrusType = citrusType;
  }
  getInfo() {
    return `${super.getInfo()}, тип лимонада: ${this.citrusType}`;
  }
};

export default Lemonade;