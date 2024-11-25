import React from "react";

const BikeCard = ({ bike }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <img
        src={bike.image}
        alt={`Bike ${bike.name}`}
        className="w-full h-40 object-cover mb-4"
      />
      <h3 className="font-bold text-lg transform transition duration-300 ease-in-out hover:text-yellow-500">
        Kryo X26 MTB – {bike.name}
      </h3>
      <p className="text-gray-500 text-sm">{bike.category}</p>
      <div className="mt-2 flex text-gray-400 space-x-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="mt-2 text-lg font-semibold">{bike.price}</p>
    </div>
  );
};

export default BikeCard;
