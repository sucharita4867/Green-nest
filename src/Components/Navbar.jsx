import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <div className="flex items-center gap-2">
      <li className="text-[#0b6833] font-semibold text-lg">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#0fbd5a] underline" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li className="text-[#0b6833] font-semibold text-lg">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#0fbd5a] underline" : ""
          }
          to={"/plants"}
        >
          plants
        </NavLink>
      </li>
      <li className="text-[#0b6833] font-semibold text-lg">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#0fbd5a] underline" : ""
          }
          to={"/profile"}
        >
          Profile
        </NavLink>
      </li>
    </div>
  );
  return (
    <div className="navbar border w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl text-[#0b6833] ">
          <span className="font-bold">Green</span>
          <span className="">Nest</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end ">
        <a className="btn bg-[#0fbd5a] text-white font-semibold text-lg">
          Button
        </a>
      </div>
    </div>
  );
};

export default Navbar;
