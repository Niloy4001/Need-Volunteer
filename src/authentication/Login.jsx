import React, { useContext, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { HiOutlineEyeOff } from "react-icons/hi";
import { RiEyeLine } from "react-icons/ri";
import { AuthContext } from "../context/AuthProvider";
import background from "../assets/cool-background.png";
import { Helmet } from "react-helmet-async";
const LogIn = () => {
  const { logInByGoogle, logInByEmailPassword, user, setForgotEmail } =
    useContext(AuthContext);
  const { state } = useLocation();
  const [errorMessage, setErrorMessage] = useState("");
  const [eye, setEye] = useState(false);

  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  // handle google log in
  const handleGoogleLogIn = () => {
   
    logInByGoogle()
      .then((res) => {
        
        navigate(state ? `${state}` : "/");
      })
      .catch((err) => setErrorMessage(err.message));
  };

  // handle form on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    logInByEmailPassword(email, password)
      .then((res) => {
        e.target.reset();
        navigate(state ? `${state}` : "/");
      })
      .catch((err) => setErrorMessage(err.message));
  };

  // handle forgot
  const handleForgot = () => {
    setForgotEmail("");
    const email = emailRef.current.value;
    email && setForgotEmail(email);
    navigate("/auth/forgot");
  };
  return (
    <div className="w-[90%] mx-auto">
      <Helmet>
        <title>Login | NEED VOLUNTEER</title>
      </Helmet>
      <div className="grid md:grid-cols-2 justify-center grid-cols-1  items-center py-14 px-3 text-text">
        <div className="card  max-w-lg  p-4 shrink-0 shadow-2xl">
          {/* title */}
          <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-center">
            Log In
          </h1>
          {/* google log in */}
          <div className="w-full px-8">
            <button
              onClick={handleGoogleLogIn}
              className="btn text-[10px] md:text-sm border border-solid border-text hover:text-white hover:bg-text w-full flex items-center justify-center space-x-2 mb-2"
            >
              <FaGoogle className="text-text " />
              <span>Login with Google</span>
            </button>
          </div>
          {/* divider */}
          <div className="px-8 mt-4">
            <div className="divider my-0">OR</div>
          </div>
          {/* form  */}
          <form className="card-body text-text" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                ref={emailRef}
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                ref={passwordRef}
                type={eye ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <span
                onClick={() => setEye(!eye)}
                className="absolute top-[52px] right-[8px] cursor-pointer"
              >
                {eye ? <HiOutlineEyeOff /> : <RiEyeLine />}
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn shadow-2xl text-white hover:bg-primary bg-primary">
                Login
              </button>
            </div>
            <div>
              <p className="text-left text-red-600">
                {errorMessage && errorMessage}{" "}
              </p>
            </div>
            <div>
              <p className="text-center my-3">
                Don't Have an Account ?{" "}
                <Link to={"/register"} className="text-red-600 font-medium">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div>
          <img src={background} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
