import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../Redux/Action/actionCart";
import Product from "../Product/Product";

const Shop = (props) => {
  const { products, addToCart } = props;
  return (
    <div>
      <h1>shop</h1>
      {products.map((pd) => (
        <Product product={pd} key={pd.id} addToCart={addToCart}></Product>
      ))}
    </div>
  );
};
///
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = {
  addToCart: addToCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
