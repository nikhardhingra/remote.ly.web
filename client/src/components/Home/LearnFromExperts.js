import React from "react";
import Experts from "../../assets/images/experts.png";

export default function LearnFromExperts() {
  return (
    <div className="mt-10 flex flex-col lg:flex-row text-center lg:text-left lg:justify-between lg:items-center">
      <img
        className="align-middle mb-6"
        style={{ backgroundColor: "#FDFDFD" }}
        src={Experts}
        alt="Hero Image"
      />
      <div className="text-center">
        <h1 className="text-4xl italic" style={{ color: "#091133" }}>
         Features
        </h1>
        <p className="mt-8 text-xl">
         Create your profile as a novice or expert haptician and customize it by adding your haptics-related projects and skills to share with the rest of the haptics community.
        </p>
      </div>
    </div>
  );
}
