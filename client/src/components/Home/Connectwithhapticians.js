import React from "react";
import World from "../../assets/images/world3.png";

export default function Connectwithhapticians() {
  return (
    <div className="mt-10 flex flex-col lg:flex-row text-center lg:text-left lg:justify-between lg:items-center">
      <img
        className="align-middle mb-6"
        style={{ backgroundColor: "#FDFDFD" }}
        src={World}
        alt="Hero Image"
      />
      <div className="text-center">
        <h1 className="text-4xl italic" style={{ color: "#091133" }}>
         Connect with hapticians
        </h1>
        <p className="mt-8 text-xl">
         Learn from experts and ask questions. Connect with hapticians around the world and get feedback on your projects.
        </p>
      </div>
    </div>
  );
}
