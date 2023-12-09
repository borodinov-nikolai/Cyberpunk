import desktop_image_1 from "@/public/images/carousel_desk_1.jpg";
import desktop_image_2 from "@/public/images/carousel_desk_2.jpg";
import desktop_image_3 from "@/public/images/carousel_desk_3.jpg";
import tablet_image_1 from "@/public/images/carousel_tablet_1.jpg";
import tablet_image_2 from "@/public/images/carousel_tablet_2.jpg";
import tablet_image_3 from "@/public/images/carousel_tablet_3.jpg";
import mobile_image_1 from "@/public/images/carousel_mobile_1.jpg";
import mobile_image_2 from "@/public/images/carousel_mobile_2.jpg";
import mobile_image_3 from "@/public/images/carousel_mobile_3.jpg";
import { StaticImageData } from "next/image";




interface IСarousel_items {
  desktop: CarouselIitem[],
  tablet: CarouselIitem[],
  mobile: CarouselIitem[]
}

type CarouselIitem= {
  id:number,
  name:string,
  image: StaticImageData,
  priority?: boolean
}

const carousel_items : IСarousel_items = {
  desktop:  [
    {
      id: 1,
      name: "cyberpunk image_1",
      image: desktop_image_1,
      priority: true
    },
    {
      id: 2,
      name: "cyberpunk image_2",
      image: desktop_image_2,
    },
    {
      id: 3,
      name: "cyberpunk image_3",
      image: desktop_image_3,
    },
  ],

  tablet: [
    {
      id: 1,
      name: "cyberpunk image_1",
      image: tablet_image_1,

    },
    {
      id: 2,
      name: "cyberpunk image_2",
      image: tablet_image_2,
    },
    {
      id: 3,
      name: "cyberpunk image_3",
      image: tablet_image_3,
    },
  ],

  mobile: [
    {
      id: 1,
      name: "cyberpunk image_1",
      image: mobile_image_1,

    },
    {
      id: 2,
      name: "cyberpunk image_2",
      image: mobile_image_2,
    },
    {
      id: 3,
      name: "cyberpunk image_3",
      image: mobile_image_3,
    },
  ],
};

export default carousel_items;
