import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default function Remotely() {
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
          <h4 className="font-bold mb-4">How do I setup my account?</h4>
          <p>
            You can register as a new user by entering your username, password,
            email and choosing your level of expertise in haptics. Once you have
            done so, you can sign in using your login credentials and create
            your profile by entering all the required fields.
          </p>
        </div>
        <div className="text bg-white p-6 rounded-lg shadow-lg mb-12 mt-6 text-lg">
          <h4 className="font-bold mb-4">
            What features are available on Remote.Ly?
          </h4>
          <p>
            Remote.ly aims to be your one stop-shop guide to everything you need
            to know about haptics! Remote.ly offers 3 main features: Creating
            your user profile, search functionality and learning how to kick
            start your haptics project.
            <br />
            <br />
            <ol>
              <li>
                1. As a user, you can create your profile with the option of
                adding your haptics-related projects to share with the rest of
                the haptics community of novices and experts.
              </li>
              <li>
                2. As a user, you can search for specific users within the
                community whether that is a novice or expert haptician and
                connect with them. You can also search by project type or by
                specific skills that users possess as per their profile. Please
                note: you can search by only one of the criteria (project type,
                user or skill) at a time.
              </li>
              <li>
                3. As a user, you can get access to detailed information and
                resources that explain how the hardware and software components
                of a haptics project work as well as how to navigate through the
                key phases of a successful haptics project.{" "}
              </li>
            </ol>
          </p>
        </div>
        <div className="text bg-white p-6 rounded-lg shadow-lg mb-12 mt-6 text-lg">
          <h4 className="font-bold mb-4">
            How can I connect with different users on this website?
          </h4>
          <p>
            <ol>
              1. Using the search functionality, you can search for a specific
              user name (if you already know it) or you can search by expertise
              level (novice or expert haptician).{" "}
            </ol>
            <ol>
              2. Once you hit search, the user profiles will populate in the
              search---- results table.{" "}
            </ol>
            <ol>
              3. Click on the user profile of your interest and click on the
              “Contact Info” button on the top right of the profile to view
              their contact information.
            </ol>
            <ol>
              4. Connect with the user based on the preferred means of
              communication. Ex: email or LinkedIn or GitHub.{" "}
            </ol>
          </p>
        </div>
      </div>
    </>
  );
}
