import React, { useContext } from "react";
import Slider from "react-slick";
import { ShopContext } from "../context/shopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets } from "../assets/assets";

const ExclusiveShoesSlider = () => {
  const { products } = useContext(ShopContext);
  const exclusiveProducts = products.filter(
    (item) => item.category === "Shoes"
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section>
      <div className="w-full h-[50vh] relative overflow-hidden">
        {/* Desktop Background */}
<img
  src="https://images.unsplash.com/photo-1507553532144-b9df5e38c8d1?q=80&w=1513&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt="Shoe Background Desktop"
  className="hidden sm:block absolute top-0 left-0 w-full h-full object-cover opacity-100 z-0"
/>

{/* Mobile Background */}
<img
  src="https://images.unsplash.com/photo-1599069446175-e8ee7e59fe79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt="Shoe Background Mobile"
  className="block sm:hidden absolute top-0 left-0 w-full h-full object-cover opacity-80 z-0"
/>

        <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-4xl font-bold">
          Step Into The- <span className="text-green-600"> Hype</span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-12 relative z-10 px-6 text-center"
      >
        <Title text1="EXCLUSIVE" text2="SHOES" />
        <p className="text-gray-400 mt-2 text-lg">Hype. Heat. Limited drops.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="w-full max-w-7xl mx-auto px-6 relative z-10"
      >
        <Slider {...settings}>
          {exclusiveProducts.map((item, index) => (
            <div key={index} className="px-4 py-4">
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl hover:shadow-pink-600/40 transition-all duration-300"
                >
                  <ProductItem
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    stock={item.stock}
                    category={item.category}
                  />
                </motion.div>
              </Tilt>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default ExclusiveShoesSlider;
