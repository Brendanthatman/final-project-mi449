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
    <div className="my-5">
      {/* Green Tab including title + date */}
       <h3 className='blockTitle w-50 p-2 '>Todo Lists</h3>


      {/* White Body */}
      <div className="blockContent p-5 w-2xs pb-6">
        {/* Row with arrows and date */}
        <div className="flex items-center justify-center mb-4">
            <button
            onClick={handlePreviousDate}
            style={{ backgroundColor: 'var(--brand-secondary)' }}
            className="text-white rounded-sm w-6 h-6 flex items-center justify-center mx-2 text-sm"
            >
            &#8592;
            </button>

            <div className="bg-[var(--brand-secondary)] text-white rounded-sm px-4 py-1 text-xs font-semibold w-full">
            {formattedDate}
            </div>

            <button
            onClick={handleNextDate}
            style={{ backgroundColor: 'var(--brand-secondary)' }}
            className="text-white rounded-sm w-6 h-6 flex items-center justify-center mx-2 text-sm"
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
              <span className={`${task.completed ? 'line-through text-gray-400' : 'text-[var(--text-black)]'}`}>
                {task.text}
              </span>
            </div>
          ))}
        </div>

        {/* Add New Task */}
        <div className="flex mt-4 items-center">
          <input
            type="text"
            placeholder="Add a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow p-1 border border-gray-300 rounded-md text-[var(--text-black)] placeholder-[var(--text-color)] mr-2"
          />
          <button
            onClick={handleAddTask}
            style={{ backgroundColor: 'var(--brand-secondary)' }}
            className="text-white w-7 h-7 rounded-r-md flex items-center justify-center text-lg"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
