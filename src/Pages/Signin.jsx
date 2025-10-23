import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Signin = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-center font-bold text-3xl">Sign In</h1>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn mt-btn mt-2">Login</button>
            <div>
              <button className="btn bg-amber-300 mt-2 w-full">
                <FcGoogle />
                Continue with Google
              </button>
            </div>

            <p>
              Don't have an account?
              <Link to="/auth/signup" className="underline">
                Sign Up
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Signin;
