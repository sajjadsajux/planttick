import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

const Login = () => {
  const { signInUser, signInGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const LoggedUser = Object.fromEntries(formData.entries());
    const { email, password } = LoggedUser;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100 mx-auto lg:mt-20">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="space-y-1 text-sm">
            <label className="block text-gray-400">Email</label>
            <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 " />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block text-gray-400">Password</label>
            <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 " />
            <div className="flex justify-end text-xs text-gray-400">
              <Link>Forgot Password?</Link>
            </div>
          </div>
          <button type="submit" className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">
            Log in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-400 ">Login with Google</p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-sm btn btn-ghost">
            <FcGoogle size={30} />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-400">
          Don't have an account?{" "}
          <Link to="/Register" className="underline text-gray-100">
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
