import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { loadDataAction, edit_todo_title } from "../redux/actions.js";
import {
  getTodosByFilter,
  getactiveTodoID,
  getUserDetailsFromTodoId,
  getTodoDetailById,
} from "../redux/selectors";
import TodoDetail from "./TodoDetail";

const TodoList = (props) => {
  const { todosListchecked, todosListunchecked, todoid, todoDetail, user } =
    props;
  const [title, setTitle] = useState();
  useEffect(() => {
    props.loadTodos(todoid);
  }, []);
  let initialtitle = "";
  if (todoid && todoDetail) {
    initialtitle = todoDetail.title;
  }
  useEffect(() => {
    setTitle(initialtitle);
  }, [initialtitle]);
  if (todoid && todoDetail && user) {
    const handleEdit = (id) => {
      props.edittodo(title, id);
    };
    const setTitleState = (value) => {
      setTitle(value);
    };
    return (
      <TodoDetail
        value={title}
        key={`todo-${todoDetail.id}`}
        todo={todoDetail}
        user={user}
        handleEdit={handleEdit}
        setTitleState={setTitleState}
      />
    );
  } else if (todosListunchecked && todosListchecked) {
    return (
      <div>
        <h2>Tasks not completed</h2>
        <ul className="todo-list">
          {todosListunchecked && todosListunchecked.length
            ? todosListunchecked.map((todo, index) => {
                return <Todo key={`todo-${todo.id}`} todo={todo} />;
              })
            : "No todos"}
        </ul>
        <h2>Tasks completed</h2>
        <ul className="todo-list">
          {todosListchecked && todosListchecked.length
            ? todosListchecked.map((todo, index) => {
                return <Todo key={`todo-${todo.id}`} todo={todo} />;
              })
            : "No todos"}
        </ul>
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  const todosList = getTodosByFilter(state, "checked");
  const todosListunchecked = getTodosByFilter(state, "unchecked");
  const todoId = getactiveTodoID(state);
  let userDetails = null;
  let todo = null;
  if (todoId) {
    userDetails = getUserDetailsFromTodoId(state, todoId);
    todo = getTodoDetailById(state, todoId);
    userDetails = userDetails[0];
  }

  return {
    todosListchecked: todosList,
    todosListunchecked: todosListunchecked,
    todoid: todoId,
    user: userDetails,
    todoDetail: todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTodos: (todoid) => dispatch(loadDataAction(todoid)),
    edittodo: (title, id) => dispatch(edit_todo_title(title, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
