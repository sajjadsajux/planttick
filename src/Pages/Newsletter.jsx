import React, { use } from "react";
import Lottie from "lottie-react";
import plantAnimation from "../Animations/newsletter.json";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthContext";

const Newsletter = () => {
  const { user } = use(AuthContext);
  const handleNewsLetter = (e) => {
    e.preventDefault();
    toast(`Hey ${user ? user.displayName : ""}, you have successfully subscribed to our newsletter!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <section className="bg-white dark:bg-base-300 py-16 px-4 lg:px-20 rounded-lg container mx-auto shadow-lg my-20 dark:border-1 dark:border-white">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left: Lottie Animation */}
        <div className="w-full md:w-2/5 max-w-md mx-auto bg-white rounded-4xl mt-10">
          <div className="flex justify-center items-center   w-full">
            <Lottie animationData={plantAnimation} loop={true} style={{ height: 200 }} />
          </div>
        </div>

        {/* Right: Content and form */}
        <div className="w-full md:w-3/5">
          <h2 className="text-4xl font-bold text-primary mb-4">Join Our Plant Care Community</h2>
          <p className=" mb-8 text-lg leading-relaxed">Sign up to get easy and helpful tips about watering, feeding, and caring for your plants. Whether you’re a beginner or have a green thumb, our monthly newsletter will help your plants thrive all year long.</p>
          <form className="flex flex-col sm:flex-row gap-4 sm:gap-3" onSubmit={handleNewsLetter}>
            <input type="email" placeholder="Enter your email address" className="w-full sm:flex-1 px-5 py-4 rounded border border-green-300  placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-400" required />
            <button type="submit" className="bg-primary hover:bg-green-800 text-white font-semibold px-8 py-4 rounded transition">
              Subscribe
            </button>
          </form>
          <p className=" text-xs mt-4 max-w-md">We respect your privacy. Unsubscribe at any time — no spam, just good plant advice.</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
