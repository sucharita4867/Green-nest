import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleSignout = () => {
    logOut()
      .then(() => {
        toast("you sign out successfully");
      })
      .catch((err) => {
        toast(err);
      });
  };

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
          to={"/card-details/:id"}
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
      {user ? (
        <div className="navbar-end flex items-center gap-3">
          <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full" />
          <details className="dropdown">
            <summary>{user.displayName}</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box">
              <li>
                <button
                  className="bg-[#6A961F] text-white"
                  onClick={handleSignout}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </details>
        </div>
      ) : (
        <div className="navbar-end   ">
          <Link className="btn bg-[#6A961F] text-white" to="/auth/signin">
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
