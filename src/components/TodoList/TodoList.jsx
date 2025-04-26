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
      {/* Top Green Header */}
      <div className="blockTitle p-2 text-center">
        Todo List
      </div>

      {/* Main White Body */}
      <div className="bg-white p-3 rounded-b-lg">
        
        {/* Date with Arrows */}
        <div className="flex justify-center items-center my-4">
          <button className="bg-[var(--brand-secondary)] text-white rounded-full w-6 h-6 flex items-center justify-center mx-2 text-lg">
            &#8592;
          </button>
          <div className="bg-[var(--brand-secondary)] text-white rounded-full px-6 py-1 text-sm font-semibold">
            Mar 31
          </div>
          <button className="bg-[var(--brand-secondary)] text-white rounded-full w-6 h-6 flex items-center justify-center mx-2 text-lg">
            &#8594;
          </button>
        </div>

        {/* Task List */}
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

        {/* Add New Task */}
        <div className="flex mt-4">
          <input
            type="text"
            placeholder="Add a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-l-md"
          />
          <button
            onClick={handleAddTask}
            className="bg-[var(--brand-secondary)] text-white px-4 py-2 rounded-r-md text-lg"
          >
            +
          </button>
        </div>

      </div>
    </div>
  );
}

export default TodoList;
