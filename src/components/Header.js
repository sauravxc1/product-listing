import React from "react";

const Header = ({ onSearch }) => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Product Listing</h1>
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => onSearch(e.target.value)}
          className="p-2 rounded text-black"
        />
      </div>
    </header>
  );
};

export default Header;
