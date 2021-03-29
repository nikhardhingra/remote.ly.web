import React from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import Logout from "./Logout/Logout";

export default function Navbar({ isAuthenticated }) {
  return (
    <div className="navbar md:flex justify-between items-center p-6">
      <div className="flex md:justify-evenly justify-between items-center">
        {/* <h1 className="logo text-3xl font-semibold">
          Remote<span style={{ color: "#FF7C5D" }}>.</span>ly
        </h1> */}
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="w-52"
            style={{ backgroundColor: "#FDFDFD" }}
          />
        </Link>
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
      {!isAuthenticated && (
        <ul className="hidden md:block nav-item md:flex">
          <Link to="/" className="p-4">
            Home
          </Link>
          <li
            className="p-4"
            onClick={() => {
              document
                .getElementById("features")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Features
          </li>
          <li
            className="p-4"
            onClick={() => {
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            About Us
          </li>
        </ul>
      )}
      <div className="nav-item hidden md:block">
        {!isAuthenticated ? (
          <>
            <Link to="/register">
              <button
                className="m-2 px-4 py-2 text-white rounded-md shadow-lg uppercase hover:shadow-2xl"
                style={{ backgroundColor: "#0026CA" }}
              >
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button
                className="m-2 px-4 py-2 text-white rounded-md shadow-lg uppercase hover:shadow-2xl"
                style={{ backgroundColor: "#7A7CFF" }}
              >
                Log In
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">
              <button
                className="m-2 px-4 py-2 text-white rounded-md shadow-lg uppercase hover:shadow-2xl"
                style={{ backgroundColor: "#0026CA" }}
              >
                Dashboard
              </button>
            </Link>
            <Logout />
          </>
        )}
      </div>
      {/* </div> */}
    </div>
  );
}
