import { Search } from "lucide-react";

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <>
      <div className="flex-1 relative">
        <Search
          className="absolute left-3 top-3 transform -translate-y-1/ text-gray-500 z-1"
          size={20}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search tasks..."
          className="w-full pl-10 pr-4 py-2 backdrop-blur-md border border-gray-500 rounded-xl bg-gray-200/50 text-gray-700 placeholder-gray-500 focus:outline-none"
        />
      </div>
    </>
  );
};

export default SearchBar;
