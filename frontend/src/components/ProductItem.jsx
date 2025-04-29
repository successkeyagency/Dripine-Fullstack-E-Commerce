import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";

const ProductItem = ({ id, image, name, price, stock = 10 }) => {
  const { currency } = useContext(ShopContext);

  const stockLabel =
    stock === 0 ? "Sold Out" : stock <= 3 ? "Low Stock 🔥" : "New";

  return (
    <Link
      to={`/product/${id}`}
      className="group relative block rounded-xl overflow-hidden bg-gradient-to-tr from-[#111] via-[#1f1f1f] to-black p-[2px] transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
    >
      <div className="bg-black rounded-xl overflow-hidden">
        <div className="relative w-full h-64 overflow-hidden">
          <img
            src={image[0]}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
          />

          <span
            className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded uppercase ${
              stock === 0
                ? "bg-red-600 text-white animate-pulse"
                : stock <= 3
                ? "bg-yellow-400 text-black animate-bounce"
                : "bg-green-500 text-black"
            }`}
          >
            {stockLabel}
          </span>
        </div>

        <div className="p-4 text-center text-white">
          <h3 className="text-lg font-extrabold tracking-wider uppercase line-clamp-1 group-hover:text-yellow-300 transition-all duration-300">
            {name}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            {currency}
            {price}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 rounded-xl border border-yellow-400 opacity-0 group-hover:opacity-40 animate-glow" />
    </Link>
  );
};

export default ProductItem;
