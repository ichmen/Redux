import React from "react";

import TaskList from "./TaskList";

function TodoList() {
  return (
    <>
      <h1 className="title">todo list</h1>
      <main className="todo-list">
        <TaskList />
      </main>
    </>
  );
}

export default TodoList;
