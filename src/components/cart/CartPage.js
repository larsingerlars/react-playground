import React from "react";

// Components
import CartCalculator from "./CartCalculator";
import CartItemsList from "./CartItemsList";

class CartPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Cart</h1>
        <CartItemsList />
        <CartCalculator />
      </div>
    );
  }
}

export default CartPage;
