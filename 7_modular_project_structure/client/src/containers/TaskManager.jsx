
import { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
import { taskService } from '../services/TaskServices';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    taskService.fetchTasks().then(setTasks);
  }, []);

  const addTask = (title) => {
    taskService.addTask(title).then(newTask => {
      setTasks([...tasks, newTask]);
    });
  };

  const deleteTask = (id) => {
    taskService.deleteTask(id).then(() => {
      setTasks(tasks.filter(task => task.id !== id));
    });
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
};

export default TaskManager;
