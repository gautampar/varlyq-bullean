import React, { useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar({setRaiscap}) {

  return (
    <div className="sidebar hideSideBar fixed top-6 bottom-0 right-0 p-2 w-[300px] overflow-y-auto bg-[#efefef] dark:bg-[#10194D]">
      <div className="p-2.5 mt-16 flex flex-col rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-black dark:text-white">
        <Link to="/">
          <span className="text-[15px] ml-4 font-bold">Home</span>
        </Link>

        <Link to="/curated-for-you" className="pt-8">
          <span className="text-[15px] ml-4 font-bold">Curated for you</span>
        </Link>

        <Link to="/service" className="pt-8">
          <span className="text-[15px] ml-4 font-bold">Services</span>
        </Link>

        {/* <Link to="/service" className="pt-8"> */}
        <span
          className="text-[15px] ml-4 pt-8 font-bold"
          onClick={() => setRaiscap(true)}
        >
          Raise Capital / Sell Business
        </span>
        {/* </Link> */}

        <Link to="/investor" className="pt-8">
          <span className="text-[15px] ml-4 font-bold">
            Interested in investing
          </span>
        </Link>

        <Link to="/contact-us" className="pt-8">
          <span className="text-[15px] ml-4 font-bold">Contact Us</span>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
