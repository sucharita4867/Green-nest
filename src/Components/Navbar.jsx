import React from "react";
import { NavLink } from "react-router";
const Navbar = () => {
  const links = (
    <div className="flex items-center gap-2">
      <li className="text-[#0D3C00] font-semibold text-lg">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#6A961F] underline" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li className="text-[#0D3C00] font-semibold text-lg">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#6A961F] underline" : ""
          }
          to={"/plants"}
        >
          plants
        </NavLink>
      </li>
      <li className="text-[#0D3C00] font-semibold text-lg">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#6A961F] underline" : ""
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
        <a className="btn btn-ghost text-2xl text-[#0D3C00] border">
          <span className="font-bold">Green</span>
          <span className="">Nest</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <details className="navbar-end  dropdown">
        <summary className="btn bg-[#6A961F] text-white font-semibold text-lg">
          Button
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box   p-2 shadow-sm">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default Navbar;
