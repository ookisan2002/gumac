import Image from "next/image";

export default function Section1() {
  return (
    <section className="w-full relative h-screen overflow-hidden max-md:flex-col p-[0_0_12.7rem_2.67rem] max-md:justify-end md:p-[24.63rem_6.31rem_4.81rem_6.06rem] flex md:justify-between md:items-start">
      <Image
        alt="image"
        src={"/assest/banner_bg2.png"}
        width={1600}
        height={930}
        className="absolute top-0 right-0 h-full w-full object-cover max-sm:object-[-235rem]"
      />
      <div data-aos="fade-right" className=" max-md:mb-[25.6rem] w-fit">
        <h3 className="w-[94.66667rem] md:w-[50.75rem] text-white text-[8.53333rem] md:text-[4.625rem] font-semibold leading-[normal] md:leading-[124%]">
            Phong cách mới - Hạnh phúc mới, Giá trị thật - Hạnh phúc đích thực
        </h3>
      </div>
      <div data-aos="fade-left" className="flex flex-col  max-md:flex-row ">
        <div className="space-y-[2rem] max-md:w-[37.33rem]">
          <div className="space-y-[0.5rem] flex flex-col">
            <p className="text-[0.875rem] font-normal lead-[1.375rem] uppercase text-[rgba(255,255,255,0.65)] max-md:text-[3.2rem] max-md:font-medium max-md:leading-[5.86667rem]">
              KHÁCH HÀNG
            </p>
            <span className="text-[1.25rem] font-normal leading-[1.65625rem] max-md:text-[3.73rem] max-md:font-medium max-md:leading-[150%] text-white  line-clamp-3 text-ellipsis">
            Công ty cổ phần GuMac
            </span>
          </div>
          <div className="space-y-[0.5rem] flex flex-col">
            <p className="text-[0.875rem] font-normal lead-[1.375rem] uppercase text-[rgba(255,255,255,0.65)] max-md:text-[3.2rem] max-md:font-medium max-md:leading-[5.86667rem]">
              THỜI GIAN
            </p>
            <span className="text-[1.25rem] font-normal leading-[1.65625rem] text-white max-md:text-[3.73rem] max-md:font-medium max-md:leading-[150%]">
                5/2022 - 9/2022
            </span>
          </div>
        </div>
        <div className="space-y-[2rem] md:mt-[2rem] max-md:ml-[10.4rem] max-md:w-[46.13rem]">
          <div className="space-y-[0.5rem] flex flex-col md:hidden">
            <p className="text-[3.2rem] font-medium leading-[5.86667rem] uppercase text-[rgba(255,255,255,0.65)]">
              THÀNH VIÊN
            </p>
            <span className="text-[1.25rem] font-normal leading-[1.65625rem] text-white max-md:text-[3.73rem] max-md:font-medium max-md:leading-[150%] line-clamp-3 text-ellipsis">
                Trang Nguyễn, Tiến Dũng
            </span>
          </div>
          <div className="space-y-[0.5rem] flex flex-col">
            <p className="text-[0.875rem] font-normal lead-[1.375rem] uppercase text-[rgba(255,255,255,0.65)] max-md:text-[3.2rem] max-md:font-medium max-md:leading-[5.86667rem]">
              DỊCH VỤ
            </p>
            <span className="text-[1.25rem] font-normal leading-[1.65625rem] text-white max-md:text-[3.73rem] max-md:font-medium max-md:leading-[150%]  line-clamp-3 text-ellipsis">
              UI/UX Design
            </span>
          </div>
          <div className="space-y-[0.5rem] flex flex-col max-md:hidden">
            <p className="text-[0.875rem] font-normal lead-[1.375rem] uppercase text-[rgba(255,255,255,0.65)]">
              THÀNH VIÊN
            </p>
            <span className="text-[1.25rem] font-normal leading-[1.65625rem] text-white">
              Trang Nguyễn
            </span>
            <span className="text-[1.25rem] font-normal leading-[1.65625rem] text-white">
              Tiến Dũng
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
