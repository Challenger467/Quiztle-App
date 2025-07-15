// import React from 'react'
import logo from '../assets/Untitled.png'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="w-full h-[60px] text-lg py-7 fixed top-0 px-12 flex justify-between items-center text-white bg-neutral-950">
      <div>
        <p><img src={logo} className="h-[50px] my-5" /></p>
      </div>
      <div>
        <ul className="flex">
            <li className="px-6 py-2 hover:bg-neutral-800 transition-all cursor-pointer rounded-2xl"><Link to="/">Home</Link></li>
            <li className="px-6 py-2 hover:bg-neutral-800 transition-all cursor-pointer rounded-2xl"><Link to="/dashboard">Dashboard</Link></li>
            <li className="px-6 py-2 hover:bg-neutral-800 transition-all cursor-pointer rounded-2xl"><Link to="/about">About</Link></li>
            <li className="px-6 py-2 hover:bg-neutral-800 transition-all cursor-pointer rounded-2xl">Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
