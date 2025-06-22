import React, { useState } from 'react';

function TaskFilter({ onFilterChange })
{
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [search, setSearch] = useState('');

  const handleChange = () => {
    onFilterChange({
      status: status,
      priority: priority,
      search: search,
    });
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <select
        value={status}
        onChange={(e) => {
          setStatus(e.target.value);
          handleChange();
        }}
        className="input"
      >
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <select
        value={priority}
        onChange={(e) => {
          setPriority(e.target.value);
          handleChange();
        }}
        className="input"
      >
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleChange();
        }}
        className="input"
      />
    </div>
  );
};

export default TaskFilter;