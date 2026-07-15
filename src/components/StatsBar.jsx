const StatsBar = ({ stats }) => {
  return (
    <>
      <div
        id="stats-container"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
      >
        <div className="bg-gray-500/20 rounded-2xl p-4 border border-gray-700 hover:bg-gray-700/30 transition-all duration-500">
          <div className="text-black dark:text-white text-md mb-1">Total Tasks</div>
          <div className="text-3xl font-bold text-white">{stats.total}</div>
        </div>
        <div className="bg-gray-500/20 rounded-2xl p-4 border border-gray-700 hover:bg-gray-700/30 transition-all duration-500">
          <div className="text-black dark:text-white text-md mb-1">Active</div>
          <div className="text-3xl font-bold text-blue-400">{stats.active}</div>
        </div>
        <div className="bg-gray-500/20 rounded-2xl p-4 border border-gray-700 hover:bg-gray-700/30 transition-all duration-500">
          <div className="text-black dark:text-white text-md mb-1">Completed</div>
          <div className="text-3xl font-bold text-green-400">
            {stats.completed}
          </div>
        </div>
        <div className="bg-gray-500/20 rounded-2xl p-4 border border-gray-700 hover:bg-gray-700/30 transition-all duration-500">
          <div className="text-black dark:text-white text-md mb-1">Starred</div>
          <div className="text-3xl font-bold text-yellow-400">
            {stats.starred}
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsBar;
