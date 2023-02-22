import React, { useContext } from 'react'
import {Navigate} from 'react-router-dom'
import { UserContext } from './signup_pages/UserContext';
function Redirected({children}) {
    const {user } = useContext(UserContext)

    if (user){
        return <Navigate to="/dashboard" />
    }
  return children;
}

export default Redirected
