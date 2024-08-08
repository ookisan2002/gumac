import Image from "next/image";
import React from "react";

export default function Section3() {
  return (
    <section className="w-full relative max-md:h-[376.27rem] md:h-[104.03rem] md:py-[4.25rem] bg-[rgba(166,220,229,0.10);]">
      <div className="w-full h-[146.28rem] md:h-[39.55731rem] flex flex-col relative justify-end items-end">
        <Image
          width={868}
          height={632.917}
          alt=""
          src={"/assest/section3/section3_img1.png"}
          className="w-full h-[82.78667rem] md:w-[54.25rem] md:h-full absolute top-0 left-0"
        />
        <p className="w-[94.66667rem] md:w-[49.875rem] max-md:text-center max-md:m-[9.75rem_auto_0] md:mr-[6.62rem] text-trinh-Gumac-textden text-[6.4rem] md:text-[2.8125rem] font-normal leading-[150%]">
          Trải nghiệm{" "}
          <span className="text-trinh-Gumac-xanh text-[6.4rem] md:text-[2.8125rem] font-semibold leading-[150%]">
            mua hàng tuyệt vời trên Website
          </span>{" "}
          là thứ mà sàn thương mại điện tử không thể mang lại.
        </p>
        <Image
          width={1097.79}
          height={188.03}
          alt=""
          src={"/assest/section3/section3_img2.png"}
          className="w-[89.59973rem] h-[15.34667rem] md:w-[68.61188rem] md:h-[11.75188rem] max-md:mx-auto"
        />
      </div>
      <div className="w-full max-md:h-[227.06rem] md:h-[60.57rem] pt-[18.79rem] md:pt-[5.07rem] overflow-hidden flex flex-col items-center relative">
        <Image
          width={331.506}
          height={328.879}
          alt=""
          src={"/assest/section3/section3_img3.png"}
          className="w-[20.71913rem] h-[20.55494rem] absolute top-[-2rem] left-0 max-md:hidden"
        />
        <h3 className="text-[8.53333rem] md:text-[3.5rem] font-semibold leading-[150%] text-[#424242]">
          Mục tiêu của dự án
        </h3>
        <div className=" flex w-fit space-x-[12.27rem] md:space-x-[3.75rem] mt-[12.27rem] md:mt-[3.12rem] flex-wrap max-md:w-[92.27rem] ">
          <div
            data-aos="fade-left"
            className="max-md:mb-[9.87rem] w-[40rem] md:w-[20.9375rem] flex justify-center items-center h-[40rem] md:h-[20.9375rem] rounded-[20.9375rem] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(166,220,229,0.07)_0%,rgba(166,220,229,0.08)_69.16%,rgba(166,220,229,0.26)_100%)]"
          >
            <p className="w-[26.13333rem] md:w-[14.3125rem] text-center text-[4.26667rem]  md:text-[2rem] font-normal line-clamp-3 text-ellipsis">
              Tăng tỉ lệ chuyển đổi
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="max-md:!translate-y-[18.13rem] max-md:mb-[9.87rem] w-[40rem] md:w-[20.9375rem] flex justify-center items-center h-[40rem] md:h-[20.9375rem] rounded-[20.9375rem] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(166,220,229,0.07)_0%,rgba(166,220,229,0.08)_69.16%,rgba(166,220,229,0.26)_100%)]"
          >
            <p className="w-[26.13333rem] md:w-[14.3125rem] text-center text-[4.26667rem]  md:text-[2rem] font-normal line-clamp-3 text-ellipsis">
              Tăng giá trị trung bình đơn
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="max-md:mb-[9.87rem] w-[40rem] md:w-[20.9375rem] flex justify-center items-center h-[40rem] md:h-[20.9375rem] rounded-[20.9375rem] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(166,220,229,0.07)_0%,rgba(166,220,229,0.08)_69.16%,rgba(166,220,229,0.26)_100%)]"
          >
            <p className="w-[26.13333rem] md:w-[14.3125rem] text-center text-[4.26667rem]  md:text-[2rem] font-normal line-clamp-3 text-ellipsis">
              Giảm phụ thuộc sàn thương mại điện tử
            </p>
          </div>
        </div>
        <h3 className="mt-[17.23rem] md:mt-[9.37rem] text-[8.53333rem] md:text-[3.5rem] text-[#424242] leading-[150%] font-semibold">
          3C Research
        </h3>
        <p className="w-[94.66667rem] md:w-[63.4375rem] text-[3.73333rem] md:text-[1.125rem] text-trinh-Gumac-textden leading-[170%] font-manrope font-normal text-center mt-[4.27rem] md:mt-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. of type and scrambled it to
          make a type specimen book.{" "}
        </p>
      </div>
    </section>
  );
}
