import React from "react";
import { BounceLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <BounceLoader color="#000000" />
    </div>
  );
};

export default Loader;
