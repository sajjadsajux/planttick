import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

const Register = () => {
  const { signUpUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());
    const { email, password } = newUser;
    console.log(email);
    signUpUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100 mx-auto lg:mt-20">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form className="space-y-6" onSubmit={handleRegister}>
          {/* name */}
          <div className="space-y-1 text-sm">
            <label className="block text-gray-400">Name</label>
            <input type="text" name="name" placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 " />
          </div>
          {/* email */}
          <div className="space-y-1 text-sm">
            <label className="block text-gray-400">Email</label>
            <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 " />
          </div>
          {/* photourl */}
          <div className="space-y-1 text-sm">
            <label className="block text-gray-400">PhotoURL</label>
            <input type="url" name="photo" placeholder="PhotoURL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 " />
          </div>
          {/* Pass */}
          <div className="space-y-1 text-sm">
            <label className="block text-gray-400">Password</label>
            <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 " />
          </div>
          <button type="submit" className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">
            Register
          </button>
        </form>
        <p className="text-xs text-center sm:px-6 text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="underline text-gray-100">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
