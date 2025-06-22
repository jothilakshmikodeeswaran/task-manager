import { useState, useEffect } from 'react';

function TaskForm({ onSaveTask, editingTask })
{
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
      setDueDate(editingTask.dueDate);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !dueDate) return ;
    const newTask = {
      id: editingTask ? editingTask.id : Date.now().toString(),
      title,
      description,
      priority,
      dueDate,
      status: editingTask ? editingTask.status : 'pending',
    };
    onSaveTask(newTask);
    setTitle('');
    setDescription('');
    setPriority('low');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} 
    className="space-y-4 bg-green dark:bg-green-900 p-4 rounded mb-6">
      <input
        value={title}
        name = "title"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
      />
      <textarea
        value={description}
        name = "description"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
      />
      <select
        value={priority}
        name="priority"
        onChange={(e) => setPriority(e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input
        type="date"
        name="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;