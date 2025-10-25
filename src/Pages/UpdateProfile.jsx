import React, { use } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, updateUser } = use(AuthContext);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    updateUser(name, photo)
      .then(() => {
        toast.success("Profile updated successfully!");
        form.reset();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="flex justify-center items-center py-10">
        <div className="card bg-base-100 shadow-xl w-full max-w-sm p-5">
          <h1 className="text-3xl font-bold text-center text-[#0D3C00] mb-4">
            Update Profile
          </h1>

          <form onSubmit={handleUpdate} className="space-y-3">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              placeholder="Enter new name"
              defaultValue={user?.displayName || ""}
              required
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input input-bordered w-full"
              placeholder="Enter new photo URL"
              defaultValue={user?.photoURL || ""}
              required
            />

            <button
              type="submit"
              className="btn bg-[#6A961F] hover:bg-[#547d1a] text-white w-full mt-3"
            >
              Update Profile
            </button>
          </form>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default UpdateProfile;
