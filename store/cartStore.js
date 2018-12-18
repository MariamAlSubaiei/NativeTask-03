import { decorate, observable, computed } from "mobx";
import CoffeeCart from "../Components/CoffeeCart/index";
class CartStore {
  constructor() {
    this.items = [];

    this.addItemToCart = this.addItemToCart.bind(this);
    this.checkoutCart = this.checkoutCart.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
  }

  addItemToCart(item) {
    const repeatedItem = this.items.find(
      listitem =>
        listitem.drink === item.drink && listitem.option === item.option
    );
    if (repeatedItem) {
      repeatedItem.quantity++;
    } else this.items.push(item);
  }

  removeItemFromCart(item) {
    this.items = this.items.filter(itemA => itemA !== item);
  }

  checkoutCart() {
    this.items = [];
  }

  get sumofQuantity() {
    let quantity = 0;
    this.items.forEach(item => {
      quantity = quantity + item.quantity;
    });
    return quantity;
  }
}

decorate(CartStore, {
  items: observable,
  sumofQuantity: computed
});

export default new CartStore();
