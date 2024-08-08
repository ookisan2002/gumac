import Image from "next/image";
import React from "react";

export default function Section9() {
  return (
    <section className="w-full h-[689.6rem] md:h-[133.75rem] flex flex-col relative overflow-hidden max-md:pt-[17.07rem]">
      <div className="w-full h-[61.87rem] md:h-[32.37rem] bg-[#FFFBF3] absolute top-0 right-0"></div>
      <div className="w-full h-[627.73rem] md:h-[101.38rem] bg-[#F4EEDA] absolute bottom-0 right-0"></div>
      <p className="w-[94.66667rem] md:w-[25.75rem] text-[3.73333rem] max-md:mx-auto md:text-[1.125rem] relative z-10 md:absolute md:top-[18rem] md:left-[8.44rem] leading-[150%] font-normal font-manrope text-[#252425] max-md:mb-[7.47rem]">
        Khi khám phá trang chi tiết sản phẩm ngoài việc có thể nắm rõ thông tin
        của sản phẩm khách hàng cũng có thể dễ dàng thêm sản phẩm vào giỏ hàng
        để tiến hành mua.
      </p>
      <Image
        width={942}
        height={632}
        alt=""
        src={"/assest/section9/section9_img2.png"}
        className="w-[92.26667rem] h-[61.33333rem] border-[2.09rem] rounded-[6.4rem] max-md:mb-[21.6rem] max-md:mx-auto shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2)] md:border-[0.625rem] border-white  md:w-[58.875rem] md:h-[39.5rem] md:rounded-[2rem] relative z-10 md:absolute md:top-[10.31rem] md:right-[4.25rem]"
      />
      <Image
        width={599}
        height={342}
        alt=""
        src={"/assest/section9/section9_img3.png"}
        className="w-[86.61rem] h-[49.77rem] border-[2.09rem] rounded-[6.4rem] max-md:m-[0_4.33rem_15.83rem_9.07rem] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2)] md:border-[0.625rem] border-white md:w-[37.4375rem] md:h-[21.375rem] md:rounded-[1.25rem] relative z-10 md:absolute md:top-[30rem] md:left-[8.44rem] "
      />
      <Image
        width={1050}
        height={253}
        alt=""
        src={"/assest/section9/section9_img1.png"}
        className="w-[94.66667rem] h-[22.93333rem] md:w-[65.625rem] md:h-[15.8125rem] absolute right-1/2 translate-x-[50%] top-[110.13rem] md:top-[56.31rem]"
      />
      <p className="text-[3.73333rem] md:text-[1.125rem] leading-[150%] w-[94.66667rem] max-md:m-[0_auto_15.73rem] md:w-[24.25rem] text-[#252425] font-manrope font-normal relative z-10 md:absolute md:top-[73.12rem] md:right-[6.81rem]">
        Tính năng khá khác biệt của GuMac so với nhiều hãng thời trang khác là
        phần tư vấn chọn size 1 cách tự động
      </p>
      <Image
        width={306.231}
        height={711.165}
        alt=""
        src={"/assest/section9/section9_img7.png"}
        className="w-[67.73333rem] h-[150.93333rem] border-[2.09rem] rounded-[6.4rem] max-md:m-[0_0_11.2rem_2.67rem] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2)] md:border-[0.625rem] border-transparent relative z-10 md:hidden"
      />
      <Image
        width={306.231}
        height={711.165}
        alt=""
        src={"/assest/section9/section9_img6.png"}
        className="w-[67.73333rem] h-[150.93333rem] border-[2.09rem] rounded-[6.4rem] max-md:m-[0_0_15.73rem_29.6rem] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2)] md:border-[0.625rem] border-transparent md:w-[19.13944rem] md:h-[44.44781rem] md:rounded-[1rem] relative z-10 md:absolute md:top-[82.83rem] md:right-[9.32rem]"
      />
      <Image
        width={941}
        height={1060}
        alt=""
        src={"/assest/section9/section9_img4.png"}
        className="w-[133.06667rem] h-[144rem] md:w-[58.8125rem] z-10 md:h-[66.25rem] absolute bottom-0 max-md:right-0 md:-left-[4.31rem] object-cover"
      />
      <div
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.00)0%, rgba(255, 255, 255, 0.14)69.16%, rgba(255, 255, 255, 0.43)100%)",
        }}
        className="size-[133.06667rem] md:size-[55.9375rem] rounded-full bg-[rgba(25,143,205,0.10)] absolute max-md:right-0 -bottom-[17.87rem] md:-left-[1.44rem] md:-bottom-[3.19rem]"
      ></div>
    </section>
  );
}
