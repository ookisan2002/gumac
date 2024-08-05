import Image from 'next/image'
import React from 'react'

export default function Section8() {
  return (
    <section className='w-full h-[220.8rem] md:h-[56.8125rem] flex justify-center items-center relative'>
        <Image
          width={1600}
          height={909}
          alt=''
          src={"/assest/section8/section8_img1.png"}
          className='w-full h-full absolute top-0 left-0'
        />          
        <div className='relative z-10'>
            <div className='flex items-center'>
                <div className='size-[2.13333rem] md:size-[0.5rem] rounded-full bg-[#00AEEF] mr-[2.67rem] md:mr-[0.62rem]'></div>
                <p className='text-[3.73333rem] md:text-[1rem] font-normal text-[#252425]'>Grid system</p>
            </div>
            <div className='flex max-md:flex-col max-md:items-center max-md:space-y-[10.67rem] md:space-x-[4.19rem]'>
                <Image
                  width={1004}
                  height={704}
                  alt=''
                  src={"/assest/section8/section8_img2.png"}
                  className='w-[93.86667rem] h-[72.26667rem] md:w-[62.75rem] md:h-[44rem]'
                />       
                <Image
                  width={327}
                  height={698}
                  alt=''
                  src={"/assest/section8/section8_img3.png"}
                  className='w-[49.33333rem] h-[102.66667rem] md:w-[20.4375rem] md:h-[43.625rem]'
                />             
            </div>
        </div>
    </section>
  )
}
