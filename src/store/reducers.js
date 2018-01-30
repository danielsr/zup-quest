import { types } from "./actions";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";

const getMsg = function(state = null, action) {
  switch (action.type) {
    case types.SET_MSG:
      return action.msg;
    default:
      return state;
  }
};

const getUser = function(state = null, action) {
  switch (action.type) {
    case types.SAVED_USER:
      return action.res;
    case types.LOGGEDIN:
      return action.res;
    case types.SET_USER:
      return action.user;
    case types.LOGGEDOUT:
      return null;
    default:
      return state;
  }
};

const getBanks = function(state = [], action) {
  switch (action.type) {
    case types.FETCHED_BANKS:
      return action.res;
    default:
      return state;
  }
};

const getRefund = function(state = {}, action) {
  switch (action.type) {
    case types.SAVED_REFUND:
      return action.res;
    case types.FETCHED_REFUND:
      return action.res;
    case types.RESET_REFUND:
      return { status: "1 - ABERTA" };
    default:
      return state;
  }
};

const getRefunds = function(state = [], action) {
  switch (action.type) {
    case types.FETCHED_REFUNDS:
      return action.res;
    default:
      return state;
  }
};

export default combineReducers({
  msg: getMsg,
  form: formReducer,
  user: getUser,
  router: routerReducer,
  banks: getBanks,
  refund: getRefund,
  refunds: getRefunds
});
