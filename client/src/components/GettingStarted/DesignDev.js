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
                src={require("../../assets/images/image 28.png")}
                // className="w-full"
                alt=""
              />
            </div>
            <div className="text-below flex items-center">
              <div className="number mr-2 rounded-full w-5 h-5 p-4 bg-red-400 flex justify-center items-center text-white">
                1
              </div>
              <div className="text-lg">Brainstorm Designs</div>
            </div>
          </div>
          <p className="my-6 col-span-4 bg-white border-purple-500 border rounded-lg p-6">
            Once requirements have been finalized on what haptics product you want to develop, brainstorm different behaviours and designs to prototype. 
          </p>
        </div>
        <div className="grid grid-cols-5 m-12 items-center mt-3">
          <div className="left mb-6 md:mb-0 w-56 h-56 mr-24">
            <div
              className="image-container bg-white p-6 flex justify-center items-center rounded-full"
              style={{ border: "3px solid #5F2EEA" }}
            >
              <img
                src={require("../../assets/images/image 29.png")}
                // className="w-full"
                alt=""
              />
            </div>
            <div className="text-below flex items-center">
              <div className="number mr-2 rounded-full w-5 h-5 p-4 bg-red-400 flex justify-center items-center text-white">
                2
              </div>
              <div className="text-lg">Implement low-fidelity prototypes</div>
            </div>
          </div>
          <p className="my-6 col-span-4 bg-white border-purple-500 border rounded-lg p-6">
          Low-fidelity or low-tech prototype is a semi-finished prototype that focuses on function, structure, process. It provides the simplest framework and elements of the product. It can take the form of sketches, storyboards, gestures or 3D models. You can use MIRO, Figma or Visio as they have great templates to get you started. 
          </p>
        </div>
        <div className="grid grid-cols-5 m-12 items-center mt-3">
          <div className="left mb-6 md:mb-0 w-56 h-56 mr-24">
            <div
              className="image-container bg-white p-6 flex justify-center items-center rounded-full"
              style={{ border: "3px solid #5F2EEA" }}
            >
              <img
                src={require("../../assets/images/image 30.png")}
                className="w-52"
                alt=""
              />
            </div>
            <div className="text-below flex items-center">
              <div className="number mr-2 rounded-full w-5 h-5 p-4 bg-red-400 flex justify-center items-center text-white">
                3
              </div>
              <div className="text-lg">Evaluate low-fidelty prototypes</div>
            </div>
          </div>
          <p className="my-6 col-span-4 bg-white border-purple-500 border rounded-lg p-6">
          Seek feedback on your low-fidelity prototype from target users or users in the Remote.Ly community. Ensure you are going through ideas quickly and do not spend time implementing bad ideas.   </p>
        </div>
        <div className="grid grid-cols-5 m-12 items-center mt-3">
          <div className="left mb-6 md:mb-0 w-56 h-56 mr-24">
            <div
              className="image-container bg-white p-6 flex justify-center items-center rounded-full"
              style={{ border: "3px solid #5F2EEA" }}
            >
              <img
                src={require("../../assets/images/image 31.png")}
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
           Make sure you record the feedback from the low-fidelity evalutations and iterate on your design accordingly. 
          </p>
        </div>
        <div className="grid grid-cols-5 m-12 items-center mt-3">
          <div className="left mb-6 md:mb-0 w-56 h-56 mr-24">
            <div
              className="image-container bg-white p-6 flex justify-center items-center rounded-full"
              style={{ border: "3px solid #5F2EEA" }}
            >
              <img
                src={require("../../assets/images/image 32.png")}
                // className="w-full"
                alt=""
              />
            </div>
            <div className="text-below flex items-center">
              <div className="number mr-2 rounded-full w-5 h-5 p-4 bg-red-400 flex justify-center items-center text-white">
                5
              </div>
              <div className="text-lg">Implement med-fidelity protoypes</div>
            </div>
          </div>
          <p className="my-6 col-span-4 bg-white border-purple-500 border rounded-lg p-6">
           A medium-fidelity or medium-tech prototype has limited functionality but it has clickable areas that present the interactions and navigation possibilities of an application. Whereas, a high-fidelity prototype is a comprehensive and interactive prototype that is close to the final products with lots of functions, interactions and details. You can use Figma, Balsamiq and Mockplus to make medium-fidelity prototypes. 
          </p>
        </div>
        <div className="grid grid-cols-5 m-12 items-center mt-3">
          <div className="left mb-6 md:mb-0 w-56 h-56 mr-24">
            <div
              className="image-container bg-white p-6 flex justify-center items-center rounded-full"
              style={{ border: "3px solid #5F2EEA" }}
            >
              <img
                src={require("../../assets/images/image 33.png")}
                // className="w-full"
                alt=""
              />
            </div>
            <div className="text-below flex items-center">
              <div className="number mr-2 rounded-full w-5 h-5 p-4 bg-red-400 flex justify-center items-center text-white">
                6
              </div>
              <div className="text-lg">Evaluate med-fidelity prototypes</div>
            </div>
          </div>
          <p className="my-6 col-span-4 bg-white border-purple-500 border rounded-lg p-6">
           Seek feedback on your medium-fidelity prototype from target users or experts in your solution area. Make sure you record the feedback and iterate on your design accordingly. 
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
