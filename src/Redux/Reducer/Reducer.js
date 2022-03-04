const initialState = {
  userData: [],
  err: "",
  loading: false,
};
const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_USER_DATA":
      return { ...state, loading: true };
    case "GET_USER_ERR":
      return { ...state, err: payload, loading: false };
    case "GET_USER_SUC":
      return { ...state, userData: payload, loading: false };
    default:
      return state;
  }
};
export default Reducer;
