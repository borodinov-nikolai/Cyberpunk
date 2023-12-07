"use client";
import Image from "next/image";
import React from "react";
import mobile_screenshot_1 from "@/public/images/mobile_screenshot_1.jpg";
import mobile_screenshot_2 from "@/public/images/mobile_screenshot_2.jpg";
import mobile_screenshot_3 from "@/public/images/mobile_screenshot_3.jpg";
import screenshot_1 from "@/public/images/screenshot_1.jpg";
import screenshot_2 from "@/public/images/screenshot_2.jpg";
import screenshot_3 from "@/public/images/screenshot_3.jpg";

const Description = () => {
  return (
    <div id="container" className={"  mx-auto py-[70px] xl:container"}>
      <div id="description_text" className={"px-3 sm:px-9"}>
        <h2
          className={
            "font-archangelsk text-[30px] leading-[31px] sm:max-w-[620px] sm:text-[62px] sm:leading-[62.3px]   lg:max-w-[995px]"
          }
        >
          Найт-Сити изменит тебя навсегда!
        </h2>
        <p
          className={
            "text-4 mt-[25px] font-roboto leading-8 sm:max-w-[788px] sm:text-[18px] sm:leading-[34px] lg:max-w-[952px] "
          }
        >
          <span className={"font-bold text-[#52BEDC]"}>Cyberpunk 2077</span> —
          приключенческая ролевая игра, действие которой происходит в мегаполисе
          Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего.
          Ты играешь за V, наёмника в поисках устройства, позволяющего обрести
          бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры
          своего персонажа, исследуя открытый мир, где твои поступки влияют на
          ход сюжета и всё, что тебя окружает.
        </p>
      </div>
      <div
        id="description_mobile_screenshots "
        className={"mt-[70px] sm:hidden"}
      >
        <Image
          className={"h-auto w-full"}
          src={mobile_screenshot_1}
          height={200}
          width={400}
          alt="cyberpunk screenshot"
        />
        <Image
          className={"mt-8 h-auto w-full"}
          src={mobile_screenshot_2}
          height={200}
          width={400}
          alt="cyberpunk screenshot"
        />
        <Image
          className={"mt-8 h-auto w-full"}
          src={mobile_screenshot_3}
          height={200}
          width={400}
          alt="cyberpunk screenshot"
        />
      </div>
      <div
        id="description_screenshots "
        className={
          "mt-[70px] hidden h-auto w-full grid-cols-[repeat(2,_auto)] grid-rows-[repeat(2,_auto)] gap-8 px-[36px] sm:grid lg:grid-cols-[1fr_62%]"
        }
      >
        <Image
          className={"col-span-1  h-auto "}
          src={screenshot_1}
          height={450}
          width={800}
          alt="cyberpunk screenshot"
        />
        <Image
          className={"col-span-1  h-auto sm:mt-0 lg:row-start-2 "}
          src={screenshot_2}
          height={450}
          width={800}
          alt="cyberpunk screenshot"
        />
        <Image
          className={
            "col-span-2 h-auto  w-full sm:mt-0 lg:col-span-1 lg:row-span-2 "
          }
          src={screenshot_3}
          height={450}
          width={800}
          alt="cyberpunk screenshot"
        />
      </div>
    </div>
  );
};
export default Description;
