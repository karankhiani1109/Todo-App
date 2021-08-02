import { LOAD_USERS_SUCCESS } from "../actionTypes";
const initialState = {
  allIds: [],
  byIds: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      const users = action.users;
      const ids = users.map((x) => x.id);
      return {
        allIds: ids,
        byIds: { ...users },
      };

    default:
      return state;
  }
}
