import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {baseUrl, logOutUser} from "../services/auth"

function Navbar() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    
    if (userId) {
      fetch(`${baseUrl}/users/${userId}`)
        .then((response) => response.json())
        .then((data)=>setUser(data))
    }
  }, [])
  
  const handleLogOut = () => {
    logOutUser();
    window.location.href="/"
  }
  return (
    <header>
      <nav className="shadow-sm sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-6xl mx-auto py-5">
         <Link to="/" className="text-2xl font-bold tracking-wide text-blue-600 hover:text-blue-700 transition flex items-center gap-2">
         <span className="bg-blue-600 text-white px-2 py-1 rounded-lg">
          RE
         </span>
           Real Estate
          </Link>
          <ul className="flex justify-between gap-6">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/properties">Properties</NavLink>
            </li>
            {!user &&
              <>
             <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink className="bg-blue-700 text-blue-50 p-2 rounded-sm" to="/register">Register</NavLink>
            </li>  
            </>
           }
            {user && (
              <>
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink to="/my-properties">My Properties</NavLink>
                </li>
                <li>
                  <NavLink to="/add-property">Add property</NavLink>
                </li>
                <li>
                  <NavLink className="bg-red-700 text-blue-50 p-3 rounded-2xl" to="/logout" onClick={handleLogOut}>logout</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
