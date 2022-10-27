import React from "react";

class CartCalculator extends React.Component {
  render() {
    return (
      <div>
        <p>Tax 21%: $42.00</p>
        <p>Quanitty: 3</p>
        <p>Total: $126.00</p>
        <button type="submit">Order</button>
      </div>
    );
  }
}

export default CartCalculator;
