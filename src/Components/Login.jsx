import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import { Bounce, toast } from "react-toastify";

const Login = () => {
  const { signInUser, signInGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const LoggedUser = Object.fromEntries(formData.entries());
    const { email, password } = LoggedUser;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success(`Welcome back, ${user.displayName}, you've successfully logged in!`, {
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
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error.code);
        toast.error("Incorrect email or password. Please try again.", {
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
      });
  };

  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        toast.success(`Welcome ${user.displayName}, you're logged in with Google!`, {
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
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error.code);
        toast.error(`Please accept the Google sign-in popup to continue.`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="md:h-[100vh]    flex items-center justify-center container mx-auto bg-base-300 p-2">
      <div className="container  mx-auto max-w-md p-8 space-y-3 rounded-xl bg-base-100 text-base-content shadow-md ">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="space-y-1 text-sm">
            <label className="block text-gray-600 dark:text-gray-300">Email</label>
            <input required type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-base-200 text-base-content" />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block text-gray-600 dark:text-gray-300">Password</label>
            <input required type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-base-200 text-base-content" />
            <div className="flex justify-end text-xs text-gray-500 dark:text-gray-400">
              <Link>Forgot Password?</Link>
            </div>
          </div>
          <button type="submit" className="block w-full p-3 text-center rounded-sm bg-primary text-white hover:bg-green-700 transition">
            Log in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300 dark:bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-500 dark:text-gray-400">Login with Google</p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-sm btn btn-ghost">
            <FcGoogle size={30} />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-500 dark:text-gray-400">
          Don't have an account?{" "}
          <Link to="/Register" className="underline text-primary">
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
