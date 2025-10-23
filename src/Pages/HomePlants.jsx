import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const HomePlants = () => {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch("/Plants.Json")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className=" w-11/12 mx-auto mt-8">
      <div className="my-8 text-center  flex-col ">
        <h2 className=" text-[#0D3C00]  text-4xl font-bold">
          Top Rated Indoor Plants
        </h2>
        <div className="flex justify-center text-lg mt-4 text-[#848483]">
          <p className="md:w-[60%] ">
            “Discover our highest-rated indoor plants, loved by plant
            enthusiasts. Bring home greenery that purifies air, brightens
            spaces, and boosts mood.”
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-3 grid-cols-1 ">
        {plants.map((plant) => (
          <div key={plant.plantName} className="">
            <div className="card w-auto shadow-xl border-[#0D3C00] hover:border">
              <figure className="">
                <img
                  className="w-full h-[300px]"
                  src={plant.image}
                  alt="Shoes"
                />
              </figure>
              <div className="space-y-4 p-2">
                <h2 className=" text-2xl font-medium text-center text-[#0D3C00] hover:text-[#6A961F]">
                  {plant.plantName}
                </h2>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-[#0D3C00]">
                    Price : ${plant.price}
                  </p>
                  <p className="text-lg font-semibold flex items-center text-[#0D3C00] ">
                    Rating :
                    <div className="text-yellow-500">
                      <FaStar />
                    </div>
                    {plant.rating}
                  </p>
                </div>
                <div className=" ">
                  <button className="btn text-white bg-[#0D3C00] hover:bg-[#6A961F] w-full">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePlants;
