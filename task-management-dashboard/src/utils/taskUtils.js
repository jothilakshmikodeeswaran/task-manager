

export function filterTasks(tasks, filters)
{
  return tasks.filter((task) =>
  {
    const statusMatch = !filters.status || task.status === filters.status;
    const priorityMatch = !filters.priority || task.priority === filters.priority;
    const searchMatch = !filters.search || task.title.toLowerCase().includes(filters.search.toLowerCase());
    return statusMatch && priorityMatch && searchMatch;
  });
};