import React from "react";
import Banner from "./Banner";
import HomePlants from "./HomePlants";
import PlantsCare from "./PlantsCare";
import ExpertsSections from "./ExpertsSections";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section>
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
        <HomePlants></HomePlants>
      </section>
      <PlantsCare></PlantsCare>
      <ExpertsSections></ExpertsSections>
    </div>
  );
};

export default Home;
