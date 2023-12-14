import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import img from "./imgs/logo.jpg";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();
  console.log(navbarOpen);
  return (
    <nav className="fixed w-screen top-0  z-50 bg-blue-300 h-20  ">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 ">
        <div className="w-full  sticky top-0 flex justify-between  lg:w-auto lg:static lg:justify-start h-[7vh]  items-center">
          <a
            className="font-medium tracking-wider transition-colors cursor-pointer "
            onClick={() => navigate("/")}
          >
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

        <div
          className={
            "lg:flex flex-row items-center lg:h-auto h-screen bg-blue-300 cursor-pointer justify-center " +
            (navbarOpen ? " flex " : "  hidden ")
          }
        >
          <ul className="flex flex-col lg:flex-row items-center gap-x-4 list-none lg:ml-auto lg:transition-y-[50%] lg:gap-y-0 gap-y-8">
            <li className="py2 flex text-yellow-700 uppercase font-medium items-center leading-snug hover:text-[#1460AD]">
              Trips
            </li>
            <li className="py2 flex text-yellow-700 uppercase font-medium items-center leading-snug hover:text-[#1460AD]">
              Recomended Islands
            </li>
            <li className="py2 flex text-yellow-700 uppercase font-medium items-center leading-snug hover:text-[#1460AD]">
              Transport
            </li>
            <li className="py2 flex text-yellow-700 uppercase font-medium items-center leading-snug hover:text-[#1460AD]">
              Boat Charter
            </li>
            <li className="py2 flex text-yellow-700 uppercase font-medium items-center leading-snug hover:text-[#1460AD]">
              Boat Time Tab
            </li>
            <li className="py2 flex text-yellow-700 uppercase font-medium items-center leading-snug hover:text-[#1460AD]"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
