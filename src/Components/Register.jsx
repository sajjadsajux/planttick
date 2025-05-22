import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import { Bounce, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { signUpUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());
    const { email, password, photo, name } = newUser;
    setPasswordError("");
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    signUpUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success(`Welcome, ${name} Registration done, redirected to homepage...`, {
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

            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errc = error.message;
        toast.error(`${errc}`, {
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

  return (
    <div className="md:h-[100vh]    flex items-center justify-center container mx-auto bg-green-50 p-2">
      <div className="container  mx-auto max-w-md p-8 space-y-3 rounded-xl bg-base-100 text-base-content shadow-md">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form className="space-y-6" onSubmit={handleRegister}>
          {/* name */}
          <div className="space-y-1 text-sm">
            <label className="block text-base-content">Name</label>
            <input required type="text" name="name" placeholder="Name" className="w-full px-4 py-3 rounded-md border border-base-300 bg-base-100 text-base-content" />
          </div>
          {/* email */}
          <div className="space-y-1 text-sm">
            <label className="block text-base-content">Email</label>
            <input required type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border border-base-300 bg-base-100 text-base-content" />
          </div>
          {/* photourl */}
          <div className="space-y-1 text-sm">
            <label className="block text-base-content">PhotoURL</label>
            <input required type="url" name="photo" placeholder="PhotoURL" className="w-full px-4 py-3 rounded-md border border-base-300 bg-base-100 text-base-content" />
          </div>
          {/* password */}
          <div className="space-y-1 text-sm relative">
            <label className="block text-base-content">Password</label>
            <input required type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-base-300 bg-base-100 text-base-content" />
            <span className="absolute right-3 top-10 cursor-pointer text-base-content" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {passwordError && <p className="text-red-400 text-sm mt-1">{passwordError}</p>}
          </div>

          <button type="submit" className="block w-full p-3 text-center rounded-sm bg-primary text-primary-content hover:bg-primary-focus">
            Register
          </button>
        </form>
        <p className="text-xs text-center sm:px-6 text-base-content">
          Already have an account?{" "}
          <Link to="/login" className="underline text-primary">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
