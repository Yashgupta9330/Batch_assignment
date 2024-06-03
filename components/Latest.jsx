import React from "react";
import phone from "../public/phone.png";
import Group12 from "../public/Group359241.png";
import vector1 from "../public/Vector1.png";
import Vector2 from "../public/Vector2.png";
import "./Latest.css";
import Image from "next/image";
import Button from "./Button";
import Back from "./Back";
export default function Heading1(){
  return (
    <div className="main">
    <div className="ecli-main mt-2 d-none d-lg-block d-md-block">
     <Back/>
    </div>
   <div className="container mx-auto">
   <div className="flex flex-col lg:flex-row gap-5">
    <div className=" flex flex-col items-center justify-center lg:w-1/2 mx-5">
        <h1 className="main-head mt-5 text-[#000000] font-bold text-[64px] leading-[64px] font-clash">
            make the best financial decisions
        </h1>
        <p className="main-para text-[#392F39] font-clash font-medium text-[18px] leading-[28px]">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="flex items-center w-full justify-start mt-4 gap-4 lg:gap-24">
        <Button text="Get Started" icon={vector1} />
        <div className="flex gap-2 items-center">
          <div className="border rounded-[100%] border-black flex items-center justify-center w-[29px] h-[29px]">
            <Image src={Vector2} alt="Vector" />
          </div>
          <div>Watch Video</div>
        </div>
        </div>
        <Image
            src={Group12}
            alt=""
            className=""
        />
    </div>
    <div className="lg:w-1/2">
        <Image
            src={phone}
            alt=""
            className="img-main"
         />
          </div>
         </div>
        </div>
      </div>
  );
};

