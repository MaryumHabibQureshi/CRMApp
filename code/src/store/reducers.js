import { combineReducers } from "redux";
import customer from "../features/customer/reducers";
// import habitat from '../features/habitat/reducers'

const rootReducer = combineReducers({
  customer,
  // habitat
});

export default rootReducer;
