import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { user ,updateUser} = use(AuthContext);

  const updateBtn =()=>{
    updateUser()
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-xl font-semibold text-gray-500">
          Please login to view your profile.
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="card bg-base-100 shadow-2xl w-[350px] p-5 text-center">
        <img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto border-2 border-[#6A961F]"
        />
        <h2 className="text-2xl font-bold mt-3 text-[#0D3C00]">
          {user?.displayName || "Unknown User"}
        </h2>
        <p className="text-gray-600">{user?.email}</p>

        <div className="mt-4">
          <button onClick={updateBtn} className="btn bg-[#6A961F] text-white hover:bg-[#587c17]">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
