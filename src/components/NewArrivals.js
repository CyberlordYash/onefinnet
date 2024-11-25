import React from "react";
import BikeCard from "./BikeCard";
import bikeData from "../data/BikeData";

const NewArrivals = () => {
  return (
    <section className="py-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">New Arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-20">
        {bikeData.map((bike, idx) => (
          <BikeCard key={idx} bike={bike} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
