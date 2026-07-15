import { useState } from "react";
import { Plus } from "lucide-react";
import { categories } from "../data/categories";

const AddTask = ({ onAddTask }) => {
  const [taskInput, setTaskInput] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("personal");

  const handleAdd = () => {
    if (taskInput.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
      priority,
      category,
      createdAt: new Date().toISOString(),
      starred: false,
    };

    onAddTask(newTask);
    setTaskInput("");
  };

  return (
    <>
      <div
        id="add-task-container"
        className="p-6 bg-linear-to-rbg-linear-to-br from-cyan-200 via-white to-emerald-200 border-b border-gray-400/60"
      >
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAdd()}
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-3 bg-gray-200/50 dark:bg-gray-700 backdrop-blur-md border border-gray-500 rounded-xl text-black dark:text-white placeholder-gray-500 dark:placeholder-white focus:outline-none"
          />
          <button
            onClick={handleAdd}
            className="px-6 py-3 bg-linear-to-r from-cyan-200 via-white to-emerald-200 dark:bg-linear-to-br dark:from-indigo-900 dark:via-gray-800 dark:to-purple-900 text-gray-700 dark:text-white border border-gray-400 rounded-2xl font-semibold hover:from-cyan-400 hover:via-white hover:to-emerald-400 dark:hover:from-indigo-600 dark:hover:via-gray-950 dark:hover:to-purple-600 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <Plus size={20} />
            Add Task
          </button>
        </div>
        <div className="flex flex-wrap gap-5">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 border border-gray-400 rounded-xl text-gray-800 dark:text-white focus:outline-none cursor-pointer"
          >
            {Object.entries(categories).map(([key, cat]) => (
              <option key={key} value={key} className="bg-gray-400/50 dark:bg-gray-700">
                {cat.icon} {cat.name}
              </option>
            ))}
          </select>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 border border-gray-400 rounded-xl text-gray-800 dark:text-white focus:outline-none cursor-pointer"
          >
            <option value="low" className="bg-gray-400/50 dark:bg-gray-700">
              🟢 Low Priority
            </option>
            <option value="medium" className="bg-gray-400/50 dark:bg-gray-700">
              🟡 Medium Priority
            </option>
            <option value="high" className="bg-gray-400/50 dark:bg-gray-700">
              🔴 High Priority
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default AddTask;
