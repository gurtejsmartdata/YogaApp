import * as Types from "../../actionTypes";
const initialState = {
  isLoggedIn: false,
  userData: null
};

export default (user = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        userData: null
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        isLoggedIn: true
      };
    case Types.LOGIN_FAIL:
      return {
        ...state,
        userData: null
      };
    case Types.LOGIN:
      return { ...state, isLoggedIn: true };
    case "LOGOUT":
      return { ...state, isLoggedIn: false, userData: null };
    default:
      return state;
  }
});
