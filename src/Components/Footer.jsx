import React from "react";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="footer text-xl footer-horizontal footer-center text-white bg-[#0D3C00] rounded pt-10 ">
      <nav className="grid grid-flow-col gap-4">
        <NavLink to="/about" className="link link-hover">
          About
        </NavLink>
        <NavLink to="/contact" className="link link-hover">
          Contact Contact contact contact
        </NavLink>
        <NavLink className="link link-hover">Privacy Policy</NavLink>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="text-4xl">
            <FaSquareInstagram />
          </a>
          <a className="text-4xl">
            <FaFacebook />
          </a>
          <a className="text-4xl">
            <FaPinterest />
          </a>
        </div>
      </nav>
      <div className="p-6 w-full px-0 bg-[#0A3000]">
        <aside className="font-semibold">
          <p>“© 2025 GreenNest. All rights reserved.”</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
