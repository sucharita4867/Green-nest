

import { toast } from "react-toastify";

const CardDetailsForm = () => {

  const handledBook = (e) => {
    e.preventDefault();
    const form = e.target;
     form.name.value;
    form.email.value;
    toast.success("Booking successful!"); 

    form.reset();
  };
  return (
    <div className="p-5  shadow-xl rounded-xl items-center">
      <h2 className="text-2xl font-bold text-[#0D3C00] mb-4 text-center">
        Book Your Plant Consultation
      </h2>
      <form
        onSubmit={handledBook}
        className="max-w-md mx-auto p-6  rounded-lg  space-y-4 bg-white"
      >
        <div>
          <label className="block font-semibold mb-1">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full border border-gray-400  px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full border border-gray-400  px-3 py-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-[#6A961F] w-full text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#557C1A] transition-all"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default CardDetailsForm;
