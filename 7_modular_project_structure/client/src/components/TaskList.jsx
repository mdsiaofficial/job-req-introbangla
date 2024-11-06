import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDeleteTask }) => (
  <ul className='task-list'>
    {tasks.map(task => (
      <TaskItem key={task.id} task={task} onDelete={() => onDeleteTask(task.id)} />
    ))}
  </ul>
);

export default TaskList;