import { SET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT } from "./constants";

const initialState = {
  products: [],
  basket: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === SET_PRODUCTS) {
    console.log(action.payload);
    return { ...state, products: action.payload };
  } else if (action.type === ADD_PRODUCT) {
    const basket = state.basket;
    return { ...state, basket: [...basket, action.payload] };
  } else if (action.type === DELETE_PRODUCT) {
    return Object.assign({}, state, {
      cabinetItems: state.basket.filter(
        (product) => product.id !== action.payload
      ),
    });
  }
  return state;
}

export default rootReducer;
