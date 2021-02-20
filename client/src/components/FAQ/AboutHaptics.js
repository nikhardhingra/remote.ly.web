import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default function AboutHaptics() {
  return (
    <>
      <Navbar isAuthenticated={true} />
      <div className="bg-gray-100 p-6">
        <div className="flex">
          <Link to="/faq" className="cursor-pointer mr-2">
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
              <a>
                <i
                  class="fas fa-arrow-left absolute text-white"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                ></i>
              </a>
            </div>
          </Link>
          <h3 className="text-blue-600 text-3xl mb-12">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="text bg-white p-6 rounded-lg shadow-lg mb-12 mt-6 text-lg">
          <h4 className="font-bold mb-4">What is haptics technology?</h4>
          <p>
            Haptic technologies provide a way of recreating the sense of touch
            by applying a series of forces, vibrations and motions to the person
            using the haptic technology. Because it is a sensory technology,
            haptics work alongside sensors which can detect the environment that
            the technology is being operated in, be it in a game, virtual
            reality, an automobile or remote device, and provide an appropriate
            (and detectable) response.
            <br />
            <br />
            Common examples of haptics technology are gaming consoles,
            automobiles and robotics!
          </p>
        </div>
        <div className="text bg-white p-6 rounded-lg shadow-lg mb-12 mt-6 text-lg">
          <h4 className="font-bold mb-4">
            What are the key stages of a haptics project life cycle?
          </h4>
          <p>
            As outlined in the Getting Started pages of Remote.ly, the key
            stages of a haptics project life cycle are as follows:
            <br />
            <br />
            <ol>
              <li>1. What is haptics?</li>
              <li>2. Identify the problem space</li>
              <li>3. Assemble the haptics kit</li>
              <li>
                4. Configure the software requirements (using Processing and
                Arduino)
              </li>
              <li>5. Design and software development</li>
              <li>6. Software testing and validation</li>
            </ol>
          </p>
        </div>
        <div className="text bg-white p-6 rounded-lg shadow-lg mb-12 mt-6 text-lg">
          <h4 className="font-bold mb-4">
            Are there any other resources to help me get started with assembling
            the haptics hardware?
          </h4>
          <p>
            Remote.ly provides a high-level overview of the instructions to
            assemble the haply device using the haply development kit. However,
            below are some more useful resources to help you:
            <br />
            <br />
            <ol>
              <li>
                1. Follow this link to learn about all the folders, files and
                libraries required to build the Haply kit and set up software:
                <br />
                <a
                  className="text-blue-500"
                  href="https://github.com/HaplyHaptics/Getting-Started"
                  target="_blank"
                >
                  https://github.com/HaplyHaptics/Getting-Started
                </a>
              </li>
              <li>
                2. Follow this link to access step-by-step instructions on how
                to assemble the haptics hardware:
                <br />
                <a
                  className="text-blue-500"
                  href="https://github.com/HaplyHaptics/Getting-Started/tree/master/The-Haply-Development-Kit"
                  target="_blank"
                >
                  https://github.com/HaplyHaptics/Getting-Started/tree/master/The-Haply-Development-Kit
                </a>
              </li>
              <li>
                3. Follow this video tutorial to access step-by-step
                instructions on how to assemble the haptics hardware:
                <br />
                <a
                  className="text-blue-500"
                  href="https://www.youtube.com/watch?v=tQ1dvmKBscw&feature=emb_title"
                  target="_blank"
                >
                  https://www.youtube.com/watch?v=tQ1dvmKBscw&feature=emb_title
                </a>
              </li>
            </ol>
          </p>
        </div>
        <div className="text bg-white p-6 rounded-lg shadow-lg mb-12 mt-6 text-lg">
          <h4 className="font-bold mb-4">
            Are there any other resources to help me get started with the
            software component using Processing?
          </h4>
          <p>
            Remote.ly provides a high-level overview of the software components
            of a haptics project as well as how to use Processing in your
            project. However, below are some more useful resources to help you:
            <br />
            <br />
            <ol>
              <li>
                1. Follow this link to download Processing:
                <br />
                <a
                  className="text-blue-500"
                  href="https://processing.org/download/"
                  target="_blank"
                >
                  https://processing.org/download/
                </a>
              </li>
              <li>
                2. Run this test program on Processing called Hello_Wall within
                the folder called HaplyHaptic/GettingStarted Github to make sure
                that Processing works correctly for you:
                <br />
                <a
                  className="text-blue-500"
                  href="https://github.com/HaplyHaptics/Getting-Started/tree/master/Hello_Wall"
                  target="_blank"
                >
                  https://github.com/HaplyHaptics/Getting-Started/tree/master/Hello_Wall
                </a>
                <br />
                <br />
                <p className="text-sm text-gray-700">
                  Please note: you will have to change your port number in line
                  104.
                </p>
              </li>
            </ol>
          </p>
        </div>
        <div className="text bg-white p-6 rounded-lg shadow-lg mb-12 mt-6 text-lg">
          <h4 className="font-bold mb-4">
            Are there any other resources to help me get started with the
            software component using Arduino?
          </h4>
          <p>
            Remote.ly provides a high-level overview of the software components
            of a haptics project as well as how to use Arduino in your project.
            However, below are some more useful resources to help you:
            <br />
            <br />
            <ol>
              <li>
                1. Follow this link to install and setup Arduino (make sure to
                download the required libraries):
                <br />
                <a
                  className="text-blue-500"
                  target="_blank"
                  href="https://github.com/HaplyHaptics/Getting-Started/tree/master/Software-Setup"
                >
                  https://github.com/HaplyHaptics/Getting-Started/tree/master/Software-Setup
                </a>
              </li>
              <li>
                2. Follow this link to download Arduino v1.8.9:
                <br />
                <a
                  className="text-blue-500"
                  target="_blank"
                  href="https://www.arduino.cc/en/Main/OldSoftwareReleases#previous"
                >
                  https://www.arduino.cc/en/Main/OldSoftwareReleases#previous
                </a>
              </li>
              <li>
                3. Follow this link to download the Haply M0 firmware as well as
                the required code:
                <br />
                <a
                  className="text-blue-500"
                  target="_blank"
                  href="https://github.com/HaplyHaptics/Haply-Arduino-Firmware-Versions"
                >
                  https://github.com/HaplyHaptics/Haply-Arduino-Firmware-Versions
                </a>
              </li>
            </ol>
          </p>
        </div>
        <div className="text bg-white p-6 rounded-lg shadow-lg mb-12 mt-6 text-lg">
          <h4 className="font-bold mb-4">
            Where can I find sample projects using haptic technology?
          </h4>
          <p>
            Follow this link to look at sample projects using Haptics technology
            and Processing software: <br />
            <a
              className="text-blue-500"
              target="_blank"
              href="https://github.com/mllemango/HaplyDemo"
            >
              https://github.com/mllemango/HaplyDemo
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
