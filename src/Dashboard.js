import React, { useState } from "react";
import Nav from "./Nav";
import Dash from "./Dash";
import Every from "./Every";
import { Routes, Route } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import AddVendor from "./AddVendor";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

      <section className="w-100 h-screen flex">
        {isOpen && (
          <div className="w-[15%] bg-zinc-800">
            <Nav />
          </div>
        )}
      <div className="w-full cursor-pointer ">
          <span className="text-xl text-black">
            <FaBars onClick={toggleMenu} />
          </span>
          <div className="w-full px-[2%]">
            {/* <Routes>
              <Route path="/Dashboard" element={<Dash />} />
              <Route path="/Every" element={<Every />} />
            </Routes> */}
            <AddVendor/>
          </div>
        </div>
      </section>
   
  );
}

export default Dashboard;
