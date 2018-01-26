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

const getUser = function(state = {}, action) {
  switch (action.type) {
    case types.SAVED_USER:
      return action.res;
    case types.LOGGEDIN:
      return action.res;
    default:
      return state;
  }
};

export default combineReducers({
  msg: getMsg,
  form: formReducer,
  user: getUser,
  router: routerReducer
});
