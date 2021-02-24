import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="p-6 bg-gray-100" id="about">
      <h1
        className="text-5xl text-center lg:text-left"
        style={{ color: "#091133" }}
      >
        About Us
      </h1>
      <div className="text-center">
        <p className="m-6 bg-white border-purple-500 border rounded-lg p-6">
          We are a group of fourth-year Management Engineering students at the
          University of Waterloo. As novice hapticians, we realized that there
          is a lack of community of hapticians. Our goal is to help novice
          hapticians get started on their haptics projects, learn from learn
          from experts and solve haptics-related challenges.
        </p>
        <div className="mt-12 mb-12">
          <Link
            to="/our-journey"
            className="bg-purple-700 rounded py-4 px-3 text-white"
          >
            Our Journey
          </Link>
        </div>
      </div>
    </div>
  );
}
