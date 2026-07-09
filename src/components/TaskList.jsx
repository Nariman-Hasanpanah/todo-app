const TaskList = ({ tasks, filteredTasks }) => {
  return (
    <div className="p-6 max-h-96 overflow-y-auto">
      {filteredTasks.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-gray-700 text-lg">
            {tasks.length === 0
              ? "No tasks yet. Add your first task!"
              : "No tasks match your filter."}
          </p>
        </div>
      ) : (
        filteredTasks.map((task) => {
          <TaskItem key={task.id} task={task} />;
        })
      )}
    </div>
  );
};

export default TaskList;
