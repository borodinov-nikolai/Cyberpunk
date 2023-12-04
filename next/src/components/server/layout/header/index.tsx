import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/icons/Cyberpunk_2077_logo 1.svg'
import youtube_icon from '@/assets/icons/youtube logo.svg'
import vk_icon from '@/assets/icons/vk logo.svg'
import facebook_icon from '@/assets/icons/facebook-rect logo.png'
import twiter_icon from '@/assets/icons//twitter-square logo.svg'
import twitch_icon from '@/assets/icons/twitch logo.svg'
import instagram_icon from '@/assets/icons/instagram-square logo.svg'


const socialList: { id: number, name: string, icon: string }[] = [
  {
    id: 1,
    name: "youtube",
    icon: youtube_icon
  },
  {
    id: 2,
    name: "vk",
    icon: vk_icon
  },
  {
    id: 3,
    name: "facebook",
    icon: facebook_icon
  },
  {
    id: 4,
    name: "twiter",
    icon: twiter_icon
  },
  {
    id: 5,
    name: "twitch",
    icon: twitch_icon
  },
  {
    id: 6,
    name: "instagram",
    icon: instagram_icon
  },

]


const Header = () => {
  return (
    <div className={'container xl mx-auto h-[74px] flex justify-between absolute left-1/2 -translate-x-1/2'} >
      <Link className={'inline-block'} href={'/'} > <Image className={'h-[74px] w-auto'} src={logo} height={74} width={400} alt={'logo'} /> </Link>

      <ul className={'flex h-full gap-10 items-center'} >
        {socialList.map(({ id, name, icon }) => {
          return <li key={id} > <Link href='/' ><Image src={icon} height={30} width={30} alt={name} /> </Link> </li>
        })}
      </ul>

    </div>
  )
}

export default Header