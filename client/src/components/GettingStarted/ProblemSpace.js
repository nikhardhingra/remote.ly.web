import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import MyLink from "./MyLink";

export default function ProblemSpace() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  return (
    <div>
      <div>
        <Navbar isAuthenticated={true} />
        <div className="bg-gray-100 p-6 relative pb-16">
          {/* <RoadMapNavbar /> */}
          <div className="flex justify-between">
            <h3 className="text-blue-600 text-3xl">
              Identify your problem space
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
                    <MyLink to="/getting-started/what-is-haptics">
                      What is Haptics?
                    </MyLink>
                    <MyLink to="/getting-started/problem-space">
                      Identify Problem Space
                    </MyLink>
                    <MyLink to="/getting-started/haply-development-kit">
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
          <p className="mt-2 text-xl">
            Choose a haptics project topic of your interest. Below are some
            example projects to seek inspiration from;
          </p>
          <div className="md:grid md:grid-cols-3 justify-between items-center mt-6">
            <div class="bg-white shadow-xl rounded-t-xl md:mr-16 mb-6">
              <div class="p-6 bg-gradient-to-br from-purple-500 to-green-300 rounded-xl text-center">
                <img
                  src={require("../../assets/images/pathfinder.png")}
                  alt=""
                  class="h-56 w-full"
                />
              </div>
              <div class="px-4 w-full py-4 md:px-10">
                <h1 class="font-bold text-lg">Pathfinder</h1>
                <p class="py-4 w-full">
                  Wearable navigation assistance for the blind
                </p>
                <div class="flex flex-wrap pt-8">
                  <div class="w-full md:w-1/3 text-sm font-medium">
                    Medical Science
                  </div>
                  <div class="2/3">
                    <div class="text-sm font-medium">
                      {/* SHARE: */}
                      <a href="" class="text-blue-700 px-1 ">
                        {/* FACEBOOk */}
                      </a>
                      <a href="" class="text-blue-500 px-1 ">
                        {/* TWITTER */}
                      </a>
                      <a href="" class="text-red-600 px-1 ">
                        {/* GOOGLE+ */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text rounded shadow-xl bg-white p-6 col-span-2">
              Pathfinder is a wearable device that translates distance into
              haptic feedback. It’s designed to give the user greater freedom of
              motion and longer operational range than traditional navigation
              solutions for the blind, such as the cane. Users just wear the
              wristband (or glove) and point at objects up to 500 centimeters
              away, and feel gentle pulses at their fingertips corresponding to
              the object's distance. <br />
              <br />
              For more info:
              <br />
              <a
                className="text-blue-500"
                href="https://hackaday.io/project/2372-pathfinder-haptic-navigation"
                target="_blank"
              >
                https://hackaday.io/project/2372-pathfinder-haptic-navigation
              </a>
            </div>
          </div>
          <div className="flex flex-col-reverse md:grid md:grid-cols-3 justify-between items-center mt-6">
            <div className="text rounded shadow-xl bg-white mb-6 p-6 col-span-2">
              Ed1NR is intended to aid special education teachers to continue
              math classes remotely for visually impaired children through a
              cost defective IoT haptic platform. This solution can have a
              scabale impact by making remote education accessible to students
              across developing nations with limited resources.
              <br />
              <br />
              For more info:
              <br />
              <a
                target="_blank"
                className="text-blue-500"
                href="https://hackaday.io/project/174587-ed1nr-remote-special-education"
              >
                https://hackaday.io/project/174587-ed1nr-remote-special-education
              </a>
            </div>
            <div class="bg-white shadow-xl rounded-t-xl md:ml-16 mb-6">
              <div class="p-6 bg-gradient-to-br from-purple-500 to-green-300 rounded-xl text-center">
                <img
                  src={require("../../assets/images/ed1nr.png")}
                  alt=""
                  class="h-56 w-full"
                />
              </div>
              <div class="px-4 w-full py-4 md:px-10">
                <h1 class="font-bold text-lg">Ed1NR</h1>
                <p class="py-4 w-full">
                  Remote Math Special education platform for visually impaired
                  kids
                </p>
                <div class="flex flex-wrap pt-8">
                  <div class="w-full md:w-1/3 text-sm font-medium">
                    Education
                  </div>
                  <div class="2/3">
                    <div class="text-sm font-medium">
                      {/* SHARE: */}
                      <a href="" class="text-blue-700 px-1 ">
                        {/* FACEBOOk */}
                      </a>
                      <a href="" class="text-blue-500 px-1 ">
                        {/* TWITTER */}
                      </a>
                      <a href="" class="text-red-600 px-1 ">
                        {/* GOOGLE+ */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:grid md:grid-cols-3 justify-between items-center mt-6">
            <div class="bg-white shadow-xl rounded-t-xl md:mr-16 mb-6">
              <div class="p-6 bg-gradient-to-br from-purple-500 to-green-300 rounded-xl text-center">
                <img
                  src={require("../../assets/images/Breathe_haptic 1.png")}
                  alt=""
                  class="h-56 w-full"
                />
              </div>
              <div class="px-4 w-full py-4 md:px-10">
                <h1 class="font-bold text-lg">Breathe for Apple Watch</h1>
                <p class="py-4 w-full">
                  Watch that helps you meditate and practice relaxed breathing
                </p>
                <div class="flex flex-wrap pt-8">
                  <div class="w-full md:w-1/3 text-sm font-medium">
                    Health and Wellness
                  </div>
                  <div class="2/3">
                    <div class="text-sm font-medium">
                      {/* SHARE: */}
                      <a href="" class="text-blue-700 px-1 ">
                        {/* FACEBOOk */}
                      </a>
                      <a href="" class="text-blue-500 px-1 ">
                        {/* TWITTER */}
                      </a>
                      <a href="" class="text-red-600 px-1 ">
                        {/* GOOGLE+ */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text rounded shadow-xl bg-white p-6 col-span-2">
              Breather enables the user to define how often and for how long, he
              or she would like to stop and take a few deep breaths. The watch
              then uses haptic technology to vibrate your wrist and remind you
              that it is time to relax. As you breathe slowly in and out, the
              watch lightly taps your wrist to guide you through the target
              speed of your breath using tactile feedback.
              <br />
              <br />
              For more info:
              <br />
              <a
                className="text-blue-500"
                href="https://blog.proto.io/4-apps-devices-making-haptic-technology/"
                target="_blank"
              >
                https://blog.proto.io/4-apps-devices-making-haptic-technology/
              </a>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <p className="text-2xl mt-6">
              Once you have chosen your project topic, gather all the
              requirements
              <br />
              and prioritize your project goals and features. Now you’re good to
              <br />
              start setting up hardware!
            </p>
            <Link
              to="/getting-started/haply-development-kit"
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
                    Haply Development Kit
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
