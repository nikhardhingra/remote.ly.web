import React from "react";
import WhatIsHapticsImage from "../../assets/images/Rectangle 474.png";
import LearnFromExperts from "./LearnFromExperts";
import GetStarted from "./GetStarted";

export default function WhatIsHaptics() {
  return (
    <div className="p-6" id="features">
      <h1
        className="text-5xl text-center lg:text-left"
        style={{ color: "#091133" }}
      >
        Features
      </h1>
      <LearnFromExperts />
      <GetStarted />
    </div>
  );
}
