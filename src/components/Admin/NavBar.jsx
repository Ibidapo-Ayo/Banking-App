import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/styles.css";
import { UserContext } from "../signup_pages/UserContext";
import { NavLink } from "./NavBar/nav_data";

import Logo from "../../assets/images/PalmLoan.png";
import dp from "../../assets/images/dp.jpg";
import { FiLogOut } from "react-icons/fi";

function NavBar() {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/signin");
      console.log("Logged out succesfully");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="w-[250px] nav flex flex-col hidden md:block items-center shadow justify-center px-0 pt-10">
        <div className="flex flex-col w-100 px-0 items-center space-y-3">
          <img src={Logo} className="w-[150px] " alt="" />
          <img src={dp} className="w-[70px] h-[70px] rounded-full" alt="" />
          <div
            className="flex flex-col
items-center -space-y-1"
          >
            <h3 className="text-[20px]">Ibidapo Ayomide</h3>
            <h3 className="text-[25px]">NGN 0.00</h3>
          </div>
        </div>

        <div className="mb-10 space-y-4 px-6">
          <hr />
          <h6 className="text-blue font-bold">Menu</h6>
          <ul className="space-y-5">
            {NavLink.map(menu_link => (
              <li
                key={menu_link.id}
                className="text-[20px] cursor-pointer w-100 flex flex-row space-x-1 items-center"
              >
                <span>{menu_link.navicon} </span>
                <span>{menu_link.navlink}</span>
              </li>
            ))}
            <li
              className="text-red cursor-pointer text-[20px] flex flex-row space-x-1 items-center"
              onClick={handleLogout}
            >
            <span><FiLogOut /></span>
            <span>  Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
