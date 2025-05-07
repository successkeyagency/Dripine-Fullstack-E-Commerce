import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { assets } from "../assets/assets.js";

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
    <section className="relative w-full h-[70vh] overflow-hidden text-white bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
      >
        <source
          src="https://videos.pexels.com/video-files/10380568/10380568-uhd_2732_1440_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <Canvas className="absolute top-0 left-0 w-full h-full z-0">
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={10} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        <GlowingBox />
      </Canvas>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.h1
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-4xl md:text-6xl font-bold tracking-widest mb-4"
        >
          Welcome to the Drop
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 max-w-xl mb-6"
        >
          Limited Edition. Unlimited Flex.
        </motion.p>

        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-400 transition duration-300"
        >
          Shop Now
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
