import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import MyLink from "./MyLink";

export default function GettingStarted() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  return (
    <>
      <Navbar isAuthenticated={true} />
      <div className="bg-gray-100 p-6 relative">
        {/* <RoadMapNavbar /> */}
        <div className="flex justify-between items-center">
          <h3 className="text-blue-600 text-2xl">
            Ready to start your Haptics project?
          </h3>
          <div className="relative">
            {!showHamburgerMenu ? (
              <i
                className="fas fa-bars cursor-pointer"
                onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
              ></i>
            ) : (
              <i
                className="fas fa-times cursor-pointer"
                onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
              ></i>
            )}
            {showHamburgerMenu && (
              <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  class="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <MyLink to="/getting-started">What is Haptics?</MyLink>
                  <MyLink to="" disabled>
                    Identify Problem Space
                  </MyLink>
                  <MyLink to="" disabled={true}>
                    Assemble Haptics Kit
                  </MyLink>
                  <MyLink to="" disabled={true}>
                    Processing
                  </MyLink>
                  <MyLink to="" disabled={true}>
                    Arduino
                  </MyLink>
                </div>
              </div>
            )}
          </div>
        </div>
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
        className="fixed bottom-4 right-4"
      >
        <div
          className="hover:shadow-lg transition-shadow"
          style={{
            height: 40,
            width: 40,
            borderRadius: "50%",
            backgroundColor: "#5F2EEA",
            position: "relative",
          }}
        >
          <a href="#">
            <i
              className="fas fa-arrow-right absolute text-white"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></i>
          </a>
        </div>
      </Link>
    </>
  );
}
