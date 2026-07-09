import { filters } from "../data/filters";

const FilterBar = ({ filter, onFilterChange }) => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
      {filters.map((item) => (
        <button
          key={item.id}
          onClick={() => onFilterChange(item.id)}
          className={`px-2 py-2 rounded-xl border border-gray-400 font-medium transition-all duration-500 cursor-pointer ${
            filter === item.id
              ? "bg-gray-700 text-white"
              : "bg-gray-300/50 text-gray-700 hover:bg-gray-700 hover:text-white"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
