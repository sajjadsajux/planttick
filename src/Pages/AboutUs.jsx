import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen py-16 px-6 md:px-12 ">
      <div className="max-w-4xl mx-auto bg-white dark:bg-base-300 p-10 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">About Us</h1>

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
