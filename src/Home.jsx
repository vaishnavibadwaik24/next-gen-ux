import React, { useState } from "react";
import logo from "./logo.png";

function Home() {
  const [isOpen, setIsOpen] = useState(false); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Start Header */}
      <header className="p-4 bg-white text-black py-9 px-10">
        <div className="container flex justify-between h-9 mx-auto px-12">
          {/* Logo */}
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "70px", height: "60px" }}
            />
          </a>

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
                <ul className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-35">
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
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center font-semibold -mb-1 border-b-2 border-transparent border-red-600"
              >
                Home
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-1 font-semibold -mb-1 border-b-2 border-transparent"
              >
                About us
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-1 font-semibold -mb-1 border-b-2 border-transparent"
              >
                Courses
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-1 font-semibold -mb-1 border-b-2 border-transparent"
              >
                Contact us
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center font-semibold -mb-1 border-b-2 border-transparent"
              >
                FAQ's
              </a>
            </li>
          </ul>

          {/* Authentication Buttons */}
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center px-4 py-3 font-semibold rounded">
              Sign in
            </button>
            <button
              className="self-center px-5 py-2 font-semibold rounded-lg border-4 text-gray-50"
              style={{
                backgroundColor: "rgba(124, 65, 163, 1)",
                borderColor: "rgba(244, 235, 255, 1)",
              }}
            >
              Create free account
            </button>
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
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a href="#">About us</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a href="#">Courses</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a href="#">Contact us</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a href="#">FAQ's</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <button className="w-full font-semibold text-black">
                Sign in
              </button>
            </li>
            <li className="px-4 py-2 cursor-pointer">
              <button
                className="w-full py-2 font-semibold rounded-lg border-4 text-gray-50"
                style={{
                  backgroundColor: "rgba(124, 65, 163, 1)",
                  borderColor: "rgba(244, 235, 255, 1)",
                }}
              >
                Create free account
              </button>
            </li>
          </ul>
        </div>
      </header>
      {/* End Header */}
    </>
  );
}

export default Home;
