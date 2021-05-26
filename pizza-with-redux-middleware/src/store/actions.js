import axios from "axios";
import { SET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT } from "./constants";

export function setProducts(payload) {
  return { type: SET_PRODUCTS, payload };
}

export function addProduct(payload) {
  return { type: ADD_PRODUCT, payload };
}

export function deleteProduct(payload) {
  return { type: DELETE_PRODUCT, payload };
}

export function getProducts() {
  return (dispatch) => {
    axios
      .get("https://isko88.github.io/apipizza.json")
      .then((response) => {
        return dispatch({ type: SET_PRODUCTS, payload: response.data });
      })
      .catch((error) => console.error(error));
  };
}
