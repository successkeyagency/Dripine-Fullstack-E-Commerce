import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { assets } from "../assets/assets.js";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 flex items-center justify-center px-4">
      <div className=" -top-1/4 bg-white w-full max-w-md rounded-full shadow-lg flex items-center px-4 py-2 gap-2 relative animate-fade-in-down">
        <img className="w-5 opacity-60" src={assets.search_icon} alt="search" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
          type="text"
          placeholder="Search for products..."
        />
        <img
          onClick={() => setShowSearch(false)}
          className="w-4 cursor-pointer hover:scale-110 transition-transform"
          src={assets.cross_icon}
          alt="close"
        />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
