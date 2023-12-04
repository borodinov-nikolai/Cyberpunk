import Image from 'next/image'
import React from 'react'
import image_1 from '@/assets/images/carousel_desk_1.jpg'
import image_2 from '@/assets/images/carousel_desk_2.jpg'
import image_3 from '@/assets/images/carousel_desk_3.jpg'


const Carousel = () => {

  const carouselItems = [
    {
      id:1,
      name:"cyberpunk image_1",
      image: image_1
    },
    {
      id:2,
      name:"cyberpunk image_2",
      image: image_2
    },
    {
      id:3,
      name:"cyberpunk image_2",
      image: image_3
    },
  ]

  return (
    <div className={'h-[1000px] w-full'} >
      <Image className={'w-full h-auto'} src={image_1} height={1000} width={1920} alt='cyberpunk'/>
    </div>
  )
}

export default Carousel