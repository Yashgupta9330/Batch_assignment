import Image from "next/image";

export default function Button({ text,white,icon }) {
  return (
    <button
      className={`flex items-center justify-center gap-4 rounded-md w-[180px] h-[60px] text-[18px] font-clash ${
        white ? "bg-white text-black" : "bg-[#000000] text-[#FFFFFF]"
      }`}
    >
      <span>{text}</span>
      {icon && <Image src={icon} alt="vector" />}
    </button>
  );
}
