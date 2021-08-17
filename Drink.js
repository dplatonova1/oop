import { MenuItem } from "./MenuItem.js";

export class Drink extends MenuItem {
  constructor(drink) {
    super();
    this._validateDrinkType(drink);
    this._countDrink(drink);
  }
  static COLA = "cola";
  static COFFEE = "coffee";

  _validateDrinkType(drink) {
    if ([Drink.COLA, Drink.COFFEE].indexOf(drink) === -1) {
      throw new Error("Unknown type of drink");
    }
  }

  _countDrink(drink) {
    const colaPrice = 50;
    const coffeePrice = 80;
    const colaCalories = 40;
    const coffeeCalories = 20;

    switch (drink) {
      case Drink.COLA:
        this.price += colaPrice;
        this.calories += colaCalories;
        break;

      case Drink.COFFEE:
        this.price += coffeePrice;
        this.calories += coffeeCalories;
        break;
    }
  }
}
