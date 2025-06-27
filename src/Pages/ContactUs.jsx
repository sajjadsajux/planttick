import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Bounce, toast } from "react-toastify";

const ContactUs = () => {
  const { user } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    toast(`Hey ${user ? user.displayName : ""}, Our team will contact you soong regarding your query`, {
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
    <div className="min-h-screen py-16 px-6 md:px-12  text-primary dark:text-green-100 ">
      <div className="max-w-3xl mx-auto bg-white dark:bg-base-300 p-10 border dark:border-white">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <p className="text-center mb-10 text-lg">We'd love to hear from you! Whether you have a question, feedback, or just want to say hello — feel free to reach out.</p>
        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required className="input input-bordered w-full bg-green-100 dark:bg-green-800 placeholder-green-700 dark:placeholder-green-300" />
          <input type="email" name="email" placeholder="Your Email" required className="input input-bordered w-full bg-green-100 dark:bg-green-800 placeholder-green-700 dark:placeholder-green-300" />
          <textarea name="message" placeholder="Your Message" rows="5" required className="input input-bordered w-full bg-green-100 dark:bg-green-800 placeholder-green-700 dark:placeholder-green-300"></textarea>
          <button type="submit" className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
