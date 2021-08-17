import { MenuItem } from "./MenuItem.js";

export class Salad extends MenuItem {
  constructor(salad, weight) {
    super();
    this._validateSaladType(salad);
    this._validateWeight(weight);
    this._countSalad(salad);
    this.weight = weight;
  }
  static CAESAR = "caesar";
  static OLIVIER = "olivier";

  _validateSaladType(salad) {
    if ([Salad.CAESAR, Salad.OLIVIER].indexOf(salad) === -1) {
      throw new Error("Unknown type of salad");
    }
  }

  _validateWeight(weight) {
    if (!weight) {
      throw new Error("Salad doesn't have property of weight");
    }
  }

  _countSalad(salad) {
    const caesarPrice = 100;
    const olivierPrice = 50;
    const caesarCalories = 20;
    const olivierCalories = 80;
    switch (salad) {
      case Salad.CAESAR:
        this.price += caesarPrice;
        this.calories += caesarCalories;
        break;

      case Salad.OLIVIER:
        this.price += olivierPrice;
        this.calories += olivierCalories;
        break;
    }
  }
  getWeight() {
    return this.weight;
  }
}
