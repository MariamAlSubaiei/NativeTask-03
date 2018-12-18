import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";
//Store
import cartStore from "../../store/cartStore";

class CoffeeCart extends Component {
  render() {
    const items = cartStore.items;
    let content;
    if (items) {
      content = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {content}
        <Button full danger onPress={cartStore.checkoutCart()}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

export default observer(CoffeeCart);
