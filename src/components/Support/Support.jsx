/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../Header/Header";
import img1 from "../../images/Ellipse 22.png";
import SupportCard from "../Cards/SupportCard";
import Footer from "../Footer/Footer";
import Curated from "../../images/Curated.png";
import leftfade from "../../images/Ellipse 22.png";
import rightfade from "../../images/Vector 9.png";

const Support = () => {
  return (
    <div className="">
      <Header />
      {/* <div className="bg-gradient-to-r from-teal-100 via-blue-400 to-blue-400 dark:bg-gradient-to-r  dark:from-blue-900 dark:to-teal-800  pt-32 flex flex-wrap justify-evenly bg-white dark:bg-[#080C23]"> */}
      <div className="relative pt-32 flex flex-wrap justify-evenly bg-white dark:bg-[#080C23]">
        <div className="relative max-w-[400px] p-4 sm:p-0 z-10">
          <p className="text-[40px] my-4 bespoke font-bold dark:text-white text-black">
            Raise Support
          </p>
          <p className="text-[16px] mt-6 ranade dark:text-white text-black">
            We are 100% funded from our own platform with a team of over 300
            professional FinTech investors who all believe the future of finance
            looks very different from today. Their experience and background
            covers most areas in finance, technology and startups.66,246
            professional investors are waiting to invest.
          </p>

          <p className="text-[16px] my-6 ranade dark:text-white text-black">
            We have built the largest global community of professional FinTech
            investors all investing online in the future of finance in over 50
            currencies.
          </p>

          <div className="flex text-[16px]">
            <button className="px-8 py-2 border border-white rounded-lg bg-gradient-to-r from-green-300 to-blue-800">
              List your Business for Free
            </button>
          </div>
        </div>
        <img className="absolute -top-24 left-0" src={leftfade} alt="" />
        <img
          className="absolute -top-24 left-0 w-full"
          src={rightfade}
          alt=""
        />
        <img
          className="absolute -top-24 left-0 w-full"
          src={rightfade}
          alt=""
        />
        <div className="w-[600px] -mt-12 z-10 -ml-24 flex justify-center">
          <img src={Curated} alt="" />
        </div>
      </div>

      <div className=" mx-10 mt-8 flex flex-wrap justify-center py-4nh rounded-md bg-gray-800 md:mt-16 p-5">
        <div
          className="mx-16  dark:text-white text-[#606060] text-xl"
          style={{ fontFamily: "Bespoke Sans" }}
        >
          Capital Raise Support
        </div>
        <div
          className="mx-16 dark:text-white text-[#606060] text-xl"
          style={{ fontFamily: "Bespoke Sans" }}
        >
          Deal making/Capital raise
        </div>
      </div>

      <div className="w-full flex justify-evenly flex-wrap">
        <div className="mt-16">
          <SupportCard />
        </div>
        <div className="mt-16">
          <SupportCard />
        </div>
        <div className="mt-16">
          <SupportCard />
        </div>
        <div className="mt-16">
          <SupportCard />
        </div>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Support;
