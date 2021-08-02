import { LOAD_DATA } from "../actionTypes";

const activeTodoId = (state = null, { type, payload }) => {
  switch (type) {
    case LOAD_DATA:
      return payload.todoid || null;

    default:
      return state;
  }
};

export default activeTodoId;
