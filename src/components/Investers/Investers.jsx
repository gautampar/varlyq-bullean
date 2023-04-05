import React from "react";
import Header from "../Header/Header";
import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";
import p5 from "../../images/p5.png";
import HomeCard from "../Cards/Card1";
import getInTouch from "../../images/getInTouch.png";
import Footer from "../Footer/Footer";
import leftfade from "../../images/Ellipse 22.png";
import rightfade from "../../images/Vector 9.png";
import Carousel from "better-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Investor = () => {
  return (
    <div className="">
      <Header />
      {/* <div className="bg-gradient-to-r from-teal-100 via-blue-400 to-blue-400 dark:bg-gradient-to-r  dark:from-blue-900 dark:to-teal-800  py-32 flex flex-wrap justify-evenly bg-white dark:bg-[#080C23]"> */}
      <div className="relative py-32 flex flex-wrap justify-evenly bg-white dark:bg-[#080C23]">
        <div className="relative max-w-[400px] p-4 sm:p-0 z-10">
          <p className="text-[40px] my-4 bespoke font-bold dark:text-white text-black">
            If You Are Investor
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
              Get In Touch
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
        <div className="w-[600px] h-[300px] z-10">
          <img src={getInTouch} alt="" />
        </div>
      </div>

      <div className="p-6 mx-10 lg:mx-48 mb-20 text-center mt-4 bg-[#bfbfbf53] dark:bg-[#1B2037] border border-slate-700 text-[16px] rounded-lg md:mt-24">
        <p className="text-[25px] my-6 dark:text-white text-black">Benefits</p>
        <p className="dark:text-white text-black">
          * We are 100% funded from our own platform with a team of over 300
          professional FinTech investors who all believe the future of finance
          looks very different from today.{" "}
        </p>

        <p className="mt-6 dark:text-white text-black">* Business Planning</p>

        <p className="my-6 dark:text-white text-black">
          * We are 100% funded from our own platform with a team of over 300
          professional FinTech investors who all believe the future of finance
          looks very different from today.{" "}
        </p>

        <p className="dark:text-white text-black">
          * We have built the largest global community of professional FinTech
          investors all investing online in the future of finance in over 50
          currencies.
        </p>
      </div>

      {/* Our Partners */}
      <section className="text-center  bg-[#BFBFBF] dark:bg-[#050715] py-12">
        <p className="text-[40px] bespoke font-bold dark:text-white text-black">
          Our partners
        </p>
        <div className="flex flex-wrap justify-evenly">
          <img src={p1} alt="" />
          <img src={p2} alt="" />
          <img src={p3} alt="" />
          <img src={p4} alt="" />
          <img src={p5} alt="" />
        </div>
      </section>

      {/* Business Listing */}
      <section className=" w-[100vw] mt-32 text-[16px]  bg-[#BFBFBF] dark:bg-[#232945] flex flex-col justify-center items-center">
        <p className="mt-12 my-4 text-[36px] bespoke font-bold dark:text-white text-black">
          Business Listing
        </p>
        <p className="dark:text-white text-black">
          We are the industry leader in establishing an innovation-friendly
          organization, developing new <br /> business models and new
          products.The company is on the cutting edge of new technologies.
        </p>

        <div className="container mx-auto mt-4">
          <div className="flex items-center justify-center w-full h-full">
            <div className="w-10/12 sm:w-11/12 md:w-10/12">
              <Carousel
                cols={3}
                rows={1}
                showDots={true}
                scrollSnap={true}
                gap={10}
                loop
              >
                <Carousel.Item>
                  <HomeCard />
                </Carousel.Item>
                <Carousel.Item>
                  <HomeCard />
                </Carousel.Item>
                <Carousel.Item>
                  <HomeCard />
                </Carousel.Item>
                <Carousel.Item>
                  <HomeCard />
                </Carousel.Item>
                <Carousel.Item>
                  <HomeCard />
                </Carousel.Item>
                <Carousel.Item>
                  <HomeCard />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="mx-auto font-semibold px-8 py-2 my-12 bg-gradient-to-r from-green-300 to-blue-600 rounded-xl border">
            See all Business
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investor;
