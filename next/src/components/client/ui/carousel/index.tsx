'use client'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade} from 'swiper/modules';
import carousel_items from '@/src/constants/carousel_items';
import Button from '@/src/components/client/ui/button';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


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
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
        >
          {carousel_items.desktop.map(({id, name, image})=> {
          return <SwiperSlide key={id} className={'overflow-hidden'}><Image  className={'h-auto w-full'} src={image} height={1000} width={1920} alt={name}/></SwiperSlide>
        }) }
        </Swiper>

        <div id='desktop_carousel_block' className={`hidden w-[32%] h-[37%] absolute z-10 right-[17%] bottom-0 lg:block bg-[url("/images/desktop_carousel_block.png")] 
       bg-no-repeat bg-cover p-[4%]`} >
         <div id='desktop_carousel_text' className={"text-[2.5vw] leading-[2.5vw]"} >Доступно на всех платформах</div>
         <div id='desktop_carousel_button' className={'h-[40%] w-[50%] mt-[5%] font-bold'} ><Button color='black'>Узнать больше</Button></div>
      </div>

      </div>



      <div id="tablet_carousel" className={'hidden sm:block lg:hidden relative'} >
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
         modules={[Autoplay, Pagination, Navigation, EffectFade]}
        >
          {carousel_items.tablet.map(({id, name, image})=> {
          return <SwiperSlide  key={id}><Image className={'w-screen h-auto'} src={image} height={1000} width={1920} alt={name}/></SwiperSlide>
        }) }
        </Swiper>
       

      </div>


      <div  className={'sm:hidden'} >
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
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
        >
          {carousel_items.mobile.map(({id, name, image})=> {
          return <SwiperSlide  key={id}><Image className={'w-screen h-auto'} src={image} height={1000} width={1920} alt={name}/></SwiperSlide>
        }) }
        </Swiper>
      </div>



     
    </div>
  )
}




export default Carousel