export const taskService = {
  tasks: [{ id: 1, title: 'Sample Task', completed: false }],

  fetchTasks() {
    return Promise.resolve([...this.tasks]);
  },

  addTask(title) {
    const newTask = { id: Date.now(), title, completed: false };
    this.tasks.push(newTask);
    return Promise.resolve(newTask);
  },

  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    return Promise.resolve(id);
  }
};