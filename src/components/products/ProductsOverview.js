import React from "react";
import styles from "./styles.module.scss";

import ProductCard from "./ProductCard";

class ProductsOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h1>{this.props.products.category}</h1>
        <ul className={styles.products__overview_grid}>
          {this.props.products.items.map((item) => (
            <li key={item.id}>
              <ProductCard item={item} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ProductsOverview;
