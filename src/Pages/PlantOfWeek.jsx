import React from "react";

const PlantOfTheWeek = () => {
  return (
    <section className="bg-[#F7FAF2] py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-4xl font-bold text-[#0D3C00] mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Plant of the Week
        </h2>

        <p className="text-gray-600 mb-10">
          Discover the beauty of indoor greenery! This week's featured plant is
          perfect for adding freshness and calmness to your space.
        </p>

        <div
          className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://i.ibb.co/67zJvyHG/Snake-Plant.jpg"
            alt="Snake Plant"
            className="w-60 h-60 object-cover rounded-xl shadow-md"
          />

          <div className="text-left space-y-3">
            <h3 className="text-2xl font-semibold text-[#3C5E1C]">
              Snake Plant (Sansevieria)
            </h3>
            <p className="text-gray-700">
              Known for its air-purifying abilities, the Snake Plant thrives on
              neglect! It's a perfect choice for beginners who forget to water
              their plants often.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>🪴 Easy to care for</li>
              <li>☀️ Prefers indirect sunlight</li>
              <li>💧 Water once every 2–3 weeks</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantOfTheWeek;
