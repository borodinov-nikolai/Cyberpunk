'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import mobile_screenshot_1 from '@/public/images/mobile_screenshot_1.jpg'
import mobile_screenshot_2 from '@/public/images/mobile_screenshot_2.jpg'
import mobile_screenshot_3 from '@/public/images/mobile_screenshot_3.jpg'
import screenshot_1 from '@/public/images/screenshot_1.jpg'
import screenshot_2 from '@/public/images/screenshot_2.jpg'
import screenshot_3 from '@/public/images/screenshot_3.jpg'

const Description = () => {

 




  return (
    <div id='container' className={'xl:container mx-auto py-[70px]'} >
      <div id='description_text' className={'px-3 sm:px-9'}>
        <h2 className={'text-[30px] leading-[31px] sm:text-[62px] sm:leading-[62.3px] sm:max-w-[620px] lg:max-w-[995px]  font-archangelsk'} >Найт-Сити изменит тебя навсегда!</h2>
        <p className={'font-roboto text-4 leading-8 sm:text-[18px] sm:leading-[34px] mt-[25px] sm:max-w-[788px] lg:max-w-[952px] '} ><span className={'font-bold text-[#52BEDC]'} >Cyberpunk 2077</span> — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.</p>
      </div>
      <div  id='description_mobile_screenshots ' className={'mt-[70px] sm:hidden'} >
        <Image className={'h-auto w-full'} src={mobile_screenshot_1} height={200} width={400} alt='cyberpunk screenshot' />
        <Image className={'h-auto w-full mt-8'} src={mobile_screenshot_2} height={200} width={400} alt='cyberpunk screenshot' />
        <Image className={'h-auto w-full mt-8'} src={mobile_screenshot_3} height={200} width={400} alt='cyberpunk screenshot' />
      </div>
      <div id='description_screenshots ' className={'w-full px-[36px] h-auto hidden sm:grid mt-[70px] grid-cols-[repeat(2,_auto)] lg:grid-cols-[1fr_62%] grid-rows-[repeat(2,_auto)] gap-8'} >
        <Image className={'h-auto  col-span-1 '} src={screenshot_1} height={450} width={800} alt='cyberpunk screenshot' />
        <Image className={'h-auto  sm:mt-0 col-span-1 lg:row-start-2 '} src={screenshot_2} height={450} width={800} alt='cyberpunk screenshot' />
        <Image className={'h-auto w-full  sm:mt-0 col-span-2 lg:col-span-1 lg:row-span-2 '} src={screenshot_3} height={450} width={800} alt='cyberpunk screenshot' />
      </div>
    </div>
  )
}      
export default Description