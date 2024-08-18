import React from "react";
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white text-white p-8 rounded-lg drop-shadow-lg w-96">
        <h2 className="text-center font-semibold underline underline-offset-8 text-2xl mb-8" style={{ color: "rgba(136, 73, 178, 0.94)" }}>Sign In</h2>
        <form>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-white border border-gray-700 text-gray-300 focus:outline-none focus:border-purple-700"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded bg-white border border-gray-700 text-gray-300 focus:outline-none focus:border-purple-700"
            />
          </div>
          <div className="text-right mb-4">
            <Link to="#" className="text-sm text-gray-500 hover:underline">
              Forgot Password ?
            </Link>
          </div>
          <div>
            <button
              type="submit"
              className="w-full text-white font-semibold p-2 rounded focus:outline-none"
              style={{ backgroundColor: "rgba(136, 73, 178, 0.94)" }}
            >
              Login
            </button>
          </div>
          <div className="text-right mt-4">
            <p className="text-sm text-gray-500">Don’t Have Account ? </p>
            <Link to="/createaccount" className="text-sm text-purple-500 hover:underline">
              Create Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
