import React, { useState } from "react";
import VideoModal from "./VideoModal";
import PartAModal from "./PartAModal";
import PartBModal from "./PartBModal";
import PartCModal from "./PartCModal";
import PartDModal from "./PartDModal";
import PartEModal from "./PartEModal";
import PartFModal from "./PartFModal";
import PartGModal from "./PartGModal";
import { Link } from "react-router-dom";
import MyLink from "./MyLink";
import Navbar from "../Navbar";

export default function HaplyDevKit() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showPartAModal, setShowPartAModal] = useState(false);
  const [showPartBModal, setShowPartBModal] = useState(false);
  const [showPartCModal, setShowPartCModal] = useState(false);
  const [showPartDModal, setShowPartDModal] = useState(false);
  const [showPartEModal, setShowPartEModal] = useState(false);
  const [showPartFModal, setShowPartFModal] = useState(false);
  const [showPartGModal, setShowPartGModal] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  return (
    <div>
      <Navbar isAuthenticated={true} />
      <div className="bg-gray-100 p-6 relative pb-16">
        <div className="flex justify-between">
          <h3 className="text-blue-600 text-3xl mb-6">
            What is the Haply Development Kit?
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
                  <MyLink to="/getting-started/configure-processing">
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
        <div className="flex flex-col-reverse lg:flex-row items-center mb-10">
          <p className="text bg-white p-6 rounded shadow-xl lg:mr-10">
            The Haply Development Kit is a robust and adaptable open-source
            hardware development platform for haptic applications. It is
            designed to be accessible to novices and experts , the kit allows
            you to quickly setup and interact with a haptic simulation using a
            2-degree-of-freedom pantograph device.
            <br />
            <br />
            <br />
            You can purchase the kit from CanHaptics or Haply. For more
            information, please refer to:
            <br />
            <a className="text-blue-500" href="http://www.haply.co/">
              http://www.haply.co/
            </a>
          </p>
          <img
            className="mb-4"
            src={require("../../assets/images/haply device 1.png")}
            alt=""
          />
        </div>
        <h3 className="text-blue-600 text-3xl mb-6">
          Components of the Haply Development Kit?
        </h3>
        <img
          src={require("../../assets/images/haply kit assembly 1.png")}
          alt=""
        />
        <div className="text bg-white p-6 shadow-xl mb-6 mt-6 text-lg">
          Components of the Haply development kit include:
          <ul>
            <li>1x Power supply</li>
            <li>1x Micro USB cable</li>
            <li>4x Suction cup feet</li>
            <li>1x 3D printed motor housing</li>
            <li>2x Motors</li>
            <li>1x 3D printed motor stand</li>
            <li>1x Board Case Top</li>
            <li>2x 3D printed L1 arm linkages</li>
            <li>2x Acrylic L2 arm linkages</li>
            <li>Large and small Allen Keys</li>
            <li>End effector and arm assembly screws</li>
            <li>2x Dev board extension wires</li>
            <li>1x Wire adapter board</li>
            <li>1x Acrylic plate</li>
            <li>1x Board Case Bottom</li>
            <li>1x 3D printed Base</li>
            <li>1x Haply Board</li>
            <li>1x 3D printed end effector</li>
            <li>
              1x Screw Set
              <ul class="list-disc ml-6">
                <li>2x 2-56 screws (Motor stand) </li>
                <li>4x M2 screws (Motors)</li>
                <li>3x 2-56 screws (Acrylic Plate)** </li>
                <li>2x 2-56 screws black (Wire adapter board)</li>
                <li>4x 2-56 screws (Board Case)*** </li>
                <li>1x ¾" 4-40 screw (Motor stand)</li>
                <li>2x 4-40 set screws black (Arm linkages)</li>
              </ul>
            </li>
          </ul>
          <br />
          <b>
            ** If the acrylic plate and 3D printed base are already attached,
            this set of screws aren't needed and wont be included
          </b>{" "}
          <br />
          <b>
            *** If you ordered an M0 board, the case only requires one 2-56
            screw. Only one will be included
          </b>
        </div>
        <h3 className="text-blue-600 text-3xl mb-6">
          Steps to assemble the Haply device
        </h3>
        <div className="flex justify-center">
          <div className="cards flex items-center">
            <div
              onClick={() => setShowVideoModal(true)}
              className="card rounded-lg cursor-pointer h-24 text-center bg-purple-400 m-4 py-6 px-4 text-white w-56"
            >
              Follow a Video <br />
              Tutorial
            </div>
            <div
              onClick={() => setShowPartAModal(true)}
              className="card rounded-lg cursor-pointer h-24 text-center bg-purple-400 m-4 py-6 px-4 text-white w-56"
            >
              Follow a Step-by-Step Guide
            </div>
          </div>
        </div>
        <h3 className="text-blue-600 text-3xl mb-6">
          How can I use the Haply device?
        </h3>
        <p className="max-w-4xl text-lg">
          The Haply project is intended to provide novice designers and
          developers a platform from which to explore the field of haptics. The
          Haply board is a highly robust and configurable open-source platform
          ideal for haptic and robotic development.
          <br />
          <br />
          The Haptics Application Programming Interface (hAPI) is a modular tool
          that lets users quickly assemble a variety of haptic robots, ranging
          from one to four degrees of freedom, using the same set of hardware
          and programming tools. We hope people will be inspired to build new
          tools to interface with the hAPI and share them with the community.
          <br />
          <br />
          For more information, please refer to:
          <br />
          <a
            className="text-blue-500"
            href="https://github.com/HaplyHaptics/Getting-Started/tree/master/The-Haply-Development-Kit"
            target="_blank"
          >
            https://github.com/HaplyHaptics/Getting-Started/tree/master/The-Haply-Development-Kit
          </a>
          <br />
          <br />
          Contact for more information:{" "}
          <a href="mailto:haplyrobotics@gmail.com" className="text-blue-500">
            haplyrobotics@gmail.com
          </a>
        </p>

        <Link
          to="/getting-started/configure-processing"
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
                Configure Software - Processing
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
      {showVideoModal && (
        <VideoModal toggleModal={() => setShowVideoModal(false)} />
      )}
      {showPartAModal && (
        <PartAModal
          toggleModal={() => setShowPartAModal(false)}
          nextModal={() => setShowPartBModal(true)}
        />
      )}
      {showPartBModal && (
        <PartBModal
          toggleModal={() => setShowPartBModal(false)}
          prevModal={() => setShowPartAModal(true)}
          nextModal={() => setShowPartCModal(true)}
        />
      )}
      {showPartCModal && (
        <PartCModal
          toggleModal={() => setShowPartCModal(false)}
          prevModal={() => setShowPartBModal(true)}
          nextModal={() => setShowPartDModal(true)}
        />
      )}
      {showPartDModal && (
        <PartDModal
          toggleModal={() => setShowPartDModal(false)}
          prevModal={() => setShowPartCModal(true)}
          nextModal={() => setShowPartEModal(true)}
        />
      )}
      {showPartEModal && (
        <PartEModal
          toggleModal={() => setShowPartEModal(false)}
          prevModal={() => setShowPartDModal(true)}
          nextModal={() => setShowPartFModal(true)}
        />
      )}
      {showPartFModal && (
        <PartFModal
          toggleModal={() => setShowPartFModal(false)}
          prevModal={() => setShowPartEModal(true)}
          nextModal={() => setShowPartGModal(true)}
        />
      )}
      {showPartGModal && (
        <PartGModal
          toggleModal={() => setShowPartGModal(false)}
          prevModal={() => setShowPartFModal(true)}
        />
      )}
    </div>
  );
}
