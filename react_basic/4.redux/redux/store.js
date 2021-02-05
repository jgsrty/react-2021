import { createStore, applyMiddleware } from "redux";
import countReducer from "./count_reducer";
import reduxThunk from "redux-thunk";

const store = createStore(countReducer, applyMiddleware(reduxThunk));

export default store;
