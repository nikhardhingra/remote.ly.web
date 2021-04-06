import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Timeline from "./Timeline";

export default function DesignDev() {
  return (
    <div>
      <div>
        <Navbar isAuthenticated={true} />
        <div className="bg-gray-100 p-6 relative pb-16">
          <Timeline activeIndex={4} />
          <h3 className="text-blue-600 text-3xl">Basic functions of Arduino</h3>
          <div className="text bg-white p-6 shadow-xl mb-6 mt-6 text-lg">
            Arduino is an open-source electronics platform that has been the
            brain of thousands of projects, from everyday objects to complex
            scientific instruments. Arduino was born at the Ivrea Interaction
            Design Institute as an easy tool for fast prototyping, aimed at
            students without a background in electronics and programming. As
            soon as it reached a wider community, the Arduino board became
            completely open-source, empowering users to build them independently
            and eventually adapt them to their particular needs.
            <br />
            <br />
            Arduino is universally used for haptics projects because of its
            simplicity and accessible user experience. Arduino boards are able
            to read inputs - light on a sensor, a finger on a button, or a
            Twitter message - and turn it into an output - activating a motor,
            turning on an LED, publishing something online. The user can tell
            the Arduino board what to do by sending a set of instructions to the
            microcontroller on the board. Additionally, Arduino boards are
            inexpensive, work on cross platforms such as Windows, Macintosh OSX
            and Linux, and they have extensible hardware and software
            components.
            <br />
            <br />
            <b>Code Syntax snippets:</b>
            <br />
            <ul>
              <li>
                <u>Setup and loop</u>
              </li>
              <li>
                <u>Button mouse control</u>
              </li>
              <li>
                <u>Analog input</u>
              </li>
              <li>
                <u>Array</u>
              </li>
              <li>
                <u>For loop iteration</u>
              </li>
            </ul>
            <br />
            <b>
              For more examples of code snippets of Arduino functions, please
              visit:
            </b>
            <br />
            <a
              href="https://www.arduino.cc/en/Tutorial/BuiltInExamples"
              target="_blank"
              className="text-blue-500"
            >
              https://www.arduino.cc/en/Tutorial/BuiltInExamples
            </a>
            <br />
            <b>For more information about Arduino, please visit:</b>
            <br />
            <a
              href="https://www.arduino.cc/en/Tutorial/HomePage"
              target="_blank"
              className="text-blue-500"
            >
              https://www.arduino.cc/en/Tutorial/HomePage
            </a>
          </div>
          <h3 className="text-blue-600 text-3xl">
            How can I install and setup Arduino?
          </h3>
          <div className="text bg-white p-6 shadow-xl mb-6 mt-6 text-lg">
            Below are the steps to install Arduino:
            <ul className="ml-4" style={{ listStyleType: "disc" }}>
              <li>
                Download from{" "}
                <a
                  target="_blank"
                  className="text-blue-500"
                  href="https://processing.org/download/"
                >
                  https://processing.org/download/
                </a>
              </li>
              <li>
                Reference the guide to ensure you are downloading the correct
                Arduino Desktop IDE version for your OS (Windows, Linux or
                MacOS)
              </li>
              <li>
                Alternatively, you can use Arduino web editor to write code and
                upload sketches to any official Arduino board from your web
                browser
              </li>
              <li>Accept Terms and Conditions</li>
              <li>Open 'Arduino' to begin</li>
            </ul>
          </div>
          <h3 className="text-blue-600 text-3xl">
            Sample projects using Processing
          </h3>
          <div className="text bg-white p-6 shadow-xl mb-6 mt-6 text-lg">
            Refer to this link to learn about haptics projects built in Arduino:{" "}
            <br />
            <a
              href="https://create.arduino.cc/projecthub"
              target="_blank"
              className="text-blue-500"
            >
              https://create.arduino.cc/projecthub
            </a>
          </div>
          <div className="flex items-end justify-between">
            <Link
              to="/getting-started/wrap-up"
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
                  <span className="text text-white text-lg mr-2">Wrap Up!</span>
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
