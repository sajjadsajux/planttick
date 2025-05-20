import React from "react";
import { BounceLoader, FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <FadeLoader />
    </div>
  );
};

export default Loader;
