import { put, takeEvery, all, call } from "redux-saga/effects";
import { push } from "react-router-redux";
import { types, actions } from "./actions";
import { Users, Banks, Refunds } from "../providers/api";

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

export function* fetchBanks() {
  const res = yield call(Banks.getAll);
  yield put(actions.fetchedBanks(res.data));
}

export function* saveRefund({ values }) {
  const res = yield call(Refunds.save, values);
  yield put(actions.setMsg("A Solicitação de Reembolso foi salva."));
  yield put(actions.savedRefund(res.data));
}

export function* fetchRefund({ id }) {
  const res = yield call(Refunds.get, id);
  yield put(actions.fetchedRefund(res.data));
}

export default function* rootSaga() {
  yield all([
    takeEvery(types.SAVE_USER, saveUser),
    takeEvery(types.LOGIN, login),
    takeEvery(types.FETCH_BANKS, fetchBanks),
    takeEvery(types.SAVE_REFUND, saveRefund),
    takeEvery(types.FETCH_REFUND, fetchRefund)
  ]);
}
