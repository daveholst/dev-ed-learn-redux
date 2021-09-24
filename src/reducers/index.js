import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import changeAmountReducer from "./changeAmount"
import { combineReducers } from "redux";

const allReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  change: changeAmountReducer

})

export default allReducer