import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="text-center my-10">
      <p className="text-3xl md:text-5xl font-extrabold tracking-widest uppercase text-white">
        {text1} <span className="text-yellow-400 animate-typing">{text2}</span>
      </p>
      <p className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></p>
    </div>
  );
};

export default Title;
