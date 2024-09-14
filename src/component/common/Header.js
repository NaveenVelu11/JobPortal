import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBell, FaSignInAlt, FaUserPlus, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    "Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Marketing",
  ];

  const handleCategoryClick = (category) => {
    navigate(`/jobs/${category.toLowerCase()}`);
    setSearchQuery("");
    setSearchFocused(false);
    setMenuOpen(false); // Close the menu on category click
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#003B6F] text-white shadow-md z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight hover:text-[#F5EDED] transition-colors duration-300"
        >
          Job Portal
        </Link>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className={`hidden md:flex items-center space-x-6 text-sm md:text-base ${menuOpen ? 'block' : 'hidden'}`}>
          <Link
            to="/"
            className="hover:text-[#F5EDED] transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/jobs"
            className="hover:text-[#F5EDED] transition-colors duration-300"
          >
            Jobs
          </Link>
          <Link
            to="/post-job"
            className="hover:text-[#F5EDED] transition-colors duration-300"
          >
            Post a Job
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#F5EDED] transition-colors duration-300"
          >
            Contact
          </Link>
          <Link
            to="/connections"
            className="hover:text-[#F5EDED] transition-colors duration-300"
          >
            Connections
          </Link>
        </div>

        {/* Search Box */}
        <div className="relative hidden md:flex items-center w-1/3">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setTimeout(() => setSearchFocused(false), 100)}
            className="bg-white text-black py-2 px-4 rounded-lg focus:outline-none w-full text-sm placeholder-gray-500"
          />
          {searchFocused && (
            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-full max-w-md z-50">
              {categories.map((category) => (
                <div
                  key={category}
                  className="p-4 cursor-pointer hover:bg-gray-100 text-black"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <FaBell className="text-xl cursor-pointer hover:text-[#F5EDED] transition-colors duration-300" />
          <Link
            to="/login"
            className="flex items-center text-sm md:text-base hover:text-[#F5EDED] transition-colors duration-300"
          >
            <FaSignInAlt className="text-xl mr-1" />
            Login
          </Link>
          <Link
            to="/signup"
            className="flex items-center text-sm md:text-base hover:text-[#F5EDED] transition-colors duration-300"
          >
            <FaUserPlus className="text-xl mr-1" />
            Signup
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-[#003B6F] text-white py-4 px-6`}>
        <div className="flex flex-col space-y-4">
          <Link
            to="/"
            className="hover:text-[#F5EDED] transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/jobs"
            className="hover:text-[#F5EDED] transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Jobs
          </Link>
          <Link
            to="/post-job"
            className="hover:text-[#F5EDED] transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Post a Job
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#F5EDED] transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/connections"
            className="hover:text-[#F5EDED] transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Connections
          </Link>
        </div>
        {/* Search Box for Mobile */}
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setTimeout(() => setSearchFocused(false), 100)}
            className="bg-white text-black py-2 px-4 rounded-lg focus:outline-none w-full text-sm placeholder-gray-500"
          />
          {searchFocused && (
            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-full max-w-md z-50">
              {categories.map((category) => (
                <div
                  key={category}
                  className="p-4 cursor-pointer hover:bg-gray-100 text-black"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
