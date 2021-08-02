import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import taskSaga from "./sagas/taskSaga";
import connectedRoutes from "../connectedRoutes";

const saga = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const { middleware, enhancer } = connectedRoutes;
const middlewares = applyMiddleware(middleware, saga);
const store = createStore(rootReducer, composeEnhancers(enhancer, middlewares));
saga.run(taskSaga);

export default store;
