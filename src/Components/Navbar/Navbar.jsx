import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import img from "./imgs/logo.jpg";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky w-screen top-0  z-50 bg-blue-300 h-20  ">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 ">
        <div className="w-full  sticky top-0 flex justify-between  lg:w-auto lg:static lg:justify-start h-[7vh]  items-center">
          <a onClick={() => navigate("/")}>
            <img src={img} alt="" className="w-11" />
          </a>
          <div className="flex items-center">
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 h-p[3rem] block lg:hidden outline-none focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <AiOutlineClose size={25} />
              ) : (
                <AiOutlineMenu size={25} />
              )}
            </button>
          </div>
        </div>
        <div>
          <ul>
            <li>Trips</li>
            <li>Recomended Islands</li>
            <li>Transport</li>
            <li>Boat Charter</li>
            <li>Boat Time Tab</li>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
