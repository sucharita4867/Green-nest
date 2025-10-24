import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Signin = () => {
  const { signIn } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("Login successful!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errMassage = error.massage;
        console.log(errorCode, errMassage);
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
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn mt-btn mt-2">
              Login
            </button>
            <div>
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
