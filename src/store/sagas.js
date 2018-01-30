import { put, takeEvery, all, call, select } from "redux-saga/effects";
import { push } from "react-router-redux";
import { types, actions } from "./actions";
import { Users, Banks, Refunds } from "../providers/api";

export function* saveUser({ values }) {
  const res = yield call(Users.save, values);
  yield call(Users.setLocal, res.data);
  yield put(actions.savedUser(res.data));
  yield put(actions.setMsg("Usuário cadastrado."));
  yield put(push("/refunds"));
}

export function* login({ values }) {
  const res = yield call(Users.login, values);
  if (res.data.length > 0) {
    yield call(Users.setLocal, res.data[0]);
    yield put(actions.loggedIn(res.data[0]));
    yield put(push("/refunds"));
  } else {
    yield put(actions.setMsg("Usuário ou senha inválido(s)."));
  }
}

export function* logout() {
  yield call(Users.remLocal);
  yield put(actions.loggedOut());
  yield put(push("/login"));
}

export function* fetchBanks() {
  const res = yield call(Banks.getAll);
  yield put(actions.fetchedBanks(res.data));
}

export function* saveRefund({ values }) {
  const res = yield call(Refunds.save, values);
  yield put(actions.setMsg("A Solicitação de Reembolso foi salva."));
  yield put(actions.savedRefund(res.data));
  yield put(push("/refunds"));
}

export function* fetchRefund({ id }) {
  const res = yield call(Refunds.get, id);
  yield put(actions.fetchedRefund(res.data));
}

export function* fetchUserRefunds() {
  const state = yield select();
  const res = yield call(Refunds.getByUser, state.user.id);
  yield put(actions.fetchedRefunds(res.data));
}

export default function* rootSaga() {
  yield all([
    takeEvery(types.SAVE_USER, saveUser),
    takeEvery(types.LOGIN, login),
    takeEvery(types.FETCH_BANKS, fetchBanks),
    takeEvery(types.SAVE_REFUND, saveRefund),
    takeEvery(types.FETCH_REFUND, fetchRefund),
    takeEvery(types.LOGOUT, logout),
    takeEvery(types.FETCH_USER_REFUNDS, fetchUserRefunds)
  ]);
}
