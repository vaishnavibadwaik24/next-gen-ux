import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="p-4 bg-white text-black py-9 px-12 fixed w-full z-50">
      <div className="container flex justify-between h-9 mx-auto px-12">
        {/* Logo */}
        <Link
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
        </Link>

        {/* Search and Explore Section */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
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
              <ul className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-40">
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
            <Link
              to="/"
              className="flex items-center ml-2 font-semibold -mb-1 border-b-2 border-transparent border-red-600"
            >
              Home
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/About"
              className="flex items-center px-1 font-semibold -mb-1 border-b-2 border-transparent"
            >
              About us
            </Link>
          </li>
          <li className="flex">
            <Link
              className="flex items-center px-1 font-semibold -mb-1 border-b-2 border-transparent"
            >
              Courses
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/Contact"
              className="flex items-center px-1 font-semibold -mb-1 border-b-2 border-transparent"
            >
              Contact us
            </Link>
          </li>
          <li className="flex">
            <Link
              className="flex items-center font-semibold -mb-1 border-b-2 border-transparent"
            >
              FAQ's
            </Link>
          </li>
        </ul>

        {/* Authentication Buttons */}
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <Link
            to="/SignIn"
            className="self-center px-4 py-3 font-semibold rounded"
          >
            Sign in
          </Link>
          <Link
            to="/CreateAccount"
            className="self-center px-5 py-2 font-semibold rounded-lg border-4 text-gray-50"
            style={{
              backgroundColor: "rgba(124, 65, 163, 1)",
              borderColor: "rgba(244, 235, 255, 1)",
            }}
          >
            Create free account
          </Link>
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
        className={`lg:hidden fixed top-0 right-0 h-full bg-white shadow-lg z-50 w-64 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-2 mt-4 p-4">
          <li className="px-4 py-2 font-semibold hover:bg-gray-100 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2 font-semibold hover:bg-gray-100 cursor-pointer">
            <Link to="/About">About us</Link>
          </li>
          <li className="px-4 py-2 font-semibold hover:bg-gray-100 cursor-pointer">
            <a href="#">Courses</a>
          </li>
          <li className="px-4 py-2 font-semibold hover:bg-gray-100 cursor-pointer">
            <Link to="/Contact">Contact us</Link>
          </li>
          <li className="px-4 py-2 font-semibold hover:bg-gray-100 cursor-pointer">
            <a href="#">FAQ's</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/SignIn" className="w-full font-semibold text-black">
              Sign in
            </Link>
          </li>
          <li className="px-4 py-2 cursor-pointer">
            <Link
              to="/CreateAccount"
              className="w-full px-4 py-2 font-semibold rounded-lg border-4 text-gray-50"
              style={{
                backgroundColor: "rgba(124, 65, 163, 1)",
                borderColor: "rgba(244, 235, 255, 1)",
              }}
            >
              Create free account
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
