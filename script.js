import { Drink } from "./Drink.js";
import { Salad } from "./Salad.js";
import { Hamburger } from "./Hamburger.js";
import { Order } from "./Order.js";

// Создаём экземпляры классов
const cheeseburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE
);
const bigwithpotato = new Hamburger(
  Hamburger.SIZE_LARGE,
  Hamburger.STUFFING_POTATO
);
const caesar = new Salad(Salad.CAESAR, 150);
const olivier = new Salad(Salad.OLIVIER, 90);
const cola = new Drink(Drink.COLA);

// Нужно с чего-то начать - первый салат в заказе
const order = new Order(caesar);

// Добавляем к заказу другие блюда
order.addItem(cola);
order.addItem(cheeseburger);
order.addItem(olivier);
order.addItem(bigwithpotato);

// Передумали с оливье
order.removeItem(olivier);

// Оплатили заказ, выводим
order.pay();
console.log(order, order.calculatePrice(), order.calculateCalories());

// Пытаемся дозаказать кофе, но заказ оплачен, объект заблокирован, изменения невозможны
// order.addItem(coffee);
