import React, { useContext, useState } from "react";
import { MainServices } from "./Services/ServicesData";
import { UserContext } from "../signup_pages/UserContext"
import TopUp from "./Banking/TopUp";

function Services() {
  const { user } = useContext(UserContext);
  return (
    <div className="container mt-10 w-100">
      {/* <h2 className="text-blue font-bold md:text-[20px]">
        Dashboard {user && user.displayName}
      </h2> */}
      <div className="grid grid-cols-3 gap-4">
     
        <div className="w-[280px] h-[220px] bg-gray-100 flex flex-col rounded-[5px] px-3 py-3">
        <h3 className="text-[20px] font-semibold">My Balance</h3>
        <h3 className="text-[30px] text-center font-medium mt-3">NGN 0.00</h3>
        <button className="bg-purple-100 p-3 w-[150px] rounded-[5px] mx-auto text-white mt-5 mb-4">Add Fund</button>
        <p className="underline text-center text-[10px] text-purple-100 cursor-pointer">Transaction history</p>
        </div>
        <TopUp />
        </div>
    </div>
  );
}

export default Services;
