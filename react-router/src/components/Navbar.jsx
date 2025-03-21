import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='header-bar d-flex flex-col-reverse'>
        <NavLink to='/' className={(isActive)=>isActive ? "bg-red-400" : "decoration-pink-600"}>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">contact</NavLink>
        <NavLink to="/github">github</NavLink>
        <NavLink to='/user'>Users</NavLink>
    </div>
  )
}

export default Navbar