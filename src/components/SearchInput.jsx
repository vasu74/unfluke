import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <label className="relative block w-full max-w-xs mx-auto rounded-md cursor-pointer">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2 cursor-pointer">
        <FaSearch />
      </span>
      <input
        className="block w-full pl-10 pr-3 py-2 border border-gray-400 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm"
        placeholder="Search"
        type="text"
      />
    </label>
  );
};

export default SearchInput;
