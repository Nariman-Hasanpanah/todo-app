import { categories } from "../data/categories";

const CategoriesFilter = ({ filter, onFilterChange }) => {
  return (
    <div className="flex gap-2 mt-3 overflow-x-auto">
      {Object.entries(categories).map(([key, cat]) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`px-3 py-1 border border-gray-500 rounded-full text-sm font-medium transition-all duration-500 cursor-pointer ${
            filter === key
              ? `${cat.color} text-white`
              : `bg-white/10 text-gray-700 hover:bg-gray-400/50`
          }`}
        >
          {cat.icon} {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategoriesFilter;
