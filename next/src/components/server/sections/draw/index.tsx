import React from "react";
import image_promotion from "@/public/images/promotion.png";
import image_playstation from "@/public/images/play_station_5.jpg";
import image_xbox from "@/public/images/xbox_series_x.jpg";
import Image from "next/image";
import Button from "@/src/components/client/ui/button";

const Draw = () => {
  return (
    <>
      <div
        id="draw_top_corner"
        className={" w-scren  mb-[-1px] h-[70px] bg-[url(/images/corner.png)]"}
      ></div>
      <div className={"bg-black "}>
        <div
          id="draw_container"
          className={
            " relative px-3 pb-[70px] pt-[50px] xl:container sm:grid sm:grid-cols-[repeat(2,_1fr)] sm:grid-rows-[repeat(2,_max-content)] sm:px-8 sm:max-lg:pt-[95px] lg:grid-cols-[40%,_1fr]   lg:gap-x-[35px] lg:pt-[70px] xl:mx-auto"
          }
        >
          <Image
            id="draw_promotion_image"
            className={
              "absolute left-[12px] top-[6px] h-[62px] w-auto sm:h-[132px]"
            }
            src={image_promotion}
            height={140}
            width={140}
            alt="promotion"
          />
          <div
            id="draw_consoles_images"
            className={
              "flex gap-[32px] sm:gap-0 sm:max-lg:col-start-2 sm:max-lg:row-span-2 sm:max-lg:h-full sm:max-lg:flex-col sm:max-lg:place-content-center lg:col-start-2 lg:row-start-2 lg:h-max lg:self-center"
            }
          >
            <Image
              className={" h-auto w-[46%] sm:max-lg:w-full  lg:z-10  lg:w-1/2"}
              src={image_xbox}
              height={400}
              width={300}
              alt="xbox_series_x"
            />
            <Image
              className={
                " h-auto w-[46%] sm:h-auto sm:max-lg:w-full lg:w-1/2 lg:-translate-x-[100px]"
              }
              src={image_playstation}
              height={400}
              width={300}
              alt="play_station_5"
            />
          </div>
          <div
            id="darw_text"
            className={
              " mt-[25px] font-roboto text-white sm:mt-[73px] sm:max-lg:col-start-1  sm:max-lg:row-start-1 lg:col-span-2 lg:col-start-1 lg:mt-0"
            }
          >
            <h2
              className={
                " font-archangelsk text-[9vw] leading-[30.6px] sm:text-[62px] sm:leading-[63.3px] lg:ml-[164px] "
              }
            >
              Играй и выигрывай!
            </h2>
            <p
              className={
                " mt-[25px] leading-8 sm:text-[18px] sm:leading-[34px] lg:max-w-[952px] "
              }
            >
              Играй в
              <span className={"font-bold text-[#52BEDC]"}>Cyberpunk 2077</span>{" "}
              и получи возможность выиграть консоль{" "}
              <span className={"font-bold text-[#52BEDC]"}>Xbox Series X</span>{" "}
              или{" "}
              <span className={"font-bold text-[#52BEDC]"}>
                Sony PlayStation 5!
              </span>{" "}
              Заполни форму ниже и приложи скриншот о покупке игры. Итоги
              розыгрыша будут подведены 1 февраля. Удачи! ;&#41;
            </p>
          </div>
          <form
            id="draw_form"
            className={" col-start-1 row-start-2 text-white lg:row-start-2"}
          >
            <input
              className={
                " mt-[70px] h-[33px] w-full border-b border-gray-500 bg-black placeholder:font-light placeholder:text-white focus:text-white focus:outline-none sm:placeholder:text-[18px]"
              }
              type="text"
              placeholder="Как тебя зовут?"
            />
            <input
              className={
                " mt-[30px] h-[33px] w-full border-b border-gray-500 bg-black placeholder:font-light placeholder:text-white focus:text-white focus:outline-none sm:placeholder:text-[18px]"
              }
              type="text"
              placeholder="Твой email"
            />
            <div className=" mt-[35px] flex h-[120px] items-center justify-center bg-[url(/images/screenshot_input_border.png)] bg-[length:100%_100%] bg-no-repeat font-light underline sm:placeholder:text-[18px]">
              <input
                className={"hidden"}
                id="fileInput"
                type="file"
                placeholder="Прикрепить скриншот"
              />{" "}
              <label className={" cursor-pointer"} htmlFor="fileInput">
                {" "}
                Прикрепите скриншот{" "}
              </label>
            </div>
            <div
              className={
                " mt-[35px] h-[60px] w-[60%] font-bold sm:text-[18px] lg:w-[45%] "
              }
            >
              <Button color="yellow">Отправить</Button>
            </div>
            <div className={"mt-[14px] flex"}>
              {" "}
              <input
                className={"peer hidden"}
                id="checkbox"
                type="checkbox"
              ></input>
              <label
                className={
                  ' before:content[""] relative h-[14px] w-[14px] cursor-pointer border border-white bg-black before:absolute before:left-0 before:top-0  before:inline-block before:h-full before:w-full  before:bg-contain before:bg-center before:bg-no-repeat peer-checked:before:bg-[url(/icons/checkbox_arrow.svg)]'
                }
                htmlFor="checkbox"
              ></label>
              <p className={" ml-[10px] text-xs font-light"}>
                Согласен на обработку персональных данных
              </p>
            </div>
          </form>
        </div>
      </div>
      <div
        id="draw_bottom_corner"
        className={'w-scren h-[70px] rotate-180 bg-[url("/images/corner.png")]'}
      ></div>
    </>
  );
};

export default Draw;
