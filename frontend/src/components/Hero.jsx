import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { assets } from "../assets/assets.js"; 

// 3D Box Component
const GlowingBox = () => {
  const logoTexture = useTexture(assets.logo);
  return (
    <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial attach="material" map={logoTexture} />
    </mesh>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[810px] overflow-hidden text-white bg-black">
      {/* Desktop/Tablet Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden sm:block absolute top-0 left-0 w-full h-full object-cover opacity-80"
      >
        <source src="https://videos.pexels.com/video-files/32744337/13959796_2560_1440_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mobile Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="sm:hidden absolute top-0 left-0 w-full h-full object-cover opacity-80"
      >
        <source src="https://videos.pexels.com/video-files/27108758/12074592_1080_1918_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 3D Canvas Overlay + "Play" Sign */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Canvas className="w-full h-full">
          <ambientLight intensity={1} />
          <directionalLight position={[2, 2, 2]} intensity={10} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
          <GlowingBox />
        </Canvas>

        {/* "Play with the box" Label */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute lg:hidden  top-6 left-6 bg-white/10 text-white backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium shadow-md"
        >
          🌀 Play with the box 
        </motion.p>
      </div>


      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.2,
          delay: 2,
        }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 text-white text-2xl"
      >
        <FaChevronDown />
      </motion.div>
    </section>
  );
};

export default Hero;