import Image from "next/image";
import React from "react";

export default function Section12() {
  return (
    <section className="w-full h-[281.33rem] p-[17.07rem_0_28rem_2.67rem] md:h-[53.125rem] md:p-[8.25rem_0_4.38rem_6.25rem] bg-[#D8EEF1] relative ">
      <Image
        src={"/assest/section12/section12_img2.png"}
        width={371}
        height={331}
        className="max-md:hidden w-[23.1875rem] h-[20.6875rem] absolute top-0 left-0"
        alt=""
      />
      <Image
        src={"/assest/section12/section12_img5.png"}
        alt=""
        width={1050}
        height={253}
        className="max-md:hidden w-[65.625rem] h-[15.8125rem] absolute top-[19.56rem] left-[1.81rem]"
      />
      <div className="max-md:w-[78.66667rem] text-[8.53333rem] md:text-[4.375rem] mb-[8rem] md:mb-[3.12rem] font-semibold text-[rgba(37,36,37,0.80)] relative z-10">
        #Thiết kế vô cùng độc đáo
      </div>
      <button className="w-[38.13rem] h-[10.93rem] md:w-[12.25rem] md:h-[3.625rem] bg-trinh-Gumac-xanh rounded-[26.66667rem] md:rounded-[6.25rem] flex justify-center items-center text-white text-[3.73333rem] md:text-[1.25rem] font-bold leading-[130%] relative z-10">
        Liên hệ ngay
      </button>
      <div className="flex max-md:mt-[11.2rem] md:absolute md:top-[26.56rem] md:left-[9rem]">
        <div className="mr-[7.47rem] md:mr-[5.44rem]">
          <Image
            alt=""
            src={"/assest/section12/section12_img3.png"}
            width={244}
            height={305}
            className="w-[41.86667rem] h-[52.26667rem] mb-[6.4rem] md:w-[15.25rem] md:h-[19.0625rem] md:mb-[0.88rem]"
          />
          <p className="text-black text-center text-[4.26667rem] md:text-[1.5rem] font-normal leading-[150%] ">
            Thời trang nữ
          </p>
        </div>
        <div>
          <Image
            alt=""
            src={"/assest/section12/section12_img4.png"}
            width={244}
            height={305}
            className="w-[41.86667rem] h-[52.26667rem] mb-[6.4rem] md:w-[15.25rem] md:h-[19.0625rem] md:mb-[0.88rem]"
          />
          <p className="text-black text-center text-[4.26667rem] md:text-[1.5rem] font-normal leading-[150%] ">
            Thời trang nữ
          </p>
        </div>
      </div>
      <Image
        alt=""
        src={"/assest/section12/section12_img1.png"}
        width={671}
        height={730}
        className="w-[96.26667rem] h-[104.53333rem] md:w-[41.9375rem] md:h-[45.625rem] absolute top-[148.8rem] right-[6.67rem] md:top-[3.75rem] md:right-[6.25rem]"
      />
    </section>
  );
}
