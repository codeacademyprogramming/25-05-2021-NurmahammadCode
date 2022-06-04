import React from "react";
import { connect } from "react-redux";
import product from "../assets/product.png";
import { addProduct } from "../store/actions";

function Product({ item, addProduct }) {
  const addToBasket = () => {
    addProduct(item);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: 30 }}>
      <img
        src={product}
        alt=""
        style={{ objectFit: "contain" }}
        width={260}
        height={415}
      />
      <button
        onClick={addToBasket}
        style={{
          borderWidth: 1,
          borderColor: "black",
          outline: "none",
          backgroundColor: "#ffffff",
          width: 150,
          borderRadius: 10,
          alignSelf: "center",
          marginTop: 10,
        }}
      >
        Add to basket
      </button>
    </div>
  );
}

export default connect(null, { addProduct })(Product);
