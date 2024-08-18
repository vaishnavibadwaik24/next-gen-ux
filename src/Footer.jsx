import React from "react";
import logolight from "./logo-light.png";


export default function Footer() {
  return (
    <footer
    className="text-gray-600 body-font"
    style={{ backgroundColor: "rgba(46, 0, 64, 1)" }}
  >
    <div className="container px-24 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <img
          src={logolight}
          alt="logo-light"
          style={{ width: "70px", height: "60px" }}
        />
        <br />
        <p className="mt-2 text-base text-slate-200">
          Top learning experiences that create more talent in the world.
        </p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-400 text-sm text-sm mb-3">
            Product
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-slate-200">Overview</a>
            </li>
            <li>
              <a className="text-slate-200">Features</a>
            </li>
            <li>
              <a className="text-slate-200">Tutorials</a>
            </li>
            <li>
              <a className="text-slate-200">Pricing</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-400 text-sm text-sm mb-3">
            Company
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-slate-200">About us</a>
            </li>
            <li>
              <a className="text-slate-200">Careers</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-400 text-sm mb-3">
            Social
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-slate-200">Twitter</a>
            </li>
            <li>
              <a className="text-slate-200">LinkedIn</a>
            </li>
            <li>
              <a className="text-slate-200">GitHub</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-400 text-sm text-sm mb-3">
            Legal
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-slate-200">Terms</a>
            </li>
            <li>
              <a className="text-slate-200">Privacy</a>
            </li>
            <li>
              <a className="text-slate-200">Contact</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div className="pb-11">
      <div className="container mx-auto px-24 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-400 text-base text-center sm:text-left">
          © 2024 NextGen UX. All rights reserved.
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-gray-400" href="#" title="Twitter">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"   
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-5 text-gray-400" href="#" title="LinkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M29 0H3C1.343 0 0 1.343 0 3v26c0 1.657 1.343 3 3 3h26c1.657 0 3-1.343 3-3V3c0-1.657-1.343-3-3-3zM10.537 27H6.484V11.652h4.052V27zm-2.027-17.88a2.354 2.354 0 1 1 0-4.709 2.354 2.354 0 0 1 0 4.709zM27 27h-4.052V19.22c0-1.852-.036-4.229-2.575-4.229-2.577 0-2.973 2.009-2.973 4.084V27h-4.052V11.652h3.889v2.096h.055c.541-1.026 1.862-2.11 3.835-2.11 4.102 0 4.855 2.7 4.855 6.208V27z"></path>
            </svg>
          </a>

          <a className="ml-5 text-gray-400" href="#" title="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
            </svg>
          </a>
          <a className="ml-5 text-gray-400" href="#" title="GitHub">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0c-8.837 0-16 7.163-16 16 0 7.072 4.584 13.066 10.937 15.18 0.8 0.146 1.094-0.348 1.094-0.772 0-0.38-0.013-1.387-0.019-2.722-4.451 0.967-5.39-2.147-5.39-2.147-0.728-1.848-1.778-2.341-1.778-2.341-1.452-0.993 0.109-0.973 0.109-0.973 1.604 0.113 2.448 1.647 2.448 1.647 1.426 2.441 3.742 1.735 4.656 1.327 0.144-1.033 0.557-1.735 1.014-2.134-3.553-0.404-7.289-1.776-7.289-7.904 0-1.746 0.623-3.174 1.645-4.29-0.165-0.403-0.713-2.031 0.156-4.234 0 0 1.341-0.429 4.4 1.635 1.276-0.355 2.645-0.533 4.004-0.54 1.36 0.007 2.73 0.185 4.01 0.54 3.053-2.064 4.391-1.635 4.391-1.635 0.874 2.203 0.326 3.831 0.159 4.234 1.025 1.116 1.645 2.545 1.645 4.29 0 6.145-3.744 7.494-7.305 7.888 0.573 0.493 1.083 1.468 1.083 2.958 0 2.134-0.02 3.856-0.02 4.384 0 0.429 0.289 0.926 1.104 0.77 6.358-2.115 10.931-8.107 10.931-15.18 0-8.837-7.163-16-16-16z"></path>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
  )
}
