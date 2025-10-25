import React, { use } from "react";
import Banner from "./Banner";
import HomePlants from "./HomePlants";
import PlantsCare from "./PlantsCare";
import ExpertsSections from "./ExpertsSections";
import EcoDecorIdeas from "../Components/EcoDecorIdeas";
import PlantOfWeek from "./PlantOfWeek";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "./Loading";

const Home = () => {
  const { loading } = use(AuthContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="bg-[#F7FAF2]">
      <Banner></Banner>
      <section>
        <div className="my-8 text-center  flex-col ">
          <h2 className=" text-[#0D3C00]  text-4xl font-bold">
            Top Rated Indoor Plants
          </h2>
          <div className="flex justify-center text-lg mt-4 text-[#848483]">
            <p className="md:w-[60%] px-2">
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
      <EcoDecorIdeas></EcoDecorIdeas>
      <PlantOfWeek></PlantOfWeek>
    </div>
  );
};

export default Home;
