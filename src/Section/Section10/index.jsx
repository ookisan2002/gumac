"use client ";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation, Thumbs, Controller } from "swiper/modules";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Section10() {
  const [swiperPC, setSwiperPC] = useState(null);
  const [swiperMobile, setSwiperMobile] = useState(null);
  const [swiperSubMobile, setSwiperSubMobile] = useState(null);
  useEffect(()=>{
    if(swiperPC&&swiperMobile&&swiperSubMobile){
      swiperPC.controller.control = swiperSubMobile;
      swiperMobile.controller.control = swiperSubMobile;
      swiperSubMobile.controller.control = [swiperMobile,swiperPC];
      swiperPC.on('touchStart', () => {
        swiperMobile.autoplay.stop();
      });
      swiperPC.on('touchEnd', () => {
        swiperMobile.autoplay.start();
      });
      swiperSubMobile.on('touchStart', () => {
        swiperMobile.autoplay.stop();
      });
      swiperSubMobile.on('touchEnd', () => {
        swiperMobile.autoplay.start();
      });
    }
  },[
    swiperPC,swiperMobile,swiperSubMobile
  ])
  return (
    <section className="w-full h-[902.13rem] md:h-[365.88rem] py-[17.07rem] max-md:flex max-md:flex-col md:pt-[12.75rem] pb-[11.25rem] relative bg-[#FFFBF3] overflow-hidden">
      <div className="max-md:mx-auto max-md:w-[91.46667rem] md:ml-[6rem] relative z-10 mb-[54.93rem] md:mb-[18.69rem]">
        <div className="flex items-center mb-[4.27rem] md:mb-[2.75rem] ">
          <div className="size-[2.13333rem] md:size-[0.5rem] rounded-full bg-[#00AEEF] mr-[2.67rem] md:mr-[0.62rem]"></div>
          <p className="text-[3.73333rem] md:text-[1rem] font-normal text-[#252425]">
            Mainpage
          </p>
        </div>
        <Image
          width={1042}
          height={3002}
          alt=""
          src={"/assest/section10/secction10_img2.png"}
          className="w-[91.46667rem] h-[255.2rem] md:w-[65.125rem] md:h-[187.62rem] rounded-[4.26667rem] md:rounded-[2rem] border-white border-[10px]"
        />
      </div>
      <Image
        width={849.848}
        height={130}
        alt=""
        src={"/assest/section10/secction10_img1.png"}
        className="max-md:hidden h-[53.1155rem] w-[8.125rem] absolute top-[16.38rem] right-[13rem] object-cover"
      />
      <div className="size-[56rem] md:size-[30.875rem] rounded-full bg-[rgba(243,235,223,0.61)] absolute top-[253.87rem] md:top-[189.19rem] -right-[3.47rem] md:right-[17.06rem]"></div>
      <div className="size-[60rem] md:size-[14.0625rem] rounded-full bg-[rgba(243,235,223,0.61)] absolute top-[608.8rem] md:top-[264.12rem] -right-[15.2rem] md:right-[8.81rem]"></div>
      <div className="size-[86.13333rem] md:size-[30.875rem] rounded-full absolute top-[4rem] md:top-[6.87rem] -left-[33.07rem] md:-left-[6.5rem] bg-[rgba(243,235,223,0.61)]"></div>
      <Image
        height={549}
        width={601}
        alt=""
        src={"/assest/section10/secction10_img3.png"}
        className="w-[94.66667rem] h-[123.73333rem] md:w-[27.6875rem] md:h-[36.1875rem] md:absolute md:top-[223.06rem] max-md:-ml-[3.2rem] md:left-[15.81rem] max-md:relative z-10 object-cover"
      />
      <div className="size-[113.6rem] md:size-[33.25rem] rounded-full bg-white absolute max-md:right-[12.27rem] top-[351.47rem] md:left-[9.19rem] md:top-[227.38rem]"></div>
      <p className="w-[94.66667rem] md:w-[33.875rem] text-[3.73333rem] md:text-[1.125rem] leading-[150%] font-manrope font-normal max-md:mx-auto md:mr-[6.25rem] md:float-right max-md:relative z-10">
        Page bộ sưu tập khách hàng có thể thoải mái lựa chọn theo các bộ sưu
        tập, danh mục có thể lọc theo mức giá và kích thước
      </p>
      <Image
        width={687}
        height={467}
        alt=""
        src={"/assest/section10/secction10_img5.png"}
        className="max-md:hidden w-[42.9375rem] h-[29.1875rem] absolute top-[229.56rem] right-[6.19rem] rounded-[2rem] object-cover"
      />
      <Image
        width={671.675}
        height={446.329}
        alt=""
        src={"/assest/section10/secction10_img6.png"}
        className="max-md:hidden w-[41.97969rem] h-[27.89556rem] absolute top-[267.31rem] right-[11.83rem] border-[0.37rem] border-white rounded-[2rem] object-cover"
      />
      <Image
        width={671.675}
        height={446.329}
        alt=""
        src={"/assest/section10/secction10_img4.png"}
        className="max-md:hidden w-[41.97969rem] h-[27.89556rem] absolute top-[254.81rem] z-20 -left-[2.06rem] border-[0.37rem] border-[rgba(255,255,255,0.50)] rounded-[2rem] object-cover"
      />
      <Image
        width={356}
        height={240}
        alt=""
        src={"/assest/section10/section10_img12.jpg"}
        className="md:hidden w-[94.93333rem] h-[64rem] relative z-10 mb-[6.13rem] border-[10px] border-white mx-auto rounded-[4.26667rem] object-cover"
      />
      <Image
        width={356}
        height={240}
        alt=""
        src={"/assest/section10/section10_img12.jpg"}
        className="md:hidden w-[94.93333rem] h-[64rem] relative z-10 mb-[6.13rem] border-[10px] border-white mx-auto rounded-[4.26667rem] object-cover"
      />
      <Image
        width={356}
        height={240}
        alt=""
        src={"/assest/section10/section10_img12.jpg"}
        className="md:hidden w-[94.93333rem] h-[64rem] relative z-10 mb-[13.6rem] border-[10px] border-white mx-auto rounded-[4.26667rem] object-cover"
      />
      <div className="w-[54rem] h-[28.37rem] overflow-hidden absolute top-[314.44rem] left-[29.5rem]">
        <div className="slider max-md:hidden">
          <div className="swiper-container mySwiper">
            <Swiper
              slidesPerView={5}
              loop={true}
              className="mySwiper"
              modules={[Autoplay, A11y, Controller]}
              onSwiper={setSwiperPC}
              loopAdditionalSlides={4}
            >
              <SwiperSlide>
                <Image
                  width={278}
                  height={454}
                  alt=""
                  src={"/assest/section10/secction10_img8.png"}
                  className="size-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={278}
                  height={454}
                  alt=""
                  src={"/assest/section10/secction10_img9.png"}
                  className="size-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={278}
                  height={454}
                  alt=""
                  src={"/assest/section10/secction10_img10.png"}
                  className="size-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={278}
                  height={454}
                  alt=""
                  src={"/assest/section10/secction10_img7.png"}
                  className="size-full"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  width={278}
                  height={454}
                  alt=""
                  src={"/assest/section10/secction10_img8.png"}
                  className="size-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={278}
                  height={454}
                  alt=""
                  src={"/assest/section10/secction10_img9.png"}
                  className="size-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={278}
                  height={454}
                  alt=""
                  src={"/assest/section10/secction10_img10.png"}
                  className="size-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={278}
                  height={454}
                  alt=""
                  src={"/assest/section10/secction10_img7.png"}
                  className="size-full"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  width={278}
                  height={454}
                  alt=""
                  src={"/assest/section10/secction10_img8.png"}
                  className="size-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={278}
                  height={454}
                  alt=""
                  src={"/assest/section10/secction10_img9.png"}
                  className="size-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={278}
                  height={454}
                  alt=""
                  src={"/assest/section10/secction10_img10.png"}
                  className="size-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={278}
                  height={454}
                  alt=""
                  src={"/assest/section10/secction10_img7.png"}
                  className="size-full"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <p className="max-md:m-[0_auto_10.93rem] max-md:text-center font-manrope text-[#252425] font-normal leading-[150%] text-[3.73333rem] md:text-[1.125rem] w-[94.66667rem] md:w-[27.625rem] md:absolute md:top-[307.94rem] md:right-[17.37rem]">
        GuMac ra mắt rất nhiều kiểu dáng, mẫu mã đa dạng dành cho các cô nàng
        công sở tha hồ lựa chọn
      </p>
      <div className="w-[64.8rem] h-[148.8rem] md:w-[21.375rem] md:h-[48.65356rem] rounded-[6.4rem] md:rounded-[1.5rem] border-[1.333rem] md:border-[8px] border-white max-md:relative md:absolute md:top-[305.97rem] md:left-[6.75rem] max-md:mx-auto shadow-[0px_0px_10px_0px_rgba(0,0,0,0.4)]">
        <Image
          width={342}
          height={778.457}
          alt=""
          src={"/assest/section10/secction10_img11.png"}
          className="w-full h-full absolute top-0 left-0 object-cover rounded-[6.4rem] md:rounded-[1.5rem]"
        />
        <div className="w-full h-full relative z-10">
          <div className="w-[61.06667rem] h-[91.73333rem] md:w-[19.3125rem] md:h-[29.875rem] mx-auto mt-[19rem] md:mt-[7rem] overflow-hidden">
            <div className="slide2">
              <div className="swiper-container mySwiper">
                <Swiper
                  slidesPerView={5}
                  loop={true}
                  className="mySwiper"
                  modules={[Autoplay, A11y, Controller]}
                  onSwiper={setSwiperMobile}
                  autoplay={{
                    delay: 2500,
                  }}
                  loopAdditionalSlides={4}
                >
                  <SwiperSlide>
                    <Image
                      width={278}
                      height={454}
                      alt=""
                      src={"/assest/section10/secction10_img7.png"}
                      className="size-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={278}
                      height={454}
                      alt=""
                      src={"/assest/section10/secction10_img8.png"}
                      className="size-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={278}
                      height={454}
                      alt=""
                      src={"/assest/section10/secction10_img9.png"}
                      className="size-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={278}
                      height={454}
                      alt=""
                      src={"/assest/section10/secction10_img10.png"}
                      className="size-full"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image
                      width={278}
                      height={454}
                      alt=""
                      src={"/assest/section10/secction10_img7.png"}
                      className="size-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={278}
                      height={454}
                      alt=""
                      src={"/assest/section10/secction10_img8.png"}
                      className="size-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={278}
                      height={454}
                      alt=""
                      src={"/assest/section10/secction10_img9.png"}
                      className="size-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={278}
                      height={454}
                      alt=""
                      src={"/assest/section10/secction10_img10.png"}
                      className="size-full"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image
                      width={278}
                      height={454}
                      alt=""
                      src={"/assest/section10/secction10_img7.png"}
                      className="size-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={278}
                      height={454}
                      alt=""
                      src={"/assest/section10/secction10_img8.png"}
                      className="size-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={278}
                      height={454}
                      alt=""
                      src={"/assest/section10/secction10_img9.png"}
                      className="size-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={278}
                      height={454}
                      alt=""
                      src={"/assest/section10/secction10_img10.png"}
                      className="size-full"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="hidden absolute top-[33.06rem] left-[8rem] space-y-[3.12rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="15"
              viewBox="0 0 25 15"
              fill="none"
              className="next_btn"
            >
              <path
                d="M1.80908 13.2959L12.4999 2.21635L23.1907 13.2959"
                stroke="#198FCD"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="15"
              viewBox="0 0 25 15"
              fill="none"
              className="prev_btn"
            >
              <path
                d="M23.1909 1.7041L12.5001 12.7836L1.80934 1.7041"
                stroke="#444444"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="mx-auto slide3 mt-[3.73rem] md:mt-[0.87rem]">
            <div className="swiper-container mySwiper">
              <Swiper
                slidesPerView={5}
                loop={true}
                className="mySwiper"
                modules={[Autoplay, Navigation, Controller]}
                onSwiper={setSwiperSubMobile}
                slideToClickedSlide={true}
                touchRatio={0.2}
                loopAdditionalSlides={4}
              >
                <SwiperSlide>
                  <Image
                    width={278}
                    height={454}
                    alt=""
                    src={"/assest/section10/secction10_img7.png"}
                    className="size-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={278}
                    height={454}
                    alt=""
                    src={"/assest/section10/secction10_img8.png"}
                    className="size-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={278}
                    height={454}
                    alt=""
                    src={"/assest/section10/secction10_img9.png"}
                    className="size-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={278}
                    height={454}
                    alt=""
                    src={"/assest/section10/secction10_img10.png"}
                    className="size-full"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    width={278}
                    height={454}
                    alt=""
                    src={"/assest/section10/secction10_img7.png"}
                    className="size-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={278}
                    height={454}
                    alt=""
                    src={"/assest/section10/secction10_img8.png"}
                    className="size-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={278}
                    height={454}
                    alt=""
                    src={"/assest/section10/secction10_img9.png"}
                    className="size-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={278}
                    height={454}
                    alt=""
                    src={"/assest/section10/secction10_img10.png"}
                    className="size-full"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    width={278}
                    height={454}
                    alt=""
                    src={"/assest/section10/secction10_img7.png"}
                    className="size-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={278}
                    height={454}
                    alt=""
                    src={"/assest/section10/secction10_img8.png"}
                    className="size-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={278}
                    height={454}
                    alt=""
                    src={"/assest/section10/secction10_img9.png"}
                    className="size-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={278}
                    height={454}
                    alt=""
                    src={"/assest/section10/secction10_img10.png"}
                    className="size-full"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
