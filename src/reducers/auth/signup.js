import * as types from "../../actionTypes";
import Immutable from "seamless-immutable";

const initialState = Immutable({
  loading: false,
  data: null,
  root: "login"
});

export default function signup(state = initialState, action = {}) {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        data: null
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case types.SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        data: null
      };
    case types.FORGOTPASS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FORGOTPASS_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case types.FORGOTPASS_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
