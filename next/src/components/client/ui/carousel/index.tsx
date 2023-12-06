'use client'
import Image from 'next/image'
import React from 'react'
import carousel_items from '@/src/constants/carousel_items';
import Button from '@/src/components/client/ui/button';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade} from 'swiper/modules';




const Carousel = () => {
 
  return (
    <div  >

      <div id='desktop_carousel' className={'relative w-screen hidden overflow-hidden lg:flex justify-center '} >
        <Swiper
          spaceBetween={0}
          allowTouchMove={false}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            waitForTransition: false
          }}
          effect='fade'
          fadeEffect={{
            crossFade: true
          }}
          
          navigation={false}
          modules={[Autoplay, EffectFade]}
        >
          {carousel_items.desktop.map(({id, name, image})=> {
          return <SwiperSlide key={id} className={'overflow-hidden'}><Image  className={'h-auto w-full'} src={image} height={1000} width={1920} alt={name}/></SwiperSlide>
        }) }
        </Swiper>

        <div id='desktop_carousel_block' className={`w-[32%] h-[37%] absolute z-10 right-[17%] bottom-0 bg-[url("/images/desktop_carousel_block.png")] 
       bg-no-repeat bg-cover p-[4%]`} >
         <div id='desktop_carousel_text' className={"text-[3vw] leading-[3.1vw] font-archangelsk"} >Доступно на всех платформах</div>
         <div id='desktop_carousel_button' className={'h-[40%] w-[55%] mt-[5%] font-bold font-roboto'} ><Button color='black'>Узнать больше</Button></div>
      </div>

      </div>



      <div id="tablet_carousel" className={'hidden sm:max-lg:block relative'} >
        <Swiper
         spaceBetween={0}
         allowTouchMove={false}
         centeredSlides={true}
         autoplay={{
           delay: 4000,
           disableOnInteraction: false,
           waitForTransition: false
         }}
         effect='fade'
         fadeEffect={{
           crossFade: true
         }}
         
         navigation={false}
         modules={[Autoplay, EffectFade]}
        >
          {carousel_items.tablet.map(({id, name, image})=> {
          return <SwiperSlide  key={id}><Image className={'w-screen h-auto'} src={image} height={1000} width={1920} alt={name}/></SwiperSlide>
        }) }
        </Swiper>

        <div id='tablet_carousel_block' className={`w-[60%] h-[37%] absolute z-10 right-[4%] bottom-0 bg-[url("/images/desktop_carousel_block.png")] 
       bg-no-repeat bg-cover p-[6%]`} >
         <div id='tablet_carousel_text' className={"text-[5.8vw] leading-[5.9vw] font-archangelsk"} >Доступно на всех платформах</div>
         <div id='tablet_carousel_button' className={' text-[2vw] h-[30%] w-[55%] mt-[5%] font-bold font-roboto'} ><Button color='black'>Узнать больше</Button></div>
      </div>
       

      </div>


      <div id='mobile_carousel'  className={'sm:hidden relative'} >
        <Swiper
          spaceBetween={0}
          allowTouchMove={false}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            waitForTransition: false
          }}
          effect='fade'
          fadeEffect={{
            crossFade: true
          }}
          
          navigation={false}
          modules={[Autoplay, EffectFade]}
        >
          {carousel_items.mobile.map(({id, name, image})=> {
          return <SwiperSlide  key={id}><Image className={'w-screen h-auto'} src={image} height={1000} width={1920} alt={name}/></SwiperSlide>
        }) }
        </Swiper>
        <div id='mobile_carousel_block' className={`w-screen h-[29%] absolute z-10 bottom-0 bg-[url("/images/mobile_carousel_block.png")] 
       bg-no-repeat bg-cover p-[10%]`} >
         <div id='mobile_carousel_text' className={"text-[9vw] text-center leading-[9.1vw] font-archangelsk"} >Доступно на всех платформах</div>
         <div id='mobile_carousel_button' className={'h-[40%] w-full mt-[12%] font-bold text-[5vw] font-roboto'} ><Button color='black'>Узнать больше</Button></div>
      </div>
      </div>



     
    </div>
  )
}




export default Carousel