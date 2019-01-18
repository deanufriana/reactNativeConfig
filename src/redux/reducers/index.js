import { combineReducers } from "redux";
import productReducers from "./productReducers";
import productsReducers from "./productsReducers";

const reducers = combineReducers({
  productsReducers,
  productReducers
});

export default reducers;
