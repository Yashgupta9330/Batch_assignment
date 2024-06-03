import UniqueQuestion from "./UniqueQuestion"


export default function Questions(){
  return (
    <section className="flex flex-col items-center w-[95%] sm:w-[80%] mt-12">
    <div className="flex  justify-start w-full">
    <div className="flex flex-col gap-[1rem]">
    <div className="font-medium text-[18px] text-[#FF5555] leading-[28px]">Questions</div>
    <div className="font-bold text-[2rem] sm:text-[3rem] font-clash">Frequently Asked Questions?</div>
   </div> 
   </div>
      <div className='flex flex-col gap-2 mt-10 lg:mt-16 mb-10 w-full'>
        <UniqueQuestion/>
        <UniqueQuestion reverse={true}/>
        <UniqueQuestion/>
      </div>
    </section>
  );
}