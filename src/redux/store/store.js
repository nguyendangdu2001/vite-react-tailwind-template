import rootReducer from "../reducers";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";

const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = userInfo
  ? {
      userStatus: {
        auth: true,
        userInfo: { ...userInfo },
      },
    }
  : {};

export default createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
