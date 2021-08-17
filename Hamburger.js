import { MenuItem } from "./MenuItem.js";

export class Hamburger extends MenuItem {
  constructor(size, stuffing) {
    super();
    this._validateStuffing(stuffing);
    this._validateSize(size);
    this._countSize(size);
    this._countStuffing(stuffing);
    this.size = size;
    this.stuffing = stuffing;
  }

  static SIZE_SMALL = "small";
  static SIZE_LARGE = "large";
  static STUFFING_CHEESE = "cheese";
  static STUFFING_SALAD = "salad";
  static STUFFING_POTATO = "potato";

  _validateSize(size) {
    if ([Hamburger.SIZE_SMALL, Hamburger.SIZE_LARGE].indexOf(size) === -1) {
      throw new Error("Unknown hamburger size");
    }
  }

  _validateStuffing(stuffing) {
    if (
      [
        Hamburger.STUFFING_CHEESE,
        Hamburger.STUFFING_SALAD,
        Hamburger.STUFFING_POTATO,
      ].indexOf(stuffing) === -1
    ) {
      throw new Error("Unknown hamburger stuffing");
    }
  }

  _countSize(size) {
    const largeSizeCalories = 40;
    const largeSizePrice = 100;
    const smallSizeCalories = 20;
    const smallSizePrice = 50;

    switch (size) {
      case Hamburger.SIZE_LARGE:
        this.calories += largeSizeCalories;
        this.price += largeSizePrice;
        break;

      case Hamburger.SIZE_SMALL:
        this.calories += smallSizeCalories;
        this.price += smallSizePrice;
        break;
    }
  }

  _countStuffing(stuffing) {
    const cheeseStuffingCalories = 20;
    const cheeseStuffingPrice = 10;
    const potatoStuffingCalories = 10;
    const potatoStuffingPrice = 15;
    const saladStuffingCalories = 5;
    const saladStuffingPrice = 20;

    switch (stuffing) {
      case Hamburger.STUFFING_CHEESE:
        this.calories += cheeseStuffingCalories;
        this.price += cheeseStuffingPrice;
        break;

      case Hamburger.STUFFING_SALAD:
        this.calories += saladStuffingCalories;
        this.price += saladStuffingPrice;
        break;

      case Hamburger.STUFFING_POTATO:
        this.calories += potatoStuffingCalories;
        this.price += potatoStuffingPrice;
        break;
    }
  }

  getSize() {
    return this.size;
  }

  getStuffing() {
    return this.stuffing;
  }
}
