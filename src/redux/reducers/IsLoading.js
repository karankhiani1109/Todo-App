import {
  TOGGLE,
  TOGGLE_SUCCESS,
  EDIT_TODO,
  EDIT_TODO_SUCCESS,
  LOAD_DATA,
  LOAD_USERS_SUCCESS,
} from "../actionTypes";

const initialState = false;
const IsLoading = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
    case TOGGLE:
    case EDIT_TODO:
      return true;

    case LOAD_USERS_SUCCESS:
    case TOGGLE_SUCCESS:
    case EDIT_TODO_SUCCESS:
      return false;

    default:
      return state;
  }
};
export default IsLoading;
