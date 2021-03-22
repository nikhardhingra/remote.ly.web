import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import MyLink from "./MyLink";

export default function WhatIsHaptics() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  return (
    <div>
      <div>
        <Navbar isAuthenticated={true} />
        <div className="bg-gray-100 p-6 relative pb-16">
          {/* <RoadMapNavbar /> */}
          <div className="flex justify-between">
            <h3 className="text-blue-600 text-3xl">What is haptics?</h3>
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
          <div className="flex flex-col-reverse justify-start lg:flex-row items-start">
           
            <h3 className="text-blue-600 text-3xl">
             Wonders of Haptics
            </h3>
            
          </div>

          <div className="flex flex-col-reverse justify-center lg:flex-row items-center">
             <img
              src={require("../../assets/images/Teslasuit.png")}
              className="lg:ml-24 bg-white-100" width="300" height="200"
            />
            <p className="mt-2 text-2xl">
             <h4><u>Teslasuit full body haptic VR suit</u></h4>
             <br/> 
             The suit is currently the most technologically advanced VR haptic device in the market. The suit captures virtual actions in real-time as they are performed in order to establish the baselines, create programs and also track the improvements over a period of time. It can also capture the biometrics through sensors that track vitals as well as emotional stress levels. This enables users or trainees to demonstrate their ability to perform under pressure.
              <br />
              <br />
            </p>
           
          </div>
          <div className="flex flex-col-reverse justify-center lg:flex-row items-center">
            <p className="mt-2 text-2xl">
             <h4><u>Dexmo haptic gloves</u></h4>
             <br/> 
            The Dexmo haptic glove is an exoskeleton with a very refined and superior-looking design as well as functionality. The gloves are also completely wireless which makes them easy to use without being burdened with too much cabling.
            These gloves can track up to 11 degrees of freedom hand motion for each of the hands so they can capture the user’s full hand motion at full dexterity. This enables you to have a realistic finger presence in the virtual environment.              
              <br />
              <br />
            </p>
            <img
              src={require("../../assets/images/Dexmo.png")}
              className="lg:ml-24 bg-gray-100"width="300" height="200"
            />
          </div>
          <div className="flex flex-col-reverse justify-center lg:flex-row items-center">
            
            <img
              src={require("../../assets/images/three.png")}
              className="lg:ml-24 bg-gray-100" width="400" height="300"
            />
             <p className="mt-2 text-2xl">
             <h4><u>HaptX Gloves DK2</u></h4>
             <br/> 
            HaptX Gloves DK2 feature the industry's most powerful force feedback with 133 points of tactile feedback per hand, for full palm and fingertip coverage. Whether you’re training your workforce, designing a new product, or controlling robots from a distance, HaptX Gloves make it feel real. 
              <br />
            </p>
            
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
                  Identify your Problem Space
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
