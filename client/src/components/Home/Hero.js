import React from "react";
import HeroImage from "../../assets/images/Saly-19.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row text-center lg:text-left lg:justify-between lg:items-center p-6">
      <div className="home-hero-text">
        <h1 className="text-5xl" style={{ color: "#091133" }}>
          Join the community and start your haptics journey today!
        </h1>
        <div className="mt-8">
          <Link to="/register">
            <button
              className="m-2 px-12 py-2 transition-shadow duration-500 text-white rounded-md shadow-lg uppercase hover:shadow-2xl"
              style={{ backgroundColor: "#0026CA" }}
            >
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button
              className="m-2 px-12 py-2 transition-shadow duration-500 text-white rounded-md shadow-lg uppercase hover:shadow-2xl"
              style={{ backgroundColor: "#7A7CFF" }}
            >
              Log In
            </button>
          </Link>
        </div>
      </div>
      <img
        className="align-middle home-hero-image"
        src={HeroImage}
        alt="Hero Image"
      />
    </div>
  );
}
