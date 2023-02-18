import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import "./styles/styles.css";
import { UserContext } from "../signup_pages/UserContext";
import { NavLink, NavLink2, NavLink3 } from "./NavBar/nav_data";

function NavBar() {
  const {logout} = useContext(UserContext)
  const navigate = useNavigate()
  const handleLogout = async () =>{
    try {
      await logout()
      navigate('/')
      console.log("Logged out succesfully")
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div>
       <div className="w-60 nav flex flex-col hidden md:block shadow justify-center px-10 pt-10">
        <div className="space-y-6 mb-10">
          <h6 className="text-blue font-bold">Menu</h6>
          <ul className="space-y-5">
            {NavLink.map(menu_link => (
              <li key={menu_link.id} className="text-1xl cursor-pointer">
                <span>{menu_link.navicon}</span> {menu_link.navlink}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6 mb-10">
          <h6 className="text-blue font-bold">Payments</h6>
          <ul className="space-y-5 ">
            {NavLink2.map(payment_link => (
              <li key={payment_link.id} className="text-1xl cursor-pointer">
                <i>{payment_link.navicon}</i> {payment_link.navlink}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <h6 className="text-blue font-bold">Referrals</h6>
          <ul className="space-y-5">
            {NavLink3.map(referral_link => (
              <li key={referral_link.id} className="text-1xl cursor-pointer">
                <i>{referral_link.navicon}</i> {referral_link.navlink}
              </li>
            ))}
            <li className="text-red cursor-pointer" onClick={handleLogout}>
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
