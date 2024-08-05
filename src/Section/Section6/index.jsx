import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation, Pagination } from "swiper/modules";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";


export default function Section6() {
  const nextBtn = useRef(null);
  const prevBtn = useRef(null);
  const handleSlideChange = (e) => {
    if (e.activeIndex==0) {
      prevBtn.current.style.stroke = "#444444";
    } else if (e.activeIndex == e.slides.length - 1) {
      nextBtn.current.style.stroke = "#444444";
    } else {
      prevBtn.current.style.stroke = "#198FCD";
      nextBtn.current.style.stroke = "#198FCD";
    }
  }
  return (
    <section className="w-full h-[234.13rem] overflow-hidden md:h-[47.56rem] bg-[rgba(166,220,229,0.20)] flex max-md:flex-col max-md:pt-[24rem] max-md:pl-[2.67rem] relative md:items-center">
      <Image
        src={"/assest/section6/section6_img1.png"}
        width={390}
        height={386.91}
        alt=""
        className="w-[49.86773rem] h-[49.47253rem] md:w-[24.375rem] md:h-[24.18188rem] absolute top-0 left-0"
      />
      <div className="md:ml-[6.44rem] md:mr-[4.94rem] max-md:mb-[12.53rem] relative z-10">
        <h3 className="text-trinh-Gumac-textden leading-[150%] font-semibold text-[8.53333rem] md:text-[3.5rem] mb-[4.27rem] md:mb-[1.38rem]">
          Công ty
        </h3>
        <p className="w-[94.66667rem] md:w-[37.25rem] text-[3.73333rem] md:text-[1.125rem] font-normal leading-[170%] font-manrope text-trinh-Gumac-textden">
          KGUMAC là một công ty thời trang có nhiều năm kinh nghiệm trong lĩnh
          vực thời trang công sở tại Việt Nam. Công ty sử dụng các kênh bán hàng
          trực tuyến và offline để giới thiệu sản phẩm của mình đến khách hàng
          mục tiêu. GUMAC cũng chú trọng đến việc tạo ra trải nghiệm mua sắm tốt
          nhất cho khách hàng của mình bằng cách cung cấp các dịch vụ hỗ trợ sau
          bán hàng, chính sách đổi trả linh hoạt và chương trình khách hàng thân
          thiết. Công ty cũng tập trung vào việc xây dựng thương hiệu, đảm bảo
          sự uy tín và giá trị của thương hiệu trên thị trường.
        </p>
      </div>
      <div className="slider_section6">
        <div className="swiper-container mySwiper">
          <Swiper
            slidesPerView={1}
            className="mySwiper"
            modules={[Pagination, Navigation]}
            pagination={{
              el: ".pagination_progress",
              type: "progressbar",
            }}
            navigation={{
              nextEl: ".next_btn",
              prevEl: ".prev_btn",
            }}
            slidesPerGroup={1}
            slidesPerGroupSkip={1}
            onSlideChange={(e)=>handleSlideChange(e)}
            speed={1000}
          >
            <SwiperSlide>
              <div className="size-full absolute top-0 left-0"></div>
              <Image
                width={278}
                height={454}
                alt=""
                src={"/assest/section6/section6_img2.png"}
                className="size-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className="size-full absolute top-0 left-0"></div>
              <Image
                width={278}
                height={454}
                alt=""
                src={"/assest/section6/section6_img2.png"}
                className="size-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className="size-full absolute top-0 left-0"></div>
              <Image
                width={278}
                height={454}
                alt=""
                src={"/assest/section6/section6_img2.png"}
                className="size-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className="size-full absolute top-0 left-0"></div>
              <Image
                width={278}
                height={454}
                alt=""
                src={"/assest/section6/section6_img2.png"}
                className="size-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className="size-full absolute top-0 left-0"></div>
              <Image
                width={278}
                height={454}
                alt=""
                src={"/assest/section6/section6_img2.png"}
                className="size-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className="size-full absolute top-0 left-0"></div>
              <Image
                width={278}
                height={454}
                alt=""
                src={"/assest/section6/section6_img2.png"}
                className="size-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className="size-full absolute top-0 left-0"></div>
              <Image
                width={278}
                height={454}
                alt=""
                src={"/assest/section6/section6_img2.png"}
                className="size-full"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex space-x-[4.27rem] md:space-x-[1.88rem] mt-[6.93rem] md:mt-[2rem] items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="25"
            viewBox="0 0 15 25"
            fill="none"
            className="prev_btn cursor-pointer w-[2.66667rem] h-[4.26667rem] md:w-[0.9375rem] md:h-[1.5625rem]"
            >
            <path
              d="M13.2959 23.1909L2.21635 12.5001L13.2959 1.80934"
              stroke="#444444"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              ref={prevBtn}
              />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="25"
            viewBox="0 0 15 25"
            fill="none"
            className="next_btn cursor-pointer w-[2.66667rem] h-[4.26667rem] md:w-[0.9375rem] md:h-[1.5625rem]"
            >
            <path
              d="M1.7041 1.80908L12.7836 12.4999L1.7041 23.1907"
              stroke="#198FCD"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              ref={nextBtn}
            />
          </svg>
          <div className="pagination_progress !w-[80.26667rem] !h-[0.26667rem] md:!w-[39.125rem] md:!h-[0.0625rem] bg-[rgba(37,36,37,0.20)]"></div>
        </div>
      </div>
    </section>
  );
}
