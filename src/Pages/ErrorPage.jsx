import React from "react";
import { Link } from "react-router";
import ErrorHeader from "../Animations/ErrorHeader";
import SetTitle from "../Utilities/SetTitle";

const ErrorPage = () => {
  SetTitle("Page Not Found - PlantTick");
  return (
    <div className="">
      <section
        className="flex items-center justify-center h-screen p-8 bg-gradient-to-br from-green-700 via-green-800 to-black
 text-white py-10 md:py-0"
      >
        <div className="flex flex-col items-center text-center">
          <ErrorHeader></ErrorHeader>
          <p className="text-3xl md:text-4xl font-semibold mt-6">Sorry, we couldn't find this page.</p>
          <p className="mt-4 mb-8 text-gray-300 max-w-md">But don't worry—you can find lots of interesting things on our homepage.</p>
          <Link to="/" className="px-6 py-3 rounded-full bg-white text-green-800 font-bold shadow-md hover:bg-green-100 transition duration-300">
            Back to Homepage
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
