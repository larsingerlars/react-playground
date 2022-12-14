import React from "react";

// Components
import CartModal from "./CartModal";
import CartSymbol from "./CartSymbol";

class ShowCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: this.props.cartCount || 0,
    };
  }

  render() {
    return (
      <button type="button">
        <CartSymbol />
        <span className="sr__only">Show Cart</span>
        {this.state.cartCount > 0 && (
          <span className="product__cart__count">{this.state.cartCount}</span>
        )}
        <CartModal />
      </button>
    );
  }
}

export default ShowCart;
