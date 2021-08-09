import { LOAD_DATA_SUCCESS } from "../actionTypes";
const initialState = {
  allIds: [],
  byIds: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      const users = action.users.reduce((result, item) => {
        result[item.id] = item;
        return result;
      }, {});
      const ids = action.users.map((x) => x.id);
      return {
        allIds: ids,
        byIds: { ...users },
      };

    default:
      return state;
  }
}
