import Image from "next/image";
import React from "react";

export default function Section5() {
  return (
    <section className="bg-[#FFFBF3] w-full h-[252.53rem] md:h-[63.31rem] overflow-hidden relative max-md:pt-[32.27rem] flex justify-end items-start md:items-center">
      <Image
        width={323.049}
        height={329.25}
        alt=""
        src={"/assest/section5/section5_img1.svg"}
        className="w-[40.53333rem] h-[45.86667rem] md:w-[20.19056rem] md:h-[20.57813rem] opacity-[0.35] absolute top-[12.31rem] -right-[3rem]"
      />
      <Image
        width={922.317}
        height={749.895}
        alt=""
        src={"/assest/section5/section5_img2.png"}
        className="w-[138.8168rem] h-[121.33333rem] md:w-[57.64481rem] md:h-[46.86844rem] absolute top-[114.13rem] max-w-[unset] max-md:-right-[23rem] md:top-[11.75rem] md:left-[3.5rem]"
      />
      <div className="w-[94.66667rem] md:w-[37.875rem] max-md:mx-auto md:mr-[6.25rem]">
        <h3 className="text-[8.53333rem] md:text-[3.5rem] text-trinh-Gumac-textden leading-[normal] md:leading-[150%] font-semibold mb-6">Ngành nghề kinh doanh</h3>
        <p className="text-[3.73333rem] md:text-[1.125rem] text-trinh-Gumac-textden leading-[170%] font-normal font-manrope">
          Những đối thủ cạnh tranh của GUMAC là các thương hiệu thời trang công
          sở khác như IVY moda, May 10, Ninomaxx, Charles & Keith và The
          Executive,... Để cạnh tranh với các đối thủ này, GUMAC cần tạo ra các
          sản phẩm độc đáo, thiết kế đẹp và chất lượng cao với mức giá cạnh
          tranh.
        </p>
      </div>
    </section>
  );
}
