import React from 'react';

const TaskFilter = ({ onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: value || undefined });
  };

  return (
    <div className="mb-4">
      <label>
        Status:
        <select name="status" onChange={handleChange}>
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>
      <label>
        Priority:
        <select name="priority" onChange={handleChange}>
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
    </div>
  );
};

export default TaskFilter;