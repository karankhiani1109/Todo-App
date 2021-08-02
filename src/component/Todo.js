import React from "react";
import { connect } from "react-redux";
import { toggle_todo } from "../redux/actions";
import Link from "redux-first-router-link";
import { loadDataAction } from "../redux/actions.js";
import cx from "classnames";

const Todo = ({ todo, toggle_todo }) => (
  <div style={{ display: "flex", flexDirection: "row" }}>
    <input
      type="checkbox"
      onChange={() => toggle_todo(todo.id)}
      defaultChecked={todo.completed}
      style={{ marginRight: "8px" }}
    />
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      <Link to={loadDataAction(todo.id)}>{todo.title}</Link>
    </span>
  </div>
);

export default connect(null, { toggle_todo })(Todo);
