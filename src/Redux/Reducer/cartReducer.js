import { ADD_TO_CART, REMOVE_FROM_CART } from "../Action/actionCart";

const initialstate = {
  cart: [],
  products: [
    { name: "lenovo", id: 1 },
    { name: "Asus", id: 2 },
    { name: "Dell", id: 3 },
    { name: "hp", id: 4 },
    { name: "Toshiba", id: 5 },
    { name: "Acer", id: 6 },
  ],
};
const cartReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = {
        productId: action.id,
        name: action.name,
        cartId: state.cart.length + 1,
      };
      const newCart = [...state.cart, newItem];
      return { ...state, cart: newCart };
    case REMOVE_FROM_CART:
      const id = action.id;
      const remainingCart = state.cart.filter((item) => item.cartId !== id);
      return { ...state, cart: remainingCart };
    default:
      return state;
  }
};
export default cartReducer;
