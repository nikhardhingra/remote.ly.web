import React from "react";
import GetStartedImage from "../../assets/images/undraw_smart_home_28oy 1.png";

export default function GetStarted() {
  return (
    <div className="mt-10 flex flex-col-reverse lg:flex-row text-center lg:text-left lg:justify-between lg:items-center">
      <div className="text-center">
        <h1 className="text-4xl italic" style={{ color: "#091133" }}>
          Get started on your Haptics project today
        </h1>
        <p className="mt-8 text-xl">
          With Remote.ly, learn how to setup the hardware and software
          components for your haptics prototype and look at sample projects for
          inspiration!
        </p>
      </div>
      <img
        className="align-middle mb-6 lg:ml-44"
        style={{ backgroundColor: "#FDFDFD" }}
        src={GetStartedImage}
        alt="Hero Image"
      />
    </div>
  );
}
