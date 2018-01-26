import { put, takeEvery, all, call } from "redux-saga/effects";
import { push } from "react-router-redux";
import { types, actions } from "./actions";
import Users from "../providers/api";

export function* saveUser({ values }) {
  const res = yield call(Users.save, values);
  yield put(actions.savedUser(res.data));
  yield put(actions.setMsg("Usuário cadastrado."));
  yield put(push("/"));
}

export function* login({ values }) {
  const res = yield call(Users.login, values);
  if (res.data.length > 0) {
    yield call(Users.setLocal, res.data[0]);
    yield put(actions.loggedIn(res.data[0]));
    yield put(push("/refund"));
  } else {
    yield put(actions.setMsg("Usuário ou senha inválido(s)."));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(types.SAVE_USER, saveUser),
    takeEvery(types.LOGIN, login)
  ]);
}
