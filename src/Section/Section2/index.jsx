"use client";
import Image from "next/image";
import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

function replacePositionClasses(element, newClass) {
  const classes = element.className.split(" ");
  const filteredClasses = classes.filter(
    (className) => !className.includes("position")
  );
  filteredClasses.push(newClass);
  element.className = filteredClasses.join(" ");
}

export default function Section2() {
  const paginationPosition = useRef(null);
  const nextBtn = useRef(null);
  const prevBtn = useRef(null);
  const pagination = {
    clickable: true,
    el: ".pagination_year",
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        "text-transparent font-bold text-[10.13333rem] md:text-[10rem] leading-[120%] " +
        className +
        '">' +
        (2022 - index) +
        "</span>"
      );
    },
  };
  const handleChangeSlide = useCallback(
    (pos) => {
      if (paginationPosition.current) {
        replacePositionClasses(
          paginationPosition.current,
          `position${pos.activeIndex}`
        );
      }
      if (pos.activeIndex == 0) {
        prevBtn.current.style.stroke = "#444444";
      } else if (pos.activeIndex == pos.slides.length - 1) {
        nextBtn.current.style.stroke = "#444444";
      } else {
        prevBtn.current.style.stroke = "#198FCD";
        nextBtn.current.style.stroke = "#198FCD";
      }
    },
    [paginationPosition]
  );
  return (
    <section className=" w-full h-[198.67rem] md:h-[57.62rem] relative overflow-hidden flex md:items-center max-md:pt-[20.8rem] max-md:pb-[18.4rem] max-md:pl-[2.67rem] md:px-[6.25rem]">
      <div className="flex max-md:flex-col w-full md:justify-between">
        <div className="w-[79.2rem] md:w-[27.9375rem] max-md:mb-[6.4rem]">
          <h3 className="font-semibold text-[8.53333rem] md:text-[3.5rem] text-[#424242] mb-[4.27rem] md:mb-[1.62rem]">
            Lịch sử hình thành của GuMac
          </h3>
          <p className="text-[4.8rem] md:text-[2rem] text-trinh-Gumac-textden">
            2018-2022
          </p>
        </div>
        <div
          className="pagination_year max-md:h-[15rem] md:absolute md:flex-col-reverse position0 max-md:flex max-md:flex-row max-md:space-x-[11.2rem] max-md:mb-[6.4rem]"
          ref={paginationPosition}
        ></div>
        <div className="absolute max-md:hidden top-[33.06rem] left-[8rem] space-y-[3.12rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="15"
            viewBox="0 0 25 15"
            fill="none"
            className="cursor-pointer next_btn"
          >
            <path
              ref={nextBtn}
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
            className="cursor-pointer prev_btn"
          >
            <path
              ref={prevBtn}
              d="M23.1909 1.7041L12.5001 12.7836L1.80934 1.7041"
              stroke="#444444"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="w-[0.0625rem] h-[50rem] border-[0.0625rem] border-[rgba(37,36,37,0.20)] border-dashed absolute top-0 left-[21.5rem] max-md:hidden"></div>
        <div className="w-[94.4rem] h-[90.67rem] md:h-[37.62rem] md:w-[47.44rem] overflow-y-hidden">
          <Swiper
            direction={"horizontal"}
            slidesPerView={1}
            pagination={pagination}
            navigation={{
              nextEl: ".next_btn",
              prevEl: ".prev_btn",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper  w-full h-full"
            onSlideChange={(e) => {
              handleChangeSlide(e);
            }}
            breakpoints={{
              767: {
                direction: "vertical",
              },
            }}
          >
            <SwiperSlide>
              <div className="w-full h-[90.67rem] md:h-[37.62rem] flex flex-col ">
                <Image
                  src={"/assest/slide_img.png"}
                  alt=""
                  width={759}
                  height={471}
                  className="w-full h-[58.66667rem] md:h-[29.4375rem] mb-[4.27rem] md:mb-[2.5rem] object-cover"
                />
                <h3 className="font-semibold text-[4.8rem] md:text-[2rem] leading-[150%] mb-[2.13rem] md:mb-[1rem]">
                  GuMac chuyển mình khoác lên mình diện mạo mới
                </h3>
                <p className="font-manrope text-[3.73333rem] md:text-[1.125rem] font-normal leading-[150%] text-[#252425]">
                  Gumac đầu tư vào website để định vị thương hiệu vững chắc
                  trong lòng người dùng.{" "}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[37.62rem] flex flex-col ">
                <Image
                  alt=""
                  src={"/assest/slide_img.png"}
                  width={759}
                  height={471}
                  className="w-full h-[58.66667rem] md:h-[29.4375rem] mb-[4.27rem] md:mb-[2.5rem] object-cover"
                />
                <h3 className="font-semibold text-[4.8rem] md:text-[2rem] leading-[150%] mb-[2.13rem] md:mb-[1rem]">
                  GuMac chuyển mình khoác lên mình diện mạo mới
                </h3>
                <p className="font-manrope text-[3.73333rem] md:text-[1.125rem] font-normal leading-[150%] text-[#252425]">
                  Gumac đầu tư vào website để định vị thương hiệu vững chắc
                  trong lòng người dùng.{" "}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[37.62rem] flex flex-col ">
                <Image
                  alt=""
                  src={"/assest/slide_img.png"}
                  width={759}
                  height={471}
                  className="w-full h-[58.66667rem] md:h-[29.4375rem] mb-[4.27rem] md:mb-[2.5rem] object-cover"
                />
                <h3 className="font-semibold text-[4.8rem] md:text-[2rem] leading-[150%] mb-[2.13rem] md:mb-[1rem]">
                  GuMac chuyển mình khoác lên mình diện mạo mới
                </h3>
                <p className="font-manrope text-[3.73333rem] md:text-[1.125rem] font-normal leading-[150%] text-[#252425]">
                  Gumac đầu tư vào website để định vị thương hiệu vững chắc
                  trong lòng người dùng.{" "}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[37.62rem] flex flex-col ">
                <Image
                  alt=""
                  src={"/assest/slide_img.png"}
                  width={759}
                  height={471}
                  className="w-full h-[58.66667rem] md:h-[29.4375rem] mb-[4.27rem] md:mb-[2.5rem] object-cover"
                />
                <h3 className="font-semibold text-[4.8rem] md:text-[2rem] leading-[150%] mb-[2.13rem] md:mb-[1rem]">
                  GuMac chuyển mình khoác lên mình diện mạo mới
                </h3>
                <p className="font-manrope text-[3.73333rem] md:text-[1.125rem] font-normal leading-[150%] text-[#252425]">
                  Gumac đầu tư vào website để định vị thương hiệu vững chắc
                  trong lòng người dùng.{" "}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[37.62rem] flex flex-col ">
                <Image
                  alt=""
                  src={"/assest/slide_img.png"}
                  width={759}
                  height={471}
                  className="w-full h-[58.66667rem] md:h-[29.4375rem] mb-[4.27rem] md:mb-[2.5rem] object-cover"
                />
                <h3 className="font-semibold text-[4.8rem] md:text-[2rem] leading-[150%] mb-[2.13rem] md:mb-[1rem]">
                  GuMac chuyển mình khoác lên mình diện mạo mới
                </h3>
                <p className="font-manrope text-[3.73333rem] md:text-[1.125rem] font-normal leading-[150%] text-[#252425]">
                  Gumac đầu tư vào website để định vị thương hiệu vững chắc
                  trong lòng người dùng.{" "}
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
