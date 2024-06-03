import React from "react";
import logo from "../public/Group.png";
import call from "../public/call.svg";
import message from "../public/message.svg";
import Image from "next/image";

export default function Footer(){
  return (
    <div className="flex flex-col gap-4 p-4 w-full mt-16">
      <div className="flex flex-wrap md:flex-row w-full justify-center md:items-start gap-6 lg:gap-16 items-center">
        <div className="flex flex-col gap-3 items-center md:items-start">
          <div className="flex items-center gap-1">
            <Image src={logo} alt="logo" />
          </div>
          <div className="flex items-center gap-2">
            <Image src={call} alt="call icon" />
            <p className="text-sm lg:text-base cursor-pointer  hover:text-[#FF5555]">
              help@frybix.com
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={message} alt="message icon" />
            <p className="text-sm lg:text-base cursor-pointer  hover:text-[#FF5555]">
              +1 234 456 678 89
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center md:items-start">
          <h1 className="text-lg lg:text-2xl font-medium  cursor-default">
            Links
          </h1>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer  hover:text-[#FF5555]">Home</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer  hover:text-[#FF5555]">About Us</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer  hover:text-[#FF5555]">Bookings</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer  hover:text-[#FF5555]">Blog</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center md:items-start">
          <h1 className="text-lg lg:text-2xl font-medium  cursor-default">
            Legal
          </h1>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer  hover:text-[#FF5555]">Terms of use</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer  hover:text-[#FF5555]">Privacy Policy</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer  hover:text-[#FF5555]">Cookie Policy</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h1 className="text-lg lg:text-2xl font-medium  cursor-default">
            Product
          </h1>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer  hover:text-[#FF5555]">Take Tour</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer  hover:text-[#FF5555]">Live Chat</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer  hover:text-[#FF5555]">Reviews</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center md:items-start">
          <h1 className="text-lg lg:text-2xl font-medium  cursor-default">
            Newsletter
          </h1>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer  hover:text-[#FF5555]">
              Stay up to date
            </p>
          </div>
          <div className="flex items-center w-full">
            <input
              type="text"
              placeholder="Your email"
              className="h-10 w-full md:w-auto rounded-l-md text-center border border-gray-300 focus:outline-none focus:border-[#FF5555]"
            />
            <button className="h-10 px-4 text-white bg-black rounded-r-md cursor-pointer hover:bg-black  hover:text-[#FF5555] font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 w-full">
        <p className="py-2 border-t-2 border-gray-400 w-full md:w-[50vw] text-center cursor-pointer  hover:text-[#FF5555]">
          Copyright 2022 uifry.com all rights reserved
        </p>
      </div>
    </div>
  );
};

