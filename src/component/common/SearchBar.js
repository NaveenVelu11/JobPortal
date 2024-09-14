import React, { useState } from 'react';

const categories = [
  'Technology',
  'Finance',
  'Healthcare',
  'Education',
  'Marketing'
];

function SearchBar({ searchQuery, setSearchQuery }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryClick = (category) => {
    setSearchQuery(category);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative w-full max-w-md mb-8">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onClick={toggleDropdown}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search jobs..."
          className="w-full p-3 pl-12 border border-gray-300 rounded-lg shadow-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#007BFF] transition duration-300"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.742a6.5 6.5 0 1 0-1.457 1.457l3.707 3.707a1 1 0 0 0 1.414-1.414l-3.707-3.707zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            <ul className="list-none p-0 m-0">
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className="p-3 cursor-pointer hover:bg-gray-100"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
