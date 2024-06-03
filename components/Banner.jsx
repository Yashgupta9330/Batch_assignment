import Image from "next/image";
import Frame6 from "../public/Frame6.png";
import Button from "./Button";
import background from "../public/background.png";

export default function Banner() {
  return (
    <div className="w-4/5" style={{ backgroundImage: `url(${background.src})`, backgroundSize: 'cover' }}>
      <section className={`flex justify-between items-center rounded text-white mt-10 px-5 lg:px-0`}>
        <div className="flex flex-col p-5 lg:p-10 gap-2">
          <h1 className="text-xl lg:text-5xl font-bold">Ready To Get Started?</h1>
          <p className="text-xs lg:text-[18px] font-regular leading-[28px] mt-3 lg:mt-5">Risus habitant leo egestas mauris diam eget morbi tempus vulputate..</p>
          <Button text="Download App" white={true} icon={vector} />
        </div>
        <Image src={Frame6} alt="Illustration" className="w-1/2"/>
      </section>
    </div>
  );
}

