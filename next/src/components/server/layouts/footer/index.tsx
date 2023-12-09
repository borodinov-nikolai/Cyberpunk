import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div id="footer_inner">
      <div
        className={
          "flex w-full flex-col items-center pt-10 font-roboto xl:container sm:h-[100px] sm:pt-0  xl:mx-auto"
        }
      >
        <div
          id="info"
          className={
            " w-full sm:flex  sm:items-center sm:justify-between sm:px-[36px]  sm:py-[14px]"
          }
        >
          <div
            id="info_logos"
            className={
              "flex flex-col items-center px-[34px] sm:w-1/2  sm:flex-row sm:gap-[35px] sm:px-0  lg:w-max"
            }
          >
            <Image
              className={"sm:h-auto sm:w-[45%]"}
              id="cyberpunk_logo"
              src={"/icons/Cyberpunk_2077_logo 1.svg"}
              width={300}
              height={75}
              alt="cyberpunk лого"
            />
            <Image
              className={" mt-[25px] sm:mt-0 sm:h-auto sm:w-max"}
              id="cd_project_red_logo"
              src={"/icons/cd_project_red_logo.svg"}
              width={120}
              height={50}
              alt="cd project red лого"
            />
          </div>

          <ul
            id="info_politics"
            className={
              " mt-[25px]  flex flex-col justify-center gap-[15px] bg-[#E6E6E6] px-[34px] py-[25px] text-center leading-[18.75px] sm:mt-0 sm:h-min sm:w-1/2 sm:flex-row sm:gap-[32px] sm:bg-white sm:px-0 sm:py-0 sm:leading-[21.1px] sm:max-lg:text-[1.5vw] lg:justify-end  lg:text-[18px] "
            }
          >
            <li>Лицензия</li>
            <li>Политика конфиденциальности</li>
          </ul>
        </div>

        <div
          id="trademarks"
          className={
            " w-full bg-black px-[34px] py-[14px] text-center text-xs  leading-[14.06px] text-white"
          }
        >
          CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®
        </div>
      </div>
    </div>
  );
};

export default Footer;
