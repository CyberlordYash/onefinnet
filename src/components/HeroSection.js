import React from "react";
import point from "../images/point.png";


const HeroSection = () => {
  return (
    <div className="w-full md:w-1/2 bg-black flex flex-col justify-center p-6 md:p-16">
      <h2 className="text-xl md:text-3xl font-bold font-[Poppins] text-white tracking-wider">
        Newly Launched
      </h2>

      <h1 className="text-white text-3xl md:text-6xl font-extrabold mt-6 md:mt-10 font-[Lora] leading-tight">
        Kryo X26 MTB
      </h1>

      <p className="text-white mt-8 md:mt-12 font-semibold text-lg md:text-2xl font-[Poppins]">
        Specifications:
      </p>

      <ul className="text-white mt-4 space-y-3">
        <li className="font-semibold text-base md:text-lg flex items-center">
          <img
            src={point}
            className="w-6 h-6 md:w-8 md:h-8 mr-2 max-w-full h-auto"
            alt="Point"
          />
          Lightweight 18" Frame
        </li>
        <li className="font-semibold text-base md:text-lg flex items-center">
          <img
            src={point}
            className="w-6 h-6 md:w-8 md:h-8 mr-2 max-w-full h-auto"
            alt="Point"
          />
          Steel Suspension Fork
        </li>
        <li className="font-semibold text-base md:text-lg flex items-center">
          <img
            src={point}
            className="w-6 h-6 md:w-8 md:h-8 mr-2 max-w-full h-auto"
            alt="Point"
          />
          Steel Hardtail Frame
        </li>
      </ul>

      <button className="mt-6 bg-red-500 text-white py-3 px-6 rounded-md text-sm md:text-base hover:bg-red-600 transition duration-300 w-[50%] md:w-[30%] font-[Poppins] uppercase tracking-wider">
        Buy Now
      </button>
    </div>
  );
};

export default HeroSection;
