export const types = {
  SET_MSG: "SET_MSG",
  SAVE_USER: "SAVE_USER",
  SAVED_USER: "SAVED_USER"
};

export const actions = {
  setMsg: msg => ({ type: types.SET_MSG, msg }),
  saveUser: values => ({ type: types.SAVE_USER, values }),
  savedUser: res => ({ type: types.SAVED_USER, res })
};
