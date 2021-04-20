import { combineReducers } from "redux";
import { errorReducer } from "./errorReducer";
import { loadingReducer } from "./loadingReducer";
import { modalReducer } from "./modalReducer";
import userReducer from "./userReducer";

export const Reducer = combineReducers({
  userStatus: userReducer,
  error: errorReducer,
  loading: loadingReducer,
  modal: modalReducer,
});
export default Reducer;
