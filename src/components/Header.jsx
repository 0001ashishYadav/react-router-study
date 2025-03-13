import React from "react";
import { Link, NavLink } from "react-router";

function Header() {
  return (
    <header className="border-b-2 border-gray-500/20 mb-3 fixed inset-x-0 bg-white">
      <div className="h-16 max-w-6xl flex justify-between items-center mx-auto ">
        <div className="text-4xl font-semibold">
          <span className=" text-gray-500">My</span>
          <span className=" text-red-800">Logo</span>
        </div>

        <nav className="flex justify-center items-center gap-10 font-medium text-gray-500">
          <NavLink
            className={({ isActive }) =>
              `hover:text-red-800 ${
                isActive ? "text-red-800" : "text-gray-500"
              }`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-red-800 ${
                isActive ? "text-red-800" : "text-gray-500"
              }`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-red-800  ${
                isActive ? "text-red-800" : "text-gray-500"
              }`
            }
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-red-800 ${
                isActive ? "text-red-800" : "text-gray-500"
              }`
            }
            to="/gitHub"
          >
            GitHub
          </NavLink>
        </nav>

        <div className="flex gap-10 items-center font-medium text-gray-500">
          <NavLink
            className={({ isActive }) =>
              `hover:text-red-800 ${
                isActive ? "text-red-800" : "text-gray-500"
              }`
            }
            to="/login"
          >
            Log in
          </NavLink>
          <button className="px-5 py-2 rounded-md bg-red-900 text-white ">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
