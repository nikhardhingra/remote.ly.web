import React from "react";
import Navbar from "../Navbar";

function OurJourney() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 p-6">
        <h3 className="text-3xl text-center lg:text-left text-blue-700">
          Who are we?
        </h3>
        <div className="grid items-center justify-between content-center grid-cols-1 md:grid-cols-4">
          <div className="person flex flex-col m-6">
            <img
              src={require("../../assets/images/Sunaina.png")}
              className="m-6"
            />
            <div className="person-details bg-white border-purple-500 border rounded-lg p-4 mt-2">
              <h3 className="font-semibold text-xl">Sunaina Basa</h3>
              <p>Content Lead</p>
            </div>
          </div>
          <div className="person flex flex-col m-6">
            <img
              src={require("../../assets/images/Riya.png")}
              className="m-6"
            />
            <div className="person-details bg-white border-purple-500 border rounded-lg p-4 mt-2">
              <h3 className="font-semibold text-xl">Riya Adukia</h3>
              <p>Design Lead</p>
            </div>
          </div>
          <div className="person flex flex-col m-6">
            <img
              src={require("../../assets/images/Jayant.png")}
              className="m-6"
            />
            <div className="person-details bg-white border-purple-500 border rounded-lg p-4 mt-2">
              <h3 className="font-semibold text-xl">Jayant Arora</h3>
              <p>Design Lead</p>
            </div>
          </div>
          <div className="person flex flex-col m-6">
            <img
              src={require("../../assets/images/Nikhar.png")}
              className="m-6"
            />
            <div className="person-details bg-white border-purple-500 border rounded-lg p-4 mt-2">
              <h3 className="font-semibold text-xl">Nikhar Dhingra</h3>
              <p>Tech Lead</p>
            </div>
          </div>
        </div>
        <p className="m-6 bg-white border-purple-500 border text-center rounded-lg p-6">
          Being undergraduate students who struggled to familiarize ourselves
          with remote learning and project group work during the pandemic, our
          team decided to build a product that would improve this experience. To
          take this up a notch, we wanted to build a solution for projects that
          require you to interact with your surroundings. Physical interactive
          technology is incredibly difficult to learn and accomplish in-person,
          let alone to work with remotely. We felt passionately about this pain
          point and came together to find a solution, now named Remote.Ly!
        </p>
        <h3 className="text-3xl text-center lg:text-left text-blue-700">
          Our Journey
        </h3>
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
            <br /> 4. Lack of means to verify correct software setup, device
            output and seek feedback design ideas without in-person meetings.
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
            The team takes on the role of novice hapticians (i.e. users) and
            designers ourselves while building a haptics prototype to feel the
            texture and coarseness of igneous rocks, to better understand the
            problem space and user pain points.
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
            from assembling the Haply device, setting up software, collecting
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
            The team consolidated the challenges and translated them into
            must-have, good-to-have and nice-to-have requirements for our final
            solution. To prioritize the requirements, the team used a
            Feasibility-Scope matrix to identify which requirements best address
            our problem. Feasibility refers to how realizable it is for the team
            to implement the solution for a specific requirement in the final
            tool. Scope refers to the correlation between the specific
            requirement and need identified by challenges.
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
            We designed and developed Remote.Ly using the Haply Development kit
            for hardware, and Processing, Arduino, MERN stack for software
            components. Remote.Ly is the one-stop-shop platform to help novice
            hapticians get started on their haptics projects, learn from the
            community of other novice or expert hapticians and identify features
            to improve remote collaboration.
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
            The team conducted thorough design validation and verification
            testing for Remote.Ly. We aim to promote Remote.Ly on a global scale
            in the near future in order to help novice and expert hapticians
            across the world!
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurJourney;
