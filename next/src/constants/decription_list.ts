type Description_list_item = {
  id: number;
  icon: string;
  alt: string;
  text: string;
};

const description_list: Description_list_item[] = [
  {
    id: 1,
    icon: "/icons/pallet_icon.svg",
    alt: "pallet",
    text: "Яркие насыщенные цвета",
  },
  {
    id: 2,
    icon: "/icons/stars_icon.svg",
    alt: "stars",
    text: "Кристальная четкость изображения",
  },
  {
    id: 3,
    icon: "/icons/boxes_icon.svg",
    alt: "boxes",
    text: "Быстрые движения и плавный геймплей",
  },
];

export default description_list;
