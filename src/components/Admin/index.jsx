import React, {useState, useEffect} from "react";
import Dashboard from "./Dashboard";
import Services from "./Services";
import NavBar from "./NavBar";
import Transaction from "./Transaction";
import Card from "./Card";
import Spinner from "../Spinner";

function DashBoard() {

  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    setIsLoading(true)
    setTimeout(()=>{
      setIsLoading(false)
    }, 2000)
    },[]);
  return (
    <div className="">
    {isLoading ? <Spinner /> :
     <div>
    <Dashboard />
      <div className="flex flex-row space-x-20">
        <div className="w-[13%]">
          <NavBar />
        </div>
        <div className="w-[57%]">
          <Services />
        </div>
        <div className="hidden md:block flex flex-col space-y-10 w-[25%] shadow py-20">
          <div>
            <Card />
          </div>
          <div>
            <Transaction />
          </div>
        </div>
      </div>
    </div>
    }
     </div>
  );
}

export default DashBoard;
