import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="p-4 bg-white text-black py-9 px-12 fixed w-full z-50">
      <div className="container flex justify-between h-9 mx-auto px-12">
        {/* Logo */}
        <NavLink
          to="/"
          rel="noopener noreferrer"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src={logo}
            alt="logo"
            style={{ width: "70px", height: "60px" }}
          />
        </NavLink>

        {/* Search and Explore Section */}
        <div className="flex items-center border border-gray-300 rounded-lg">
          <div className="flex items-center px-3">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Want to learn?"
              className="outline-none border-none focus:ring-0 focus:outline-none ml-2 bg-white text-gray-500"
            />
          </div>

          {/* Dropdown Menu Button */}
          <div className="relative inline-block text-left">
            <button
              className="bg-purple-100 text-purple-900 text-sm font-semibold px-4 py-1.5 mr-1 rounded-lg flex items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              Explore
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <ul className="absolute mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="#">Course 1</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="#">Course 2</a>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "nav-link flex items-center ml-2 font-semibold -mb-1 text-purple-800"
                  : "nav-link flex items-center ml-2 font-semibold -mb-1 hover:text-purple-800"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive
                  ? "nav-link flex items-center px-1 font-semibold -mb-1 text-purple-800"
                  : "nav-link flex items-center px-1 font-semibold -mb-1 hover:text-purple-800"
              }
            >
              About us
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/Courses"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-1 font-semibold -mb-1 text-purple-800"
                  : "flex items-center px-1 font-semibold -mb-1 hover:text-purple-800"
              }
            >
              Courses
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-1 font-semibold -mb-1 text-purple-800"
                  : "flex items-center px-1 font-semibold -mb-1 hover:text-purple-800"
              }
            >
              Contact us
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/FAQ"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center font-semibold -mb-1 text-purple-800"
                  : "flex items-center font-semibold -mb-1 hover:text-purple-800"
              }
            >
              FAQ's
            </NavLink>
          </li>
        </ul>

        {/* Authentication Buttons */}
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <NavLink
            to="/SignIn"
            className={({ isActive }) =>
              isActive
                ? "self-center px-4 py-3 font-semibold rounded text-purple-800"
                : "self-center px-4 py-3 font-semibold rounded hover:text-purple-800"
            }
          >
            Sign in
          </NavLink>
          <NavLink
            to="/CreateAccount"
            className={({ isActive }) =>
              isActive
                ? "self-center px-5 py-2 font-semibold rounded-lg border-4 text-purple-800"
                : "self-center px-5 py-2 font-semibold rounded-lg border-4 text-gray-50"
            }
            style={({ isActive }) =>
              !isActive
                ? {
                    backgroundColor: "rgba(124, 65, 163, 1)",
                    borderColor: "rgba(244, 235, 255, 1)",
                  }
                : {}
            }
          >
            Create free account
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="p-4 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`lg:hidden fixed top-20 right-0 h-full bg-white shadow-lg z-50 w-64 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-2 mt-4 p-4">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-semibold text-purple-800" : "font-semibold"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? "font-semibold text-purple-800" : "font-semibold"
              }
            >
              About us
            </NavLink>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <NavLink
              to="/Courses"
              className={({ isActive }) =>
                isActive ? "font-semibold text-purple-800" : "font-semibold"
              }
            >
              Courses
            </NavLink>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? "font-semibold text-purple-800" : "font-semibold"
              }
            >
              Contact us
            </NavLink>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <NavLink
              to="/FAQ"
              className={({ isActive }) =>
                isActive ? "font-semibold text-purple-800" : "font-semibold"
              }
            >
              FAQ's
            </NavLink>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <NavLink
              to="/SignIn"
              className={({ isActive }) =>
                isActive
                  ? "w-full font-semibold text-purple-800"
                  : "w-full font-semibold text-black"
              }
            >
              Sign in
            </NavLink>
          </li>
          <li className="px-4 py-2 cursor-pointer">
            <NavLink
              to="/CreateAccount"
              className={({ isActive }) =>
                isActive
                  ? "w-full px-4 py-2 font-semibold rounded-lg border-4 text-purple-800"
                  : "w-full px-4 py-2 font-semibold rounded-lg border-4 text-gray-50"
              }
              style={({ isActive }) =>
                !isActive
                  ? {
                      backgroundColor: "rgba(124, 65, 163, 1)",
                      borderColor: "rgba(244, 235, 255, 1)",
                    }
                  : {}
              }
            >
              Create free account
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
