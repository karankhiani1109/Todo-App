import React from "react";
import { connect } from "react-redux";

const TodoDetail = (params) => (
  <div>
    <label>Edit Title: </label>
    <input
      onChange={(e) => params.setTitleState(e.target.value)}
      value={params.value}
    />

    <button onClick={() => params.handleEdit(params.todo.id)}>
      Edit title
    </button>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Todo Details</h1>
      <span>Todo Completed: {params.todo.completed ? 'yes' : 'no'}</span>
      <span>Todo Title: {params.todo.title}</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>User Details </h1>
      <span>User name: {params.user.name}</span>
      <span>User username: {params.user.username}</span>
      <span>User email: {params.user.email}</span>
      <span>User website: {params.user.website}</span>
      <span>
        User address: {params.user.address.street}, {params.user.address.city}
      </span>
    </div>
  </div>
);

export default connect(null)(TodoDetail);
