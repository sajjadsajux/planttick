import React from "react";
import Lottie from "lottie-react";
import plantAnim from "../Animations/flowergrow.json";

const NewPlantsHeader = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex flex-col items-center justify-center">
        <Lottie animationData={plantAnim} style={{ height: 100, width: 100 }} loop={true} />
        <h2 className="text-3xl font-bold text-green-700 mt-2">New Plants</h2>
      </div>
    </div>
  );
};

export default NewPlantsHeader;
