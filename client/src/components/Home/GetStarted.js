import React from "react";
import GetStartedImage from "../../assets/images/undraw_smart_home_28oy 1.png";
import ExpertImage from "../../assets/images/world3.png";

export default function GetStarted() {
  return (
    <div className="mt-10 flex flex-col-reverse lg:flex-row text-center lg:text-left lg:justify-between lg:items-center">
      <div className="text-center">
        <h1 className="text-4xl italic" style={{ color: "#091133" }}>
          Get started on your Haptics project today
        </h1>
        <p className="mt-8 text-xl">
         Learn more about haptics, how to setup your haptics kit, and software components. Take a look at some sample projects for inspiration and get started today!
        </p>
      </div>
      <img
        className="align-middle mb-6 lg:ml-44"
        style={{ backgroundColor: "#FDFDFD" }}
        src={GetStartedImage}
        alt="Hero Image"
      />
    </div>
    <div className="mt-10 flex flex-col-reverse lg:flex-row text-center lg:text-left lg:justify-between lg:items-center">
      <div className="text-center">
        <h1 className="text-4xl italic" style={{ color: "#091133" }}>
          Connect with hapticians
        </h1>
        <p className="mt-8 text-xl">
         Learn from experts and ask questions. Connect with hapticians around the world and get feedback on your projects.
        </p>
      </div>
      <img
        className="align-middle mb-6 lg:ml-44"
        style={{ backgroundColor: "#FDFDFD" }}
        src={ExpertImage}
        alt="Expert Image"
      />
    </div>
  );
}
