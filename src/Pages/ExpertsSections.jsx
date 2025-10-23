import React from "react";

const ExpertsSections = () => {
  return (
    <div className="mb-10">
      <div className="my-8 text-center  flex-col ">
        <h2 className=" text-[#0D3C00]  text-4xl font-bold">
          Meet Our Green Experts
        </h2>
        <div className="flex justify-center text-lg mt-4 text-[#848483]">
          <p className="md:w-[60%] ">
            “Our experienced plant experts help you care for your greens. From
            watering to soil care, they share tips for healthy and thriving
            plants.”
          </p>
        </div>
      </div>
      <div className="w-11/12 mx-auto border flex gap-5">
        {/* 1 */}
        <div className="card bg-base-100 w-96 shadow-sm border-red-500 border">
          <figure className="">
            <img
              src="https://i.ibb.co/WvL3Htpn/Experts1.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className=" items-center text-center">
            <h2 className="card-title">Aarav Mehta</h2>
            <p>
              Aarav has over 8 years of experience in indoor plant design and
              maintenance. He helps people create calming green spaces in their
              homes.
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="card bg-base-100 w-96 shadow-sm border-red-500 border">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/Kj1CbRYH/Experts2.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="card bg-base-100 w-96 shadow-sm border-red-500 border">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="card bg-base-100 w-96 shadow-sm border-red-500 border">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertsSections;
//   {
//     "id": 2,
//     "name": "Priya Sharma",
//     "title": "Soil and Fertilizer Expert",
//     "bio": "Priya focuses on organic soil health and natural fertilizers. She teaches sustainable gardening practices to keep your plants thriving.",
//     "image": "https://i.ibb.co/3FSm7XZ/soil-expert.jpg"
//   },
//   {
//     "id": 3,
//     "name": "Rohan Das",
//     "title": "Botany Consultant",
//     "bio": "Rohan is a botanist with deep knowledge of plant biology and species care. He provides guidance on plant growth, propagation, and care cycles.",
//     "image": "https://i.ibb.co/kcx6cvQ/botany-consultant.jpg"
//   },
//   {
//     "id": 4,
//     "name": "Kavya Nair",
//     "title": "Outdoor Garden Designer",
//     "bio": "Kavya specializes in landscape and outdoor garden design. She creates eco-friendly gardens that blend nature with modern aesthetics.",
//     "image": "https://i.ibb.co/vH8fQm1/garden-designer.jpg"
//   }
