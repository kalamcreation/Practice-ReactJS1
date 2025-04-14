import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
        {/* <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link> */}

        <NavLink
        to="/"
        className={({ isActive }) => isActive ? "text-danger" : "" }
        >
        Home
        </NavLink>
        <NavLink
        to="/login"
        className={({ isActive }) => isActive ? "text-danger" : "" }
        >
        Login
        </NavLink>
        <NavLink
        to="/register"
        className={({ isActive }) => isActive ? "text-danger" : "" }
        >
        Register
        </NavLink>
        <NavLink
        to="/user/3"
        className={({ isActive }) => isActive ? "text-danger" : "" }
        >
        User
        </NavLink>

    </div>
  )
}
