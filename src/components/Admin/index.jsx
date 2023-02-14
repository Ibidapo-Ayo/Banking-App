import React from "react";
import Dashboard from "./Dashboard";
import Services from "./Services";
import NavBar from "./NavBar";
import Transaction from "./Transaction";
import Card from "./Card";

function DashBoard() {
  return (
    <div className="">
      <Dashboard />
      <div className="flex flex-row space-x-20">
        <div className="w-1/7">
          <NavBar />
        </div>
        <div className="w-full">
          <Services />
        </div>
        <div className="hidden md:block flex flex-col space-y-10 w-1/2 shadow py-20">
          <div>
            <Card />
          </div>
          <div>
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
