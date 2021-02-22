import React from "react";
import FAQImage from "../../assets/images/undraw_Questions_re_1fy7.png";
import DashboardCard from "../Dashboard/DashboardCard";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

export default function FAQ() {
  return (
    <>
      <Navbar isAuthenticated={true} />
      <div className="bg-gray-100 p-6 flex flex-wrap md:flex-nowrap -mx-1 lg:-mx-4 justify-evenly">
        <DashboardCard
          link="/faq/remote.ly"
          image={FAQImage}
          gradient="from-blue-300 to-green-300"
          heading="About Remote.ly"
          text=""
        />
        <DashboardCard
          link="/faq/about-haptics"
          image={FAQImage}
          gradient="from-blue-300 to-green-300"
          heading="About Haptics technology"
          text=""
        />
      </div>
    </>
  );
}
