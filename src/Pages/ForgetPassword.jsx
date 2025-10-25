import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Provider/AuthProvider";

const ForgetPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => toast.success("Password reset email sent! Check Gmail."))
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="flex justify-center items-center py-12">
          <form
            onSubmit={handleReset}
            className="card w-full max-w-sm p-4 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-center text-[#0D3C00] mb-4">
              Reset Password
            </h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input w-full"
              required
            />
            <button
              type="submit"
              className="btn mt-4 text-white bg-[#6A961F] w-full"
            >
              Reset Password
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

export default ForgetPassword;
