import React from "react";
import "../stylesheet/styles.css";
import Logo from '../../assets/images/PalmLoan.png'
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-1/2 h-[100] register-side-1 flex flex-col justify-center"></div>
      <div className="w-1/3 mx-auto flex flex-col py-[50px]">
      <img src={Logo} className="w-[65px] mb-3" alt="" />
        <h1 className="text-left font-bold md:text-3xl text-2xl mb-5">
          Sign up for free Account
        </h1>
        <form>
          <div className="flex flex-col md:flex-row space-x-10 py-2">
            <div className="flex flex-col w-1/2">
              <label className="py-2 font-medium">First Name <span className="text-red text-sm">*</span></label>
              <input
                type="text"
                placeholder="Enter Legal First Name"
                className="border p-4"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="py-2 font-medium">Last Name <span className="text-red text-sm">*</span></label>
              <input
                type="text"
                placeholder="Enter Legal Last Name"
                className="border p-4"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-x-10 py-2">
            <div className="flex flex-col w-1/2">
              <label className="py-2 font-medium">Email Address <span className="text-red text-sm">*</span></label>
              <input
                type="text"
                placeholder="Enter Valid Email Address"
                className="border p-4"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="py-2 font-medium">Phone Number e.g +234 <span className="text-red text-sm">*</span></label>
              <input
                type="number"
                placeholder="Enter Phone Number with country code"
                className="border p-4"
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <div className="flex flex-col">
              <label className="py-2 font-medium">Password <span className="text-red text-sm">*</span></label>
              <input
                type="password"
                placeholder="Enter Password"
                className="border p-4"
              />
            </div>
            <div className="flex flex-col">
              <label className="py-2 font-medium">Confim Password <span className="text-red text-sm">*</span></label>
              <input
                type="password"
                placeholder="Enter Confirm Password"
                className="border p-4"
              />
            </div>
          </div>
          <div className="flex flex-col py-2"></div>
          <div className="flex flex-row py-2 items-center justify-end w-[300px]"></div>
          <div className="flex-flex-col py-2">
            <button className="p-4 text-center text-white bg-blue w-full">
              Sign in
            </button>
          </div>

          <div className="py-3">
            <p className="font-medium tracking-wide text-center">
              Already a Member?{" "}
              <span className="text-blue underline"><Link to='/signin'>Sign in</Link></span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export function Signin() {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="w-1/2 h-[100] login-side-1 flex flex-col justify-center"></div>
        <div className="w-1/3 mx-auto flex flex-col py-[200px]">
        <img src={Logo} className="w-[65px] mb-3" alt="" />
          <h1 className="text-left font-bold md:text-3xl text-2xl mb-5">
            Sign in to your Account
          </h1>
          <form>
            <div className="flex flex-col py-2">
              <label className="py-2 font-medium">Email Address</label>
              <input
                type="text"
                placeholder="johndoe@example.com"
                className="border p-4"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="py-2 font-medium">Password</label>
              <input
                type="password"
                placeholder="********"
                className="border p-4"
              />
            </div>
            <div className="flex flex-row py-2 items-center justify-end w-[300px]"></div>
            <div className="flex-flex-col py-2">
              <button className="p-4 text-center text-white bg-blue w-full">
                Sign in
              </button>
            </div>

            <div className="py-5">
            <p className="font-medium tracking-wide text-center">
              Not yet a Member?{" "}
              <span className="text-blue underline"><Link to='/signup'>Sign up</Link></span> |{" "}
              <span className="text-blue underline">Forgot Password</span>
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
