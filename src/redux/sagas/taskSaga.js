import { put, takeEvery, all, call } from "redux-saga/effects";
import { EDIT_TODO, LOAD_DATA, TOGGLE } from "../actionTypes";
import {
  loadTodosSucessAction,
  toggle_todo_success,
  loadUsersSucessAction,
  edit_todo_title_success,
  loadDataSuccessAction,
} from "../actions";
import { getTodos, getUsers, editTodos } from "../apis/index.js";

// export function* loadTodos() {
//   const res = yield call(getTodos);
//   yield put(loadTodosSucessAction(res.data));
// }

// export function* loadUsers() {
//   const res = yield call(getUsers);
//   yield put(loadUsersSucessAction(res.data));
// }

export function* loadData() {
  const [todos, users] = yield all([call(getTodos), call(getUsers)]);
  yield put(loadDataSuccessAction(todos.data, users.data));
}

export function* toggleTask({ id }) {
  yield put(toggle_todo_success(id));
}

export function* editTodo({ title, id }) {
  const rest = yield call(editTodos, title, id);
  yield put(edit_todo_title_success(rest.data, id));
}

export function* watchLoadTodos() {
  yield takeEvery(LOAD_DATA, loadData);
  // yield takeEvery(LOAD_DATA, loadTodos);
  // yield takeEvery(LOAD_DATA, loadUsers);
}

export function* watchToggle() {
  yield takeEvery(TOGGLE, toggleTask);
}
export function* watchEditTodo() {
  yield takeEvery(EDIT_TODO, editTodo);
}
export function* taskSaga() {
  yield all([watchLoadTodos(), watchToggle(), watchEditTodo()]);
}
export default taskSaga;
