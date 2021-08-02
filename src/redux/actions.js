import {
  LOAD_DATA,
  LOAD_TODOS_SUCCESS,
  LOAD_USERS_SUCCESS,
  TOGGLE,
  TOGGLE_SUCCESS,
  EDIT_TODO,
  EDIT_TODO_SUCCESS,
} from "./actionTypes";

export const loadDataAction = (todoid) => {
  return {
    type: LOAD_DATA,
    payload: { todoid },
  };
};
export const loadTodosSucessAction = (todos) => {
  return {
    type: LOAD_TODOS_SUCCESS,
    todos,
  };
};
export const loadUsersSucessAction = (users) => {
  return {
    type: LOAD_USERS_SUCCESS,
    users,
  };
};
export const toggle_todo = (id) => ({
  type: TOGGLE,
  id,
});
export const toggle_todo_success = (id) => ({
  type: TOGGLE_SUCCESS,
  payload: { id },
});

export const edit_todo_title = (title, id) => ({
  type: EDIT_TODO,
  title,
  id,
});
export const edit_todo_title_success = (data, id) => ({
  type: EDIT_TODO_SUCCESS,
  payload: { data, id },
});
