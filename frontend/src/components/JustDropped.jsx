import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const JustDropped = () => {
  const { products } = useContext(ShopContext);
  const [justDropped, setJustDropped] = useState([]);

  useEffect(() => {
    setJustDropped(products.slice(0, 10));
  }, [products]);

  return (
    <div className="bg-gradient-to-b from-black via-neutral-900 to-black text-white py-20 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400">
          New Arrival
        </p>
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="text-white">Just </span>
          <span className="text-green-400">Dropped</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          Limited pieces. Elevated style. Don’t blink — they might be gone.
        </p>
      </div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {justDropped.map((item, index) => (
          <motion.div
            key={index}
            className="transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
              stock={item.stock}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-20 text-center">

        <Link to="/collections">
          <motion.button
            className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 uppercase text-sm tracking-wide"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Collection
          </motion.button>
        </Link>
        
      </div>
    </div>
  );
};

export default JustDropped;
