import React from "react";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.quantity || 1,
    };
  }

  render() {
    return <li>Cart Item {this.state.quantity}</li>;
  }
}

export default CartItem;
