import Drink from "./Drink.js";

class Smoothie extends Drink {
  constructor(name, size, price, temperature, smoothieType) {
    super(name, size, price, temperature);
    this.smoothieType = smoothieType;
  }
  getInfo() {
    return `${super.getInfo()}, тип смузи: ${this.smoothieType}`;
  }
};

export default Smoothie;