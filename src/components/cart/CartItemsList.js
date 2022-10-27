import React from "react";

// Components
import CartItem from "./CartItem";

class CartItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        { id: 1, quantity: 1 },
        { id: 2, quantity: 2 },
        { id: 3, quantity: 3 },
      ],
    };
  }

  render() {
    return (
      <ol>
        {this.state.cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} quantity={cartItem.quantity} />
        ))}
      </ol>
    );
  }
}

export default CartItemsList;
