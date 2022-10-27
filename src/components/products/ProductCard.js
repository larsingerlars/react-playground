import React from "react";
import styles from "./styles.module.scss";

import { Link } from "react-router-dom";

// Components
import AddToCartButton from "../cart/AddToCartButton";
class ProductsOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <article className={styles.product__card}>
        <picture
          className={
            this.props.item.inStock ? styles.in_stock : styles.not_in_stock
          }
        >
          <img src={this.props.item.image} alt={this.props.item.title} />
        </picture>
        <Link to={`/${this.props.item.id}`}>{this.props.item.title}</Link>
        <p>{this.props.item.price}</p>
        <AddToCartButton />
      </article>
    );
  }
}

export default ProductsOverview;
