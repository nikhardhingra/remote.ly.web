import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default function GettingStarted() {
  //const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  return (
    <>
      <Navbar isAuthenticated={true} />
      <div className="bg-gray-100 p-6 relative">
        {/* <RoadMapNavbar /> */}
        <h3 className="text-blue-600 text-2xl">
          Ready to start your haptics project?
        </h3>
        <p className="mt-2">
          Navigate through the following steps to learn more about Haptics and
          get started on your project!
        </p>
      </div>
      <div className="bg-white p-10 flex justify-center items-center">
        <img src={require("../../assets/images/Roadmap.png")} width="70%" />
      </div>
      <Link
        to="/getting-started/what-is-haptics"
        className="fixed bottom-4 left-1/2"
        style={{
          transform: "translateX(-50%)",
        }}
      >
        <div
          className="hover:shadow-lg transition-shadow rounded p-4"
          style={{
            // height: 40,
            // width: 40,
            // borderRadius: "50%",
            // border: "1px solid #5F2EEA",
            backgroundColor: "#5f2eea",
            position: "relative",
          }}
        >
          <a href="#">
            <span className="text text-white text-lg mr-2">
              What is haptics?
            </span>
            <i
              className="fas fa-arrow-right"
              style={{
                color: "#fff",
              }}
            ></i>
          </a>
        </div>
      </Link>
    </>
  );
}
