import React, {useState} from "react";
import "./styles/styles.css";
import Logo from "../../assets/images/PalmLoan.png";
import dp from "../../assets/images/dp.jpg";

function Dashboard() {
    const [search, setSearch] = useState('')
  return (
    <div>
      <div className="flex flex-row justify-between items-center  shadow md:shadow-2xl w-full px-5 md:px-18 py-2">
        <div className="flex flex-row justify-between items-center md:w-1/2 w-0">
          <div className="hidden md:block">
            <img src={Logo} className="w-1/3" alt="" />
          </div>
          <div className="hidden md:block">
          <form action="#">
          <input type="text" placeholder="Search" className="bg-gray-200 border-none outline-none search-form p-4 rounded-2xl" value={search} onChange={(e)=> setSearch(e.target.value)}/>
          </form>
          </div>
        </div>
        <div className="flex flex-row-reverse md:flex-row justify-between items-center md:w-1/5 w-full">
          <div className="flex flex-row justify-between w-1/3">
            <div>Icon</div>
            <div>Icon</div>
          </div>
          <div className="shadow w-10 h-10 md:w-20 md:h-20 flex justify-center items-center rounded-full">
            <img
              src={dp}
              className="w-10 h-10 md:w-20 md:h-20 rounded-full"
              alt="This is the Profile Pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
