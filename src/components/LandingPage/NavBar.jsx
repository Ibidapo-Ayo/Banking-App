import React, {useContext} from "react";
import Logo from "../../assets/images/PalmLoan.png";
import { NavigationBarContext } from "../useContext";
import { Link } from "react-router-dom";

function NavBar() {
  const Links = [
    {
      text: "Loan"
    },
    {
      text: "Deposit"
    },
    {
      text: "Savings"
    },
    {
      text: "About us"
    },
    {
      text: "Contact"
    }
  ];
  const {clicked, setClicked} = useContext(NavigationBarContext)

  return (
    <div>
      <nav className="relative container mx-auto p-6">
        {/* Flex Container */}
        <div className="flex items-center justify-between">
          {/* Logo Name */}
          <div className="w-20">
            <img src={Logo} className="w-20" alt="" />
          </div>
          {/* Menu Items */}
          <div className="hidden md:flex space-x-5 font-medium ">
            {Links.map((NavLink, index) => (
              <a key={index} href="#" className=" hover:text-blue">
                {NavLink.text}
              </a>
            ))}
          </div>
          {/* Button */}
          <button className="hidden md:block p-3 px-10 font-medium pt-2 text-blue bg-gray-100 rounded-full baseline hover:bg-gray-200">
            <Link to='/signin'>Login</Link>
          </button>
          <button
            id="menu-btn"
            className={clicked ? "block open hamburger md:hidden focus:outline-none" : "md:hidden focus:outline-none hamburger closed"} onClick={()=>{
                setClicked((click) => !click)
            }}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* Hamburger Menu */}
        <div className="md:hidden">
          <div
            id="menu"
            className={clicked ? 'absolute flex flex-col items-center self-end block py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md': 'hidden'}
          >
            {Links.map((NavLink, index) => (
              <a key={index} href="#" className=" hover:text-blue">
                {NavLink.text}
              </a>
            ))}
             <button className="md:block p-3 px-10 font-medium pt-2 text-blue bg-gray-100 rounded-full baseline hover:bg-gray-200">
            <Link to='/signin'>Login</Link>
          </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
