import { combineReducers } from "redux";
import todos from "./todos";
import IsLoading from "./IsLoading";
import users from "./users";
import activeTodoId from "./activeTodoId";
import connectedRoutes from "../../connectedRoutes";

const { reducer: location } = connectedRoutes;

export default combineReducers({
  todos,
  users,
  IsLoading,
  location,
  activeTodoId,
});
