import { createStore, applyMiddleware } from "redux";
import allReducer from "./reducers";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  allReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
