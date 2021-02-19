import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default function GettingStarted() {
  return (
    <>
      <Navbar isAuthenticated={true} />
      <div className="bg-gray-100 p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-blue-600 text-2xl">
            Ready to start your Haptics project?
          </h3>
          <Link to="/getting-started/what-is-haptics">
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
          </Link>
        </div>
        <p className="mt-2">
          Navigate through the following steps to learn more about Haptics and
          get started on your project!
        </p>
      </div>
      <div className="bg-white p-10 flex justify-center items-center">
        <img src={require("../../assets/images/Roadmap.png")} width="70%" />
      </div>
    </>
  );
}
