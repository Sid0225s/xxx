import React, { useState } from "react";

import { FaAnglesRight } from "react-icons/fa6";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdEmojiEvents } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import Div100vh from "react-div-100vh";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navBarOpen, setNavbarOpen] = useState(false);
  return (
    <Div100vh className="absolute top-0 left-0">
      <div className="z-20 absolute top-5 left-0 xs:w-[90px] w-[50px] flex justify-center items-stretch bg-[#FFD700] rounded-tr-lg rounded-br-lg cursor-pointer" onClick={() => setNavbarOpen(navBarOpen => !navBarOpen)}>
        <div className={`xs:w-[75px] w-[40px] flex justify-center items-center border-y-2 py-2 ${!navBarOpen ? 'border-y-white' : 'border-y-[#FFD700]'}`}>
          <FaAnglesRight className="xs:w-[50px] xs:h-[30px] w-[70px] h-[20px] duration-300" style={{transform: navBarOpen ? 'rotate(180deg)' : ''}} color="black" />
        </div>
        <div className="w-[15px] border-y-white border-r-white border-2 rounded-tr-lg rounded-br-lg border-l-0 py-2"></div>
      </div>
      <div className="absolute top-0 left-0 h-full bg-[#040133] z-10 border-r-white flex flex-col gap-5 justify-center items-center duration-300 overflow-hidden" style={{width: navBarOpen ? "75px" : '0px', borderRightWidth: navBarOpen ? "2px" : 0}}>
        <Link to={'/'} onClick={() => setNavbarOpen(navBarOpen => false)} className="flex justify-center items-center flex-col gap-2 w-full py-2 hover:bg-[#FF5722] duration-300 cursor-pointer">
          <FaHome color="white" size={20} />
          <div className="text-[10px] text-white">HOME</div>
        </Link>
        <Link to={'/about-us'} onClick={() => setNavbarOpen(navBarOpen => false)} className="flex justify-center items-center flex-col gap-2 w-full py-2 hover:bg-[#FF5722] duration-300 cursor-pointer">
          <FaInfoCircle color="white" size={20} />
          <div className="text-[10px] text-white">ABOUT</div>
        </Link>
        <Link to={'/projects'} onClick={() => setNavbarOpen(navBarOpen => false)} className="flex justify-center items-center flex-col gap-2 w-full py-2 hover:bg-[#FF5722] duration-300 cursor-pointer">
          <GrProjects color="white" size={20} />
          <div className="text-[10px] text-white">PROJECTS</div>
        </Link>
        <Link to={'/events'} onClick={() => setNavbarOpen(navBarOpen => false)} className="flex justify-center items-center flex-col gap-2 w-full py-2 hover:bg-[#FF5722] duration-300 cursor-pointer">
          <MdEmojiEvents color="white" size={20} />
          <div className="text-[10px] text-white">EVENTS</div>
        </Link>
        <Link to={'/team'} onClick={() => setNavbarOpen(navBarOpen => false)} className="flex justify-center items-center flex-col gap-2 w-full py-2 hover:bg-[#FF5722] duration-300 cursor-pointer">
          <FaPeopleGroup color="white" size={20} />
          <div className="text-[10px] text-white">TEAM</div>
        </Link>
      </div>
    </Div100vh>
  );
}
