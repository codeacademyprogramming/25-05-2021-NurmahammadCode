import "./App.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "./store/actions";
import { Products } from "./components/Products";

const mapStateToProps = (state) => ({
  products: state.products,
  basket: state.basket,
});

const App = connect(mapStateToProps, { getProducts })(
  ({ getProducts, products, basket }) => {
    useEffect(() => {
      getProducts();
    }, [getProducts]);
    console.log(products);
    console.log(basket);

    return (
      <div className="container">
        <section className="first-section"></section>
        <Products />
      </div>
    );
  }
);

export default App;
