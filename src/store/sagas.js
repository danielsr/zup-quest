import { put, takeEvery, all, call } from "redux-saga/effects";
import { push } from "react-router-redux";
import { types, actions } from "./actions";
import Users from "../providers/api";

export function* changeName({ name }) {
  yield put({ type: types.CHANGED_NAME, name: name });
}

export function* saveUser({ values }) {
  const res = yield call(Users.save, values);
  yield put(actions.savedUser(res.data));
  yield put(actions.setMsg("Usuário cadastrado."));
  yield put(push("/"));
}

export default function* rootSaga() {
  yield all([takeEvery(types.SAVE_USER, saveUser)]);
}
