// @flow
const INITIAL_STATE = {
  loading: false,
  listData: {}
};

function listReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case "LIST_GET_REQUEST":
      return Object.assign({}, state, { loading: true });
    case "LIST_GET_SUCCESS":
      return Object.assign({}, state, {
        listData: action.payload.data,
        loading: false
      });
    case "LIST_GET_REQUEST_FAIL":
      return Object.assign({}, state, {
        error: "Enable to fetch data",
        loading: false
      });
    default:
      return state;
  }
}

export default listReducer;
