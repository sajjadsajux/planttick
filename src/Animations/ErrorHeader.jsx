import React from "react";
import Lottie from "lottie-react";
import errorAnim from "./errorpage.json"; // Adjust path to your JSON

const ErrorHeader = () => {
  return (
    <div className="text-center mb-6">
      <div className="flex flex-col items-center justify-center">
        <Lottie animationData={errorAnim} loop={true} style={{ height: 400 }} />
      </div>
    </div>
  );
};

export default ErrorHeader;
