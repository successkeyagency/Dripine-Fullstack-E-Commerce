import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { assets } from "../assets/assets.js";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 w-full">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-8 lg:mb-0">
          <img
            src={assets.successkeylogo}
            alt="SuccessKeyAgency Logo"
            className="w-20 h-20 object-contain"
          />
          <span className="font-semibold text-green-500 text-xl">
            SuccessKeyAgency LLC
          </span>
        </div>

        <div className="flex space-x-6 mb-8 lg:mb-0">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition-colors"
          >
            <FaFacebookF />
          </a>
        </div>

        <div className="text-center lg:text-right mt-8 lg:mt-0">
          <p className="text-xs mt-2">
            Made with <span className="text-green-500">❤️</span> by
            <span className="font-semibold text-green-500 ml-1">
              SuccessKeyAgency LLC
            </span>
          </p>
          <p className="text-sm">
            &copy; 2025 SuccessKeyAgency LLC. All Rights Reserved | Created By{" "}
            <span className="text-orange-500">William Ngumo.</span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
