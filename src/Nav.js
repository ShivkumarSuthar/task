import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { FaUserTie, FaBars } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoIosPeople, IoIosChatbubbles, IoMdImages } from "react-icons/io";
import { CgOptions } from "react-icons/cg";
import { FaTableColumns } from "react-icons/fa6";

function Nav() {


  useEffect(() => {
    // GSAP animation logic here
    gsap.from(".nav-item", {
      duration: 0.2,
      opacity: 0,
      y: -20,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, []);



  return (
    <section className="h-screen w-100">
      <div>
        <div className="py-4 border-b-[1px] border-slate-200 flex justify-between pl-0 pr-5 items-center">
          <div className="flex justify-start items-center pl-3 ">
            <span>
              <FaUserTie className="bg-slate-400 w-8 h-8 p-2 rounded-full text-white text-2xl" />
            </span>
            <span className="ml-2 font-Montserrat  font-medium text-slate-200 text-xl">
              Admin
            </span>
          </div>
         
        </div>
       
          <div>
            <nav className="pt-0">
              <ul className="font-Montserrat font-thin text-slate-200 text-lg">
                <li className="p-3 hover:bg-blue-600">
                  <a className="flex items-center" href="/">
                    <AiOutlineDashboard />
                    <span className="text-base pl-1">Dashboard</span>
                  </a>
                </li>
                <li className="p-3 hover:bg-blue-600">
                  <a href="/" className="flex items-center">
                    <IoIosPeople />
                    <span className="text-base pl-1">Everyone</span>
                  </a>
                </li>
                <li className="p-3 hover:bg-blue-600">
                  <a href="/" className="flex items-center">
                    <IoIosPeople />
                    <span className="text-base pl-1">Visitors</span>
                  </a>
                </li>
                <li className="p-3 hover:bg-blue-600">
                  <a href="/" className="flex items-center">
                    <IoIosChatbubbles />
                    <span className="text-base pl-1">Feedbacks</span>
                  </a>
                </li>
                <li className="p-3 hover:bg-blue-600">
                  <a href="/" className="flex items-center">
                    <CgOptions />
                    <span className="text-base pl-1">Categories</span>
                  </a>
                </li>
                <li className="p-3 hover:bg-blue-600">
                  <a href="/" className="flex items-center">
                    <IoMdImages />
                    <span className="text-base pl-1">Time Wall</span>
                  </a>
                </li>
                <li className="p-3 hover:bg-blue-600">
                  <a href="/" className="flex items-center">
                    <CgOptions />
                    <span className="text-base pl-1">Large Categories</span>
                  </a>
                </li>
                <li className="p-3 hover:bg-blue-600">
                  <a href="/" className="flex items-center">
                    <FaTableColumns />
                    <span className="text-base pl-1">Large Video Wall</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

      </div>
    </section>
  );
}

export default Nav;
