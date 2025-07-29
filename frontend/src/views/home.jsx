import React from "react";
import Hero from "../components/Hero";
import JustDropped from "../components/JustDropped";
import AddFor707 from "../components/AddFor707";
import Shoes from "../components/Shoe";
import OurPolicy from "../components/OurPolicy";
import InstagramSlider from "../components/Instagram";
import SplashScreen from "../components/SplashScreen";

const Home = () => {
  return (
    <>
      <SplashScreen />
      <div>
        <Hero />
        <AddFor707 />
        <JustDropped />
        <Shoes />
        <InstagramSlider />
        <OurPolicy />
      </div>
    </>
  );
};

export default Home;