import React from "react";
import { assets } from "../assets/assets.js";

const OurPolicy = () => {
  return (
    <div className="w-full min-h-50 bg-black text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-8">Our Policies</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img
              src={assets.support_img}
              alt="Customer Support"
              className="mx-auto mb-4 w-20 h-20 object-contain"
            />
            <p className="text-xl font-semibold text-gray-800">
              24hr Customer Support
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img
              src={assets.exchange_icon}
              alt="Exchange"
              className="mx-auto mb-4 w-20 h-20 object-contain"
            />
            <p className="text-xl font-semibold text-gray-800">
              No Stress Exchange
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img
              src={assets.quality_icon}
              alt="Return"
              className="mx-auto mb-4 w-20 h-20 object-contain"
            />
            <p className="text-xl font-semibold text-gray-800">12 Day Return</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
