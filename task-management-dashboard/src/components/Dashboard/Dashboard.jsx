import { useState, useEffect } from 'react';
import TaskList from '../TaskList/TaskList';
import TaskForm from '../TaskForm/TaskForm';
import TaskFilter from '../TaskFilter/TaskFilter';
import { filterTasks } from '../../utils/taskUtils';


function Dashboard(){
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({});
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => 
    {
    const saved = localStorage.getItem('tasks');
    if (saved) setTasks(JSON.parse(saved));
   }, []);

  useEffect(() => 
  {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSaveTask = (task) =>  
    {
    setTasks((prev) => 
    {
      const exists = prev.find((t) => t.id === task.id);
      if (exists) {
        return prev.map((t) => (t.id === task.id ? task : t));
      } else {
        return [...prev, task];
      }
    });
    setEditingTask(null);
  };

  const handleDelete = (id) =>
  {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleStatusChange = (id, newStatus) => 
  {
    setTasks((prev) => prev.map((task) => task.id === id ?
     { 
      ...task, 
      status: newStatus } : task));
  };

  const filteredTasks = filterTasks(tasks, filters);

   return (
    <div 
    className="max-w-3xl mx-auto p-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 
      className="text-3xl font-bold text-center mb-6 text-gray-800">Task Dashboard</h1>
      <TaskForm 
      onSaveTask={handleSaveTask} 
      editingTask={editingTask} />
      <TaskFilter 
      onFilterChange={setFilters} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
        onEdit={setEditingTask}
      />
    </div>
  );
};

export default Dashboard;