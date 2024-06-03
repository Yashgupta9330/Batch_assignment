"use client"
import Group from "../public/Group.png";
import { useState } from "react";
import Button from "./Button";
import { items } from "@/utils/Items";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
export default function Navbar(){
    const [selected,setSelected]=useState("Home");
    const [nav, setNav] = useState(false);
    return(
        <div className="flex items-center justify-center w-[92%] lg:w-4/5 h-[100px]">
        <nav className="flex w-full border items-center justify-between">
          <div className="flex items-center justify-center gap-6">
            <Image src={Group} alt="logo" className="cursor-pointer" width={120}/>
            <div className="hidden md:block">
            <ul className="flex items-center justify-center gap-[24px]">
              {items.map((item, idx) => (
                <li
                  className={`cursor-pointer font-clash text-[20px] line-height-[26px] ${item === selected ? 'text-[#FF5555]' : ''}`}
                  key={idx}
                  onClick={() => setSelected(item)} 
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          </div>
          <Button  text="submit"/>
          <div onClick={() => setNav(!nav)} className="block md:hidden">
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul
              className={
                nav
                  ? "fixed md:hidden left-0 top-0 w-[60%] h-screen border-r text-white border-r-gray-900 bg-[#FF5555]  ease-in-out duration-500 z-50"
                  : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
              }
            >
              {items.map((item) => (
                <li
                  key={item}
                  className="p-4 border-b rounded-xl hover:bg-[#cccccc] hover:text-black duration-300 cursor-pointer border-gray-600"
                >
                  {item}
                </li>
              ))}
            </ul>
         </nav>
      </div>
    )
}