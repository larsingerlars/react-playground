import React from "react";
import { Link } from "react-router-dom";
// Components
import CartSymbol from "./CartSymbol";
class ToCartButton extends React.Component {
  render() {
    return (
      <Link to={"/cart"}>
        <CartSymbol />
      </Link>
    );
  }
}

export default ToCartButton;
