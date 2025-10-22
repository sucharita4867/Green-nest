import React from "react";
import plantCareImg from "../assets/plant-care.jpg";
const PlantsCare = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="my-8 text-center  flex-col ">
        <h2 className=" text-[#0D3C00]  text-4xl font-bold">
          How to Care for Your Plants
        </h2>
        <div className="flex justify-center text-lg mt-4 text-[#848483]">
          <p className="md:w-[60%] ">
            “Learn essential tips on watering, sunlight, and fertilizing to keep
            your plants healthy, thriving, and your home full of greenery.”
          </p>
        </div>
      </div>
      <div className=" flex  gap-8 items-center ">
        <figure>
          <img className="h-[550px] w-[500px]" src={plantCareImg} alt="" />
        </figure>
        <div className="space-y-3 flex-1">
          <div className=" ">
            <p className="text-2xl font-medium">Watering:</p>
            <p className="text-lg font-semibold  ">
              “Water your plants 2–3 times per week or when the top 1–2 inches
              of soil feel dry. Avoid overwatering, as it can damage roots and
              hinder healthy growth.”
            </p>
          </div>
          <div>
            <p className="text-2xl font-medium">Sunlight:</p>
            <p className="text-lg font-semibold  ">
              “Provide 4–6 hours of indirect sunlight daily for your plants.
              Avoid harsh direct sunlight for sensitive plants, ensuring they
              receive enough light to grow healthy and strong.”
            </p>
          </div>
          <div>
            <p className="text-2xl font-medium">Fertilizer:</p>
            <p className="text-lg font-semibold  ">
              “Apply a balanced liquid fertilizer every 4–6 weeks during spring
              and summer to promote healthy growth. Reduce or pause fertilizing
              during winter when plants grow slowly.”
            </p>
          </div>
          <div>
            <p className="text-2xl font-medium">Extra Tips:</p>
            <p className="text-lg font-semibold  ">
              “Wipe leaves regularly to keep them dust-free, mist occasionally
              to maintain humidity, and use organic or safe pesticides if pests
              appear to ensure plants stay healthy.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantsCare;
