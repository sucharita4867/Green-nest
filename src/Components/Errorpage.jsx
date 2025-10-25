import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import errorImg from "../assets/error-404.png";
import { Link } from "react-router";

const Errorpage = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="flex justify-center items-center w-11/12 mx-auto p-7">
        <div className=" p-4 space-y-4">
          <figure className="flex items-center justify-center">
            <img className="h-[80%] w-[60%] " src={errorImg} alt="" />
          </figure>
          <p className="text-center text-2xl font-bold">
            oops, Page Not Fount!
          </p>
          <div className="flex justify-center">
            <Link to="/" className="btn bg-[#6A961F] text-white">
              Back
            </Link>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Errorpage;
