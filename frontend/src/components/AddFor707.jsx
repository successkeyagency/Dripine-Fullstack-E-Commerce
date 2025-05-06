import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box, Float } from "@react-three/drei";
import { Link } from "react-router-dom";

const AddFor707 = () => {
  return (
    <section className="relative w-full py-20 bg-black overflow-hidden">

      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 bg-neutral-900 text-white px-8 py-10 rounded-2xl shadow-2xl"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            705 Collection
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            The future of fashion is here. Limited edition. Unmatched style.
          </motion.p>
          <Link to="collections">
            <motion.button
              className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-400 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover 705
            </motion.button>
          </Link>
          
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 bg-white px-6 py-6 rounded-2xl shadow-2xl"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1618354691714-7d92150909db?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="707 Collection"
            className="w-full h-auto object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AddFor707;
