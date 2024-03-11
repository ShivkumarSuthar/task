import React, { useId, useState } from 'react'
import Nav from './Nav'
import { FaBars } from "react-icons/fa";
function Dashboard() {
   const [isOpen, setIsOpen] = useState(false);
     const toggleMenu = () => {
       setIsOpen(!isOpen);
     };
  return (
    <section className="w-100 h-screen flex">
      {!isOpen && (
        <div className=" w-[15%]  bg-zinc-800">
          <Nav />
        </div>
      )}
      <div className="w-[100%] bg-slate-400 p-[1%] cursor-pointer">
        <span className='text-xl text-white'>
          <FaBars onClick={toggleMenu} />
        </span>
        <h1>welcome</h1>
      </div>
    </section>
  );
}

export default Dashboard