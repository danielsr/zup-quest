import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import reducers from "../store/reducers";
import rootSaga from "../store/sagas";

const sagaMiddleware = createSagaMiddleware();

export const history = createHistory();
const routeMiddleware = routerMiddleware(history);

export const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, routeMiddleware)
);

sagaMiddleware.run(rootSaga);
