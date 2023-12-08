import Image from "next/image";
import React from "react";
import img_monitor from '@/public/images/monitor.png'
import icon_hp_logo from '@/public/icons/hp_logo.svg'
import icon_x_logo from '@/public/icons/x_logo.svg'
import icon_cyberpunk_logo from '@/public/icons/Cyberpunk_2077_logo 1.svg'
import icon_pallet from '@/public/icons/pallet_icon.svg'
import icon_stars from '@/public/icons/stars_icon.svg'
import icon_boxes from '@/public/icons/boxes_icon.svg'
import Button from "@/src/components/client/ui/button";


type Logo = {
  id: number, url: string, alt:string, width: number
}

type Description_list_item = {
  id: number, icon: string, alt:string, text:string
}


const logos_list: Logo[] = [
  {
    id: 1,
    url: icon_hp_logo,
    alt: 'hp_logo',
    width: 80
  },
  {
    id: 2,
    url: icon_x_logo,
    alt: 'x_logo',
    width: 90
  },
  {
    id: 3,
    url: icon_cyberpunk_logo,
    alt: 'cyberpunk_logo',
    width: 320
  },
]


const description_list : Description_list_item[] = [
  {
    id:1,
    icon: icon_pallet,
    alt: 'pallet',
    text: "Яркие насыщенные цвета"
  },
  {
    id:2,
    icon: icon_stars,
    alt: 'stars',
    text: "Кристальная четкость изображения"
  },
  {
    id:3,
    icon: icon_boxes,
    alt: 'boxes',
    text: "Быстрые движения и плавный геймплей"
  },
]


const Commercial = () => {
  return <div id='commercial_inner'  className={'bg-[#F8F200]'}>
    <div id='container' className={'py-[70px] px-3 mx-auto xl:container'} >
     <div id='commercial_image_holder' className={'flex flex-col justify-center'} > 
     <div id='image' > <Image className={'w-full h-auto'}  src={img_monitor} height={650} width={450} alt='monitor' /> </div>
     <ul id='logos' className={' mt-[25px] grid gap-x-[17px] grid-cols-[17%_17%_1fr] items-center h-max'} >
      {
        logos_list.map(({id, url, alt, width}) => {
          return <li className={'w-full'}  key={id} > <Image className={'w-full h-auto'} src={url} height={80} width={width} alt={alt} ></Image> </li>
        })
      }
     </ul>
     </div>
    
        <div id='commercial_description' className={'mt-10'} >
          <h2 id='title' className={' font-archangelsk text-[30px] leading-[30.6px] '} >
          Полное погружение вместе с HP
          </h2>
          <p id='text' className={'mt-[25px]'} >
            Погрузись в современные экшен-игры с реалистичным изображением с помощью монитора с диагональю 23,8 дюйма, созданном для отображения максимально насыщенных цветов. Успевай реагировать на любые события с временем отклика 1 мс и частотой в 144 Гц!
            </p>
            <ul  id='list' className={'mt-[27px] flex flex-col gap-[15px]'} >
             {
              description_list.map(({id, icon, alt, text})=> {
                return <li className={'flex gap-[18px]'} key={id}> 

                <Image src={icon} height={32} width={32} alt={alt} ></Image>
                 <p className={'leading-[18.75px]'} >{text}</p>

                  </li>
              })
             }
            </ul>
     
        <div id='button' className={' font-bold h-[65px] w-[184px] mt-[40px]'} > <Button color="black" >Подробнее</Button> </div>
      </div>
    </div>
  </div>;
};

export default Commercial;
