import Image from "next/image";
import React from "react";
import img_monitor from "@/public/images/monitor.png";
import logos_list from "@/src/constants/logos_list";
import description_list from "@/src/constants/decription_list";
import Button from "@/src/components/client/ui/button";

const Commercial = () => {
  return (
    <div id="commercial_inner" className={"bg-[#F8F200]"}>
      <div
        id="container"
        className={
          "mx-auto px-3 py-[70px] font-roboto xl:container sm:flex sm:gap-[32px] sm:px-[36px] "
        }
      >
        <div
          id="commercial_image_holder"
          className={"flex  flex-col justify-center sm:basis-1/2"}
        >
          <div id="image">
            {" "}
            <Image
              className={"h-auto w-full"}
              src={img_monitor}
              height={650}
              width={450}
              alt="monitor"
            />{" "}
          </div>
          <ul
            id="logos"
            className={
              " mt-[25px] grid h-max grid-cols-[17%_17%_1fr] items-center gap-x-[17px] sm:grid-cols-1 sm:grid-rows-[80px_19px_80px] sm:place-items-center sm:gap-y-[25px]"
            }
          >
            {logos_list.map(({ id, url, alt, width }) => {
              return (
                <li className={"w-full sm:h-full sm:w-auto"} key={id}>
                  {" "}
                  <Image
                    className={"h-auto w-full"}
                    src={url}
                    height={80}
                    width={width}
                    alt={alt}
                  ></Image>{" "}
                </li>
              );
            })}
          </ul>
        </div>

        <div
          id="commercial_description"
          className={"  mt-10 h-auto w-full sm:basis-1/2"}
        >
          <h2
            id="title"
            className={
              "h-auto w-full font-archangelsk text-[30px] leading-[30.6px] sm:hyphens-manual sm:text-[62px] sm:leading-[63.3px] "
            }
          >
            Полное погруже&shy;ние вместе с HP
          </h2>
          <p
            id="text"
            className={
              "mt-[25px] h-auto  w-full sm:text-[18px] sm:leading-[34px] "
            }
          >
            Погрузись в современные экшен-игры с реалистичным изображением с
            помощью монитора с диагональю 23,8 дюйма, созданном для отображения
            максимально насыщенных цветов. Успевай реагировать на любые события
            с временем отклика 1 мс и частотой в 144 Гц!
          </p>
          <ul
            id="list"
            className={
              "mt-[27px] flex  h-auto w-full flex-col gap-[15px] leading-[18.75px] sm:leading-[21.09px] "
            }
          >
            {description_list.map(({ id, icon, alt, text }) => {
              return (
                <li className={"flex h-auto  w-full gap-[18px]"} key={id}>
                  <Image src={icon} height={32} width={32} alt={alt}></Image>
                  <p className={"h-auto w-full  leading-[18.75px]"}>{text}</p>
                </li>
              );
            })}
          </ul>

          <div
            id="button"
            className={
              " mt-[40px] h-[65px] w-[184px] font-bold sm:text-[18px] "
            }
          >
            {" "}
            <Button color="black">Подробнее</Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commercial;
