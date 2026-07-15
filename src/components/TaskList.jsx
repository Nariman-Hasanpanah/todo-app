import TaskItem from "./TaskItem";

const TaskList = ({
  filteredTasks,
  onToggleTask,
  onToggleStar,
  onDeleteTask,
}) => {
  return (
    <div className="p-6 max-h-96 overflow-y-auto">
      {filteredTasks.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-gray-700 dark:text-white text-lg">
            {filteredTasks.length === 0
              ? "No tasks yet. Add your first task!"
              : "No tasks match your filter."}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleTask={onToggleTask}
              onToggleStar={onToggleStar}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
