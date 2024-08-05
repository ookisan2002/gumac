import Image from "next/image";
import React from "react";

export default function Section11() {
  return (
    <section className="w-full h-[336rem] md:h-[71.94rem] relative flex flex-col pt-[20rem] pb-[17.07rem] md:pt-[6.06rem] md:pb-[9.37rem] bg-[#FFFBF3]">
      <Image
        width={1600}
        height={451}
        alt=""
        src={"/assest/section11/image 11.png"}
        className="w-full h-[120.27rem] md:h-[28.1875rem] absolute top-0 left-0 object-cover"
      />
      <div className="absolute top-[90.13rem] md:top-[21.12rem] w-full h-[30.13333rem] md:h-[7.0625rem] bg-[linear-gradient(180deg,rgba(255,251,243,0.00)_0%,rgba(255,251,243,0.68)_39.78%,#FFFBF3_100%)]">
      </div>
      <div className="flex justify-center items-center mb-[29.6rem] md:mb-[7.75rem]">
        <div className="w-[94.66667rem] md:w-[79.1875rem] relative z-10">
          <Image
            width={71}
            height={74}
            alt=""
            src={"/assest/section11/section11_img2.png"}
            className="w-[12.53333rem] h-[13.06667rem] md:w-[4.4375rem] md:h-[4.625rem] absolute -top-[6.13rem] md:-top-[2rem] left-0"
          />
          <p className="text-trinh-Gumac-textden text-center w-full text-[8.53333rem] md:text-[3.125rem] font-medium leading-[150%] ">
            Tương tác giữa người dùng và website{" "}
            <span className="text-trinh-Gumac-xanh">thể hiện insight</span> và sự{" "}
            <span className="text-trinh-Gumac-xanh">
              thấu hiểu của thương hiệu
            </span>{" "}
            với khách hàng
          </p>
        </div>
      </div>
      <div className="w-full bg-transparent md:w-[71.94rem] md:pl-[4.37rem] md:pr-[6.25rem] flex max-md:flex-col items-center relative z-10 ">
        <Image
          width={502}
          height={630.01}
          alt=""
          src={"/assest/section11/section11_img3.png"}
          className="w-[92rem] h-[115.46rem] md:w-[31.375rem] md:h-[39.37563rem] rounded-t-[45rem] md:rounded-t-[15rem]"
        />
        <div className="max-md:w-[94.66667rem] max-md:mt-[13.07rem] md:ml-[1.75rem]">
          <h3 className="w-full md:w-[50.25rem] mb-[6.4rem] md:mb-[2.25rem] text-trinh-Gumac-textden text-[8.53333rem] md:text-[3.5rem] font-semibold leading-[150%]">
            GuMac nói gì sau khi sử dụng dịch vụ tại OkHub
          </h3>
          <div className="w-full md:w-[55rem] relative z-10">
            <Image
              width={71}
              height={74}
              alt=""
              src={"/assest/section11/section11_img2.png"}
              className="w-[10.13333rem] h-[10.66667rem] md:w-[3.75rem] md:h-[3.9375rem] absolute -top-[5.33rem] md:-top-[1.81rem] left-0"
            />
            <p className="text-trinh-Gumac-textden w-full text-[3.73333rem] md:text-[1.25rem] font-normal leading-[150%] ">
              Chúng tôi rất hài lòng với dịch vụ thiết kế website của công ty
              OKHUB. Với đội ngũ thiết kế chuyên nghiệp, tận tâm đã đáp ứng được
              mọi yêu cầu của chúng tôi và tạo ra một trang web đẹp, hiệu quả.
              Chúng tôi rất ấn tượng với giao diện trang web và cách nó được
              thiết kế để thu hút khách hàng. Quy trình làm việc tại OKHUB cũng
              rất chuyên nghiệp và tôi cảm thấy rất thoải mái khi làm việc với
              đội ngũ của công ty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
