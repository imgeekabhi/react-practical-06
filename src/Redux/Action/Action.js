import axios from "axios";

function getUserData() {
  return {
    type: "GET_USER_DATA",
    payload: "req",
  };
}
function getUserErr(err) {
  return {
    type: "GET_USER_ERR",
    payload: err,
  };
}
function getUserSuc(suc) {
  return {
    type: "GET_USER_SUC",
    payload: suc,
  };
}
function getUser(pNum) {
  return function (dispatch) {
    dispatch(getUserData());
    axios
      .get(`https://reqres.in/api/users?page=${pNum}`)
      .then((response) => {
        let user = response.data;
        dispatch(getUserSuc(user.data));
      })
      .catch((err) => dispatch(getUserErr(err)));
  };
}
export { getUserData, getUserSuc, getUserErr, getUser };
