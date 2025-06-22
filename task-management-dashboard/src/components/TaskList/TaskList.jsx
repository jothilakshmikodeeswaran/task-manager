import TaskItem from './TaskItem';

function TaskList({ tasks, onStatusChange, onDelete, onEdit })
{
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} 
        task={task} 
        onStatusChange={onStatusChange} 
        onDelete={onDelete} 
        onEdit={onEdit} />
      ))}
    </div>
  );
};

export default TaskList;
