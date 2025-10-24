import React from "react";

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
            <span className="font-semibold">Rating:</span> ⭐ {rating}
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

            <button className="bg-[#6A961F] hover:bg-[#557C1A] text-white px-6 py-2 rounded-lg font-semibold transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
