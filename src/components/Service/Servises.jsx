import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import bucket from "../../images/Vector.png";
import txt1 from "../../images/Advising.png";
import txt2 from "../../images/Consulting.png";
import txt3 from "../../images/Investment Banking.png";
import txt4 from "../../images/Investments.png";
import service from "../../images/service.png";
import leftfade from "../../images/Ellipse 22.png";
import rightfade from "../../images/Vector 9.png";
import './Services.css'

const Services = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div>
        <Header toggle={toggle} setToggle={setToggle} />
        {/* <div className="bg-gradient-to-r from-teal-100 via-blue-400 to-blue-400 dark:bg-gradient-to-r  dark:from-blue-900 dark:to-teal-800  py-32 flex flex-wrap justify-evenly bg-white dark:bg-[#080C23]"> */}
        <div className="relative py-32 flex flex-wrap justify-evenly bg-white dark:bg-[#080C23]">
          <div className="relative max-w-[400px] p-4 sm:p-0 z-10">
            <p className="text-[40px] my-4 bespoke font-bold dark:text-white text-black">
              If you are an investor
            </p>
            <p className="text-[16px] dark:text-white text-black">
              Investors put money into something with the hope of getting more
              money back down the road. Investors can be individual people
              buying and selling stocks for their personal wealth-building
              plans. However, an investor can also be an organization, such as a
              Private equity firm or a mutual fund.
              <br />
              The goals of investors are as varied as their investments. For
              some personal investors, the goal may be to grow a retirement
              fund, while larger institutional investors may try to build wealth
              for future business ventures.
            </p>

            <div className="flex text-[16px]">
              <button
                onClick={() => setToggle(true)}
                className="px-8 py-2 border border-white rounded-lg bg-gradient-to-r from-green-300 to-blue-800"
              >
                Know More
              </button>
              <button className="ml-4 px-8 py-2 border border-white rounded-lg  dark:text-white text-black  ">
                Find the Package
              </button>
            </div>
          </div>
          <img className="absolute -top-24 left-0" src={leftfade} alt=""/>
          <img className="absolute -top-24 left-0 w-full" src={rightfade} alt=""/>
          <img className="absolute -top-24 left-0 w-full" src={rightfade} alt=""/>
          <div className="z-10">
            <img src={service} alt="" />
          </div>
        </div>

        {/* business planning */}
        <section className="ml-8 flex rounded-l-lg bg-[#BFBFBF] dark:bg-[#171e3e] md:mt-36 z-50">
          <div className="w-full p-6">
            <div className="p-3 rounded-full bg-gradient-to-l from-green-300 to-blue-600 w-fit">
              <img src={bucket} alt="" />
            </div>
            <p className="my-3 text-[26px] bespoke font-semibold dark:text-white text-black">
              Business planning
            </p>
            <p className="max-w-[650px] my-4 text-[16px] dark:text-white text-black">
              We are 100% funded from our own platform with a team of over 300
              professional FinTech investors who all believe the future of
              finance looks very different from today. Their experience and
              background covers most areas in finance, technology and
              startups.66,246 professional investors are waiting to invest. We
              have built the largest global community of professional FinTech
              investors all investing online in the future of finance in over 50
              currencies.
            </p>
          </div>
          <div className="px-2 border-l rounded-md">
            <img alt="" className="mt-8" src={txt1} />
          </div>
          <div className="px-2 border-l rounded-md">
            <img alt="" className="mt-8" src={txt2} />
          </div>
          <div className="px-2 border-l rounded-md">
            <img alt="" className="mt-8" src={txt3} />
          </div>
          <div className="px-2 border-l rounded-md">
            <img alt="" className="mt-8" src={txt4} />
          </div>
        </section>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
};

export default Services;
