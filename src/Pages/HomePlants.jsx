import React, { useEffect, useState } from "react";

const HomePlants = () => {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch("/Plants.Json")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="border border-red-600 w-11/12 mx-auto mt-10">
      <div className="my-5 text-center  flex-col ">
        <h2 className=" text-[#0D3C00]  text-4xl font-bold">
          Top Rated Indoor Plants
        </h2>
        <div className="flex justify-center text-lg mt-3 text-[#848483]">
          <p className="border md:w-[60%] ">
            “Discover our highest-rated indoor plants, loved by plant
            enthusiasts. Bring home greenery that purifies air, brightens
            spaces, and boosts mood.”
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 border">
        {plants.map((plant) => (
          <div key={plant.id} className="">
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img src={plant.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
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
