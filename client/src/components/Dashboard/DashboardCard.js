import React from "react";

const DashboardCard = ({ image, alt, heading, text, gradient }) => {
  return (
    <div className="shadow-lg rounded-lg m-10">
      <div
        className={`image-container bg-gradient-to-br ${gradient} rounded-lg p-6`}
      >
        <img className="w-full" src={image} alt={alt} />
      </div>
      <div className="content p-4">
        <h2 className="text-2xl font-bold">{heading}</h2>
        <p className="text-sm text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
