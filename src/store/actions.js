export const types = {
  SET_MSG: "SET_MSG",
  SAVE_USER: "SAVE_USER",
  SAVED_USER: "SAVED_USER",
  SET_USER: "SET_USER",
  LOGIN: "LOGIN",
  LOGGEDIN: "LOGGEDIN",
  LOGOUT: "LOGOUT",
  LOGGEDOUT: "LOGGEDOUT",
  ADD_REFUND_ITEM: "ADD_REFUND_ITEM",
  FETCH_BANKS: "FETCH_BANKS",
  FETCHED_BANKS: "FETCHED_BANKS",
  SAVE_REFUND: "SAVE_REFUND",
  SAVED_REFUND: "SAVED_REFUND",
  FETCH_REFUND: "FETCH_REFUND",
  FETCHED_REFUND: "FETCHED_REFUND",
  RESET_REFUND: "RESET_REFUND",
  FETCH_USER_REFUNDS: "FETCH_USER_REFUNDS",
  FETCHED_REFUNDS: "FETCHED_REFUNDS"
};

export const actions = {
  setMsg: msg => ({ type: types.SET_MSG, msg }),
  saveUser: values => ({ type: types.SAVE_USER, values }),
  savedUser: res => ({ type: types.SAVED_USER, res }),
  setUser: user => ({ type: types.SET_USER, user }),
  login: values => ({ type: types.LOGIN, values }),
  loggedIn: res => ({ type: types.LOGGEDIN, res }),
  logout: () => ({ type: types.LOGOUT }),
  loggedOut: () => ({ type: types.LOGGEDOUT }),
  addRefundItem: item => ({ type: types.ADD_REFUND_ITEM, item }),
  fetchBanks: () => ({ type: types.FETCH_BANKS }),
  fetchedBanks: res => ({ type: types.FETCHED_BANKS, res }),
  saveRefund: values => ({ type: types.SAVE_REFUND, values }),
  savedRefund: res => ({ type: types.SAVED_REFUND, res }),
  fetchRefund: id => ({ type: types.FETCH_REFUND, id }),
  fetchedRefund: res => ({ type: types.FETCHED_REFUND, res }),
  resetRefund: () => ({ type: types.RESET_REFUND }),
  fetchUserRefunds: () => ({ type: types.FETCH_USER_REFUNDS }),
  fetchedRefunds: res => ({ type: types.FETCHED_REFUNDS, res })
};
