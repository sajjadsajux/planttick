import React from "react";
import Lottie from "lottie-react";
import plantAnim from "./plantrun.json";
const CalendarHeader = () => {
  return (
    <div className="text-center mb-4">
      <div className="flex flex-col items-center justify-center">
        <Lottie animationData={plantAnim} loop={true} style={{ height: 200 }} />
        <h2 id="plant-care-basics-heading" className="text-3xl font-extrabold text-green-700 mt-2">
          Plant Care Calendar
        </h2>
      </div>
    </div>
  );
};

export default CalendarHeader;
