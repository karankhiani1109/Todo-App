export const getTodoList = (state) =>
  state && state.todos ? state.todos.allIds : [];

export const getTodoById = (state, id) =>
  state && state.todos && state.todos.byIds
    ? { ...state.todos.byIds[id - 1], id }
    : {};

export const getTodos = (state) =>
  getTodoList(state).map((id) => getTodoById(state, id));

export const getTodosByFilter = (state, filter = "unchecked") => {
  const allTodos = getTodos(state);
  switch (filter) {
    case "checked":
      return allTodos.filter((todo) => todo.completed);
    case "unchecked":
      return allTodos.filter((todo) => !todo.completed);
    default:
      return allTodos;
  }
};

export const getUserList = (state) =>
  state && state.users ? state.users.allIds : [];

export const getUserById = (state, id) =>
  state && state.users && state.users.byIds
    ? { ...state.users.byIds[id], id }
    : {};

export const getUsers = (state) =>
  getUserList(state).map((id) => getUserById(state, id - 1));

export const getTodoDetailById = (state, id) =>
  state && state.todos && state.todos.byIds
    ? { ...state.todos.byIds[id - 1] }
    : {};

export const getUserDetailsFromTodoId = (state, todoid) => {
  const todo = getTodoDetailById(state, todoid);
  const allUsers = getUsers(state);
  return allUsers.filter((user) => user.id === todo.userId);
};

export const getactiveTodoID = (state) => state.activeTodoId;
