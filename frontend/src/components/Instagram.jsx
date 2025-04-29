import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InstagramSlider = () => {
  const imageUrls = [
    "https://images.unsplash.com/photo-1589902860314-e910697dea18?q=80&w=1974",
    "https://images.unsplash.com/flagged/photo-1556293467-7acc070563ee?q=80&w=1974",
    "https://images.unsplash.com/photo-1600328759671-85927887458d?q=80&w=1974",
    "https://images.unsplash.com/photo-1627910087352-f4e3e28d9f5f?q=80&w=1974",
    "https://images.unsplash.com/photo-1593359684352-cb3fd6c0ff1f?q=80&w=1974",
    "https://images.unsplash.com/photo-1559697242-a465f2578a95?q=80&w=1974",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative py-20 px-4 sm:px-8 bg-black text-white overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-pink-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-600 rounded-full filter blur-2xl opacity-40 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-12"
      >
        <h2 className="text-5xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
          Instagram Feed
        </h2>
        <p className="text-lg text-gray-300 mt-4">
          Check out our latest heat on the gram.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative z-10 w-full max-w-6xl mx-auto"
      >
        <Slider {...settings}>
          {imageUrls.map((url, index) => (
            <div key={index} className="px-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-purple-600/40 transition duration-300"
              >
                <img
                  src={url}
                  alt={`Post ${index + 1}`}
                  className="w-full h-[350px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl flex items-end p-4">
                  <div className="text-white text-xl font-bold">❤️ 100K+</div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default InstagramSlider;
