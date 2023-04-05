import React from "react";
import "./Footer.css";
import img2 from '../../images/Vector 16.png'

const Footer = () => {
  return (
    <div className="relative w-full ">
      {/* <footer className="dark:bg-gradient-to-r dark:from-black dark:via-emerald-900 dark:to-black h-[400px] sm:h-auto  z-10 bottom-0  w-full p-16 flex flex-wrap justify-evenly items-center gap-5 sm:gap-16 pt-24"> */}
      <footer className="sm:h-auto  z-10 bottom-0 dark:bg-black dark:border-t-4 dark:border-solid dark:border-black w-full p-16 flex flex-wrap justify-evenly items-center gap-5 sm:gap-16 pt-24">
        <div className="text-black dark:text-white flex flex-col w-[80px] md:w-[140px] h-[100px]">
          <span>Home</span>
          <span>Why Us</span>
          <span>Services</span>
        </div>
        <div className="text-black dark:text-white flex flex-col  w-[80px] md:w-[140px] h-[100px]">
          <span>Contact Us</span>
          <span>Transaction Details</span>
          <span>Testimonials</span>
        </div>
        <div className="text-black dark:text-white flex flex-col  w-[80px] md:w-[140px] h-[100px]">
          <span>Business Listing</span>
          <span>Our Team</span>
          <span>Our partners</span>
        </div>
        <div className="text-black dark:text-white flex flex-col  w-[80px] md:w-[140px] h-[100px]">
          <span>Contact Details</span>
          <p className="ml-4 text-sm">+800 526 8296</p>
          <span className="h-6"></span>
        </div>
      </footer>
      <img className="absolute z-0 bottom-0 hidden dark:block" src={img2} alt="" />
    </div>
  );
};

export default Footer;
