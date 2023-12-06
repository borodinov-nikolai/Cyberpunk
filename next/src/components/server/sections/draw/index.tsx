import React from 'react'
import image_promotion from '@/public/images/promotion.png'
import image_playstation from '@/public/images/play_station_5.jpg'
import image_xbox from '@/public/images/xbox_series_x.jpg'
import Image from 'next/image'
import Button from '@/src/components/client/ui/button'


const Draw = () => {
  return(
    < >
      <div id='draw_top_corner' className={'bg-[url("/images/corner.png")] w-scren h-[70px]'} ></div>
      <div className={'bg-black '}>
             <div id='draw_container' className={'xl:container mx-auto px-3 pt-[50px] pb-[70px] relative'}>
             <Image id='draw_promotion_image' className={'absolute top-[6px] left-[12px] h-[15vw] w-auto'} src={image_promotion} height={140} width={140} alt='promotion' />
               <div id='draw_consoles_images' className={'flex gap-[32px]'} >
                <Image className={'h-auto w-[46%]'} src={image_xbox} height={400} width={300} alt='xbox_series_x' />
                <Image className={'h-auto w-[46%]'} src={image_playstation} height={400} width={300} alt='play_station_5' />
               </div>
               <div id='darw_text' className={'draw_text mt-[25px] text-white'} > 
               <h2 className={' font-archangelsk text-[9vw] leading-[30.6px] '} >Играй и выигрывай!</h2>
               <p className={'mt-[25px] text-4 leading-8 '} >"Играй в <span className={'font-bold text-[#52BEDC]'} >
                Cyberpunk 2077</span> и получи возможность выиграть консоль <span className={'font-bold text-[#52BEDC]'}>Xbox Series X</span> или <span className={'font-bold text-[#52BEDC]'}>Sony PlayStation 5!</span> Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)</p>
               </div>
               <form id='draw_form' >
                <input type="text" placeholder='Как тебя зовут?' />
                <input type="text" placeholder='Твой email' />
                <div>
                  <input type='file' placeholder='Прикрепить скриншот'/>
                </div>
                <Button color='yellow'>Отправить</Button>
               </form>
             </div>
      </div>
      <div id='draw_bottom_corner' className={'bg-[url("/images/corner.png")] w-scren h-[70px] rotate-180'} >
      </div>
    </>
  )
}



export default Draw