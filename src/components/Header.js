import React from "react";
import { Search } from "lucide-react"; // npm install lucide-react
import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";

const Header = ({ title, search, setSearch }) => {
  return (
   <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 shadow-md sticky top-0 z-10 flex items-center justify-between">

      {/* Left Title */}
      <h1 className="text-lg md:text-xl font-bold text-gray-800">{title}</h1>

      {/* Center Sliding Slogan - Only on lg+ */}
      <div className="hidden lg:flex flex-1 justify-center items-center px-[100px]">
        <div className="relative w-full max-w-lg h-10 overflow-hidden rounded-full bg-gray-50 shadow-md flex items-center">
          <div className="absolute whitespace-nowrap animate-marquee text-gradient font-semibold text-sm md:text-base flex">
            <span className="mr-16">
              Smart Team Chat – AI That Talks Smarter, So You Work Smarter.
            </span>
            <span>
              Smart Team Chat – AI That Talks Smarter, So You Work Smarter.
            </span>
          </div>
        </div>
      </div>

      {/* Right Side: Search + Avatar */}
      <div className="flex items-center gap-3">
        {/* Search Bar (visible on all screens, smaller on mobile) */}
        <div className="relative w-28 sm:w-36 md:w-48 lg:w-56">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-full text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

       <Link to="/authcard">
  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shadow-md cursor-pointer">
    R
  </div>
</Link>
      </div>
    </div>
  );
};

export default Header;
