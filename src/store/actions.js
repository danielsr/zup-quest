export const types = {
  SET_MSG: "SET_MSG",
  SAVE_USER: "SAVE_USER",
  SAVED_USER: "SAVED_USER",
  LOGIN: "LOGIN",
  LOGGEDIN: "LOGGEDIN",
  ADD_REFUND_ITEM: "ADD_REFUND_ITEM"
};

export const actions = {
  setMsg: msg => ({ type: types.SET_MSG, msg }),
  saveUser: values => ({ type: types.SAVE_USER, values }),
  savedUser: res => ({ type: types.SAVED_USER, res }),
  login: values => ({ type: types.LOGIN, values }),
  loggedIn: res => ({ type: types.LOGGEDIN, res }),
  addRefundItem: item => ({ type: types.ADD_REFUND_ITEM, item })
};
