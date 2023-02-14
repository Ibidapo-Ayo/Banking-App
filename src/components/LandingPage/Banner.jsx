import React from "react";
import "../../../src/components/stylesheet/styles.css";

function Banner() {
  return (
    <section id="hero">
      <div className="container flex w-100 flex-col-reverse space-y-0 md:space-y-0 md:flex-row justify-center items-center mx-auto mt-5 px-40">
        <div className="flex flex-col space-y-12  md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center mt-8 md:px-0 md:text-6xl md:text-left  banner_text">
            Borrow, <span className="text-blue">Save</span>, spend and invest
            with <span className="text-blue">Zero</span> collateral
          </h1>
          <p className="max-w-sm text-center text-gray  md:text-left">
            Apply for a loan now to meet needs like growing your business,
            paying rent, buying a car, paying school fees, etc.
          </p>
          <div className="flex justify-center md:justify-start">
          <button className="p-3 px-10 font-medium pt-2 text-white bg-purple-100 rounded-full baseline ">Apply Now</button></div>
        </div>
        <div className="md:w-1/2 w-60">
          <img className="" src="../../src/assets/images/bg.png" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
