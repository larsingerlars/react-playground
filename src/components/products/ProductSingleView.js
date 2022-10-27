import React from "react";

// Components
import ToCartButton from "../cart/ToCartButton";

class ProductSingleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        id: 1,
        title: "Product 1",
        price: 100,
        image: "https://picsum.photos/200",
        inStock: true,
      },
    };
  }

  render() {
    console.log(this.props.productData);
    return (
      <div>
        <div className="product__single__view_visuals">
          <div className="product__single__view-gallery"></div>
        </div>
        <div className="product__single__view_details">
          <h1>{this.state.product.title}</h1>
          <p>{this.state.product.price}</p>
          <p>{this.state.product.inStock ? "In Stock" : "Out of Stock"}</p>
          <ToCartButton />
          <p>Desc</p>
        </div>
      </div>
    );
  }
}

export default ProductSingleView;
