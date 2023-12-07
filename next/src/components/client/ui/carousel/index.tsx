"use client";
import Image from "next/image";
import React from "react";
import carousel_items from "@/src/constants/carousel_items";
import Button from "@/src/components/client/ui/button";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

const Carousel = () => {
  return (
    <div>
      <div
        id="desktop_carousel"
        className={
          "relative hidden w-screen justify-center overflow-hidden lg:flex "
        }
      >
        <Swiper
          spaceBetween={0}
          allowTouchMove={false}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            waitForTransition: false,
          }}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          navigation={false}
          modules={[Autoplay, EffectFade]}
        >
          {carousel_items.desktop.map(({ id, name, image }) => {
            return (
              <SwiperSlide key={id} className={"overflow-hidden"}>
                <Image
                  className={"h-auto w-full"}
                  src={image}
                  height={1000}
                  width={1920}
                  alt={name}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div
          id="desktop_carousel_block"
          className={`absolute bottom-0 right-[17%] z-10 h-[37%] w-[32%] bg-[url(/images/desktop_carousel_block.png)] 
       bg-cover bg-no-repeat p-[4%]`}
        >
          <div
            id="desktop_carousel_text"
            className={"font-archangelsk text-[3vw] leading-[3.1vw]"}
          >
            Доступно на всех платформах
          </div>
          <div
            id="desktop_carousel_button"
            className={"mt-[5%] h-[40%] w-[55%] font-roboto font-bold"}
          >
            <Button color="black">Узнать больше</Button>
          </div>
        </div>
      </div>

      <div id="tablet_carousel" className={"relative hidden sm:max-lg:block"}>
        <Swiper
          spaceBetween={0}
          allowTouchMove={false}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            waitForTransition: false,
          }}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          navigation={false}
          modules={[Autoplay, EffectFade]}
        >
          {carousel_items.tablet.map(({ id, name, image }) => {
            return (
              <SwiperSlide key={id}>
                <Image
                  className={"h-auto w-screen"}
                  src={image}
                  height={1000}
                  width={1920}
                  alt={name}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div
          id="tablet_carousel_block"
          className={`absolute bottom-0 right-[4%] z-10 h-[37%] w-[60%] bg-[url(/images/desktop_carousel_block.png)] 
       bg-cover bg-no-repeat p-[6%]`}
        >
          <div
            id="tablet_carousel_text"
            className={"font-archangelsk text-[5.8vw] leading-[5.9vw]"}
          >
            Доступно на всех платформах
          </div>
          <div
            id="tablet_carousel_button"
            className={
              " mt-[5%] h-[30%] w-[55%] font-roboto text-[2vw] font-bold"
            }
          >
            <Button color="black">Узнать больше</Button>
          </div>
        </div>
      </div>

      <div id="mobile_carousel" className={"relative sm:hidden"}>
        <Swiper
          spaceBetween={0}
          allowTouchMove={false}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            waitForTransition: false,
          }}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          navigation={false}
          modules={[Autoplay, EffectFade]}
        >
          {carousel_items.mobile.map(({ id, name, image }) => {
            return (
              <SwiperSlide key={id}>
                <Image
                  className={"h-auto w-screen"}
                  src={image}
                  height={1000}
                  width={1920}
                  alt={name}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div
          id="mobile_carousel_block"
          className={`absolute bottom-0 z-10 h-[29%] w-screen bg-[url(/images/mobile_carousel_block.png)] 
       bg-cover bg-no-repeat p-[10%]`}
        >
          <div
            id="mobile_carousel_text"
            className={
              "text-center font-archangelsk text-[9vw] leading-[9.1vw]"
            }
          >
            Доступно на всех платформах
          </div>
          <div
            id="mobile_carousel_button"
            className={
              "mt-[12%] h-[40%] w-full font-roboto text-[5vw] font-bold"
            }
          >
            <Button color="black">Узнать больше</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
