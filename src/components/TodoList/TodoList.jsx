import React, { useState } from 'react';
import './TodoList.css'; 

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, idx) => 
      idx === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <div className="todo-header">
        <h2>Todo List</h2>
        <div className="todo-date">Mar 31</div>
      </div>

      <div className="todo-tasks">
        {tasks.map((task, index) => (
          <div key={index} className="todo-task">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(index)}
            />
            <span className={task.completed ? 'completed' : ''}>
              {task.text}
            </span>
          </div>
        ))}
      </div>

      <div className="todo-add">
        <input
          type="text"
          placeholder="Add a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>+</button>
      </div>
    </div>
  );
}

export default TodoList;
