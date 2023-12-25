import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import img from "./imgs/logo.jpg";
import SignIn from "../googleSignin/signin";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleChange = () => {
    setMenuOpened(!menuOpened);
  };

  const navigate = useNavigate();

  return (
    <nav className="z-30 ">
      {/*Desktop verson */}
      <div className=" container mx-32 justify-between hidden md:flex ">
        <a className="my-2 flex items-end gap-3">
          <img src={img} alt="" height={71} width={71} />
        </a>
        <ul className="flex gap-8 lg:gap-12 items-center capitalize font-[500] text-black">
          <li className="hover:scale-105 transition-all">Home</li>
          <li className="hover:scale-105 transition-all">Package</li>
          <li className="hover:scale-105 transition-all">Destination</li>
          <li className="hover:scale-105 transition-all">Contact Us</li>
          <li className="hover:scale-105 transition-all">
            <button className="  bg-green-400 border rounded-lg p-2 w-full">
              <SignIn />
            </button>
          </li>
        </ul>
      </div>
      {/* Mobile verson */}
      <div className="container mx-auto md:hidden flex justify-between items-center ">
        <a onClick={() => navigate("/")} className="my-2 flex items-end gap-3">
          <img src={img} alt="" height={36} width={36} />
        </a>
        {!menuOpened ? (
          <AiOutlineMenu size={28} onClick={handleChange} />
        ) : (
          <AiOutlineClose size={28} onClick={handleChange} />
        )}
        <ul
          className={`flex gap-4 flex-col shadow-xl p-6 ring-1 ring-slate-900/5 absolute top-12 left-0 right-0 text-center capitalize font-[500] text-slate-500 bg-white transition-transform duration-700 z-20 ${
            menuOpened
              ? "transform translate-y-0"
              : "transform -translate-x-full"
          }`}
        >
          <li className="hover:scale-105 transition-all">Home</li>
          <li className="hover:scale-105 transition-all">Package</li>
          <li className="hover:scale-105 transition-all">Destination</li>
          <li className="hover:scale-105 transition-all">Contact Us</li>
          <li className="hover:scale-105 transition-all ">
            {" "}
            <button className="  bg-green-400 border rounded-lg p-2 w-fit">
              <SignIn />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
