import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Timeline from "./Timeline";

export default function ConfigureProcessing() {
  return (
    <div>
      <div>
        <Navbar isAuthenticated={true} />
        <div className="bg-gray-100 p-6 relative pb-16">
          <Timeline activeIndex={3} />
          <h3 className="text-blue-600 text-3xl">
            Basic functions of Processing
          </h3>
          <div className="text bg-white p-6 shadow-xl mb-6 mt-6 text-lg">
            Processing was designed as a first programming language. This was inspired by older languages like BASIC and Logo , as well as the experiences of students with the curriculum.
            <br />
            <br />
            Processing is used worldwide today in high schools, entry-level college courses, computer science programs to teach introductory computing exercises. The Processing approach has also been applied to electronics through the Arduino and Wiring projects. Arduino uses a syntax inspired by that used with Processing, and continues to use a modified version of the Processing programming environment to make it easier for students to learn how to program robots and countless other electronics projects.
            <br />
            <br />
            <b>
              For more information on real-life applications of Processing,
              please visit:
            </b>
            <br />
            <a
              href="https://processing.org/overview/"
              target="_blank"
              className="text-blue-500"
            >
              https://processing.org/overview/
            </a>
            <br />
            <br />
            <b>Code Syntax snippets:</b>
            <br />
            <ul>
              <li>
                <u>Setup and Draw</u>
              </li>
              <li>
                <u>Loop</u>
              </li>
              <li>
                <u>Functions</u>
              </li>
              <li>
                <u>Width and Height</u>
              </li>
            </ul>
            <br />
            <b>For more examples of Processing, please visit:</b>
            <br />
            <a
              href="https://processing.org/examples/"
              target="_blank"
              className="text-blue-500"
            >
              https://processing.org/examples/
            </a>
          </div>
          <h3 className="text-blue-600 text-3xl">
            How can I install and setup Processing?
          </h3>
          <div className="text bg-white p-6 shadow-xl mb-6 mt-6 text-lg">
            Below are the steps to install Processing:
            <ul className="ml-4" style={{ listStyleType: "disc" }}>
              <li>
                Visit{" "}
                <a
                  target="_blank"
                  className="text-blue-500"
                  href="https://processing.org/download/"
                >
                  https://processing.org/download/
                </a>
              </li>
              <li>
                Download version 3.5.4 for your OS (Windows, Linux or MacOS)
              </li>
              <li>Run Installer</li>
            </ul>
          </div>
          <h3 className="text-blue-600 text-3xl">
            Sample projects using Processing
          </h3>
          <div className="text bg-white p-6 shadow-xl mb-6 mt-6 text-lg">
            Refer to this link to learn about haptics projects built in
            Processing: <br />
            <a
              href="https://github.com/mllemango/HaplyDemo"
              target="_blank"
              className="text-blue-500"
            >
              https://github.com/mllemango/HaplyDemo
            </a>
          </div>

           <h3 className="text-blue-600 text-3xl mb-6">
          Additional resources to help get started on  Processing</h3>
        <div className="flex flex-col-reverse lg:flex-row items-center mb-10">
        <p className="text bg-white p-6 rounded shadow-xl lg:mr-10">
          Remote.ly provides a high-level overview of the software components of a haptics project as well as how to use Processing in your project. However, below are some more useful resources to help you:
          <br />
          1. Follow <a className="text-blue-500"
                     href="https://processing.org/download/"
                      target="_blank">this</a> link to download Processing
   <br />
          2.  Run <a className="text-blue-500"
                     href="https://github.com/HaplyHaptics/Getting-Started/tree/master/Hello_Wall"
                      target="_blank">this test program</a> test program on Processing called Hello_Wall within the folder called HaplyHaptic/GettingStarted Github to make sure that Processing works correctly for you. Please note: you will have to change your port number in line 104. 
            <br />
          </p>
        </div>

          <div className="flex items-end justify-between">
            <Link
              to="/getting-started/configure-arduino"
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
                    Arduino
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
