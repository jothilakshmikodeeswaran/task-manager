

function TaskItem({ task, onStatusChange, onDelete, onEdit }) {
  return (
    <div className="border p-4 rounded mb-2 bg-white dark:bg-gray-800">
      <h3 
      className="font-semibold text-lg">
        {task.title}
        </h3>
      <p 
      className="text-sm text-gray-600 dark:text-gray-300">
        {task.description}
        </p>
      <div 
      className="flex justify-between items-center mt-2 text-sm">
        <span>Status:</span>
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
          className="bg-gray-100 dark:bg-gray-700 rounded px-2"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <div className="flex gap-2">
          <button onClick={() => onEdit(task)} 
          className="text-blue-500 hover:underline">
            Edit
            </button>
          <button onClick={() => onDelete(task.id)} 
          className="text-red-500 hover:underline">Delete</button>
        </div>
      </div>
      <div 
      className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        Priority: {task.priority} | Due: {task.dueDate}</div>
    </div>
  );
};

export default TaskItem;