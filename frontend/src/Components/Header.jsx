import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar bg-white px-56 m-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-blue-800">Pretx</a>
      </div>
      <div className="flex-none gap-5 flex">
        <Link
          to="/"
          className="uppercase text-gray-800 hover:text-blue-600 transition-all"
        >
          Login
        </Link>
        <Link
          to="/"
          className="uppercase text-gray-800 hover:text-blue-600 transition-all"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Header;
