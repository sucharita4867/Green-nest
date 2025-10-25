import React from "react";

const EcoDecorIdeas = () => {
  return (
    <section className="my-16 px-4 md:px-10">
      <h2 className="text-[#0D3C00]  text-4xl font-bold text-center mb-2">
        Eco Decor Ideas
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Give your home a natural touch! Here are some creative ideas to style
        your space beautifully with indoor plants.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-lg border-[#6A961F] hover:border rounded-2xl transition duration-300">
          <figure>
            <img
              src="https://i.ibb.co/s90KM6QM/Green-Wall2.jpg"
              alt="Plant Wall"
              className="rounded-t-2xl h-60 w-full object-cover"
            />
          </figure>
          <div className="p-5 text-center">
            <h3 className="text-xl font-semibold text-[#6A961F] mb-2">
              Green Wall
            </h3>
            <p className="text-gray-500">
              Create a refreshing wall of hanging plants to purify the air and
              bring life to your home.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-lg border-[#6A961F] hover:border rounded-2xl  transition duration-300">
          <figure>
            <img
              src="https://i.ibb.co/NnVc20v6/Desk-Plants2.jpg"
              alt="Desk Plants"
              className="rounded-t-2xl h-60 w-full object-cover"
            />
          </figure>
          <div className="p-5 text-center">
            <h3 className="text-xl font-semibold text-[#6A961F] mb-2">
              Desk Plants
            </h3>
            <p className="text-gray-500">
              Keep small succulents or cacti on your work desk for a calm,
              productive atmosphere.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-lg rounded-2xl border-[#6A961F] hover:border  transition duration-300">
          <figure>
            <img
              src="https://i.ibb.co/FLkskY0n/Cozy-Corner.jpg"
              alt="Cozy Corner"
              className="rounded-t-2xl h-60 w-full object-cover"
            />
          </figure>
          <div className="p-5 text-center">
            <h3 className="text-xl font-semibold text-[#6A961F] mb-2">
              Cozy Corner
            </h3>
            <p className="text-gray-500">
              Decorate an empty corner with big leafy plants, soft lights, and
              natural textures for a peaceful vibe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoDecorIdeas;
