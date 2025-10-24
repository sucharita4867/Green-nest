import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaShower } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const SignUp = () => {
  const { createUser, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photo, email, password });
    if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and include both uppercase and lowercase letters!"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Signup successful! Welcome to GreenNest 🌿");
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        //   const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center py-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSignUp} className="card-body">
          <h1 className="text-center text-[#0D3C00] font-bold text-4xl">
            Sign Up
          </h1>
          <fieldset className="fieldset">
            {/*name  */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
            />
            {/*photo Url */}
            <label className="label">Photo URl</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URl"
              required
            />
            {/*email  */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password */}
            <div className="relative">
              <label className="label">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-[32px] top-[32px] cursor-pointer z-50"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>
            <button type="submit" className="btn mt-btn mt-2">
              sign up
            </button>
            <p className="text-sm text-center font-semibold">
              Already have an account ?
              <Link to="/auth/signin" className="underline text-[#0D3C00]">
                Sign in
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
