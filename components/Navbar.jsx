"use client"
import Group from "../public/Group.png";
import { useState } from "react";
import Button from "./Button";
import { items } from "@/utils/Items";
import Image from "next/image";
export default function Navbar(){
    const [selected,setSelected]=useState("Home");
    return(
        <div className="flex items-center justify-center w-[92%] lg:w-4/5 h-[100px]">
        <nav className="flex w-full border items-center justify-between">
          <div className="flex items-center justify-center gap-6">
            <Image src={Group} alt="logo" className="cursor-pointer" width={120}/>
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
          <Button  text="submit"/>
        </nav>
      </div>
    )
}