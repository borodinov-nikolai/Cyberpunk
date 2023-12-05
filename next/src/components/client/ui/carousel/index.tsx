'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import desktop_image_1 from '@/assets/images/carousel_desk_1.jpg'
import desktop_image_2 from '@/assets/images/carousel_desk_2.jpg'
import desktop_image_3 from '@/assets/images/carousel_desk_3.jpg'
import tablet_image_1 from '@/assets/images/carousel_tablet_1.jpg'
import tablet_image_2 from '@/assets/images/carousel_tablet_2.jpg'
import tablet_image_3 from '@/assets/images/carousel_tablet_3.jpg'
import mobile_image_1 from '@/assets/images/carousel_mobile_1.jpg'
import mobile_image_2 from '@/assets/images/carousel_mobile_2.jpg'
import mobile_image_3 from '@/assets/images/carousel_mobile_3.jpg'
import desctop_carousel_block from '@/assets/images/desktop_carousel_block.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Carousel = () => {
 
   

  const desktopItems = [
    {
      id:1,
      name:"cyberpunk image_1",
      image: desktop_image_1
    },
    {
      id:2,
      name:"cyberpunk image_2",
      image: desktop_image_2
    },
    {
      id:3,
      name:"cyberpunk image_3",
      image: desktop_image_3
    },
  ]
  

  const tabletItems = [
    {
      id:1,
      name:"cyberpunk image_1",
      image: tablet_image_1
    },
    {
      id:2,
      name:"cyberpunk image_2",
      image: tablet_image_2
    },
    {
      id:3,
      name:"cyberpunk image_3",
      image: tablet_image_3
    },
  ]



  const mobileItems = [
    {
      id:1,
      name:"cyberpunk image_1",
      image: mobile_image_1
    },
    {
      id:2,
      name:"cyberpunk image_2",
      image: mobile_image_2
    },
    {
      id:3,
      name:"cyberpunk image_3",
      image: mobile_image_3
    },
  ]

  return (
    <div  >

      <div className={' w-screen hidden overflow-hidden lg:flex justify-center relative'} >
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
          {desktopItems.map(({id, name, image})=> {
          return <SwiperSlide key={id} className={'overflow-hidden'}><Image  className={'h-auto w-full'} src={image} height={1000} width={1920} alt={name}/></SwiperSlide>
        }) }
        </Swiper>
        <div className={'w-[32%] absolute z-10 right-[17%] bottom-0 '} ><Image className={' w-full h-auto'} src={desctop_carousel_block} height={200} width={400} alt='desctop_carousel_block'/></div>
      </div>



      <div className={'hidden sm:block lg:hidden relative'} >
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
          {tabletItems.map(({id, name, image})=> {
          return <SwiperSlide  key={id}><Image className={'w-screen h-auto'} src={image} height={1000} width={1920} alt={name}/></SwiperSlide>
        }) }
        </Swiper>
       

      </div>


      <div className={'sm:hidden'} >
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
          {mobileItems.map(({id, name, image})=> {
          return <SwiperSlide  key={id}><Image className={'w-screen h-auto'} src={image} height={1000} width={1920} alt={name}/></SwiperSlide>
        }) }
        </Swiper>
      </div>
     
    </div>
  )
}

export default Carousel