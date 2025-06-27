import React from "react";
import useScrollToTop from "../Utilities/ScrollToTop";

const AboutUs = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen  px-6 md:px-12 ">
      <h1 className="text-3xl font-bold my-8 text-center text-primary">About Us</h1>
      <div className="max-w-4xl mx-auto bg-white dark:bg-base-300 p-10 rounded-xl shadow-md">
        <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-200">
          Welcome to <span className="font-semibold">PlantTick</span> – your green companion in tracking, caring, and growing your beloved plants. We’re a passionate team of nature lovers and tech enthusiasts who believe that every plant deserves timely care and attention.
        </p>

        <p className="text-md mb-6 text-gray-600 dark:text-gray-300">
          Our mission is to make plant care simple, enjoyable, and accessible for everyone. Whether you're a seasoned gardener or just getting started, PlantTick is designed to help you stay on top of watering schedules, monitor plant health, and cultivate a thriving green space.
        </p>

        <p className="text-md text-gray-600 dark:text-gray-300">We’re constantly improving and adding new features to serve our community better. Thank you for being a part of our journey. Let’s grow together – one plant at a time! 🌱</p>
      </div>
    </div>
  );
};

export default AboutUs;
