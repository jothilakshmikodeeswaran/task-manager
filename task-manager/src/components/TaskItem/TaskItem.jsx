import React from 'react';

const TaskItem = ({ task, onStatusChange, onDelete }) => {
  const statusOptions = ['pending', 'in-progress', 'completed'];

  return (
    <div className={`p-4 border rounded shadow mb-3 bg-${task.priority}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>
        Status:
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
        >
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </p>
      <p>Priority: {task.priority}</p>
      <p>Due: {task.dueDate}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};export default TaskItem;