import React from "react";
import { connect } from "react-redux";
import Product from "./Product";
import basketPng from "../assets/shopping-basket.png";

const mapStateToProps = (state) => ({
  products: state.products,
  basket: state.basket,
});
export const Products = connect(mapStateToProps)(({ products, basket }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products?.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
      <div
        className="basketContainer"
        style={{ position: "relative", right: 20 }}
      >
        <img src={basketPng} width={40} height={40} alt="" />
        {basket?.length > 0 ? (
          <span
            style={{
              position: "absolute",
              color: "red",
              fontSize: 20,
              right: "35%",
              top: "1%",
            }}
          >
            {basket.length}
          </span>
        ) : null}
      </div>
    </div>
  );
});
