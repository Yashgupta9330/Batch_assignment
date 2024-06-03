import Image from "next/image";

export default function Item({ item, idx }) {
    return (
        <div className={`w-full flex  flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row lg:gap-16'} items-center justify-center relative`}>
            <div className="flex items-center justify-center w-full lg:w-1/2 relative">
                <div>
                    <div className="hidden lg:block">
                        <div className="w-[19rem] h-[27rem] absolute border rounded-[100%] border-black transform origin-right rotate-[135deg] right-[75%] lg:right-[73%] top-[12rem]"></div>
                        <div className="w-[19rem] h-[27rem] absolute border rounded-[100%] border-black transform origin-right rotate-[135deg] right-[70%] lg:right-[68%] top-[10rem]"></div>
                        <div className="w-[19rem] h-[27rem] absolute border rounded-[100%] border-black transform origin-right rotate-[135deg] right-[65%] lg:right-[63%] top-[8rem]"></div>
                    </div>
                </div>
                <Image src={item.image} alt={item.alt} className="z-[100]" />
                <Image src={item.groupImage} alt="group" className="absolute right-12 lg:right-24 top-0" />
            </div>
            <div className="flex flex-col w-4/5 sm:w-3/5 lg:w-[44rem] gap-[2rem] mt-8 lg:mt-0 ml-4">
                <div className="flex flex-col gap-[1rem]">
                    {item.heading && <div className="font-medium text-[18px] text-[#FF5555] leading-[28px]">{item.heading}</div>}
                    {item.title && <div className="font-bold text-[2rem] sm:text-[3rem] font-clash">{item.title}</div>}
                </div>
                {item.features.map((feature, index) => (
                    <div className="flex flex-col gap-[0.75rem]" key={index}>
                        <div className="flex gap-1 items-center">
                            <Image src={feature.image} alt="" className={`${idx !== 0 ? 'w-[48px] h-[48px]' : ''}`} />
                            <span className="font-semibold text-[1.125rem]">{feature.title}</span>
                        </div>
                        <p className="font-medium text-[1.125rem] leading-[1.75rem]">{feature.description}</p>
                    </div>
                ))}
            </div>
            {idx === 0 && <Image src={item.groupImage} alt="group" className="absolute left-[80%]" />}
        </div>
    );
}
