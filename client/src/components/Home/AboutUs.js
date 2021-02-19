import React from "react";

export default function AboutUs() {
  return (
    <div className="p-6 bg-gray-100" id="about">
      <h1
        className="text-5xl text-center lg:text-left"
        style={{ color: "#091133" }}
      >
        About Us
      </h1>
      <div className="text-center">
        <p className="m-6 bg-white border-purple-500 border rounded-lg p-6">
          We are a group of fourth-year Management Engineering students at the
          University of Waterloo. As novice hapticians, we realized that there
          is a lack of community of hapticians. Our goal is to help novice
          hapticians get started on their haptics projects, learn from learn
          from experts and solve haptics-related challenges.
        </p>
        <div className="grid content-center grid-cols-1 md:grid-cols-4">
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
      </div>
    </div>
  );
}
