import React from "react";
import phone from "../public/phone.png";
import Group12 from "../public/Group359241.png";
import vector1 from "../public/Vector1.png";
import Vector2 from "../public/Vector2.png";
import "./Main.css";
import Image from "next/image";
import Button from "./Button";
export default function Heading1(){
  return (
    <div className="main">
    <div className="ecli-main mt-2 d-none d-lg-block d-md-block">
    <svg
      width="517"
      height="430"
      viewBox="0 0 517 430"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_101_132)">
        <ellipse cx="245" cy="253.5" rx="145" ry="76.5" fill="#FDE598" />
      </g>
      <g filter="url(#filter1_f_101_132)">
        <ellipse cx="275" cy="176.5" rx="142" ry="76.5" fill="#FF5555" />
      </g>
      <defs>
        <filter
          id="filter0_f_101_132"
          x="0"
          y="77"
          width="490"
          height="353"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_101_132"
          />
        </filter>
        <filter
          id="filter1_f_101_132"
          x="33"
          y="0"
          width="484"
          height="353"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_101_132"
          />
        </filter>
      </defs>
    </svg>
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
        <div className="twobtn flex items-center justify-start gap-4 lg:gap-24" style={{display:"flex",alignItems:"center"}}>
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

