import { MenuItem } from "./MenuItem.js";

export class Order {
  constructor(item) {
    this.order = [item];
  }

  addItem(item) {
    if (item instanceof MenuItem) this.order.push(item);
    else throw new Error("incorrect type of item");
  }

  removeItem(item) {
    this.order.splice(this.order.indexOf(item), 1);
  }

  _getSumOfOrderByParameter(parameter) {
    let standartWeight = 100;
    let functionGetByParameter = `get${
      parameter.charAt(0).toUpperCase() + parameter.slice(1)
    }`;
    let orderByParameter = this.order.map((el) => {
      if (el.hasOwnProperty("weight")) {
        return (el.getWeight() / standartWeight) * el[functionGetByParameter]();
      } else {
        return el[functionGetByParameter]();
      }
    });
    return orderByParameter.reduce((acc, value) => {
      return acc + value;
    });
  }

  calculateCalories() {
    return this._getSumOfOrderByParameter("calories");
  }

  calculatePrice() {
    return this._getSumOfOrderByParameter("price");
  }

  pay() {
    return Object.freeze(this.order);
  }
}
