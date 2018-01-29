import { combineReducers } from "redux";
import { loginReducer } from "./LoginReducers";
import { sessionReducer } from "./SessionReducer";

const AppReducer = combineReducers({
  login: loginReducer,
  session: sessionReducer
});

export default AppReducer;