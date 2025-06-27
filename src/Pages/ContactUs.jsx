import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Bounce, toast } from "react-toastify";
import useScrollToTop from "../Utilities/ScrollToTop";

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
  useScrollToTop();

  return (
    <div className="min-h-screen  px-6 md:px-12  text-primary dark:text-green-100 ">
      <h2 className="text-3xl font-bold my-8 text-center text-primary">Contact Us</h2>
      <div className="max-w-4xl mx-auto bg-white dark:bg-base-300 p-10 border dark:border-white">
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
