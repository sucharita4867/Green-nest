import React from "react";
import Banner from "./Banner";
import HomePlants from "./HomePlants";
import PlantsCare from "./PlantsCare";
import ExpertsSections from "./ExpertsSections";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomePlants></HomePlants>
      <PlantsCare></PlantsCare>
      <ExpertsSections></ExpertsSections>
    </div>
  );
};

export default Home;
