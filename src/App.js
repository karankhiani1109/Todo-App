import "./App.css";
import React from "react";
import TodoList from "./component/TodoList.js";
import Loading from "./component/Loading";
import "./styles.css";

function App() {
  return (
    <div className="row">
      <div className="col">
        <Loading />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
