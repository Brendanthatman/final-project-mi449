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
    <div className="blockContent p-4 w-[300px] mr-5">
      <div className="blockTitle p-2 text-center">
        Todo List
      </div>

      <div className="bg-white p-3 rounded-b-lg">
        <div className="flex justify-center mb-4">
          <div className="bg-[var(--brand-secondary)] text-white rounded-full px-4 py-1 text-sm">
            Mar 31
          </div>
        </div>

        <div className="todo-tasks">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(index)}
                className="mr-2"
              />
              <span className={task.completed ? 'line-through text-gray-400' : ''}>
                {task.text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex mt-3">
          <input
            type="text"
            placeholder="Add a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-l-md"
          />
          <button
            onClick={handleAddTask}
            className="bg-[var(--brand-secondary)] text-white px-4 rounded-r-md"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
