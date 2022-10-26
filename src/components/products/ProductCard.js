import React from "react";
import styles from "./styles.module.scss";

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
        <p>{this.props.item.title}</p>
        <p>{this.props.item.price}</p>
      </article>
    );
  }
}

export default ProductsOverview;
