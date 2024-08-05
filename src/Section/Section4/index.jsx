import Image from "next/image";
import React from "react";

export default function Section4() {
  return (
    <section className="w-full h-[216.53rem] overflow-hidden
     md:h-[43.94rem] relative flex max-md:flex-col items-center justify-between pt-[22.93rem] md:p-[3.94rem_3.56rem_0_6.25rem]">
      <Image
        width={1600}
        height={703}
        alt=""
        src={"/assest/section3/section4_bg.png"}
        className="w-full h-full absolute top-0 left-0 z-0 object-cover"
      />
      <div className="flex flex-col items-start relative z-10 w-[94.66667rem] md:w-[38.875rem] max-md:mb-[10.93rem]">
        <h3 className="text-trinh-Gumac-textden text-[8.53333rem] md:text-[3.5rem] font-semibold leading-[150%] mb-[4.27rem] md:mb-[1.5rem]">Khách hàng của GuMac</h3>
        <p className="text-trinh-Gumac-textden text-[3.73333rem] md:text-[1.125rem] font-normal leading-[170%] font-manrope">
          Khách hàng của GuMac là những người quan tâm đến thời trang, những
          người có nhu cầu muốn mua sắm quần áo công sở chất lượng. GuMac luôn
          đồng hành và thấu hiểu những băn khoăn trong hành trình định hình vẻ
          đẹp và xây dựng phong cách riêng của chị em phụ nữ, GUMAC cho ra đời
          những sản phẩm mang tính tiện lợi cao, tối ưu được hầu hết các khuyết
          điểm trên cơ thể, để các chị cảm thấy tự tin, thoải mái nhất khi khoác
          lên người.
        </p>
      </div>
      <Image
        width={576}
        height={640}
        alt=''
        src={"/assest/section3/section4_img1.png"}
        className='w-[97.6rem] h-[108.26667rem] md:w-[36rem] md:h-[40rem] relative z-10 max-md:ml-[5.67rem]'
      />          
    </section>
  );
}
