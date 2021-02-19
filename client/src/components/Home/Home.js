import React, { Component } from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import WhatIsHaptics from "./WhatIsHaptics";
import WhatsIncluded from "./WhatsIncluded";
import AboutUs from "./AboutUs";

export default class Home extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#FDFDFD", minHeight: "100vh" }}>
        <Navbar isAuthenticated={false} />
        <Hero />
        <WhatIsHaptics />
        <WhatsIncluded />
        <AboutUs />
      </div>
    );
  }
}
