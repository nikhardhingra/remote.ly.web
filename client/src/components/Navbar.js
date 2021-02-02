import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar md:flex justify-between items-center p-6">
      <div className="flex md:justify-evenly justify-between items-center">
        <h1 className="logo text-3xl font-semibold">
          Remote<span style={{ color: "#FF7C5D" }}>.</span>ly
        </h1>
        <div
          className="block md:hidden cursor-pointer"
          onClick={() => {
            document.querySelectorAll(".nav-item").forEach((item) => {
              item.classList.toggle("active");
            });
          }}
        >
          <svg
            className="h-6 w-6 text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {/* <div
        id="nav-items"
        className="hidden md:block md:flex md:justify-between"
      > */}
      <ul className="hidden md:block nav-item md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Features</li>
        <li className="p-4">About Us</li>
      </ul>
      <div className="nav-item hidden md:block">
        <Link to="/register">
          <button
            className="m-2 px-4 py-2 text-white rounded-md shadow-lg uppercase"
            style={{ backgroundColor: "#0026CA" }}
          >
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button
            className="m-2 px-4 py-2 text-white rounded-md shadow-lg uppercase"
            style={{ backgroundColor: "#7A7CFF" }}
          >
            Log In
          </button>
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
}
