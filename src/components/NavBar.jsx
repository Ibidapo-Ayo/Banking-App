import React from 'react'
import Logo from '../assets/images/PalmLoan.png'

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
        },
    ]
  return (
    <div>
      <nav className="relative container mx-auto p-6">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
      {/* Logo Name */}
     <div className="w-20"><img src={Logo} className="w-20" alt=""/></div>
       {/* Menu Items */}
       <div className="hidden md:flex space-x-5 font-medium ">
      {Links.map((NavLink, index) => (
          <a key={index} href="#" className=" hover:text-blue">{NavLink.text}</a>
      ))}
      </div>
      {/* Button */}
    <button className="hidden  md:block p-3 px-10 font-medium pt-2 text-blue bg-gray-100 rounded-full baseline hover:bg-gray-200">Login</button>
      </div>
     
      </nav>
    </div>
  )
}

export default NavBar
