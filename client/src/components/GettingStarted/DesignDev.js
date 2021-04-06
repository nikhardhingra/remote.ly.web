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
          <Timeline activeIndex={5} />
          <h3 className="text-blue-600 text-3xl">Conceptual Design</h3>
          <div className="text bg-white p-6 shadow-xl mb-6 mt-6 text-lg">
            Conceptual design takes place in the early stages of the design process. Its purpose is to outline the form and function of the product / solution, and it incorporates the clients requirements into the design. This means that conceptual design must be done after requirements have been established. Conceptual design usually consists of sketches / drawings, illustrations, and sometimes 3D models.  At this stage, the designer is more concerned with exploring ideas using different methods rather than presenting detailed dimensions.
            <br />
          <div className="grid grid-cols-5 m-12 items-center mt-3">
          <div className="left mb-6 md:mb-0 w-56 h-56 mr-12">
            <div
              className="image-container bg-white p-6 flex justify-center items-center rounded-full"
              style={{ border: "3px solid #5F2EEA" }}
            >
              <img
                src={require("../../assets/images/image 21.png")}
                // className="w-full"
                alt=""
              />
            </div>
            <div className="text-below flex items-center">
              <div className="number mr-2 rounded-full w-5 h-5 p-4 bg-red-400 flex justify-center items-center text-white">
                1
              </div>
              <div className="text-lg">Research on Haptics</div>
            </div>
          </div>
          <p className="my-6 col-span-4 bg-white border-purple-500 border rounded-lg p-6">
            We studied research papers written by several expert hapticians and
            designers such as Professor Oliver Schneider. We learned about major
            challenges faced by inexperienced designers and hapticians while
            building projects. Some of the main challenges we found are:
            <br /> 1. Novices tend to ignore many of the design choices such as
            choosing appropriate haptic and graphic feedback or the right build
            environment.
            <br /> 2. Novices lack expertise in working with hardware, software,
            conceptual design and evaluation.
            <br /> 3. There is a lack of haptic hardware, methods to describe,
            share and test ideas as well as minimal supporting documentation to
            help novices.
            <br /> 4. Lack of a tool makes it difficult to verify software setup
            and seek feedback design ideas without in-person meetings.
          </p>
        </div>
        <div className="grid grid-cols-5 m-12 items-center mt-3">
          <div className="left mb-6 md:mb-0 w-56 h-56 mr-24">
            <div
              className="image-container bg-white p-6 flex justify-center items-center rounded-full"
              style={{ border: "3px solid #5F2EEA" }}
            >
              <img
                src={require("../../assets/images/image 22.png")}
                // className="w-full"
                alt=""
              />
            </div>
            <div className="text-below flex items-center">
              <div className="number mr-2 rounded-full w-5 h-5 p-4 bg-red-400 flex justify-center items-center text-white">
                2
              </div>
              <div className="text-lg">Build Prototype</div>
            </div>
          </div>
          <p className="my-6 col-span-4 bg-white border-purple-500 border rounded-lg p-6">
            We took the role of novice hapticians and designers ourselves. To
            better understand the problem space and pain points, we built a
            haptics prototype to feel the texture and coarseness of igneous
            rocks.
          </p>
        </div>
        <div className="grid grid-cols-5 m-12 items-center mt-3">
          <div className="left mb-6 md:mb-0 w-56 h-56 mr-24">
            <div
              className="image-container bg-white p-6 flex justify-center items-center rounded-full"
              style={{ border: "3px solid #5F2EEA" }}
            >
              <img
                src={require("../../assets/images/image 24.png")}
                className="w-52"
                alt=""
              />
            </div>
            <div className="text-below flex items-center">
              <div className="number mr-2 rounded-full w-5 h-5 p-4 bg-red-400 flex justify-center items-center text-white">
                3
              </div>
              <div className="text-lg">Document Challenges</div>
            </div>
          </div>
          <p className="my-6 col-span-4 bg-white border-purple-500 border rounded-lg p-6">
            We logged challenges that we faced at every stage of prototyping
            from assembling the Haply device, setting up software, to collecting
            feedback and designing. This helped us to identify the challenges
            that novice hapticians face while building haptics projects.
          </p>
        </div>
        <div className="grid grid-cols-5 m-12 items-center mt-3">
          <div className="left mb-6 md:mb-0 w-56 h-56 mr-24">
            <div
              className="image-container bg-white p-6 flex justify-center items-center rounded-full"
              style={{ border: "3px solid #5F2EEA" }}
            >
              <img
                src={require("../../assets/images/image 23.png")}
                // className="w-full"
                alt=""
              />
            </div>
            <div className="text-below flex items-center">
              <div className="number mr-2 rounded-full w-5 h-5 p-4 bg-red-400 flex justify-center items-center text-white">
                4
              </div>
              <div className="text-lg">Prioritize Requirements</div>
            </div>
          </div>
          <p className="my-6 col-span-4 bg-white border-purple-500 border rounded-lg p-6">
            We consolidated the challenges and translated them into must-have,
            good-to-have and nice-to-have requirements for our final solution.
            To prioritize the requirements, we used a Feasibility-Scope matrix
            to identify which requirements best address our problem. Feasibility
            refers to how achievable it is for us to implement the solution for
            a specific requirement in the final tool. Scope refers to the
            correlation between the specific requirement and need identified by
            challenges.
          </p>
        </div>
        <div className="grid grid-cols-5 m-12 items-center mt-3">
          <div className="left mb-6 md:mb-0 w-56 h-56 mr-24">
            <div
              className="image-container bg-white p-6 flex justify-center items-center rounded-full"
              style={{ border: "3px solid #5F2EEA" }}
            >
              <img
                src={require("../../assets/images/image 25.png")}
                // className="w-full"
                alt=""
              />
            </div>
            <div className="text-below flex items-center">
              <div className="number mr-2 rounded-full w-5 h-5 p-4 bg-red-400 flex justify-center items-center text-white">
                5
              </div>
              <div className="text-lg">Design and Develop</div>
            </div>
          </div>
          <p className="my-6 col-span-4 bg-white border-purple-500 border rounded-lg p-6">
            We designed and developed Remote.Ly using the MERN stack for its
            software components. Remote.Ly is the one-stop-shop platform to help
            novice hapticians get started on their haptics projects, learn from
            the community of other novice or expert hapticians and identify
            features to improve remote collaboration.
          </p>
        </div>
        <div className="grid grid-cols-5 m-12 items-center mt-3">
          <div className="left mb-6 md:mb-0 w-56 h-56 mr-24">
            <div
              className="image-container bg-white p-6 flex justify-center items-center rounded-full"
              style={{ border: "3px solid #5F2EEA" }}
            >
              <img
                src={require("../../assets/images/image 26.png")}
                // className="w-full"
                alt=""
              />
            </div>
            <div className="text-below flex items-center">
              <div className="number mr-2 rounded-full w-5 h-5 p-4 bg-red-400 flex justify-center items-center text-white">
                6
              </div>
              <div className="text-lg">Test and Launch</div>
            </div>
          </div>
          <p className="my-6 col-span-4 bg-white border-purple-500 border rounded-lg p-6">
            We conducted thorough design validation and verification testing for
            Remote.Ly. We aim to promote Remote.Ly on a global scale in the near
            future in order to help novice and expert hapticians across the
            world!
          </p>
        </div>
           
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
