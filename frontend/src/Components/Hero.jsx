import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row">
      <div>
        <div className="p-4">
          <h1 className="flex items-center justify-center text-lg font-semibold">
            MERN-Auth
          </h1>
          <div className="mt-3 flex items-center space-x-2">
            <Link to="">
              <button
                type="button"
                className="rounded-md bg-gray-300 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 hover:bg-blue-500 hover:text-white transition-all focus-visible:outline-offset-2 focus-visible:outline-black px-6"
              >
                Login
              </button>
            </Link>
            <Link to="">
              <button
                type="button"
                className="rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 hover:bg-blue-500 hover:text-white transition-all focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Registration
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
