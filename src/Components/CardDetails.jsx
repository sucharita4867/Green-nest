import React from "react";
import { FaStar } from "react-icons/fa";

const CardDetails = ({ card }) => {
  //   console.log(card);
  const {
    plantName,
    category,
    rating,
    availableStock,
    careLevel,
    description,
    image,
    providerName,
  } = card;

  return (
    <div className="  rounded-xl shadow-xl bg-white">
      <div className="flex flex-col md:flex-row gap-6 p-4">
        <img
          src={image}
          alt={plantName}
          className="w-full md:w-1/2 h-[400px] object-cover rounded-xl"
        />

        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-[#0D3C00]">{plantName}</h2>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Care Level:</span> {careLevel}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Available Stock:</span>{" "}
            {availableStock} pcs
          </p>

          <p className="text-lg text-gray-700">
            <span className="font-semibold">Provider:</span> {providerName}
          </p>
          <p className="text-gray-800 text-base leading-relaxed">
            {description}
          </p>

          <div className="flex items-center justify-between pt-4">
            <p className="text-2xl font-semibold text-[#6A961F]">
              ${card?.price?.toFixed(2)}
            </p>
            <p className=" text-[#6A961F] gap-2 text-2xl flex items-center font-semibold">
              <FaStar className="text-yellow-400" />
              {rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
