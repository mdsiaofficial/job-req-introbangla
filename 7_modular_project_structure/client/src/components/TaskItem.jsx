import React from 'react';

const TaskItem = ({ task, onDelete }) => (
  <li className='task-item'>
    <p className='task-title'>{task.title}</p>
    <button onClick={onDelete}>Delete</button>
  </li>
);

export default TaskItem;