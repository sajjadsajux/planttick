import React from "react";
import Lottie from "lottie-react";
import plantAnim from "../Animations/leaf.json"; // adjust path to your Lottie JSON file

const PlantCareHeader = () => {
  return (
    <div className="text-center mb-4">
      <div className="flex flex-col items-center justify-center">
        <Lottie animationData={plantAnim} loop={true} style={{ height: 100 }} />
        <h2 id="plant-care-basics-heading" className="text-3xl font-extrabold text-green-700 mt-2">
          Plant Care Basics
        </h2>
      </div>
    </div>
  );
};

export default PlantCareHeader;
