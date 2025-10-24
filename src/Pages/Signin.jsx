import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Signin = () => {
  const { signIn, googleSignIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  // console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("Login successful!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const googleClick = () => {
    googleSignIn()
      .then(() => {
        toast("Login successful!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        toast(err);
      });
  };

  return (
    <div className="flex justify-center items-center py-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-center text-[#0D3C00] font-bold text-3xl">
            Sign In
          </h1>
          <fieldset className="fieldset">
            {/* email */}
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
                type={show ? "text " : "password"}
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
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn mt-btn mt-2">
              Login
            </button>
            <div onClick={googleClick}>
              <button className="btn bg-amber-300 mt-2 w-full ">
                <FcGoogle />
                Continue with Google
              </button>
            </div>

            <p className="text-sm text-center font-semibold">
              Don't have an account?
              <Link to="/auth/signup" className="underline text-[#0D3C00]">
                Sign Up
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Signin;
