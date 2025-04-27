import React, { useState, useEffect } from 'react';
import './TodoList.css';

function TodoList() {
  // Real calendar date handling
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Format date nicely for UI (ex: Apr 26)
  const formattedDate = selectedDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  // Storage key based on real date (ex: tasks-2025-04-26)
  const storageKey = `tasks-${selectedDate.toISOString().split('T')[0]}`;

  // Load tasks when selectedDate changes
  useEffect(() => {
    const storedTasks = localStorage.getItem(storageKey);
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      setTasks([]);
    }
  }, [selectedDate]);

  // Save tasks whenever tasks or selectedDate change
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(tasks));
  }, [tasks, selectedDate]);

  // Functions to move to previous and next dates
  const handlePreviousDate = () => {
    const prevDate = new Date(selectedDate);
    prevDate.setDate(prevDate.getDate() - 1);
    setSelectedDate(prevDate);
  };

  const handleNextDate = () => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setSelectedDate(nextDate);
  };

  // Add a new task
  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  // Toggle task complete/incomplete
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
         <h3 className='blockTitle w-50 p-2 '>Todo Lists</h3>
      </div>

      {/* White Body */}
      <div className="bg-[var(--component-bg)] p-4 rounded-b-lg">
        {/* Row with arrows and date */}
        <div className="flex items-center justify-center mb-4">
            <button
            onClick={handlePreviousDate}
            className="bg-[var(--brand-secondary)] text-white rounded-full w-6 h-6 flex items-center justify-center mx-2 text-sm"
            >
            &#8592;
            </button>

            <div className="bg-[var(--brand-secondary)] text-white rounded-full px-4 py-1 text-xs font-semibold">
            {formattedDate}
            </div>

            <button
            onClick={handleNextDate}
            className="bg-[var(--brand-secondary)] text-white rounded-full w-6 h-6 flex items-center justify-center mx-2 text-sm"
            >
            &#8594;
            </button>
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
              <span className={`${task.completed ? 'line-through text-gray-400' : 'text-[var(--text-color)]'}`}>
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
            className="flex-grow p-2 border border-gray-300 rounded-l-md text-[var(--text-color)] placeholder-[var(--text-color)]"
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
