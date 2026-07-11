import Header from "./components/Header";
import StatsBar from "./components/StatsBar";
import { useState } from "react";
import AddTask from "./components/AddTask";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import CategoriesBar from "./components/CategoriesFilter";
import TaskList from "./components/TaskList";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const stats = {
    total: tasks.length,
    active: tasks.filter((t) => !t.completed).length,
    completed: tasks.filter((t) => t.completed).length,
    starred: tasks.filter((t) => t.starred).length,
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.text
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = (() => {
      switch (filter) {
        case "all":
          return true;
        case "active":
          return !task.completed;
        case "completed":
          return task.completed;
        case "starred":
          return task.starred;
        default:
          return task.category === filter;
      }
    })();
    return matchesFilter && matchesSearch;
  });

  const handleAddTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleToggleStar = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, starred: !task.starred } : task,
      ),
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <div
        id="task-manager-page"
        className="min-h-screen bg-linear-to-br from-cyan-200 via-white to-emerald-200 p-4 md:p-8"
      >
        <div id="task-manager" className="max-w-5xl mx-auto">
          <header>
            <Header />
            <StatsBar stats={stats} />
          </header>
          <main className="bg-gray-500/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
            <AddTask onAddTask={handleAddTask} />
            <div
              id="search-container"
              className="p-6 border-b border-gray-400/60"
            >
              <div
                id="search-filter"
                className="flex flex-col md:flex-row gap-3"
              >
                <SearchBar
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                />
                <FilterBar filter={filter} onFilterChange={handleFilter} />
              </div>
              <CategoriesBar filter={filter} onFilterChange={handleFilter} />
            </div>
            <TaskList
              filteredTasks={filteredTasks}
              onToggleTask={handleToggleTask}
              onToggleStar={handleToggleStar}
              onDeleteTask={handleDeleteTask}
            />
          </main>
          <footer>
            <div className="text-center mt-8">
              <p className="text-gray-800 text-sm mb-6">
                Press Enter to quickly add tasks • Click star to mark important
              </p>
              <p className="text-sm text-gray-800 md:text-base">
                Created by Nariman Hasanpanah 2026 ©
              </p>
            </div>
            <div className="flex justify-center gap-12 text-gray-700 text-4xl md:text-5xl mt-4">
              <a href="https://www.linkedin.com/in/nariman-hasan-panah-7b1897308">
                <h1 className="hover:opacity-60 cursor-pointer">
                  <AiFillLinkedin />
                </h1>
              </a>
              <a href="https://github.com/Nariman-Hasanpanah">
                <h1 className="hover:opacity-60 cursor-pointer">
                  <AiFillGithub />
                </h1>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default App;
