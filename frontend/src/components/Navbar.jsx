import React, { useContext, useState } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { ShopContext } from "../context/shopContext";

const Navbar = () => {
  const [visible, setvisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="w-full flex items-center justify-between px-6 py-5 bg-black text-white shadow-lg border-b border-neutral-800 relative z-50">
      <ul className="hidden md:flex md:gap-4 lg:gap-10 gap-10 text-sm tracking-widest font-semibold uppercase flex-1 justify-center">
        {[
          ["Home", "/"],
          ["collections", "/collections"],
          ["About", "/about"],
          ["Contact", "/contact"],
          ["Admin", "https://dripine-admin.vercel.app"],
        ].map(([label, link], i) => {
          const isAdmin = label === "Admin";
          return isAdmin ? (
            <a
              href={link}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 font-bold border-2 border-yellow-400 rounded-lg px-2 py-1 transition-colors duration-300 ease-in-out"
            >
              {label}
            </a>
          ) : (
            <a href={link} key={i} className="relative group">
              <span className="text-white group-hover:text-yellow-400 transition">
                {label}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </a>
          );
        })}
      </ul>

      <div className="flex flex-1 md:flex-none md:justify-start">
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="w-16 object-contain" />
        </Link>
      </div>

      <div className="flex items-center gap-5 justify-end flex-1">
        <FaSearch
          onClick={() => setShowSearch(true)}
          className="text-white cursor-pointer opacity-70 hover:opacity-100 hover:scale-110 transition"
          size={20}
        />

        <div className="relative" id="user-dropdown">
          <FaUser
            onClick={() => {
              if (token) {
                setDropdownOpen((prev) => !prev);
              } else {
                navigate("/login");
              }
            }}
            className="text-white cursor-pointer"
            size={20}
          />
          {token && dropdownOpen && (
            <div className="absolute top-10 right-0 bg-white text-black shadow-xl rounded-xl p-4 min-w-[160px] transition-all duration-300 z-50">
              <p className="py-1 hover:text-yellow-500 cursor-pointer">
                My Profile
              </p>
              <p
                onClick={() => {
                  navigate("/orders");
                  setDropdownOpen(false);
                }}
                className="py-1 hover:text-yellow-500 cursor-pointer"
              >
                Orders
              </p>
              <p
                onClick={() => {
                  logout();
                  setDropdownOpen(false);
                }}
                className="py-1 hover:text-red-500 cursor-pointer"
              >
                Logout
              </p>
            </div>
          )}
        </div>

        <NavLink to="/cart" className="relative">
          <FaShoppingCart className="text-white cursor-pointer" size={20} />
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {getCartCount()}
          </span>
        </NavLink>

        <img
          onClick={() => setvisible(true)}
          src={assets.menu_icon}
          className="w-6 cursor-pointer block md:hidden"
          alt="Menu"
        />
      </div>

      <div
        className={`fixed top-0 right-0 h-full bg-black text-white z-50 shadow-xl transition-all duration-500 ${
          visible ? "w-full md:w-[320px]" : "w-0 overflow-hidden"
        }`}
      >
        <div className="p-6 flex flex-col gap-4">
          <div
            onClick={() => setvisible(false)}
            className="flex items-center gap-3 cursor-pointer text-gray-400 hover:text-white"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="Back"
            />
            <span>Close</span>
          </div>
          {[
            ["Home", "/"],
            ["collections", "/collections"],
            ["About", "/about"],
            ["Contact", "/contact"],
            ["Admin", "https://dripine-admin.vercel.app"],
          ].map(([label, link], i) => {
            const isAdmin = label === "Admin";

            if (isAdmin) {
              return (
                <a
                  key={i}
                  href={link}
                  onClick={() => setvisible(false)}
                  className="block text-center text-orange-500 font-bold border-2 border-yellow-400 rounded-lg transition-colors duration-300 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              );
            }

            return link.startsWith("http") ? (
              <a
                key={i}
                href={link}
                onClick={() => setvisible(false)}
                className="py-2 text-lg hover:text-yellow-400 transition block"
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ) : (
              <NavLink
                key={i}
                onClick={() => setvisible(false)}
                className="py-2 text-lg hover:text-yellow-400 transition block"
                to={link}
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
