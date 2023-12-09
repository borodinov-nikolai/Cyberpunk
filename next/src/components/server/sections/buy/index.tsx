import complectation_list from "@/src/constants/complectation_list";
import platforms_list from "@/src/constants/platforms_list";
import Image from "next/image";
import React from "react";









const Buy = () => {
  return <div id='buy_inner' className={'bg-black'} >
           <div id='container' className={ ' font-roboto h-max w-full flex flex-col sm:flex-row xl:mx-auto xl:container text-white'} >

                <div  id='buy_image' className={'relative h-auto sm:basis-[32%] lg:basis-1/2 overflow-hidden'} > 
                <Image className={' h-full w-auto sm:absolute top-0% left-0% sm:object-cover'} src={'/images/game_boxes.jpg'} height={717} width={944} alt='game_boxes'/> 
                </div>

                <div id='buy_info' className={'pt-10 px-3 pb-[70.3px] sm:basis-[68%] lg:basis-1/2 sm:pt-[70px] sm:px-8 '} > 

                <h2 id='info_title' className={'font-archangelsk text-[30px] leading-[30.63px] sm:text-[62px] sm:leading-[63.3px]'} >Купить игру Cyberpunk 2077</h2>

                <div id='complectation' className={'mt-[25px]'} >
                  <h3 id='complectation_title' className={ '  sm:text-2xl sm:leading-[28.1px] text-[#52BEDC] text-xl font-bold leading-[23.44px]'} >В комплект входит:</h3>
                  <ul id='complectation_list' className={'mt-5 flex  flex-col gap-[14px] '} >
                  {
                      complectation_list.map(({id, icon, text})=> {
                        return <li key={id} className={'flex gap-[18px] sm:gap-[21px] '} >
                          <Image className={'h-6 w-auto'} src={icon} height={32} width={32} alt='complectation_list_item' ></Image> 
                          <p className={'leading-[18.75px] sm:leading-[21.09px]  sm:text-[18px]'}>{text}</p>
                          </li>
                      })
                    }
                  </ul>
                </div>

                <div id='platforms' className={'mt-10 sm:mt-[70px] sm:w-[319px]'} >
                  <h3 id='platforms_title' className={'text-[#52BEDC] sm:text-2xl sm:leading-[28.1px] text-xl font-bold leading-[23.44px]'}>
                  Выберите платформу:
                  </h3>
                  <ul id='platforms_list' className={' mt-[25px] grid grid-cols-[repeat(2,_1fr)] grid-rows-[repeat(35px_50px)] gap-y-[40px] sm:gap-y-[47px] items-end'}>
                    {
                      platforms_list.map(({id, icon})=> {
                        return <li className={'h-full w-max flex items-end'} key={id}><Image className={'w-full h-auto'} src={icon} height={50} width={180} alt='platform_icon'></Image></li>
                      })
                    }
                  </ul>
                </div>
                </div>
                
           </div>
  </div>;
};

export default Buy;
