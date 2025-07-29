import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets.js";

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 1 second splash
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-black z-50">
      <img
        src={assets.successkeylogo}
        alt="SuccessKeyAgency Logo"
        className="w-32 h-32 mb-4"
      />
      <p className="text-green-500 text-lg font-semibold">
        <span className="text-white">Created by </span> SuccessKeyAgency LLC
      </p>

      {/* Spinner */}
      <div
        className="mt-6 w-12 h-12 rounded-full border-4 border-solid border-white/10 border-t-green-500 animate-spin"
      ></div>
    </div>
  );
};

export default SplashScreen;