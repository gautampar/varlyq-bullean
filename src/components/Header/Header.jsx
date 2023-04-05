/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import logo from "../../images/Bullean.png";
import { Link } from "react-router-dom";
import { darkThemeContext } from "../../context/darkTheme";
import threeLine from "../../images/threeLine.png";
import "./Header.css";
import SideBar from "./SideBar";

function Header({ toggle, setToggle }) {
  const [raiscap, setRaiscap] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const { theme, setTheme } = useContext(darkThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="w-full fixed z-50">
      <div className="w-full flex justify-center pt-6">
        <div className="absolute w-[96vw] z-20 rounded-lg p-5 sm:px-4 bg-[#efefef] dark:bg-[#10194D] text-[10px] sm:text-[16px] flex justify-between items-center">
          <div
            className="w-[90px] sm:w-fit pl-8 dark:text-white text-black text-4xl font-bold"
            style={{ fontFamily: "Bespoke Sans" }}
          >
            Bu<span className="text-[#0efeb3]">l</span>
            <span className="text-[#3c5afd]">l</span>ean
          </div>
          <Link to="/" className="hideHeaderTitles">
            <p className="cursor-pointer dark:text-white text-black">Home</p>
          </Link>
          <Link to="/curated-for-you" className="hideHeaderTitles">
            <p className="cursor-pointer dark:text-white text-black">
              Curated for you
            </p>
          </Link>
          <Link to="/service" className="hideHeaderTitles">
            <p className=" dark:text-white text-black cursor-pointer">
              Services
            </p>
          </Link>
          <p
            onClick={() => setRaiscap(true)}
            className="cursor-pointer dark:text-white text-black hideHeaderTitles"
          >
            Raise Capital / Sell Business
          </p>
          <Link to="/investor" className="hideHeaderTitles">
            <p className="cursor-pointer dark:text-white text-black ">
              Interested in investing
            </p>
          </Link>
          <Link to="/support" className="hideHeaderTitles">
            <p className="pr-8 cursor-pointer dark:text-white text-black ">
              Contact Us
            </p>
          </Link>

          <div className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 dark:hidden text-black cursor-pointer"
              onClick={handleTheme}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 hidden dark:block cursor-pointer"
              onClick={handleTheme}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>

            {!openSideBar && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 dark:text-white text-black showBarIcon cursor-pointer"
                onClick={() => setOpenSideBar(true)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}

            {openSideBar && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 dark:text-white text-black showBarIcon cursor-pointer"
                onClick={() => setOpenSideBar(false)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      {toggle ? (
        <div className="absolute top-0 backdrop-blur-sm z-20 w-full h-[100vh] mb-12 flex justify-center items-center">
          <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl ">
            <div className="flex gap-24">
              <p className="text-[26px] ranade mb-8 pl-28 text-black dark:text-white">
                Subscription
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-black dark:text-white mt-2 cursor-pointer"
                onClick={() => setToggle(false)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="flex justify-evenly items-center flex-wrap">
              <div>
                <p className="mx-6 text-[13px]  dark:text-white text-black">
                  Company name
                </p>
                <input
                  className="bg-[#c1bfbf] dark:bg-white text-black px-3 py-[6px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]  dark:text-white text-black">
                  Concerned Person
                </p>
                <input
                  className="bg-[#c1bfbf] dark:bg-white text-black px-3 py-[6px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]  dark:text-white text-black">
                  Designation
                </p>
                <input
                  className="bg-[#c1bfbf] dark:bg-white text-black px-3 py-[6px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]  dark:text-white text-black">
                  Phone
                </p>
                <input
                  className="bg-[#c1bfbf] dark:bg-white text-black px-3 py-[6px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]  dark:text-white text-black">
                  Email
                </p>
                <input
                  className="bg-[#c1bfbf] dark:bg-white text-black px-3 py-[6px] mx-6 mb-3 rounded-md"
                  type="text"
                />
              </div>
              <div>
                <p className="mx-6 text-[13px]  dark:text-white text-black">
                  Industry
                </p>
                <input
                  className="bg-[#c1bfbf] dark:bg-white text-black px-3 py-[6px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]  dark:text-white text-black">
                  Sub Industry
                </p>
                <input
                  className="bg-[#c1bfbf] dark:bg-white text-black px-3 py-[6px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]  dark:text-white text-black">
                  Sub Sub Industry
                </p>
                <input
                  className="bg-[#c1bfbf] dark:bg-white text-black px-3 py-[6px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]  dark:text-white text-black">
                  Description
                </p>
                <input
                  className="bg-[#c1bfbf] dark:bg-white text-black px-3 py-[6px] mx-6 mb-3 rounded-md"
                  type="text"
                />
                <p className="mx-6 text-[13px]  dark:text-white text-black">
                  Revenue Range / Arr
                </p>
                <input
                  className="bg-[#c1bfbf] dark:bg-white text-black px-3 py-[6px] mx-6 mb-3 rounded-md"
                  type="text"
                />
              </div>
            </div>
            <button
              onClick={() => setToggle(false)}
              className="my-3 text-[13px] border rounded-2xl px-10 py-2 bg-gradient-to-r from-green-400 to-blue-700 cursor-pointer"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      ) : null}

      {raiscap ? (
        <div className="absolute top-0 backdrop-blur-sm z-20 w-full h-[100vh] mb-12 flex justify-center items-center">
          <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl">
            <div className="flex gap-24">
              <p className="text-[26px] ranade mb-8 text-black dark:text-white ml-24">
                Raise Capital / Sell Business
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-black mt-2 dark:text-white cursor-pointer"
                onClick={() => setRaiscap(false)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <div className="text-[16px]">
              <div className="flex justify-between items-center">
                <div className="mx-6">
                  <p className="text-black dark:text-white">First Name</p>
                  <input
                    className="px-3  bg-[#c1bfbf] dark:bg-white text-black py-[6px] rounded-lg"
                    type="text"
                  />
                </div>
                <div className="mx-6">
                  <p className="text-black dark:text-white">Last Name</p>
                  <input
                    className="px-3 text-black py-[6px] rounded-lg bg-[#c1bfbf] dark:bg-white"
                    type="text"
                  />
                </div>
              </div>
              <p className="mt-6 mx-6 text-black dark:text-white">
                Company Name
              </p>
              <input
                className="px-3 text-black py-[6px] w-[550px] mx-6   rounded-lg bg-[#c1bfbf] dark:bg-white"
                type={"text"}
              />
              <br />
              <p className="mt-6 mx-6 text-black dark:text-white">
                Email Address
              </p>
              <input
                className="px-3 text-black py-[6px] w-[550px] mx-6 rounded-lg bg-[#c1bfbf] dark:bg-white"
                type={"text"}
              />
              <br />
              <p className="mt-6 mx-6 text-black dark:text-white">Password</p>
              <input
                className="bg-[#c1bfbf] dark:bg-white px-3 text-black py-[6px] w-[550px] mx-6 rounded-lg"
                type={"text"}
              />
              <br />
            </div>
            <button
              onClick={() => setRaiscap(false)}
              className="my-3 mt-6 text-[13px] border rounded-2xl px-10 py-2 bg-gradient-to-r from-green-400 to-blue-700 cursor-pointer"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      ) : null}

      {openSideBar && <SideBar setRaiscap={setRaiscap} />}
    </div>
  );
}

export default Header;
