import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate } from "react-router";
import Loader from "../Utilities/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
