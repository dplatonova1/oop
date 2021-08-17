export class Order {
  constructor(item) {
    this.order = [item];
  }

  addItem(item) {
    this.order.push(item);
  }

  removeItem(item) {
    this.order.splice(this.order.indexOf(item), 1);
  }

  _getSumOfOrderByParameter(parameter) {
    let standartWeight = 100;
    let parameterForFunction =
      parameter.charAt(0).toUpperCase() + parameter.slice(1);
    let functionByParameter = `get${parameterForFunction}`;
    let mapped = this.order.map((el) => {
      if (el.hasOwnProperty("weight")) {
        return (el.getWeight() / standartWeight) * el[functionByParameter]();
      } else {
        return el[functionByParameter]();
      }
    });
    return mapped.reduce((acc, value) => {
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
