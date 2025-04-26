import React, { useState } from 'react';
import './TodoList.css'; 

function TodoList() {
  return (
    <div className="todo-container">
      <div className="todo-header">
        <h2>Todo List</h2>
      </div>
      <div className="todo-body">
        {/* Tasks will go here */}
      </div>
    </div>
  );
}

export default TodoList;
