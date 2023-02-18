import React, { useContext, useState, useEffect } from "react";
import "../stylesheet/styles.css";
import Logo from "../../assets/images/PalmLoan.png";
import { Link, useNavigate } from "react-router-dom";
import { GlobalConText } from "../useContext";
import { UserContext } from "./UserContext";
import Spinner from "../Spinner";

export default function Signup() {
  const { showPassword, Loading } = useContext(GlobalConText);
  const [showPass, setShowPass] = showPassword;
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = Loading
  const { createUser } = useContext(UserContext);
  const setPasswordHandler = e => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  const EmailHandler = e => {
    setEmail(e.target.value);
  };

  const signupUsers = async () => {
    setIsLoading(true);
    try {
      await createUser(email, password, fname, lname, phone);
      navigate("/dashboard");
    } catch (e) {
      setError(e.code);

      if (e.code === "auth/network-request-failed") {
        setError(e.code + ", please check your internet connectivity");
      }
      setIsLoading(false);
      navigate("/signup");
    }
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="w-1/2 register-side-1 hidden md:block flex flex-col justify-center"></div>
          <div className="w-full container md:w-1/3 mx-auto flex flex-col py-[100px] px-[30px]">
            <img src={Logo} className="w-[65px] mb-3" alt="" />
            <h1 className="text-left font-bold md:text-3xl text-2xl mb-5">
              Sign up for free Account
            </h1>
            <p className="text-red">{error}</p>
            <div className="flex flex-row md:space-x-10 space-x-3 py-2">
              <div className="flex flex-col w-1/2">
                <label className="py-2 font-medium">
                  First Name <span className="text-red text-sm">*</span>
                </label>
                <input
                  type="text"
                  value={fname}
                  onChange={e => setFname(e.target.value)}
                  placeholder="Enter Legal First Name"
                  className="border p-4"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="py-2 font-medium">
                  Last Name <span className="text-red text-sm">*</span>
                </label>
                <input
                  type="text"
                  value={lname}
                  onChange={e => setLname(e.target.value)}
                  placeholder="Enter Legal Last Name"
                  className="border p-4"
                />
              </div>
            </div>
            <div className="flex flex-row md:space-x-10 space-x-3 py-2">
              <div className="flex flex-col w-1/2">
                <label className="py-2 font-medium">
                  Email Address <span className="text-red text-sm">*</span>
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={EmailHandler}
                  placeholder="Enter Valid Email Address"
                  className="border p-4"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="py-2 font-medium">
                  Phone Number e.g +234{" "}
                  <span className="text-red text-sm">*</span>
                </label>
                <input
                  type="number"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="Enter Phone Number with country code"
                  className="border p-4"
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <div className="flex flex-col w-100">
                <label className="py-2 font-medium">
                  Password <span className="text-red text-sm">*</span>
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={setPasswordHandler}
                  placeholder="Enter Password"
                  className="border p-4"
                />
                <div className="flex flex-col justify-end items-end pt-3 -mt-7">
                  <span
                    className={
                      password === ""
                        ? "hidden"
                        : "block cursor-pointer text-center rounded-full font-semibold p-1 w-[80px] bg-gray-200 showPassword mx-3"
                    }
                    onClick={() => setShowPass(click => !click)}
                  >
                    {showPass ? "Hide" : "Show"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-2"></div>
            <div className="flex flex-row py-2 items-center justify-end w-[300px]"></div>
            <div className="flex-flex-col py-2">
              <button
                className="p-4 text-center text-white bg-blue w-full"
                onClick={signupUsers}
              >
                Sign in
              </button>
            </div>

            <div className="py-3">
              <p className="font-medium tracking-wide text-center">
                Already a Member?{" "}
                <span className="text-blue underline">
                  <Link to="/signin">Sign in</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function Signin() {
  const { showPassword, Loading } = useContext(GlobalConText);
  const [isLoading, setIsLoading] = Loading
  const [email, setEmail] = useState("");
  const [showPass, setShowPass] = showPassword;
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signIn } = useContext(UserContext);

  const SignInHandler = async e => {
    setIsLoading(true);
    try {
      await signIn(email, password);
      navigate("/dashboard");
    } catch (e) {
      setIsLoading(false);
      navigate("/signin");
      setError(e.code);
      if (e.code === "auth/network-request-failed") {
        setError(e.code + ", please check your internet connectivity");
      }
      console.log(e.message);
    }
  };

  const setPasswordHandler = e => {
    setPassword(e.target.value);
  };
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="w-1/2 h-[100] hidden md:block login-side-1 flex flex-col p-5">
            <Link to="/">
              <p className="text-white">Go back</p>
            </Link>
          </div>
          <div className="w-full container mx-auto flex flex-col py-[100px] px-[20px] md:py-[200px] md:w-1/3">
            <img src={Logo} className="w-[65px] mb-3" alt="" />
            <h1 className="text-left font-bold md:text-3xl text-2xl mb-5">
              Sign in to your Account
            </h1>
            <>
              <p className="text-red">{error}</p>
              <div className="flex flex-col py-2">
                <label className="py-2 font-medium">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="johndoe@example.com"
                  className="border p-4"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="py-2 font-medium">Password</label>

                <div className="flex flex-col">
                  <input
                    type={showPass ? "text" : "password"}
                    value={password}
                    placeholder="********"
                    className="border p-4"
                    onChange={setPasswordHandler}
                  />
                  <div className="flex flex-col justify-end items-end pt-3 -mt-7">
                    <span
                      className={
                        password === ""
                          ? "hidden"
                          : "block cursor-pointer text-center rounded-full font-semibold p-1 w-[80px] bg-gray-200 showPassword mx-3"
                      }
                      onClick={() => setShowPass(click => !click)}
                    >
                      {showPass ? "Hide" : "Show"}
                    </span>
                  </div>

                  <div className="flex flex-col justify-end items-end pt-3 -mb-6 mt-3">
                    <span className="text-blue cursor-pointer">
                      Forgot Password?
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row py-2 items-center justify-end w-[300px]"></div>
              <div className="flex-flex-col py-2">
                <button
                  className="p-4 text-center text-white bg-blue w-full"
                  onClick={SignInHandler}
                >
                  Sign in
                </button>
              </div>

              <div className="py-5">
                <p className="font-medium tracking-wide text-center">
                  Not yet a Member?{" "}
                  <span className="text-blue underline">
                    <Link to="/signup">Sign up</Link>
                  </span>{" "}
                </p>
              </div>
            </>
          </div>
        </div>
      )}
    </div>
  );
}
