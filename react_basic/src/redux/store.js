import { createStore, applyMiddleware, combineReducers } from "redux";
import countReducer from "./reducers/count";
import personReducer from "./reducers/person";
import reduxThunk from "redux-thunk";

const allReducer = combineReducers({
  he: countReducer,
  ren: personReducer,
});

const store = createStore(
  allReducer,
  // combineReducers({ countReducer: countReducer(), personReducer: personReducer() }),
  applyMiddleware(reduxThunk)
);

export default store;
