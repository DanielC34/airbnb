"use client";

import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="w-full md:w-auto">
      {/* Desktop Search Bar */}
      <div className="hidden md:flex items-center justify-between border rounded-full py-2 hover:shadow-md transition cursor-pointer">
        {/* Location */}
        <div className="flex-1 px-6 border-r hover:border-none hover:bg-gray-100 rounded-l-full transition py-2">
          <p className="font-semibold text-sm">Location</p>
          <p className="text-sm text-gray-400">Any location</p>
        </div>

        {/* Check in */}
        <div className="flex-1 px-6 border-r hover:border-none hidden lg:block hover:bg-gray-100 transition py-2 rounded-md">
          <p className="font-semibold text-sm">Check in</p>
          <p className="text-sm text-gray-400">Add dates</p>
        </div>

        {/* Check out */}
        <div className="flex-1 px-6 border-r hover:border-none hidden lg:block hover:bg-gray-100 transition py-2 rounded-md">
          <p className="font-semibold text-sm">Check out</p>
          <p className="text-sm text-gray-400">Add dates</p>
        </div>

        {/* Guests */}
        <div className="flex-1 px-6 hover:border-none hidden sm:block hover:bg-gray-100 rounded-r-full transition py-2">
          <p className="font-semibold text-sm">Guests</p>
          <p className="text-sm text-gray-400">Add guests</p>
        </div>

        {/* Search Button */}
        <button className="bg-rose-500 p-2 rounded-full text-white mx-6">
          <Search size={18} />
        </button>
      </div>

      {/* Mobile Search Bar - Unchanged */}
      <button className="md:hidden w-full flex items-center border rounded-full p-2 shadow-sm hover:shadow-md transition">
        <div className="flex items-center flex-grow px-4 gap-3">
          <Search size={18} />
          <div className="text-left">
            <p className="font-semibold text-sm">Any location</p>
            <p className="text-xs text-gray-400">Any week • Add guests</p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default SearchBar;