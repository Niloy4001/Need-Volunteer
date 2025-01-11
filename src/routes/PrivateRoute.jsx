import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (!user) {
    return <Navigate to={"/login"} state={pathname}></Navigate>;
  }

  if (loading) {
    return (
      <div className="w-full h-400px flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
