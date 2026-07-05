import Header from "./components/Header";
import StatsBar from "./components/StatsBar";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const stats = {
    total: tasks.length,
    active: tasks.filter((t) => !t.completed).length,
    completed: tasks.filter((t) => t.completed).length,
    starred: tasks.filter((t) => t.starred).length,
  };

  return (
    <>
      <div
        id="task-manager-page"
        className="min-h-screen bg-linear-to-br from-cyan-200 via-white to-emerald-200 p-4 md:p-8"
      >
        <div id="task-manager" className="max-w-5xl mx-auto">
          <Header />
          <StatsBar stats={stats} />
        </div>
      </div>
    </>
  );
};

export default App;
