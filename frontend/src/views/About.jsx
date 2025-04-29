import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="bg-black min-h-screen text-white px-6 py-16 lg:px-20">
      <div className="flex justify-center mb-10">
        <img
          src={assets.logo}
          alt="Dripine Logo"
          className="h-20 drop-shadow-xl"
        />
      </div>

      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-green-500 tracking-wide mb-4">
          About Dripine
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Streetwear meets slick tech. Built to flex, built to sell.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8 text-gray-300 text-lg leading-relaxed">
        <p>
          <span className="text-white font-semibold">Dripine</span> is your
          next-gen streetwear e-commerce platform, crafted for trendsetters who
          don’t just wear fashion — they *live* it. With smooth animations,
          modern product cards, secure payments, and mobile-first design,
          Dripine gives your online store the kind of energy that sells.
        </p>

        <p>
          Developed by{" "}
          <span className="text-white font-semibold">SuccessKeyAgency</span>, a
          creative dev agency based in St. Louis, this project is a proud part
          of our official{" "}
          <span className="text-white font-semibold">SuccessKey Showcase</span>{" "}
          — a collection of powerful full-stack builds that prove what we’re
          capable of when we bring brands and bold ideas together.
        </p>

        <p>
          Dripine was built with cutting-edge tech including React, Node.js,
          MongoDB, Stripe & Razorpay integrations, Tailwind CSS, and dynamic
          admin features. Whether you're launching your first drop or scaling
          up, this demo proves we don’t just build websites — we create
          platforms that move with culture.
        </p>
      </div>

      <div className="mt-16 bg-green-600/10 p-10 rounded-3xl border border-green-500 text-center shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Launch Your Brand?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6 text-lg">
          Schedule a 1-on-1 consultation with SuccessKeyAgency and let’s build
          something legendary together.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-green-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-green-400 transition-all duration-300"
        >
          Schedule a Consultation
        </Link>
      </div>
    </div>
  );
};

export default About;
