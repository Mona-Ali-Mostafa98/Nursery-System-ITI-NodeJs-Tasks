module.exports = class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  toString() {
    return `Car Model: ${this.model}, Year: ${this.year}`;
  }
};
