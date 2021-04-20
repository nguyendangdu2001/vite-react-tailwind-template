import * as Constants from "../constants/userConstants";

export const userReducerDefaultState = {
  auth: false,
  loading: false,
  error: "",
  userInfo: {
    user: {
      fullName: "",
      img: "",
      token: "",
    },

    // _id: "",
    // name: "",
    // userPic: "",
    // cart: [],
    // ownCourses: [],
    // roles: [],
  },
};

const userReducer = (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case Constants.USER_LOGIN_REQUEST:
    case Constants.USER_SIGNUP_REQUEST:
    case Constants.USER_LOGOUT_REQUEST:
      return { ...state, loading: true, error: {} };
    case Constants.USER_LOGIN_SUCCESS:
    case Constants.USER_SIGNUP_SUCCESS:
    case Constants.FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        auth: true,
        loading: false,
        userInfo: { ...state.userInfo, ...action.payload },
      };
    case Constants.USER_LOGIN_ERROR:
    case Constants.USER_SIGNUP_ERROR:
      return { ...state, auth: false, loading: false, error: action.payload };
    case Constants.USER_LOGOUT_SUCCESS:
    case Constants.USER_LOGOUT_ERROR:
      return { ...state, auth: false, userInfo: {} };
    default:
      return state;
  }
};
export default userReducer;
