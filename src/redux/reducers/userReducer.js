import * as Constants from "../constants/userConstants";

export const userReducerDefaultState = {
  auth: false,
  userInfo: {
    user: {
      fullName: "",
      img: "",
      token: "",
    },
  },
};

const userReducer = (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case Constants.USER_LOGIN_REQUEST:
    case Constants.USER_SIGNUP_REQUEST:
    case Constants.USER_LOGOUT_REQUEST:
      return { ...state };
    case Constants.USER_LOGIN_SUCCESS:
    case Constants.USER_SIGNUP_SUCCESS:
    case Constants.FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        auth: true,
        userInfo: { ...state.userInfo, ...action.payload },
      };
    case Constants.USER_LOGIN_ERROR:
    case Constants.USER_SIGNUP_ERROR:
      return { ...state, auth: false };
    case Constants.USER_LOGOUT_SUCCESS:
    case Constants.USER_LOGOUT_ERROR:
      return { ...state, auth: false, userInfo: {} };
    default:
      return state;
  }
};
export default userReducer;
