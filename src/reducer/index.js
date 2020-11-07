import { combineReducers } from "redux";
import login from "./login";
import checkLogged from './checkLogged';

const myReducer = combineReducers({
  login,
  checkLogged
});

export default myReducer;
