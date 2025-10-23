import React from "react";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-center font-bold text-4xl">Sign Up</h1>
          <fieldset className="fieldset">
            {/*name  */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
            {/*photo Url */}
            <label className="label">Photo URl</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URl"
            />
            {/*email  */}
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
            <button className="btn mt-btn mt-2">sign up</button>
            <p>
              Already have an account ?
              <Link to="/auth/signin" className="underline">
                Sign in
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
