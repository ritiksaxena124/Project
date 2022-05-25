import { combineReducers } from "redux";
import loginReducers from "./loginReducers";

const reducers = combineReducers({
  isLoggedIn: loginReducers,
});

export default reducers;
