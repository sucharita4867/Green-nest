import React from "react";

const ExpertsSections = () => {
  return (
    <div className="mb-10">
      <div className="my-8 text-center  flex-col ">
        <h2 className=" text-[#0D3C00]  text-4xl font-bold">
          Meet Our Green Experts
        </h2>
        <div className="flex justify-center text-lg mt-4 text-[#848483]">
          <p className="md:w-[60%] px-2">
            “Our experienced plant experts help you care for your greens. From
            watering to soil care, they share tips for healthy and thriving
            plants.”
          </p>
        </div>
      </div>
      <div className="w-11/12 mx-auto  md:flex gap-5 space-y-8 md:space-y-0">
        {/* 1 */}
        <div className=" rounded-lg shadow p-4 bg-white text-center space-y-2 hover:shadow-lg  border-[#6A961F] duration-150 transition hover:border">
          <img
            src="https://i.ibb.co/WvL3Htpn/Experts1.jpg"
            alt="Aarav Mehta"
            className="w-40 h-40 object-cover rounded-full mx-auto border-3 border-[#6A961F]"
          />
          <h3 className="text-xl font-bold text-[#0D3C00]">Aarav Mehta</h3>
          <p className="text-sm italic text-[#6A961F]">
            Indoor Plant Specialist
          </p>
          <p className="text-base text-gray-600">
            Aarav has over 8 years of experience in indoor plant design and
            maintenance. He helps people create calming green spaces in their
            homes.
          </p>
        </div>
        {/* 2 */}
        <div className=" rounded-lg shadow p-4 bg-white text-center space-y-2 hover:shadow-lg duration-150 transition border-[#6A961F] hover:border">
          <img
            src="https://i.ibb.co/Kj1CbRYH/Experts2.webp"
            alt="Aarav Mehta"
            className="w-40 h-40 object-cover rounded-full mx-auto border-3 border-[#6A961F]"
          />
          <h3 className="text-xl font-bold text-[#0D3C00]">Priya Sharma</h3>
          <p className="text-sm italic text-[#6A961F]">Botany Consultant</p>
          <p className="text-sm italic text-[#0D3C00]">
            Soil and Fertilizer Expert
          </p>
          <p className="text-base text-gray-600">
            Priya focuses on organic soil health and natural fertilizers. She
            teaches sustainable gardening practices to keep your plants
            thriving.
          </p>
        </div>
        {/* 3 */}
        <div className=" rounded-lg shadow bg-white p-4 text-center space-y-2 hover:shadow-lg duration-150 transition border-[#6A961F] hover:border">
          <img
            src="https://i.ibb.co/Fkv25Lbn/Experts3.webp"
            alt="Aarav Mehta"
            className="w-40 h-40 object-cover rounded-full mx-auto border-3 border-[#6A961F]"
          />
          <h3 className="text-xl font-bold text-[#0D3C00]">Rohan Das</h3>
          <p className="text-sm italic text-[#6A961F]">Botany Consultant</p>
          <p className="text-base text-gray-600">
            Rohan is a botanist with deep knowledge of plant biology and species
            care. He provides guidance on plant growth, propagation, and care
            cycles.
          </p>
        </div>
        {/* 4 */}
        <div className=" rounded-lg shadow bg-white p-4 text-center space-y-2 hover:shadow-lg duration-150 transition border-[#6A961F] hover:border">
          <img
            src="https://i.ibb.co/KpxP1LbR/Experts5.jpg"
            alt="Aarav Mehta"
            className="w-40 h-40 object-cover rounded-full mx-auto border-3 border-[#6A961F]"
          />
          <h3 className="text-xl font-bold text-[#0D3C00]">Kavya Nair</h3>
          <p className="text-sm italic text-[#6A961F]">
            Outdoor Garden Designer
          </p>
          <p className="text-base text-gray-600">
            Kavya specializes in landscape and outdoor garden design. She
            creates eco-friendly gardens that blend nature with modern
            aesthetics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpertsSections;
