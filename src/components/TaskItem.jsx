import { getPriorityColor } from "../utils/getPriorityColor";
import { categories } from "../data/categories";
import { Trash2, Check, Star } from "lucide-react";

const TaskItem = ({ task, onToggleTask, onToggleStar, onDeleteTask }) => {
  return (
    <>
      <div
        className={`group bg-white/10 dark:bg-gray-700 backdrop-blur-sm rounded-xl p-4 border-l-5 ${getPriorityColor(task.priority)} border border-gray-400 hover:bg-gray-400/20 transition-all duration-300 hover:scale-[1.02] ${
          task.completed && "opacity-60"
        }`}
      >
        <div className="flex items-start gap-3">
          <button
            onClick={() => onToggleTask(task.id)}
            className={`flex shrink-0 w-6 h-6 rounded-full border-2 items-center justify-center transition-all ${
              task.completed
                ? "bg-green-500 border-green-500"
                : "border-gray-500 dark:border-gray-300 hover:border-gray-500/50"
            }`}
          >
            {task.completed && <Check size={16} className="text-gray-800 dark:text-white" />}
          </button>

          <div className="flex-1 min-w-0">
            <p
              className={`text-gray-700 dark:text-white text-lg ${task.completed && "line-through"}`}
            >
              {task.text}
            </p>
            <div className="flex flex-wrap gap-2 mt-2 items-center">
              <span
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${categories[task.category].color} text-white`}
              >
                {categories[task.category].icon}{" "}
                {categories[task.category].name}
              </span>
              <span className="text-xs text-gray-800 dark:text-white">
                {new Date(task.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onToggleStar(task.id)}
              className={`p-2 rounded-lg transition-all ${
                task.starred
                  ? "text-yellow-400 hover:text-yellow-500"
                  : "text-gray-500 dark:text-gray-300 hover:text-gray-500/60"
              }`}
            >
              <Star size={18} fill={task.starred ? "currentColor" : "none"} />
            </button>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="p-2 text-gray-500 dark:text-gray-300 hover:text-red-400 rounded-lg hover:bg-red-500/20 transition-all"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
