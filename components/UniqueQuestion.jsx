export default function UniqueQuestion({ reverse }) {
    return (
      <div className={`flex ${reverse ? 'flex-col sm:flex-row-reverse' : 'flex-col sm:flex-row'}`}>
        <div className='flex flex-col items-center justify-center p-8 rounded-lg bg-[#FF5555]'>
          <div className="flex flex-col items-center justify-center gap-[8px]">
            <h3 className='text-[28px] text-[#FFFFFF] leading-[28px] font-semibold'>The Best Financial Accounting App Ever!</h3>
            <p className='mt-4 text-base lg:text-lg text-[#FFFFFF]'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center p-8 rounded-lg bg-white'>
          <div className="flex flex-col items-center justify-center gap-[8px]">
            <h3 className='text-[28px]  leading-[28px] font-semibold'>The Best Financial Accounting App Ever</h3>
            <p className='mt-4 text-base lg:text-lg'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
          </div>
        </div>
      </div>
    );
  }
  