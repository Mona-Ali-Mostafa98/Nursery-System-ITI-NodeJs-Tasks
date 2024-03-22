const Car = require('./car.js');

class FlyingCar extends Car {
  constructor(model, year, canFly) {
    super(model, year);
    this.canFly = canFly;
  }

  toString() {
    const parentString = super.toString();
    const flyStatus = this.canFly ? "I can fly" : "I can't fly";
    return `${parentString}, ${flyStatus}`;
  }
}

module.exports = FlyingCar;
