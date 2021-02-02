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
          Haptic technology uses the sense of touch to communicate with the
          user, the same way that computer graphics uses vision. You use haptics
          everyday. Think of your smartphones with touch screens!
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
