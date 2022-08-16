import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { ProductReducer } from "./reducers/ProductReducer";
const reducer = combineReducers({
    Product : ProductReducer  
});

const middleWare = [thunk];

const store = createStore(
  reducer,

  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;