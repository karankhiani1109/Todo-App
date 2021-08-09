import {
  EDIT_TODO_SUCCESS,
  LOAD_DATA_SUCCESS,
  TOGGLE_SUCCESS,
} from "../actionTypes";
const initialState = {
  allIds: [],
  byIds: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      const todos = action.todos.reduce((result, item) => {
        result[item.id] = item;
        return result;
      }, {});
      const ids = action.todos.map((x) => x.id);
      return {
        allIds: ids,
        byIds: { ...todos },
      };

    case TOGGLE_SUCCESS: {
      const { id } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds],
        byIds: {
          ...state.byIds,
          [id - 1]: {
            ...state.byIds[id - 1],
            completed: !state.byIds[id - 1].completed,
          },
        },
      };
    }
    case EDIT_TODO_SUCCESS:
      const { data, id } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds],
        byIds: {
          ...state.byIds,
          [id]: {
            ...data,
          },
        },
      };

    default:
      return state;
  }
}
