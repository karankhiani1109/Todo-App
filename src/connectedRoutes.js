import { connectRoutes } from "redux-first-router";
import { LOAD_DATA } from "./redux/actionTypes";

const routesMap = {
  [LOAD_DATA]: "/todos/:todoid?",
};

export default connectRoutes(routesMap);
