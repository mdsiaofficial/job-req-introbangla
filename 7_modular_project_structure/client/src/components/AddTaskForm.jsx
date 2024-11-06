import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onAddTask(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className='task-form'>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
        className='task-form-input'
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;