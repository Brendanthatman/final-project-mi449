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
    <div className="blockContent p-0 w-[300px] mr-5">
      {/* Green Tab including title + date */}
      <div className="blockTitle flex flex-col items-center p-2">
        <div className="font-semibold">Todo List</div>
        <div className="flex items-center justify-center mt-2">
          <button className="bg-[var(--brand-secondary)] text-white rounded-full w-6 h-6 flex items-center justify-center mx-2 text-sm">
            &#8592;
          </button>
          <div className="bg-[var(--brand-secondary)] text-white rounded-full px-4 py-1 text-xs font-semibold">
            Mar 31
          </div>
          <button className="bg-[var(--brand-secondary)] text-white rounded-full w-6 h-6 flex items-center justify-center mx-2 text-sm">
            &#8594;
          </button>
        </div>
      </div>

      {/* White Body */}
      <div className="bg-[var(--component-bg)] p-4 rounded-b-lg">
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
            className="flex-grow p-2 border border-gray-300 rounded-l-md text-black"
            // (added text-black at the end)
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
