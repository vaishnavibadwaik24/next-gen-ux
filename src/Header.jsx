import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for the dropdown

  return (
    <header className="bg-white text-black py-5 px-16 fixed w-full z-50">
      <div className="container flex justify-between items-center h-16 mx-auto">
        <NavLink
          to="/"
          aria-label="Back to homepage"
          className="flex items-center"
        >
          <img
            src={logo}
            alt="logo"
            style={{ width: "70px", height: "60px" }}
          />
        </NavLink>

        {/* Search and Explore Section */}
        <div className="hidden md:flex items-center border border-gray-300 rounded-lg max-w-full md:max-w-xs">
          <div className="flex items-center px-3 py-2">
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
              className="outline-none border-none focus:ring-0 focus:outline-none ml-2 bg-white text-gray-500 w-full"
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

        {/* Desktop Links */}
        <nav className="hidden lg:flex space-x-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-link font-semibold text-purple-800"
                : "nav-link font-semibold hover:text-purple-800"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive
                ? "nav-link font-semibold text-purple-800"
                : "nav-link font-semibold hover:text-purple-800"
            }
          >
            About us
          </NavLink>
          <NavLink
            to="#"
            className="font-semibold text-black hover:text-purple-800"
          >
            Courses
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive
                ? "nav-link font-semibold text-purple-800"
                : "nav-link font-semibold hover:text-purple-800"
            }
          >
            Contact us
          </NavLink>
          <NavLink
            to="#"
            className="font-semibold text-black hover:text-purple-800"
          >
            FAQ's
          </NavLink>
        </nav>

        {/* Sign In and Create Account Buttons */}
        <div className="hidden lg:flex space-x-3">
          <NavLink
            to="/SignIn"
            className="self-center px-4 py-2 font-semibold text-black hover:text-purple-800"
          >
            Sign in
          </NavLink>
          <NavLink
            to="/CreateAccount"
            className={({ isActive }) =>
              isActive
                ? "self-center px-4 py-2 font-semibold rounded-lg border-4"
                : "self-center px-4 py-2 font-semibold rounded-lg border-4 text-white"
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
          className="lg:hidden pl-0"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4">
          <button onClick={() => setIsSidebarOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col space-y-4 mt-8 px-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-link font-semibold text-purple-800 px-4 py-2"
                : "nav-link font-semibold hover:text-purple-800 px-4 py-2"
            }
            onClick={() => setIsSidebarOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive
                ? "nav-link font-semibold text-purple-800 px-4 py-2"
                : "nav-link font-semibold hover:text-purple-800 px-4 py-2"
            }
            onClick={() => setIsSidebarOpen(false)}
          >
            About us
          </NavLink>
          <NavLink
            to="#"
            className="font-semibold text-black hover:bg-gray-100 px-4 py-2"
            onClick={() => setIsSidebarOpen(false)}
          >
            Courses
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive
                ? "nav-link font-semibold text-purple-800 px-4 py-2"
                : "nav-link font-semibold hover:text-purple-800 px-4 py-2"
            }
            onClick={() => setIsSidebarOpen(false)}
          >
            Contact us
          </NavLink>
          <NavLink
            to="#"
            className="font-semibold text-black hover:bg-gray-100 px-4 py-2"
            onClick={() => setIsSidebarOpen(false)}
          >
            FAQ's
          </NavLink>
          <NavLink
            to="/SignIn"
            className="font-semibold text-black hover:bg-gray-100 px-4 py-2"
            onClick={() => setIsSidebarOpen(false)}
          >
            Sign in
          </NavLink>
          <NavLink
            to="/CreateAccount"
            className={({ isActive }) =>
              isActive
                ? "self-center px-4 py-2 font-semibold rounded-lg border-4"
                : "self-center px-4 py-2 font-semibold rounded-lg border-4 text-white"
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
        </nav>
      </div>
    </header>
  );
}
