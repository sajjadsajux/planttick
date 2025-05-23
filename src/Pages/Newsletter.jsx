import React from "react";
import Lottie from "lottie-react";
import plantAnimation from "../Animations/leaf.json"; // replace with your own Lottie JSON path

const Newsletter = () => {
  return (
    <section className="bg-green-50 py-16 px-8 rounded-lg max-w-6xl mx-auto shadow-lg my-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left: Lottie Animation */}
        <div className="w-full md:w-1/2 max-w-md mx-auto">
          <Lottie animationData={plantAnimation} loop={true} />
        </div>

        {/* Right: Content and form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-green-900 mb-4">Join Our Plant Care Community</h2>
          <p className="text-green-800 mb-8 text-lg leading-relaxed">Sign up to get easy and helpful tips about watering, feeding, and caring for your plants. Whether you’re a beginner or have a green thumb, our monthly newsletter will help your plants thrive all year long.</p>
          <form className="flex flex-col sm:flex-row gap-4 sm:gap-3">
            <input type="email" placeholder="Enter your email address" className="w-full sm:flex-1 px-5 py-4 rounded border border-green-300 text-green-900 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-400" required />
            <button type="submit" className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded transition">
              Subscribe
            </button>
          </form>
          <p className="text-green-600 text-xs mt-4 max-w-md">We respect your privacy. Unsubscribe at any time — no spam, just good plant advice.</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
