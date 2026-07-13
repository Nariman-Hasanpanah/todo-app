export const addTask = (tasks, newTask) => {
  return [newTask, ...tasks];
};

export const toggleTask = (tasks, id) => {
  return tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task,
  );
};

export const toggleStar = (tasks, id) => {
  return tasks.map((task) =>
    task.id === id ? { ...task, starred: !task.starred } : task,
  );
};

export const deleteTask = (tasks, id) => {
  return tasks.filter((task) => task.id !== id);
};
