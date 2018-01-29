export const types = {
  SET_MSG: "SET_MSG",
  SAVE_USER: "SAVE_USER",
  SAVED_USER: "SAVED_USER",
  LOGIN: "LOGIN",
  LOGGEDIN: "LOGGEDIN",
  ADD_REFUND_ITEM: "ADD_REFUND_ITEM",
  FETCH_BANKS: "FETCH_BANKS",
  FETCHED_BANKS: "FETCHED_BANKS",
  SAVE_REFUND: "SAVE_REFUND",
  SAVED_REFUND: "SAVED_REFUND",
  FETCH_REFUND: "FETCH_REFUND",
  FETCHED_REFUND: "FETCHED_REFUND"
};

export const actions = {
  setMsg: msg => ({ type: types.SET_MSG, msg }),
  saveUser: values => ({ type: types.SAVE_USER, values }),
  savedUser: res => ({ type: types.SAVED_USER, res }),
  login: values => ({ type: types.LOGIN, values }),
  loggedIn: res => ({ type: types.LOGGEDIN, res }),
  addRefundItem: item => ({ type: types.ADD_REFUND_ITEM, item }),
  fetchBanks: () => ({ type: types.FETCH_BANKS }),
  fetchedBanks: res => ({ type: types.FETCHED_BANKS, res }),
  saveRefund: values => ({ type: types.SAVE_REFUND, values }),
  savedRefund: res => ({ type: types.SAVED_REFUND, res }),
  fetchRefund: id => ({ type: types.FETCH_REFUND, id }),
  fetchedRefund: res => ({ type: types.FETCHED_REFUND, res })
};
