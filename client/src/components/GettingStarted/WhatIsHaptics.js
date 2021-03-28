import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import MyLink from "./MyLink";
import Timeline from "./Timeline";

export default function WhatIsHaptics() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  return (
    <div>
      <div>
        <Navbar isAuthenticated={true} />
        <div className="bg-gray-100 p-6 relative pb-16">
          {/* <RoadMapNavbar /> */}
          <Timeline activeIndex={0} />
          <h3 className="text-blue-600 text-3xl">What is haptics?</h3>
          <div className="flex flex-col-reverse justify-center lg:flex-row items-center">
            <p className="mt-2 text-2xl">
              Haptic technologies provide a way of recreating the sense of touch
              by applying a series of forces, vibrations and motions to the
              person using the haptic technology. Because it is a sensory
              technology, haptics work alongside sensors which can detect the
              environment that the technology is being operated in, be it in a
              game, virtual reality, an automobile or remote device, and provide
              an appropriate (and detectable) response.
              <br />
              <br />
              Common examples of haptics technology are gaming consoles,
              automobiles and robotics!
            </p>
            <img
              src={require("../../assets/images/Robotics 2.png")}
              className="lg:ml-24 bg-gray-100"
            />
          </div>
          {/* <Link
            to="/getting-started/problem-space"
            className="absolute right-2 bottom-2"
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
                  class="fas fa-arrow-right absolute text-white"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                ></i>
              </a>
            </div>
          </Link> */}
          <Link
            to="/getting-started/problem-space"
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
                  Identify problem space
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
  );
}
