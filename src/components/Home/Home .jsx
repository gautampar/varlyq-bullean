/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Header from "../Header/Header";
import leftfade from "../../images/Ellipse 22.png";
import rightfade from "../../images/Vector 9.png";
import img1 from "../../images/Group 14.png";
import bucket from "../../images/Vector.png";
import txt1 from "../../images/Advising.png";
import txt2 from "../../images/Consulting.png";
import txt3 from "../../images/Investment Banking.png";
import txt4 from "../../images/Investments.png";
import investor from "../../images/investor.png";
import Card1 from "../Cards/Card1";
import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";
import p5 from "../../images/p5.png";
import t1 from "../../images/Mask group.png";
import t2 from "../../images/Mask group-1.png";
import t3 from "../../images/Mask group-2.png";
import t4 from "../../images/Mask group-3.png";
import img3 from "../../images/image 13.png";
import img5 from "../../images/glow.png";
import Card2 from "../Cards/Card2";
import Footer from "../Footer/Footer";
import homeImage from "../../images/homeImage.png";
import Carousel from "better-react-carousel";
import "../Home/home.css";
import { Dialog, Grid, Slide } from "@mui/material";
import SubscriptionModal from "../Modal/SubscriptionModal";
import LogInModal from "../Modal/LogInModal";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Home() {
  const [loginOpen, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="w-full z-40">
      <Header />
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row justify-center">
        <div className="mt-32 z-10 ml-8 md:ml-24 lg:ml-44 w-full ">
          <div className="">
            <p className="text-[61px] font-[500] sm:font-[700] bespoke dark:text-white text-black">
              Build your Future <br /> With Investments
            </p>
            <p className="text-[16px] font-[400] my-4 dark:text-white text-black">
              We are world wide investment company who are <br />
              committed to the principle of revenue <br /> maximitization &
              reduction of the financial risks at investing.
            </p>
            <button
              onClick={handleClickOpen}
              className=" px-16 py-2 border border-white rounded-lg bg-gradient-to-r from-green-300 to-blue-800"
            >
              Find
            </button>
            <LogInModal loginOpen={loginOpen} Transition={Transition} handleClose={handleClose} handleClickOpen={handleClickOpen} />
            <p className="my-4 text-[16px] dark:text-white text-black">
              Find the right buyers for your business
            </p>
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
        <div className="relative z-10 flex justify-center md:mt-32 lg:pr-28">
          <img src={homeImage} alt="" className="h-[600px] w-[1500px]" />
        </div>
      </div>

      {/* Why Us */}
      <div className="text-center flex flex-col items-center mt-24">
        <p className="text-[34px] mb-3 font-semibold bespoke dark:text-white text-black">
          Why us?
        </p>
        <p className="max-w-[600px] text-[16px] dark:text-white text-black">
          We are 100% funded from our own platform with a team of over 300
          professional FinTech investors who all believe the future of finance
          looks very different from today. Their experience and background
          covers most areas in finance, technology and startups.66,246
          professional investors are waiting to invest.
          <br />
          We have built the largest global community of professional FinTech
          investors all investing online in the future of finance in over 50
          currencies.
        </p>
        <img className="mt-12 w-[384px]" src={img1} />
        <div className="my-12">
          <p className="my-8 text-[40px] bespoke font-semibold dark:text-white text-black ">
            Our Servises
          </p>
          <div className="max-w-[700px] text-[16px] mb-3 dark:text-white text-black">
            Economic services provided by the finance industry, which
            encompasses a broadrange of businesses that manage money, including
            credit unions.
          </div>
        </div>
      </div>

      {/* Our Services */}
      <section className="ml-8 flex rounded-l-lg bg-[#BFBFBF] dark:bg-[#171e3e]">
        <div className="w-full p-6">
          <div className="p-3 rounded-full bg-gradient-to-l from-green-300 to-blue-600 w-fit">
            <img src={bucket} />
          </div>
          <p className="my-3 text-[26px] bespoke font-semibold dark:text-white text-black">
            Business planning
          </p>
          <p className="max-w-[650px] my-4 text-[16px] dark:text-white text-black">
            We are 100% funded from our own platform with a team of over 300
            professional FinTech investors who all believe the future of finance
            looks very different from today. Their experience and background
            covers most areas in finance, technology and startups.66,246
            professional investors are waiting to invest. We have built the
            largest global community of professional FinTech investors all
            investing online in the future of finance in over 50 currencies.
          </p>
        </div>
        <div className="px-2 border-l rounded-md">
          <img className="mt-8" src={txt1} />
        </div>
        <div className="px-2 border-l rounded-md">
          <img className="mt-8" src={txt2} />
        </div>
        <div className="px-2 border-l rounded-md">
          <img className="mt-8" src={txt3} />
        </div>
        <div className="px-2 border-l rounded-md">
          <img className="mt-8" src={txt4} />
        </div>
      </section>

      {/* Business Listing */}
      <section className=" w-[100vw] mt-32 text-[16px]  bg-[#BFBFBF] dark:bg-[#232945] flex flex-col justify-center items-center">
        <p className="mt-12 my-4 text-[36px] bespoke font-bold dark:text-white text-black">
          Business Listing
        </p>
        <p className="dark:text-white text-black ml-4 sm:ml-0">
          We are the industry leader in establishing an innovation-friendly
          organization, developing new <br /> business models and new
          products.The company is on the cutting edge of new technologies.
        </p>
        {/* <img className="absolute -top-24 left-0" src={rightfade} /> */}
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
                  <Card1 />
                </Carousel.Item>
                <Carousel.Item>
                  <Card1 />
                </Carousel.Item>
                <Carousel.Item>
                  <Card1 />
                </Carousel.Item>
                <Carousel.Item>
                  <Card1 />
                </Carousel.Item>
                <Carousel.Item>
                  <Card1 />
                </Carousel.Item>
                <Carousel.Item>
                  <Card1 />
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

      {/* Get In Touch */}
      <section className="py-32 flex flex-wrap justify-evenly bg-white dark:bg-[#080C23]">
        <div className="max-w-[400px] p-4 sm:p-0">
          <p className="text-[40px] my-4 bespoke font-bold dark:text-white text-black">
            If you are an investor
          </p>
          <p className="text-[16px] dark:text-white text-black">
            Investors put money into something with the hope of getting more
            money back down the road. Investors can be individual people buying
            and selling stocks for their personal wealth-building plans.
            However, an investor can also be an organization, such as a Private
            equity firm or a mutual fund.
            <br />
            The goals of investors are as varied as their investments. For some
            personal investors, the goal may be to grow a retirement fund, while
            larger institutional investors may try to build wealth for future
            business ventures.
          </p>

          <button className="font-semibold mt-6 px-8 py-2 bg-gradient-to-r from-green-300 to-blue-600 rounded-xl my-4 border text-[16px]">
            Get in Touch
          </button>
        </div>
        <div>
          <img src={investor} alt="" />
        </div>
      </section>

      {/* Our Partners */}
      <section className="text-center  bg-[#BFBFBF] dark:bg-[#050715] py-12">
        <p className="text-[40px] bespoke font-bold dark:text-white text-black">
          Our partners
        </p>
        <div className="flex flex-wrap justify-evenly">
          <img src={p1} />
          <img src={p2} />
          <img src={p3} />
          <img src={p4} />
          <img src={p5} />
        </div>
        {/* <img className="absolute -top-24 left-0" src={rightfade} /> */}
      </section>

      {/* Transaction Details */}
      <section className=" pt-12 pb-32 text-center flex flex-col items-center">
        <p className="text-[40px] mt-12 bespoke font-bold dark:text-white text-black">
          Transaction details
        </p>
        <p className="text-[14px] mt-6 mb-12 max-w-[480px] dark:text-white text-black">
          The information about a transaction that is able to be reviewed from
          multiple reports like Transaction Summary or Reconciliation reports.
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
                  <Card2 />
                </Carousel.Item>
                <Carousel.Item>
                  <Card2 />
                </Carousel.Item>
                <Carousel.Item>
                  <Card2 />
                </Carousel.Item>
                <Carousel.Item>
                  <Card2 />
                </Carousel.Item>
                <Carousel.Item>
                  <Card2 />
                </Carousel.Item>
                <Carousel.Item>
                  <Card2 />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="text-center bg-white dark:bg-[#1D1F2A] py-[100px]">
        <p className="text-[40px] bespoke font-bold dark:text-white text-black">
          Our Team
        </p>
        <p className="my-[40px] dark:text-white text-black">
          We work to make your business start effectively working for <br />{" "}
          you.Meet the financial and marketing specialists.
        </p>
        <div className="flex justify-evenly">
          <div className="flex flex-wrap justify-center gap-4">
            <div>
              <img src={t1} />
              <p className="text-[20px] my-1 dark:text-white text-black">
                Mathew N.Jonson
              </p>
              <p className="text-[13px] text-green-400  ">
                Business consultant
              </p>
            </div>

            <div>
              <img src={t2} />
              <p className="text-[20px] my-1 dark:text-white text-black">
                Mathew N.Jonson
              </p>
              <p className="text-[13px] text-green-400">Business consultant</p>
            </div>

            <div>
              <img src={t3} />
              <p className="text-[20px] my-1 dark:text-white text-black">
                Mathew N.Jonson
              </p>
              <p className="text-[13px] text-green-400">Business consultant</p>
            </div>

            <div>
              <img src={t4} />
              <p className="text-[20px] my-1 dark:text-white text-black">
                Mathew N.Jonson
              </p>
              <p className="text-[13px] text-green-400">Business consultant</p>
            </div>
          </div>
        </div>
      </section>

      {/* testimonial */}
      <section className="relative w-full">
        {/* <img className="absolute bottom-0 pt-32" src={img4} />; */}
        <div className=" w-full">
          <div className="text-center my-[120px]">
            <p className="text-[40px] bespoke font-bold dark:text-white text-black">
              Testimonials
            </p>
            <p className="text-[16px] my-6 dark:text-white text-black ">
              Testimonials from customers who are satisfied with services that
              have been <br />
              effectivelyused in marketing for as long as marketing exists.
            </p>
            <div className="flex flex-wrap justify-center items-center py-6">
              {/* card */}
              <div className="w-[285px] h-[358px] mx-2 border border-slate-500 rounded-xl flex flex-col justify-evenly items-center mb-4">
                <img className="rounded-full" src={img3} />
                <div className="bg-green-500 w-[100px] h-[1px]" />
                <p className="text-[16px] dark:text-white text-black ">
                  I would recommend this company to people who plan to start
                  their own business. Thanks to the manager’s business planning
                  and advising our start up become more profitable.
                </p>
                <p className="text-[12px] text-green-400">
                  John grinwild,new york,NY
                </p>
              </div>

              {/* card */}
              <div className="w-[285px] h-[358px] mx-2 border border-slate-500 rounded-xl flex flex-col justify-evenly items-center mb-4">
                <img className="rounded-full" src={img3} />
                <div className="bg-green-500 w-[100px] h-[1px]" />
                <p className="text-[16px] dark:text-white text-black">
                  I would recommend this company to people who plan to start
                  their own business. Thanks to the manager’s business planning
                  and advising our start up become more profitable.
                </p>
                <p className="text-[12px] text-green-400">
                  John grinwild,new york,NY
                </p>
              </div>

              {/* card */}
              <div className="w-[285px] h-[358px] mx-2 border border-slate-500 rounded-xl flex flex-col justify-evenly items-center mb-4">
                <img className="rounded-full" src={img3} />
                <div className="bg-green-500 w-[100px] h-[1px]" />
                <p className="text-[16px] dark:text-white text-black">
                  I would recommend this company to people who plan to start
                  their own business. Thanks to the manager’s business planning
                  and advising our start up become more profitable.
                </p>
                <p className="text-[12px] text-green-400">
                  John grinwild,new york,NY
                </p>
              </div>

              {/* card */}
              <div className="w-[285px] h-[358px] mx-2 border border-slate-500 rounded-xl flex flex-col justify-evenly items-center mb-4">
                <img className="rounded-full" src={img3} />
                <div className="bg-green-500 w-[100px] h-[1px]" />
                <p className="text-[16px] dark:text-white text-black">
                  I would recommend this company to people who plan to start
                  their own business. Thanks to the manager’s business planning
                  and advising our start up become more profitable.
                </p>
                <p className="text-[12px] text-green-400">
                  John grinwild,new york,NY
                </p>
              </div>
            </div>
          </div>

          <img
            className="absolute w-[680px] h-[680px] -top-52 -left-56 "
            src={img5}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
