import { MenuItem } from "./MenuItem.js";
import { validateByParameter } from "./validate.js";

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
    validateByParameter(
      [Salad.CAESAR, Salad.OLIVIER],
      salad,
      "Unknown type of salad"
    );
  }

  _validateWeight(weight) {
    if (!weight && weight > 0) {
      throw new Error("Wrong weight of salad");
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
