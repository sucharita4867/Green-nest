import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const SignUp = () => {
  const { createUser, setUser } = use(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photo, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Signup successful! Welcome to GreenNest 🌿");
      })
      .catch((error) => {
        //   const errorCode = error.code;
        const errorMessage = error.message;
        toast.success(errorMessage);
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
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
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
