import { createStore } from "redux";
import cartReducer from "../Reducer/cartReducer";

export const store = createStore(cartReducer);
