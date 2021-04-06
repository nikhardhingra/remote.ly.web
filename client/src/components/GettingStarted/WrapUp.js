import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import MyLink from "./MyLink";

export default function WrapUp() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  return (
    <div>
      <div>
        <Navbar isAuthenticated={true} />
        <div className="bg-gray-100 h-96 text-center p-6 relative pb-16">
          {/* <RoadMapNavbar /> */}
          <div className="flex justify-end">
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
                    <MyLink to="/getting-started/what-is-haptics">
                      What is Haptics?
                    </MyLink>
                    <MyLink to="/getting-started/problem-space">
                      Identify Problem Space
                    </MyLink>
                    <MyLink to="/getting-started/haply-development-kit">
                      Assemble Haptics Kit
                    </MyLink>
                    <MyLink to="/getting-started/configure-processing">
                      Processing
                    </MyLink>
                    <MyLink to="/getting-started/configure-arduino">
                      Arduino
                    </MyLink>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            className="absolute top-1/2 left-1/2 text-3xl"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            Once you complete your conceptual design, you should now be ready to code and test your haptics project!
          </div>
          <div className="flex items-end justify-between">
            <Link
              to="/dashboard"
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
                    Back to Dashboard
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
          </div>
        </div>
      </div>
    </div>
  );
}
