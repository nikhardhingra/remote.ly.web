import React from "react";
import WhatIsHapticsImage from "../../assets/images/Rectangle 474.png";
import { Link } from "react-router-dom";

export default function WhatIsHaptics() {
  return (
    <div
      style={{ backgroundColor: "#FFFFFF" }}
      className="flex flex-col lg:flex-row text-center lg:text-left lg:justify-between lg:items-center p-6"
    >
      <div>
        <h1 className="text-5xl" style={{ color: "#091133" }}>
          What is Haptics?
        </h1>
        <p className="mt-8 text-xl">
          Haptics is the science and technology of transmitting and
          understanding information through the sense of touch. It also relates
          to the use of tactile sensations in interfaces. A common example is
          the haptic feedback in mobile phones that is getting increasingly
          subtle and sophisticated.
        </p>
      </div>
      <img
        className="align-middle lg:ml-44"
        src={WhatIsHapticsImage}
        alt="Hero Image"
      />
    </div>
  );
}
