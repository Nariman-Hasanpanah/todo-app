import Header from "./components/Header";
import StatsBar from "./components/StatsBar";
import { useState } from "react";
import AddTask from "./components/AddTask";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import CategoriesBar from "./components/CategoriesFilter";

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

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
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
            <div id="search-container" className="p-6">
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
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
