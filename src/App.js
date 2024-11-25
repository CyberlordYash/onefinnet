import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NewArrivals from "./components/NewArrivals";
import img from "./images/bike.jpg";

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <section className="h-[100vh] relative flex text-white mt-16">
        <img
          src={img}
          alt="Bike"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <HeroSection />
        <div className="w-1/2 bg-red-500 flex justify-center items-center"></div>
      </section>
      <NewArrivals />
    </div>
  );
};

export default App;
